import React, { useEffect, useRef } from 'react';
import { Animated as RNAnimated, View } from 'react-native';
import { DrawerLayout, DrawerPosition } from 'react-native-gesture-handler';
import { DebugLogger } from '@utils/Logger';
import { relativeX, relativeY } from '@utils/constants/Layout.const';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useActions } from '@hooks/useActions';
import { DrawerContent, DrawerProps } from './DrawerLayout.types';
import { theme } from '@utils/themes';
import Animated, {
  Easing,
  interpolate,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import shadowStyles from '@styles/Shadow.style';

const log = DebugLogger('Drawer/LayoutProvider');

const borderRadius = relativeY(4);

export default function DrawerLayoutProvider(props: DrawerProps) {
  const progress = useSharedValue(0);
  const scale = useRef(new RNAnimated.Value(0)).current;
  const drawer = React.createRef<DrawerLayout>();
  const dispatch = useActions();
  const drawerLockMode = useTypedSelector(state => state.app.drawerLockMode);
  const drawerRef = useTypedSelector(state => state.app.drawerRef?.current);
  useEffect(() => {
    if (drawer.current) {
      // drawer.current.openDrawer();
      dispatch.setDrawerRef(drawer);
    }
  }, [drawer.current?.context, drawerRef]);

  const drawerWidth = props.drawerWidth || relativeX(55);
  const drawerPosition = props.drawerPosition || 'left';

  const renderNavigationView = (progressValue: RNAnimated.Value) => {
    progressValue.removeAllListeners();
    progressValue.addListener(v => {
      runOnUI(() => {
        progress.value = v.value;
      })();
      // log('warn', v.value);
      // scale.setValue(v.value);
    });
    return DrawerContentWapper(
      // progressValue,
      props.renderDrawerContentComponent,
      drawer,
      drawerPosition,
    );
  };
  const scaleAnimated2 = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.9]) }],
  }));
  // const borderAnimated = useAnimatedStyle(() => ({
  //   borderRadius: interpolate(progress.value, [0, 1], [0, borderRadius]),
  // }));
  const scaleAnimated = {
    transform: [
      {
        scale: scale.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.9],
        }),
      },
    ],
  };
  return (
    <DrawerLayout
      ref={drawer}
      drawerWidth={drawerWidth}
      keyboardDismissMode="on-drag"
      drawerPosition={drawerPosition}
      drawerType="slide"
      overlayColor="transparent"
      useNativeAnimations={false} // !? if enabled, the overlay won't go away when drawer closes
      renderNavigationView={renderNavigationView}
      contentContainerStyle={{ backgroundColor: theme.primary.dark }}
      drawerContainerStyle={{ backgroundColor: theme.primary.dark }}
      drawerLockMode={drawerLockMode}>
      <Animated.View style={[shadowStyles(), scaleAnimated2]}>
        {/* <RNAnimated.View style={scaleAnimated}> */}
        <View
          style={[
            {
              height: '100%',
              overflow: 'hidden',
              borderBottomLeftRadius: relativeY(4),
              borderTopLeftRadius: relativeY(4),
            },
            // borderAnimated,
          ]}>
          {props.children}
        </View>
        {/* </RNAnimated.View> */}
      </Animated.View>
    </DrawerLayout>
  );
}

function DrawerContentWapper(
  // progressValue: RNAnimated.Value,
  DrawerContentComponent: DrawerContent,
  drawer: React.RefObject<DrawerLayout>,
  drawerPosition: DrawerPosition,
) {
  // const translateX = progressValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [drawerPosition === 'left' ? -50 : 50, 0],
  // });
  // const animatedStyles = {
  //   transform: [{ translateX }],
  // };
  return (
    <View>
      {/* <RNAnimated.View style={[animatedStyles]}> */}
      <DrawerContentComponent drawerRef={drawer} />
      {/* </RNAnimated.View> */}
    </View>
  );
}
