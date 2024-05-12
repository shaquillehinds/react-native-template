import { transformSpacing } from '@styles/Spacer/Spacer.style';
import { fontSizes } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import { Text, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { BaseTextProps } from './Text.types';

const spacings: { [key in LetterSpacing]: number } = {
  wide: 0.7,
  extraWide: 1.2,
};
const heights: { [key in LineHeight]: number } = {
  short: 1.05,
  tall: 1.35,
};

export default function Base({
  children,
  fontSize = 'bodyM',
  color = 'primary',
  fontStyle = 'Poppins',
  style,
  customColor,
  letterSpacing,
  lineHeight,
  numberOfLines,
  padding,
  margin,
  animate,
  center,
  onPress,
}: PropsWithChildren<BaseTextProps>) {
  const TextComponent = animate
    ? Animated.Text
    : (Text as typeof Animated.Text);
  const styles: TextStyle = {
    fontFamily: fontStyle,
    fontSize: fontSizes[fontSize],
    color: customColor || theme.typeface[color],
    textAlign: center ? 'center' : 'left',
    letterSpacing: letterSpacing ? spacings[letterSpacing] : undefined,
    lineHeight:
      lineHeight && fontSize
        ? heights[lineHeight] * fontSizes[fontSize]
        : undefined,
    ...transformSpacing({ margin, padding }),
  };
  return (
    <TextComponent
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[styles, style]}>
      {children}
    </TextComponent>
  );
}
