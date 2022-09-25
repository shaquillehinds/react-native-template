import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Play({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C17.2459 2.5 21.5 6.75315 21.5 12C21.5 17.2469 17.2459 21.5 12 21.5C6.75315 21.5 2.5 17.2469 2.5 12C2.5 6.75315 6.75315 2.5 12 2.5Z" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 11.9951C15 11.184 10.8425 8.58912 10.3709 9.0557C9.8993 9.52228 9.85395 14.424 10.3709 14.9346C10.8879 15.4469 15 12.8063 15 11.9951Z" stroke={color || '#000'}/>
</Svg>
);
}
