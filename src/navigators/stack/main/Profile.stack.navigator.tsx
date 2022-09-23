import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '@screens/stacks/main/Profile';
import { theme } from '@utils/themes';

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export default function HomeStackScreens() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.typeface.primary,
        },
      }}
      initialRouteName="Default"
      id="ProfileStack">
      <ProfileStack.Screen name="Default" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
