import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Document({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M15.7162 16.2234H8.49622" stroke={color || '#000'}/>
<Path d="M15.7162 12.0369H8.49622" stroke={color || '#000'}/>
<Path d="M11.2513 7.86011H8.49634" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15.9086 2.74982C15.9086 2.74982 8.23161 2.75382 8.21961 2.75382C5.45961 2.77082 3.75061 4.58682 3.75061 7.35682V16.5528C3.75061 19.3368 5.47261 21.1598 8.25661 21.1598C8.25661 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35682C20.4156 4.57282 18.6926 2.74982 15.9086 2.74982Z" stroke={color || '#000'}/>
</Svg>
);
}
