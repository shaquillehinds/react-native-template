import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowRight({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M19.75 11.7257L4.75 11.7257" stroke={color || '#000'}/>
<Path d="M13.7002 5.70131L19.7502 11.7253L13.7002 17.7503" stroke={color || '#000'}/>
</Svg>
);
}
