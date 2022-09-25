import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Paper({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.7378 2.76181H8.0848C6.0048 2.75381 4.2998 4.41181 4.2508 6.49081V17.2038C4.2048 19.3168 5.8798 21.0678 7.9928 21.1148C8.0238 21.1148 8.0538 21.1158 8.0848 21.1148H16.0738C18.1678 21.0298 19.8178 19.2998 19.8028 17.2038V8.03781L14.7378 2.76181Z" stroke={color || '#000'}/>
<Path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke={color || '#000'}/>
<Path d="M14.2881 15.3585H8.88806" stroke={color || '#000'}/>
<Path d="M12.2432 11.606H8.88721" stroke={color || '#000'}/>
</Svg>
);
}
