import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';

export default function Search({
  size,
  color,
  strokeWidth,
}: {
  strokeWidth?: number;
  size?: number;
  color?: string;
}) {
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none">
      <Circle
        strokeWidth={strokeWidth}
        cx="11.7666"
        cy="11.7666"
        r="8.98856"
        stroke={color || theme.typeface.primary}
      />
      <Path
        strokeWidth={strokeWidth}
        d="M18.0183 18.4851L21.5423 22"
        stroke={color || theme.typeface.primary}
      />
    </Svg>
  );
}
