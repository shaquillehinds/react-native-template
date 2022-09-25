import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowUp3({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.7487 11.3002L11.7487 20.2502" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16.7497 11.3002L11.7487 3.36317L6.74769 11.3002L16.7497 11.3002Z" stroke={color || '#000'}/>
</Svg>
);
}
