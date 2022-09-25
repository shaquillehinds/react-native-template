import React from 'react';
import Svg, {
  Path,Circle,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Activity({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M7.24487 14.7815L10.238 10.8913L13.6522 13.5732L16.5813 9.79291" stroke={color || '#000'}/>
<Circle cx="19.9954" cy="4.20021" r="1.9222" stroke={color || '#000'}/>
<Path d="M14.9245 3.12012H7.65679C4.64535 3.12012 2.77808 5.25284 2.77808 8.26428V16.3467C2.77808 19.3581 4.60874 21.4817 7.65679 21.4817H16.2609C19.2724 21.4817 21.1396 19.3581 21.1396 16.3467V9.30776" stroke={color || '#000'}/>
</Svg>
);
}
