import { Spacing } from '@styles/Spacer/Spacer.types';
import React from 'react';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface BaseInputProps extends Spacing {
  ref?: React.LegacyRef<TextInput>;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  inputWidth?: number;
  textInputStyle?: StyleProp<TextStyle>;
  borderWidth?: BorderSize;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  placeholder?: string;
  placeholderColor?: FontColor;
  titleText?: string;
  titleTextStyles?: StyleProp<TextStyle>;
  footerText?: string;
  footerTextStyles?: StyleProp<TextStyle>;
  borderRadius?: RadiusSize;
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  borderColor?: string;
  backgroundColor?: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  CustomInputComponent?: React.ReactNode;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  returnKeyType?: ReturnKeyTypeOptions;
  onTouchStart?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}
