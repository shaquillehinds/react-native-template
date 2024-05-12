import { relativeX, relativeY } from '@utils/constants/Layout.const';
import React, { PropsWithChildren, useState } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  runOnUI,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import useReDrawerStyles from './ReDrawer.styles';
import { DrawerState, ReDrawerLayoutProps } from './ReDrawer.types';
import useDetectorHandler from './useDetector.handler';
import runOnJSHandlers from './runOnJS.handlers';

const defaultDrawerWidth = relativeX(55);
const defaultDetectorWidth = relativeX(8);

export default function useReDrawer({
  trackingX,
  translateX,
  contextX,
  drawerWidth: drawerW,
}: {
  drawerWidth?: number;
  trackingX: SharedValue<number>;
  translateX: SharedValue<number>;
  contextX: SharedValue<number>;
}) {
  // const trackingX = useSharedValue(0);
  // const translateX = useSharedValue(0);
  // const contextX = useSharedValue(0);

  const drawerWidth = drawerW || defaultDrawerWidth;

  const closeDrawerOnUI = () => {
    translateX.value = withSpring(0, { overshootClamping: true });
    trackingX.value = 0;
  };
  const openDrawerOnUI = () => {
    translateX.value = withSpring(drawerWidth, {
      overshootClamping: true,
    });
    trackingX.value = drawerWidth;
  };
  const closeDrawer = () => runOnUI(closeDrawerOnUI)();

  const openDrawer = () => {
    runOnUI(openDrawerOnUI)();
  };

  return {
    openDrawer,
    closeDrawer,
    ReDrawerLayout: function ReDrawerLayout(
      props: PropsWithChildren<ReDrawerLayoutProps>,
    ) {
      const scaleAmount = props.scaleAmount || 0.85;
      const progress = useDerivedValue(() => translateX.value / drawerWidth);
      const [drawerState, setDrawerState] = useState<DrawerState>('closed');

      const radius = relativeY(5);
      const scale = useDerivedValue(
        () =>
          ((1 - scaleAmount) / (0 - 1)) * (progress.value - 1) + scaleAmount,
        [],
      );
      const borderRadius = useDerivedValue(
        () => interpolate(progress.value, [0, 1], [0, radius]),
        [],
      );

      const appDetectorHandler = useDetectorHandler({
        drawerState,
        drawerWidth,
        setDrawerState,
        contextX,
        progress,
        trackingX,
        translateX,
      });
      const drawerDetectorHandler = useDetectorHandler({
        drawerState,
        drawerWidth,
        setDrawerState,
        contextX,
        progress,
        trackingX,
        translateX,
      });

      const styles = useReDrawerStyles({
        backgroundColor: props.backgroundColor,
        drawerWidth:
          (props.drawerWidth || defaultDrawerWidth) * (2 - scaleAmount),
        edgeWidth:
          props.edgeWidth !== undefined
            ? props.edgeWidth
            : defaultDetectorWidth,
      });

      const drawerAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
          {
            translateX: translateX.value - drawerWidth,
          },
        ],
      }));

      const appAnimatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }, { scale: scale.value }],
      }));

      const appContainerAnimatedStyles = useAnimatedStyle(() => ({
        borderRadius: borderRadius.value,
      }));

      const tapGesture = Gesture.Tap().onEnd(() => {
        if (translateX.value !== 0) {
          translateX.value = withTiming(0, { duration: 200 });
          trackingX.value = 0;
          runOnJS(runOnJSHandlers.onTouchEndJS)({ setDrawerState });
        }
      });

      return (
        <View style={[styles.fullContainer]}>
          {/* Drawer */}
          <GestureDetector gesture={drawerDetectorHandler}>
            <Animated.View
              style={[styles.drawerContainer, drawerAnimatedStyles]}>
              {props.drawerComponent(progress)}
            </Animated.View>
          </GestureDetector>
          {/* App */}
          <GestureDetector gesture={tapGesture}>
            <Animated.View
              style={[styles.animationContainer, appAnimatedStyles]}>
              <Animated.View
                style={[styles.appContainer, appContainerAnimatedStyles]}>
                {props.children}
              </Animated.View>
              <GestureDetector gesture={appDetectorHandler}>
                <View style={styles.gestureDetectorArea} />
              </GestureDetector>
            </Animated.View>
          </GestureDetector>
        </View>
      );
    },
  };
}
export type ReDrawer = ReturnType<typeof useReDrawer>;
