import Home from '@components/svgs/outline/Home';
import HomeFilled from '@components/svgs/filled/Home';
import Profile from '@components/svgs/outline/Profile';
import ProfileFilled from '@components/svgs/filled/Profile';
import Search from '@components/svgs/outline/Search';
import SearchFilled from '@components/svgs/filled/Search';
import Setting from '@components/svgs/outline/Setting';
import SettingFilled from '@components/svgs/filled/Setting';
import Stacks from '@navigators/stack/main';
import { RouteProp } from '@react-navigation/native';
import React from 'react';

export interface Tab {
  name: keyof MainBottomTabParamList;
  label: string;
  icon: (props: { size?: number; color?: string }) => JSX.Element;
  iconFilled: (props: { size?: number; color?: string }) => JSX.Element;
  component: React.ComponentType<{
    route: RouteProp<MainBottomTabParamList, keyof MainBottomTabParamList>;
    navigation: any;
  }>;
}

export const tabs: Tab[] = [
  {
    name: 'Home',
    label: 'Home',
    icon: Home,
    iconFilled: HomeFilled,
    component: Stacks.Home,
  },
  {
    name: 'Search',
    label: 'Search',
    icon: Search,
    iconFilled: SearchFilled,
    component: Stacks.Search,
  },
  {
    name: 'Profile',
    label: 'Profile',
    icon: Profile,
    iconFilled: ProfileFilled,
    component: Stacks.Profile,
  },
  {
    name: 'Settings',
    label: 'Settings',
    icon: Setting,
    iconFilled: SettingFilled,
    component: Stacks.Settings,
  },
];
