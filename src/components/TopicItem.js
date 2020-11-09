import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { topicItem } from '../styles';

const colors = [
  '#fb5607','#007f5f','#ffb703','#023e7d','#001845','#f8961e','#e63946','#fb8b24','#06d6a0'
];
console.log("colors", colors[0])

export const TopicItem = (props) => {
  const randomIndex = Math.floor(Math.random() * 8 + 1);

  return (
    <TouchableOpacity 
      style={[topicItem.container, {backgroundColor: colors[randomIndex]}]} 
      onPress={props.onSelect}>
      <Text style={topicItem.text}>{props.item}</Text>
    </TouchableOpacity>
  );
};
