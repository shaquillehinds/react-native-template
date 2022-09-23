import {
  SharedValue,
  WithSpringConfig,
  WithTimingConfig,
} from 'react-native-reanimated';

export interface AnimationProps {
  springConfig?: WithSpringConfig;
  timingConfig?: WithTimingConfig;
  sharedValue: SharedValue<number>;
}
