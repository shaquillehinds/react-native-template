import { StyleProp, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export interface ReDrawerStylesProps {
  drawerWidth?: number;
  edgeWidth?: number;
  backgroundColor?: string;
}

export type progress = SharedValue<number>;
export type DrawerState = 'closed' | 'open' | 'transition';

export interface ReDrawerLayoutProps extends ReDrawerStylesProps {
  minSwipeDistance?: number;
  drawerComponent: React.FC<progress>;
  drawerContainerStyle?: StyleProp<ViewStyle>;
  scaleAmount?: number;
}

export interface DetectorHandlerProps {
  contextX: SharedValue<number>;
  drawerState: DrawerState;
  setDrawerState: React.Dispatch<React.SetStateAction<DrawerState>>;
  drawerWidth: number;
  trackingX: SharedValue<number>;
  translateX: SharedValue<number>;
  progress: SharedValue<number>;
}
