import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Password({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3341 2.75012H7.66512C4.64412 2.75012 2.75012 4.88912 2.75012 7.91612V16.0841C2.75012 19.1111 4.63512 21.2501 7.66512 21.2501H16.3331C19.3641 21.2501 21.2501 19.1111 21.2501 16.0841V7.91612C21.2501 4.88912 19.3641 2.75012 16.3341 2.75012Z" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10.6891 12.0001C10.6891 13.0231 9.86011 13.8521 8.83711 13.8521C7.81411 13.8521 6.98511 13.0231 6.98511 12.0001C6.98511 10.9771 7.81411 10.1481 8.83711 10.1481H8.84011C9.86111 10.1491 10.6891 10.9781 10.6891 12.0001Z" stroke={color || '#000'}/>
<Path d="M10.692 12.0001H17.01V13.8521" stroke={color || '#000'}/>
<Path d="M14.1818 13.8522V12.0002" stroke={color || '#000'}/>
</Svg>
);
}
