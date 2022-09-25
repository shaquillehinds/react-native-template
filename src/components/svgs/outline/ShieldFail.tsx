import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ShieldFail({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11.985 21.606C11.985 21.606 19.657 19.283 19.657 12.879C19.657 6.474 19.935 5.974 19.319 5.358C18.704 4.742 12.991 2.75 11.985 2.75C10.979 2.75 5.26604 4.742 4.65004 5.358C4.03504 5.974 4.31304 6.474 4.31304 12.879C4.31304 19.283 11.985 21.606 11.985 21.606Z" stroke={color || '#000'}/>
<Path d="M13.864 13.8248L10.106 10.0668" stroke={color || '#000'}/>
<Path d="M10.1061 13.8248L13.8641 10.0668" stroke={color || '#000'}/>
</Svg>
);
}
