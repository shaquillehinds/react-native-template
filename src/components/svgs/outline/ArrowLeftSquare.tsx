import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowLeftSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M2.75 7.66588L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66588C21.25 4.63588 19.111 2.74988 16.084 2.74988L7.916 2.74988C4.889 2.74988 2.75 4.63588 2.75 7.66588Z" stroke={color || '#000'}/>
<Path d="M7.914 11.9999L16.086 11.9999" stroke={color || '#000'}/>
<Path d="M11.6777 15.7479L7.9137 11.9999L11.6777 8.25189" stroke={color || '#000'}/>
</Svg>
);
}
