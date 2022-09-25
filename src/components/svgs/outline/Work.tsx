import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Work({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.9951 16.6768V14.1398" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.1899 5.3302C19.8799 5.3302 21.2399 6.7002 21.2399 8.3902V11.8302C18.7799 13.2702 15.5299 14.1402 11.9899 14.1402C8.44988 14.1402 5.20988 13.2702 2.74988 11.8302V8.3802C2.74988 6.6902 4.11988 5.3302 5.80988 5.3302H18.1899Z" stroke={color || '#000'}/>
<Path d="M15.4951 5.32582V4.95982C15.4951 3.73982 14.5051 2.74982 13.2851 2.74982H10.7051C9.48506 2.74982 8.49506 3.73982 8.49506 4.95982V5.32582" stroke={color || '#000'}/>
<Path d="M2.77435 15.483L2.96335 17.992C3.09135 19.683 4.50035 20.99 6.19535 20.99H17.7944C19.4894 20.99 20.8984 19.683 21.0264 17.992L21.2154 15.483" stroke={color || '#000'}/>
</Svg>
);
}
