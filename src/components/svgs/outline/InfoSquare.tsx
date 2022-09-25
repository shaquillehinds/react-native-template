import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function InfoSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3341 2.75012H7.66512C4.64412 2.75012 2.75012 4.88912 2.75012 7.91612V16.0841C2.75012 19.1111 4.63512 21.2501 7.66512 21.2501H16.3331C19.3641 21.2501 21.2501 19.1111 21.2501 16.0841V7.91612C21.2501 4.88912 19.3641 2.75012 16.3341 2.75012Z" stroke={color || '#000'}/>
<Path d="M11.9948 16.0001V12.0001" stroke={color || '#000'}/>
<Path d="M11.9899 8.20435H11.9999" stroke={color || '#000'}/>
</Svg>
);
}
