import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Swap({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M16.8396 20.1642V6.54645" stroke={color || '#000'}/>
<Path d="M20.9172 16.0681L16.8394 20.1648L12.7617 16.0681" stroke={color || '#000'}/>
<Path d="M6.91109 3.83289V17.4507" stroke={color || '#000'}/>
<Path d="M2.83344 7.929L6.91121 3.83234L10.989 7.929" stroke={color || '#000'}/>
</Svg>
);
}
