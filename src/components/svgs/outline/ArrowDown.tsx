import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowDown({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.2743 19.75V4.75" stroke={color || '#000'}/>
<Path d="M18.2987 13.7002L12.2747 19.7502L6.24969 13.7002" stroke={color || '#000'}/>
</Svg>
);
}
