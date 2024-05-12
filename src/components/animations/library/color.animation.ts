import {
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolateColor,
  useDerivedValue,
} from 'react-native-reanimated';
import { AnimationProps } from './Animation.types';

interface Props extends AnimationProps {
  inputRange: number[];
  outputRange: string[];
}

export default function useColorAnimation(props: Props) {
  const color = props.sharedValue;
  const config = {
    duration: props.timingConfig?.duration || 220,
    easing: props.timingConfig?.easing || Easing.bezier(0.5, 0.01, 0, 1),
  };

  const derived = useDerivedValue(() => withTiming(color.value, config));
  return {
    style: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          derived.value,
          props.inputRange,
          props.outputRange,
        ),
      };
    }),
  };
}
