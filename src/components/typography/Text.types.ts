import { Spacing } from '@styles/Spacer/Spacer.types';
import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';

export interface BaseTextProps extends Spacing {
  fontSize?: FontSize;
  color?: FontColor;
  customColor?: string;
  fontStyle?: FontStyle;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<TextStyle>>>;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  numberOfLines?: number;
  animate?: boolean;
  center?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}
