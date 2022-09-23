import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '@screens/stacks/main/Search';
import { theme } from '@utils/themes';

const SearchStack = createStackNavigator<SearchStackParamList>();

export default function SearchStackScreens() {
  return (
    <SearchStack.Navigator
      screenOptions={{
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
