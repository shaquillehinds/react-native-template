import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/stacks/main/Home';
import FeedScreen from '@screens/stacks/main/Home/Feed.screen';
import SettingsScreen from '@screens/stacks/main/Home/Settings.screen';

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeStackScreens() {
  return (
    <HomeStack.Navigator initialRouteName="Default" id="HomeStack">
      <HomeStack.Screen name="Default" component={HomeScreen} />
      <HomeStack.Screen name="Feed" component={FeedScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}
