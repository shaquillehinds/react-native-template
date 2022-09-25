import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowUpCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M21.2498 12C21.2498 6.892 17.1088 2.75 11.9998 2.75C6.89182 2.75 2.74982 6.892 2.74982 12C2.74982 17.108 6.89182 21.25 11.9998 21.25C17.1088 21.25 21.2498 17.108 21.2498 12Z" stroke={color || '#000'}/>
<Path d="M15.471 13.4423L12 9.95632L8.52901 13.4423" stroke={color || '#000'}/>
</Svg>
);
}
