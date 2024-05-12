import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Upload({
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
        d="M7.38948 8.98403H6.45648C4.42148 8.98403 2.77148 10.634 2.77148 12.669V17.544C2.77148 19.578 4.42148 21.228 6.45648 21.228H17.5865C19.6215 21.228 21.2715 19.578 21.2715 17.544V12.659C21.2715 10.63 19.6265 8.98403 17.5975 8.98403L16.6545 8.98403"
        stroke={color || '#000'}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M12.0214 2.19051V14.2315"
        stroke={color || '#000'}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M9.10626 5.11884L12.0213 2.19084L14.9373 5.11884"
        stroke={color || '#000'}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
