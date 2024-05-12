import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRef<AllStackParamList & MainBottomTabParamList>
> = React.createRef();
