import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function TickSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3344 2.75018H7.66543C4.64443 2.75018 2.75043 4.88918 2.75043 7.91618V16.0842C2.75043 19.1112 4.63543 21.2502 7.66543 21.2502H16.3334C19.3644 21.2502 21.2504 19.1112 21.2504 16.0842V7.91618C21.2504 4.88918 19.3644 2.75018 16.3344 2.75018Z" stroke={color || '#000'}/>
<Path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke={color || '#000'}/>
</Svg>
);
}
