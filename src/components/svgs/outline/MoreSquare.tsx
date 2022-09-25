import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function MoreSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3342 2.75012H7.66524C4.64424 2.75012 2.75024 4.88912 2.75024 7.91612V16.0841C2.75024 19.1111 4.63424 21.2501 7.66524 21.2501H16.3332C19.3642 21.2501 21.2502 19.1111 21.2502 16.0841V7.91612C21.2502 4.88912 19.3642 2.75012 16.3342 2.75012Z" stroke={color || '#000'}/>
<Path d="M15.9395 12.013H15.9485" stroke={color || '#000'}/>
<Path d="M11.9304 12.013H11.9394" stroke={color || '#000'}/>
<Path d="M7.9214 12.013H7.9304" stroke={color || '#000'}/>
</Svg>
);
}
