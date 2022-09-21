import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { AppTextProps, FontSize, LetterSpacing, LineHeight } from './types';

const fontSizes: { [key in FontSize]: number } = {
  headingL: 26,
  headingM: 24,
  headingS: 22,
  titleL: 20,
  titleM: 18,
  titleS: 16,
  bodyL: 14,
  bodyM: 12,
  bodyS: 10,
};
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
  fontSize = 'bodyL',
  color = 'primary',
  fontStyle = 'Poppins',
  style,
  letterSpacing,
  lineHeight,
}: PropsWithChildren<AppTextProps>) {
  return (
    <Text
      style={[
        {
          fontFamily: fontStyle,
          fontSize: fontSizes[fontSize],
          color: theme.typeface[color],
          letterSpacing: letterSpacing ? spacings[letterSpacing] : undefined,
          lineHeight:
            lineHeight && fontSize
              ? heights[lineHeight] * fontSizes[fontSize]
              : undefined,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}
