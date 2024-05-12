import React, { useEffect } from 'react';
import { Animated as RNAnimated, StyleSheet, View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import { relativeX, relativeY } from '@utils/constants/Layout.const';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useActions } from '@hooks/useActions';
import { DrawerContent, DrawerProps } from './DrawerLayout.types';
import { theme } from '@utils/themes';
import Animated, {
  interpolate,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import shadowStyles from '@styles/Shadow.style';

export default function DrawerLayoutProvider(props: DrawerProps) {
  const progress = useSharedValue(0);
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
    });
    return DrawerContentWapper(props.renderDrawerContentComponent, drawer);
  };
  const scaleAnimated2 = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.9]) }],
  }));
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
        <View style={[styles.container]}>{props.children}</View>
      </Animated.View>
    </DrawerLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
    borderBottomLeftRadius: relativeY(4),
    borderTopLeftRadius: relativeY(4),
  },
});

function DrawerContentWapper(
  DrawerContentComponent: DrawerContent,
  drawer: React.RefObject<DrawerLayout>,
) {
  return (
    <View>
      <DrawerContentComponent drawerRef={drawer} />
    </View>
  );
}
