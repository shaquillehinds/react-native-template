import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowLeft({
  size,
  color,
  strokeWidth,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        strokeWidth={strokeWidth}
        d="M4.25 12.2743L19.25 12.2743"
        stroke={color || '#000'}
      />
      <Path
        strokeWidth={strokeWidth}
        d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969"
        stroke={color || '#000'}
      />
    </Svg>
  );
}
