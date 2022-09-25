import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowRightSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.0799 22H7.90991C4.37991 22 1.99991 19.729 1.99991 16.34V7.67C1.99991 4.28 4.37991 2 7.90991 2H16.0799C19.6199 2 21.9999 4.28 21.9999 7.67V16.34C21.9999 19.729 19.6199 22 16.0799 22ZM14.2699 11.25H7.91991C7.49991 11.25 7.16991 11.59 7.16991 12C7.16991 12.42 7.49991 12.75 7.91991 12.75H14.2699L11.7899 15.22C11.6499 15.36 11.5699 15.56 11.5699 15.75C11.5699 15.939 11.6499 16.13 11.7899 16.28C12.0799 16.57 12.5599 16.57 12.8499 16.28L16.6199 12.53C16.8999 12.25 16.8999 11.75 16.6199 11.47L12.8499 7.72C12.5599 7.43 12.0799 7.43 11.7899 7.72C11.4999 8.02 11.4999 8.49 11.7899 8.79L14.2699 11.25Z" fill={color || '#000'}/>
</Svg>
);
}
