import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowRight3({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.6998 11.7487H3.74979" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.6998 16.7497L20.6368 11.7487L12.6998 6.74769V16.7497Z" stroke={color || '#000'}/>
</Svg>
);
}
