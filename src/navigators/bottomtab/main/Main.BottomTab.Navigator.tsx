import React from 'react';
import Stacks from '@navigators/stack/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppLinkingConfiguration from './Main.LinkingConfiguration';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export default function MainBottomTabNavigator() {
  return (
    <NavigationContainer linking={AppLinkingConfiguration}>
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name="Home" component={Stacks.Home} />
        <BottomTab.Screen name="Profile" component={Stacks.Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
