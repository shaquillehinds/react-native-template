import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowUp({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.7257 4.25L11.7257 19.25" stroke={color || '#000'}/>
<Path d="M5.70131 10.2998L11.7253 4.2498L17.7503 10.2998" stroke={color || '#000'}/>
</Svg>
);
}
