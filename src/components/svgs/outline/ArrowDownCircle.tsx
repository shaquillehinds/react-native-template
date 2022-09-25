import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowDownCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M2.75018 12C2.75018 17.108 6.89118 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89118 2.75 2.75018 6.892 2.75018 12Z" stroke={color || '#000'}/>
<Path d="M8.52899 10.5577L12 14.0437L15.471 10.5577" stroke={color || '#000'}/>
</Svg>
);
}
