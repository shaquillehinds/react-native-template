import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowDown3({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.2513 12.6998V3.74982" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.25031 12.6998L12.2513 20.6368L17.2523 12.6998H7.25031Z" stroke={color || '#000'}/>
</Svg>
);
}
