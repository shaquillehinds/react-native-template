import {
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import { AnimationProps } from './Animation.types';

export default function useScaleAnimation(props: AnimationProps) {
  const scale = props.sharedValue;
  let withAnimation: any = withTiming;
  if (props?.springConfig) withAnimation = withSpring;

  const config = props?.springConfig
    ? props?.springConfig
    : {
        duration: props?.timingConfig?.duration || 220,
        easing: props?.timingConfig?.easing || Easing.bezier(0.5, 0.01, 0, 1),
      };
  return {
    style: useAnimatedStyle(() => {
      return { transform: [{ scale: withAnimation(scale.value, config) }] };
    }),
  };
}
