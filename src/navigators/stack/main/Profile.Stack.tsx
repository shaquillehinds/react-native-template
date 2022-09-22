import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '@screens/stacks/main/Profile';

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export default function HomeStackScreens() {
  return (
    <ProfileStack.Navigator initialRouteName="Default" id="ProfileStack">
      <ProfileStack.Screen name="Default" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
