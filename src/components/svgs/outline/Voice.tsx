import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Voice({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.9998 22V18.8391" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11.9998 14.8481V14.8481C9.75662 14.8481 7.93774 13.0218 7.93774 10.7682V6.08095C7.93774 3.82732 9.75662 2 11.9998 2C14.2441 2 16.0619 3.82732 16.0619 6.08095V10.7682C16.0619 13.0218 14.2441 14.8481 11.9998 14.8481Z" stroke={color || '#000'}/>
<Path d="M20 10.8006C20 15.2394 16.4188 18.8383 11.9995 18.8383C7.58117 18.8383 4 15.2394 4 10.8006" stroke={color || '#000'}/>
</Svg>
);
}
