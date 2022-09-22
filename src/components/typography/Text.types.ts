import { Spacing } from '@styles/Spacer/Spacer.types';
import { StyleProp, TextStyle } from 'react-native';

export interface BaseTextProps extends Spacing {
  fontSize?: FontSize;
  color?: FontColor;
  fontStyle?: FontStyle;
  style?: StyleProp<TextStyle>;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  numberOfLines?: number;
}
