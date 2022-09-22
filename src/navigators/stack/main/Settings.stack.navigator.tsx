import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '@screens/stacks/main/Settings';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export default function SettingsStackScreens() {
  return (
    <SettingsStack.Navigator initialRouteName="Default" id="SettingsStack">
      <SettingsStack.Screen name="Default" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
