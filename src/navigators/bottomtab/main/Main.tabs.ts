import Ionicons from 'react-native-vector-icons/Ionicons';
import Stacks from '@navigators/stack/main';
import { RouteProp } from '@react-navigation/native';

interface Tab {
  name: keyof MainBottomTabParamList;
  label: string;
  type: typeof Ionicons;
  activeIcon: string;
  inActiveIcon: string;
  component: React.ComponentType<{
    route: RouteProp<MainBottomTabParamList, keyof MainBottomTabParamList>;
    navigation: any;
  }>;
}

export const tabs: Tab[] = [
  {
    name: 'Home',
    label: 'Home',
    type: Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Stacks.Home,
  },
  {
    name: 'Search',
    label: 'Search',
    type: Ionicons,
    activeIcon: 'search',
    inActiveIcon: 'search-outline',
    component: Stacks.Search,
  },
  {
    name: 'Profile',
    label: 'Profile',
    type: Ionicons,
    activeIcon: 'person',
    inActiveIcon: 'person-outline',
    component: Stacks.Profile,
  },
  {
    name: 'Settings',
    label: 'Settings',
    type: Ionicons,
    activeIcon: 'settings',
    inActiveIcon: 'settings-outline',
    component: Stacks.Settings,
  },
];
