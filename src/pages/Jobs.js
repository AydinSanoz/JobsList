import Axios from 'axios';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export const Jobs = (props) => {
  const { selectedLanguage } = props.route.params;
  const fetchData = async () => {
      await Axios.get('')
  }
  return (
    <SafeAreaView>
      <View>
        <Text>{selectedLanguage}</Text>
      </View>
    </SafeAreaView>
  );
};
