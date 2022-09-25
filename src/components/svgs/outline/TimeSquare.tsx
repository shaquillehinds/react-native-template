import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function TimeSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3347 2.75018H7.66573C4.64473 2.75018 2.75073 4.88918 2.75073 7.91618V16.0842C2.75073 19.1112 4.63473 21.2502 7.66573 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91618C21.2507 4.88918 19.3647 2.75018 16.3347 2.75018Z" stroke={color || '#000'}/>
<Path d="M15.3914 14.0177L12.0004 11.9947V7.63367" stroke={color || '#000'}/>
</Svg>
);
}
