import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Heart({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
        stroke={color || '#000'}
        strokeWidth={strokeWidth || 1}
      />
      <Path
        d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201"
        stroke={color || '#000'}
      />
    </Svg>
  );
}
