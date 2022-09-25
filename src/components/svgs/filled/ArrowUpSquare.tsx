import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowUpSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M21.9999 7.92V16.09C21.9999 19.62 19.7289 22 16.3399 22H7.66991C4.27991 22 1.99991 19.62 1.99991 16.09V7.92C1.99991 4.38 4.27991 2 7.66991 2H16.3399C19.7289 2 21.9999 4.38 21.9999 7.92ZM11.2499 9.73V16.08C11.2499 16.5 11.5899 16.83 11.9999 16.83C12.4199 16.83 12.7499 16.5 12.7499 16.08V9.73L15.2199 12.21C15.3599 12.35 15.5599 12.43 15.7499 12.43C15.9389 12.43 16.1299 12.35 16.2799 12.21C16.5699 11.92 16.5699 11.44 16.2799 11.15L12.5299 7.38C12.2499 7.1 11.7499 7.1 11.4699 7.38L7.71991 11.15C7.42991 11.44 7.42991 11.92 7.71991 12.21C8.01991 12.5 8.48991 12.5 8.78991 12.21L11.2499 9.73Z" fill={color || '#000'}/>
</Svg>
);
}
