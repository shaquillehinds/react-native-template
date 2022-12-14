import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

export interface ButtonProps {
  borderColor?: string;
  borderRadius?: RadiusSize;
  borderWidth?: BorderSize;
  backgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  activeOpacity?: number;
  fontStyle?: FontStyle;
  fontSize?: FontSize;
  fontColor?: FontColor;
  customFontColor?: string;
  buttonSize?: ButtonSize;
  textStyle?: StyleProp<Animated.AnimateStyle<StyleProp<TextStyle>>>;
  animateText?: boolean;
  animate?: boolean;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}
