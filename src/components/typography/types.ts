import { StyleProp, TextStyle } from 'react-native';

export type FontStyle =
  | 'Poppins'
  | 'PoppinsMedium'
  | 'PoppinsSemiBold'
  | 'PoppinsBold'
  | 'PoppinsItalic';

export type FontColor = 'primary' | 'secondary' | 'tertiary' | 'warning';

export type FontSize =
  | 'headingL'
  | 'headingM'
  | 'headingS'
  | 'titleL'
  | 'titleM'
  | 'titleS'
  | 'bodyL'
  | 'bodyM'
  | 'bodyS';

export type LineHeight = 'short' | 'tall';

export type LetterSpacing = 'wide' | 'extraWide';

export interface AppTextProps {
  fontSize?: FontSize;
  color?: FontColor;
  fontStyle?: FontStyle;
  style?: StyleProp<TextStyle>;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
}
