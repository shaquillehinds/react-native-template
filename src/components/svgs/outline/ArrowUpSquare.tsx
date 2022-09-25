import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowUpSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3341 2.75H7.66509C4.64509 2.75 2.75009 4.889 2.75009 7.916V16.084C2.75009 19.111 4.63509 21.25 7.66509 21.25H16.3341C19.3641 21.25 21.2501 19.111 21.2501 16.084V7.916C21.2501 4.889 19.3641 2.75 16.3341 2.75Z" stroke={color || '#000'}/>
<Path d="M12.0001 7.914L12.0001 16.086" stroke={color || '#000'}/>
<Path d="M8.25208 11.6777L12.0001 7.91367L15.7481 11.6777" stroke={color || '#000'}/>
</Svg>
);
}
