import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { DrawerLayout, DrawerPosition } from 'react-native-gesture-handler';
import { DebugLogger } from '@utils/Logger';
import { relativeX } from '@utils/constants/Layout.const';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useActions } from '@hooks/useActions';
import { DrawerContent, DrawerProps } from './DrawerLayout.types';

const log = DebugLogger('Drawer/LayoutProvider');

export default function DrawerLayoutProvider(props: DrawerProps) {
  const drawer = React.createRef<DrawerLayout>();
  const dispatch = useActions();
  const drawerLockMode = useTypedSelector(state => state.app.drawerLockMode);
  useEffect(() => {
    if (drawer.current) {
      // drawer.current.openDrawer();
      dispatch.setDrawerRef(drawer);
    }
  }, [drawer.current?.context]);

  const drawerWidth = props.drawerWidth || relativeX(85);
  const drawerPosition = props.drawerPosition || 'left';

  const renderNavigationView = (progressValue: Animated.Value) => {
    return CommunityDrawerContentProvider(
      progressValue,
      props.renderDrawerContentComponent,
      drawer,
      drawerPosition,
    );
  };

  return (
    <DrawerLayout
      ref={drawer}
      drawerWidth={drawerWidth}
      keyboardDismissMode="on-drag"
      drawerPosition={drawerPosition}
      drawerType="slide"
      drawerBackgroundColor={props.drawerBackgroundColor || '#fff'}
      overlayColor={'rgba(0,0,0,0.7)'}
      useNativeAnimations={false} // !? if enabled, the overlay won't go away when drawer closes
      renderNavigationView={renderNavigationView}
      contentContainerStyle={{ flex: 1 }}
      drawerLockMode={drawerLockMode}>
      {props.children}
    </DrawerLayout>
  );
}

function CommunityDrawerContentProvider(
  progressValue: Animated.Value,
  DrawerContentComponent: DrawerContent,
  drawer: React.RefObject<DrawerLayout>,
  drawerPosition: DrawerPosition,
) {
  const translateX = progressValue.interpolate({
    inputRange: [0, 1],
    outputRange: [drawerPosition === 'left' ? -50 : 50, 0],
  });
  const animatedStyles = {
    transform: [{ translateX }],
  };
  return (
    <Animated.View style={[animatedStyles]}>
      <DrawerContentComponent drawerRef={drawer} />
    </Animated.View>
  );
}
