import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Calendar({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M3.09265 9.40427H20.9166" stroke={color || '#000'}/>
<Path d="M16.4421 13.3097H16.4514" stroke={color || '#000'}/>
<Path d="M12.0046 13.3097H12.0139" stroke={color || '#000'}/>
<Path d="M7.55793 13.3097H7.5672" stroke={color || '#000'}/>
<Path d="M16.4421 17.1962H16.4514" stroke={color || '#000'}/>
<Path d="M12.0046 17.1962H12.0139" stroke={color || '#000'}/>
<Path d="M7.55793 17.1962H7.5672" stroke={color || '#000'}/>
<Path d="M16.0438 2V5.29078" stroke={color || '#000'}/>
<Path d="M7.96552 2V5.29078" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z" stroke={color || '#000'}/>
</Svg>
);
}
