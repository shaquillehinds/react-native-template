import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Plus({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg
      width={normalize(size || 60)}
      height={normalize(size || 60)}
      viewBox="0 0 60 60"
      fill="none">
      <Circle cx="30" cy="30" r="30" fill={color || '#26B6F2'} />
      <Path
        d="M29.9995 14.8098V45.1898"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8096 29.9998H45.1896"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
