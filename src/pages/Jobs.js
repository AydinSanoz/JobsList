import Axios from 'axios';
import React,{useEffect} from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export const Jobs = (props) => {
  const { selectedLanguage } = props.route.params;
  

  return (
    <SafeAreaView>
      <View>
        <Text>{selectedLanguage}</Text>
      </View>
    </SafeAreaView>
  );
};
