import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';

export default function Hamburger({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg
      width={normalize(size || 25)}
      height={normalize(size ? size * 0.88 : 22)}
      viewBox="0 0 25 22"
      fill="none">
      <Line
        x1="1.72368"
        y1="20.6513"
        x2="12.8835"
        y2="20.6513"
        stroke={color || theme.typeface.primary}
        strokeWidth="2.69737"
        strokeLinecap="round"
      />
      <Line
        x1="1.72368"
        y1="11.4132"
        x2="23.2763"
        y2="11.4132"
        stroke={color || theme.typeface.primary}
        strokeWidth="2.69737"
        strokeLinecap="round"
      />
      <Line
        x1="1.72368"
        y1="2.17512"
        x2="23.2763"
        y2="2.17512"
        stroke={color || theme.typeface.primary}
        strokeWidth="2.69737"
        strokeLinecap="round"
      />
    </Svg>
  );
}
