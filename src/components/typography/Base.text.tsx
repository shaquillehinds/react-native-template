import { transformSpacing } from '@styles/Spacer/Spacer.style';
import { normalize } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { BaseTextProps } from './Text.types';

const fontScale = 1.15;

export const fontSizes: { [key in FontSize]: number } = {
  headingL: normalize(26 * fontScale),
  headingM: normalize(24 * fontScale),
  headingS: normalize(22 * fontScale),
  titleL: normalize(20 * fontScale),
  titleM: normalize(18 * fontScale),
  titleS: normalize(16 * fontScale),
  bodyL: normalize(14 * fontScale),
  bodyM: normalize(12 * fontScale),
  bodyS: normalize(10 * fontScale),
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
  fontSize = 'bodyM',
  color = 'primary',
  fontStyle = 'Poppins',
  style,
  letterSpacing,
  lineHeight,
  numberOfLines,
  padding,
  margin,
}: PropsWithChildren<BaseTextProps>) {
  return (
    <Text
      numberOfLines={numberOfLines}
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
          ...transformSpacing({ margin, padding }),
        },
        style,
      ]}>
      {children}
    </Text>
  );
}
