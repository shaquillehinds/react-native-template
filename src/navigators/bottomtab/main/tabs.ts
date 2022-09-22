import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Stacks from '@navigators/stack/main';
import { RouteProp } from '@react-navigation/native';

interface Tab {
  name: keyof MainBottomTabParamList;
  label: string;
  type: typeof MaterialCommunityIcons;
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
    type: MaterialCommunityIcons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Stacks.Home,
  },
  {
    name: 'Search',
    label: 'Search',
    type: MaterialCommunityIcons,
    activeIcon: 'magnify',
    inActiveIcon: 'magnify',
    component: Stacks.Search,
  },
  {
    name: 'Profile',
    label: 'Profile',
    type: MaterialCommunityIcons,
    activeIcon: 'account',
    inActiveIcon: 'account-outline',
    component: Stacks.Profile,
  },
  {
    name: 'Settings',
    label: 'Settings',
    type: Ionicons,
    activeIcon: 'settings-sharp',
    inActiveIcon: 'settings-outline',
    component: Stacks.Settings,
  },
];
