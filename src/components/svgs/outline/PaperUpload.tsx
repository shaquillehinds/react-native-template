import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function PaperUpload({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.7366 2.76181H8.08458C6.00458 2.75381 4.30058 4.41081 4.25058 6.49081V17.2278C4.20558 19.3298 5.87358 21.0698 7.97458 21.1148C8.01158 21.1148 8.04858 21.1158 8.08458 21.1148H16.0726C18.1626 21.0408 19.8146 19.3188 19.8026 17.2278V8.03781L14.7366 2.76181Z" stroke={color || '#000'}/>
<Path d="M14.4749 2.75012V5.65912C14.4749 7.07912 15.6239 8.23012 17.0439 8.23412H19.7979" stroke={color || '#000'}/>
<Path d="M11.6409 9.90881V15.9498" stroke={color || '#000'}/>
<Path d="M13.9866 12.2643L11.6416 9.9093L9.29657 12.2643" stroke={color || '#000'}/>
</Svg>
);
}
