import { Spaces } from '@styles/Spacer/Spacer.types';
import {
  FlexAlignType,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';

export interface ButtonProps {
  borderColor?: string;
  borderRadius?: RadiusSize;
  borderWidth?: BorderSize;
  backgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => Promise<unknown> | unknown;
  onPressIn?: (event: GestureResponderEvent) => Promise<unknown> | unknown;
  onPressOut?: (event: GestureResponderEvent) => Promise<unknown> | unknown;
  automaticDisabling?: boolean;
  activeOpacity?: number;
  fontStyle?: FontStyle;
  fontSize?: FontSize;
  fontColor?: FontColor;
  customFontColor?: string;
  buttonSize?: ButtonSize;
  textStyle?: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
  animateText?: boolean;
  animate?: boolean;
  padding?: Spaces;
  margin?: Spaces;
  alignSelf?: FlexAlignType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
