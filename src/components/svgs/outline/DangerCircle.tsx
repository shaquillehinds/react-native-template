import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function DangerCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0001 2.75012C17.1081 2.75012 21.2501 6.89112 21.2501 12.0001C21.2501 17.1081 17.1081 21.2501 12.0001 21.2501C6.89112 21.2501 2.75012 17.1081 2.75012 12.0001C2.75012 6.89112 6.89112 2.75012 12.0001 2.75012Z" stroke={color || '#000'}/>
<Path d="M11.9952 8.20422V12.6232" stroke={color || '#000'}/>
<Path d="M11.995 15.7961H12.005" stroke={color || '#000'}/>
</Svg>
);
}
