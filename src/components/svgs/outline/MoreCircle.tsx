import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function MoreCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0002 2.75012C17.1082 2.75012 21.2502 6.89112 21.2502 12.0001C21.2502 17.1081 17.1082 21.2501 12.0002 21.2501C6.89124 21.2501 2.75024 17.1081 2.75024 12.0001C2.75024 6.89212 6.89224 2.75012 12.0002 2.75012Z" stroke={color || '#000'}/>
<Path d="M15.9395 12.013H15.9485" stroke={color || '#000'}/>
<Path d="M11.9304 12.013H11.9394" stroke={color || '#000'}/>
<Path d="M7.9214 12.013H7.9304" stroke={color || '#000'}/>
</Svg>
);
}
