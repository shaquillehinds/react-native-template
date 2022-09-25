import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function VolumeUp({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M2.50185 12.0001C2.49906 13.2298 2.44419 14.907 3.20494 15.5339C3.91453 16.1187 4.41395 15.968 5.70945 16.0631C7.00587 16.1591 9.74195 19.97 11.8512 18.7646C12.9393 17.9089 13.0202 16.1151 13.0202 12.0001C13.0202 7.88515 12.9393 6.09135 11.8512 5.23571C9.74195 4.02938 7.00587 7.84121 5.70945 7.93717C4.41395 8.03225 3.91453 7.88157 3.20494 8.46635C2.44419 9.09328 2.49906 10.7705 2.50185 12.0001Z" stroke={color || '#000'}/>
<Path d="M19.5844 5.90399C22.1344 9.57501 22.1428 14.4174 19.5844 18.0956" stroke={color || '#000'}/>
<Path d="M17.0813 8.31439C18.3926 10.6051 18.3926 13.4025 17.0813 15.686" stroke={color || '#000'}/>
</Svg>
);
}
