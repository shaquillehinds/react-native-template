import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function TimeCircle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.89076 21.2505 2.74976 17.1095 2.74976 12.0005C2.74976 6.89149 6.89076 2.75049 11.9998 2.75049C17.1088 2.75049 21.2498 6.89149 21.2498 12.0005Z" stroke={color || '#000'}/>
<Path d="M15.4314 14.9429L11.6614 12.6939V7.84686" stroke={color || '#000'}/>
</Svg>
);
}
