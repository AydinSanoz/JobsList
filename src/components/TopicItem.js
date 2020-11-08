import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { topicItem } from '../styles';

export const TopicItem = (props) => {
  console.log(props);
  return (
    <TouchableOpacity style={topicItem.container}
        onPress = {props.onSelect}
    >
      <Text style={[topicItem.text, { color: `#${props.item.color}` }]}>
        {props.item.name}
      </Text>
    </TouchableOpacity>
  );
};
