import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '@screens/stacks/main/Search';
import { theme } from '@utils/themes';
import { statusBarHeight } from '@utils/constants/Layout.const';

const SearchStack = createStackNavigator<SearchStackParamList>();

export default function SearchStackScreens() {
  return (
    <SearchStack.Navigator
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
      id="SearchStack">
      <SearchStack.Screen name="Default" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}
