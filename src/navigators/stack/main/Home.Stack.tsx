import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/stacks/main/Home';

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeStackScreens() {
  return (
    <HomeStack.Navigator initialRouteName="Default" id="HomeStack">
      <HomeStack.Screen name="Default" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
