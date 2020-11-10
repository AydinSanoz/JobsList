import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoritesItem} from '../components'

export const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(()=>{
    getData()
  },[favorites])
  
  
  const getData = async () =>{
    let savedList = await AsyncStorage.getItem('@SAVED_JOBS')
    savedList = JSON.parse(savedList)
    setFavorites(savedList)
  }
  const onDelete = (item) =>{
    
    const updatedList = favorites.filter(val =>{
      console.log("onDelete -> val", val.id)
      console.log("onDelete -> item", item.id)
      return val.id!=item.id && (val)
    },
    )
    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedList))
  }
      
  const renderItem = ({item}) => {return ( <FavoritesItem item = {item} onDelete = {onDelete}/>);};
  
  const removeAll = async () => {
    await AsyncStorage.clear()
    
  }
  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{flex:1}}>
        <FlatList
          keyExtractor={(_ , index) => index.toString()}
          data={favorites}
          renderItem={renderItem}
          
          
        />
      </View>
      <View style = {{flexDirection : 'row', justifyContent : 'space-around'}}>
      <Button title = 'Remove All' onPress= {removeAll}/>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
       </View>
      
      
    </SafeAreaView>
  );
};
