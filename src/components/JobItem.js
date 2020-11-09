import React from 'react';
import { View, Text } from 'react-native';

export const JobItem = (props) => {
  console.log('Aydin', props.selectedJobs)
  
  return (
    <View >
     
        <Text style={{ color: 'white', fontSize: 30 }}>JobItem Modal</Text>
     
    </View>
  );
};
