import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '@screens/stacks/main/Settings';
import { theme } from '@utils/themes';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export default function SettingsStackScreens() {
  return (
    <SettingsStack.Navigator
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
      id="SettingsStack">
      <SettingsStack.Screen name="Default" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
