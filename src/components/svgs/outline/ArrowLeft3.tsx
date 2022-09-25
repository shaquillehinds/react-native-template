import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowLeft3({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.3002 12.2513L20.2502 12.2513" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11.3002 7.25031L3.3632 12.2513L11.3002 17.2523L11.3002 7.25031Z" stroke={color || '#000'}/>
</Svg>
);
}
