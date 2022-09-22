import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '@screens/stacks/main/Search';

const SearchStack = createStackNavigator<SearchStackParamList>();

export default function SearchStackScreens() {
  return (
    <SearchStack.Navigator initialRouteName="Default" id="SearchStack">
      <SearchStack.Screen name="Default" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}
