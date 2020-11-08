import React from 'react';
import { View , Text } from 'react-native';
import {} from '../styles'

export const TopicItem  = (props) =>{
    console.log(props)
    return(
            <View>
                <Text>{props.item.name}</Text>
            </View>
       
    )
}