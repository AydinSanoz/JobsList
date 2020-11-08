import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Intro,Jobs,SavedJobs} from './pages'

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="SavedJobs" component={SavedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
