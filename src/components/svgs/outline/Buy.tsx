import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';

export default function Buy({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M2.75012 3.24988L4.83012 3.60988L5.79312 15.0829C5.87012 16.0199 6.65312 16.7389 7.59312 16.7359H18.5021C19.3991 16.7379 20.1601 16.0779 20.2871 15.1899L21.2361 8.63188C21.3421 7.89888 20.8331 7.21888 20.1011 7.11288C20.0371 7.10388 5.16412 7.09888 5.16412 7.09888"
        stroke={color || theme.typeface.primary}
      />
      <Path
        d="M14.1251 10.7948H16.8981"
        stroke={color || theme.typeface.primary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.15441 20.2025C7.45541 20.2025 7.69841 20.4465 7.69841 20.7465C7.69841 21.0475 7.45541 21.2915 7.15441 21.2915C6.85341 21.2915 6.61041 21.0475 6.61041 20.7465C6.61041 20.4465 6.85341 20.2025 7.15441 20.2025Z"
        fill={color || theme.typeface.primary}
        stroke={color || theme.typeface.primary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4347 20.2025C18.7357 20.2025 18.9797 20.4465 18.9797 20.7465C18.9797 21.0475 18.7357 21.2915 18.4347 21.2915C18.1337 21.2915 17.8907 21.0475 17.8907 20.7465C17.8907 20.4465 18.1337 20.2025 18.4347 20.2025Z"
        fill={color || theme.typeface.primary}
        stroke={color || theme.typeface.primary}
      />
    </Svg>
  );
}
