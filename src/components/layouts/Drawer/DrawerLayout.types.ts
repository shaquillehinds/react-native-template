import React from 'react';
import { DrawerPosition } from 'react-native-gesture-handler';

export interface DrawerProps {
  children: React.ReactNode;
  renderDrawerContentComponent: DrawerContent;
  drawerBackgroundColor?: string;
  drawerWidth?: number;
  drawerPosition?: DrawerPosition;
}

export interface DrawerContent
  extends React.FC<{ drawerRef?: React.RefObject<DrawerLayout> }> {}
