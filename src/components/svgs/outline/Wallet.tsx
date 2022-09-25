import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Wallet({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8993 13.191 14.8984 11.7045C14.8984 10.2181 16.1042 9.01416 17.5906 9.01324H21.6389" stroke={color || '#000'}/>
<Path d="M18.0485 11.6429H17.7369" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke={color || '#000'}/>
<Path d="M7.03564 7.53814H12.4346" stroke={color || '#000'}/>
</Svg>
);
}
