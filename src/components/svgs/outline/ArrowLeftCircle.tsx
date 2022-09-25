import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowLeftCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12 2.75018C6.892 2.75018 2.75 6.89118 2.75 12.0002C2.75 17.1082 6.892 21.2502 12 21.2502C17.108 21.2502 21.25 17.1082 21.25 12.0002C21.25 6.89118 17.108 2.75018 12 2.75018Z" stroke={color || '#000'}/>
<Path d="M13.4423 8.52899L9.95632 12L13.4423 15.471" stroke={color || '#000'}/>
</Svg>
);
}
