import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppLinkingConfiguration from './Main.linkingConfiguration';
import { radiusSizes, relativeY } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { StyleSheet, View } from 'react-native';
import { tabs } from './tabs';
import TabSlider from './components/TabSlider.animated';
import TabButton from './components/TabButton.animated';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
function EmptyComponent() {
  return <></>;
}

export default function MainBottomTabNavigator() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <NavigationContainer linking={AppLinkingConfiguration}>
      <BottomTab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{ backgroundColor: theme.background }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: [
            styles.tabBarStyles,
            { backgroundColor: theme.background },
          ],
        }}>
        <BottomTab.Screen
          options={{
            tabBarButton: props => <TabSlider index={tabIndex} />,
            headerShown: false,
          }}
          listeners={{ tabPress: e => e.preventDefault() }}
          name="Slider"
          component={EmptyComponent}
        />
        {tabs.map((tab, index) => {
          return (
            <BottomTab.Screen
              listeners={{ tabPress: () => setTabIndex(index) }}
              key={tab.name}
              name={tab.name}
              options={{
                tabBarItemStyle: {
                  paddingTop: relativeY(1),
                },
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...tab} {...props} />,
              }}
              component={tab.component}
            />
          );
        })}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyles: {
    borderTopRightRadius: radiusSizes.curvy,
    borderTopLeftRadius: radiusSizes.curvy,
    shadowOffset: { width: 0, height: -relativeY(1.5) },
    shadowColor: 'black',
    shadowOpacity: 0.07,
    shadowRadius: 21,
    paddingBottom: relativeY(2.5),
    height: relativeY(8),
    position: 'absolute',
  },
});
