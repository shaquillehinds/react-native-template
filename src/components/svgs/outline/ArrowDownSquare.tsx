import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowDownSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M7.66591 21.25H16.3349C19.3549 21.25 21.2499 19.111 21.2499 16.084V7.916C21.2499 4.889 19.3649 2.75 16.3349 2.75H7.66591C4.63591 2.75 2.74991 4.889 2.74991 7.916V16.084C2.74991 19.111 4.63591 21.25 7.66591 21.25Z" stroke={color || '#000'}/>
<Path d="M11.9999 16.086V7.914" stroke={color || '#000'}/>
<Path d="M15.7479 12.3223L11.9999 16.0863L8.25192 12.3223" stroke={color || '#000'}/>
</Svg>
);
}
