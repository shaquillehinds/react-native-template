import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';
import { SCREEN_WIDTH } from '@utils/constants/Layout.const';
import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet';

//custom hook
interface AnimatedPosition {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
}
const useFollowAnimatedPosition = ({ x, y }: AnimatedPosition) => {
  // creates a new shared value that is derived from the value of another shared value
  const followX = useDerivedValue(() => withSpring(x.value));
  // Please not that withSpring, withTiming and other effects can only be used inside worklets
  // useDerivedValue and useAnimatedStyle both use worklets under the hood
  const followY = useDerivedValue(() => withSpring(y.value));

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: followX.value }, { translateY: followY.value }],
  }));
  return { followX, followY, rStyle };
};

export default function SearchScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  _: MainNavigationProps.Search<'Default'>,
) {
  // Basic gesture handling (translate x and y on finger drag)

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate(event => {
      // console.warn(event.translationX);
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(e => {
      const deceleration = 0.999;
      translateX.value = withDecay({
        velocity: e.velocityX,
        deceleration,
        clamp: [0, SCREEN_WIDTH - 100],
      });
      translateY.value = withDecay({
        velocity: e.velocityY,
        deceleration,
        clamp: [0, SCREEN_HEIGHT - 200],
      });
      // if (translateX.value > SCREEN_WIDTH / 2) {
      // translateX.value = SCREEN_WIDTH - 80;
      // } else translateX.value = 0;
    });

  // following/trailing animation with spring effect

  const {
    followX: blueFollowX,
    followY: blueFollowY,
    rStyle: rBlueCircleStyle,
  } = useFollowAnimatedPosition({ x: translateX, y: translateY });
  const {
    followX: redFollowX,
    followY: redFollowY,
    rStyle: rRedCircleStyle,
    // using the x and y values from the previous circle to create a trail effec
  } = useFollowAnimatedPosition({ x: blueFollowX, y: blueFollowY });
  const { rStyle: rGreenFollowStyle } = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  const redCircle = { backgroundColor: 'red' };
  const greenCircle = { backgroundColor: 'green' };

  return (
    <ScreenLayout>
      <Animated.View style={[styles.circle, greenCircle, rGreenFollowStyle]} />
      <Animated.View style={[styles.circle, redCircle, rRedCircleStyle]} />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, rBlueCircleStyle]} />
      </GestureDetector>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    height: 80,
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: 40,
    opacity: 0.8,
  },
});
