import React from 'react';
import Svg, {
  Circle,Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Search({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Circle cx="11.7666" cy="11.7666" r="8.98856" stroke={color || '#000'}/>
<Path d="M18.0183 18.4851L21.5423 22" stroke={color || '#000'}/>
</Svg>
);
}
