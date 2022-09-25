import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function CloseSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M14.3955 9.59491L9.60352 14.3869" stroke={color || '#000'}/>
<Path d="M14.397 14.3898L9.60101 9.59277" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75018H7.66549C4.64449 2.75018 2.75049 4.88918 2.75049 7.91618V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91618C21.2505 4.88918 19.3645 2.75018 16.3345 2.75018Z" stroke={color || '#000'}/>
</Svg>
);
}
