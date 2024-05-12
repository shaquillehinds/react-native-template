import React, { useMemo, useState } from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { relativeY } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { StyleSheet } from 'react-native';
import { Tab, tabs } from './Main.tabs';
import TabSlider from './components/TabSlider.animated';
import TabButton from './components/TabButton.animated';
import { useTypedSelector } from '@hooks/useTypedSelector';
import ReDrawer from '@components/layouts/ReDrawer';
import { useActions } from '@hooks/useActions';
import { useSharedValue } from 'react-native-reanimated';
import AppLinkingConfiguration from './Main.LinkingConfiguration';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
function EmptyComponent() {
  return <></>;
}

const tabBarButton: (
  tab: Tab,
) => (props: BottomTabBarButtonProps) => React.ReactNode = tab => props =>
  <TabButton {...tab} {...props} />;
const tabBarSlider: (
  tabIndex: number,
) => (props: BottomTabBarButtonProps) => React.ReactNode = tabIndex => _ =>
  <TabSlider index={tabIndex} />;

export default function MainBottomTabNavigator() {
  const [tabIndex, setTabIndex] = useState(0);
  const isNavVisible = useTypedSelector(state => state.app.isBotNavVisible);
  const actions = useActions();
  const trackingX = useSharedValue(0);
  const translateX = useSharedValue(0);
  const contextX = useSharedValue(0);
  const Drawer = useMemo(
    () => ReDrawer({ trackingX, translateX, contextX }),
    [],
  );
  return (
    <NavigationContainer
      onReady={() => actions.setReDrawer(Drawer)}
      linking={AppLinkingConfiguration}>
      <Drawer.ReDrawerLayout
        backgroundColor={theme.primary.dark}
        drawerComponent={EmptyComponent}>
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
              tabBarButton: tabBarSlider(tabIndex),
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
                  tabBarButton: tabBarButton(tab),
                }}
                component={tab.component}
              />
            );
          })}
        </BottomTab.Navigator>
      </Drawer.ReDrawerLayout>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyles: {
    paddingBottom: relativeY(2.5),
    height: relativeY(8),
    position: 'absolute',
  },
});
