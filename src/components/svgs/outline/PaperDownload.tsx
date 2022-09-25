import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function PaperDownload({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.7367 2.76181H8.08471C6.00471 2.75381 4.30071 4.41081 4.25071 6.49081V17.2278C4.20571 19.3298 5.87371 21.0698 7.97471 21.1148C8.01171 21.1148 8.04871 21.1158 8.08471 21.1148H16.0727C18.1627 21.0408 19.8147 19.3188 19.8027 17.2278V8.03781L14.7367 2.76181Z" stroke={color || '#000'}/>
<Path d="M14.4749 2.75012V5.65912C14.4749 7.07912 15.6239 8.23012 17.0439 8.23412H19.7979" stroke={color || '#000'}/>
<Path d="M11.6419 15.9498V9.90881" stroke={color || '#000'}/>
<Path d="M9.2962 13.5944L11.6412 15.9494L13.9862 13.5944" stroke={color || '#000'}/>
</Svg>
);
}
