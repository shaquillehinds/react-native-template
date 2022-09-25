import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowRightCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89182 17.108 2.74982 12 2.74982C6.892 2.74982 2.75 6.89182 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke={color || '#000'}/>
<Path d="M10.5577 15.471L14.0437 12L10.5577 8.52901" stroke={color || '#000'}/>
</Svg>
);
}
