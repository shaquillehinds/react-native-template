import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppLinkingConfiguration from './Main.linkingConfiguration';
import { radiusSizes, relativeY } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { StyleSheet, View } from 'react-native';
import { tabs } from './Main.tabs';
import TabSlider from './components/TabSlider.animated';
import TabButton from './components/TabButton.animated';
import shadowStyles from '@styles/Shadow.style';
import { DrawerLayoutProvider } from '@components/layouts/Drawer';
import { useTypedSelector } from '@hooks/useTypedSelector';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
function EmptyComponent() {
  return <></>;
}

export default function MainBottomTabNavigator() {
  const [tabIndex, setTabIndex] = useState(0);
  const isNavVisible = useTypedSelector(state => state.app.isBotNavVisible);
  return (
    <NavigationContainer linking={AppLinkingConfiguration}>
      {/** !? uncomment the comment lines below to enable drawer */}
      {/* <DrawerLayoutProvider
        drawerBackgroundColor={theme.background}
        renderDrawerContentComponent={() => <View />}> */}
      <BottomTab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{ backgroundColor: theme.background }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: [
            {
              backgroundColor: theme.background,
              display: isNavVisible ? 'flex' : 'none',
            },
            styles.tabBarStyles,
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
      {/* </DrawerLayoutProvider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyles: {
    // !? Shadow direction not supported on android
    // uncomment following lines to remove line ontop of navigator
    // ...shadowStyles({
    //   shadowRadius: 0,
    //   shadowOpacity: 0,
    //   shadowOffset: { height: 0, width: 0 },
    // }),
    // borderTopWidth: 0,
    paddingBottom: relativeY(2.5),
    height: relativeY(8),
    position: 'absolute',
  },
});
