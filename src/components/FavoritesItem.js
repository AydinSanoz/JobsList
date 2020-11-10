import React from 'react';
import { View, Text, Button } from 'react-native';
import WebView from  'react-native-webview';
import {favoritesItem} from '../styles'


export const FavoritesItem = (props) => {
  return (
    <View style = {favoritesItem.container}>
      <Text style = {favoritesItem.textTitle}>{props.item.title}</Text>
      <Text style = {favoritesItem.textLocation}>{props.item.location}/{props.item.type}</Text>
      <WebView
          source = {{html : props.item.description}}
      />
      <Button title = 'Delete' onPress = {() => props.onDelete(props.item)}/>

    </View>
  );
};
