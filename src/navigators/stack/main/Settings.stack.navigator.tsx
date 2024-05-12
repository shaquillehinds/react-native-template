import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '@screens/stacks/main/Settings';
import { theme } from '@utils/themes';
import { statusBarHeight } from '@utils/constants/Layout.const';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export default function SettingsStackScreens() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStatusBarHeight: statusBarHeight,
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
