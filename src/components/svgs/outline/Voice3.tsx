import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Voice3({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.0002 22V18.8391" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0002 14.8481V14.8481C9.75606 14.8481 7.93835 13.0218 7.93835 10.7682V6.08095C7.93835 3.82732 9.75606 2 12.0002 2C14.2432 2 16.0609 3.82732 16.0609 6.08095V10.7682C16.0609 13.0218 14.2432 14.8481 12.0002 14.8481Z" stroke={color || '#000'}/>
<Path d="M20 10.8006C20 15.2394 16.418 18.8383 12 18.8383C7.58093 18.8383 4 15.2394 4 10.8006" stroke={color || '#000'}/>
<Path d="M14.069 6.75579H16.0585" stroke={color || '#000'}/>
<Path d="M13.0704 10.0934H16.0605" stroke={color || '#000'}/>
</Svg>
);
}
