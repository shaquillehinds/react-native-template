import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface BaseInputProps {
  multiline?: boolean;
  numberOfLines?: number;
  inputWidth?: number;
  textInputStyle?: StyleProp<TextStyle>;
  borderWidth?: BorderSize;
  fontSize?: FontSize;
  placeholder?: string;
  placeholderColor?: FontColor;
  titleText?: string;
  titleTextStyles?: StyleProp<TextStyle>;
  footerText?: string;
  footerTextStyles?: StyleProp<TextStyle>;
  borderRadius?: RadiusSize;
  rightIcon?: React.ReactNode;
  borderColor?: string;
}
