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
<Path fillRule="evenodd" clipRule="evenodd" d="M22.0001 12C22.0001 17.52 17.5101 22 12.0001 22L11.7204 21.9962C6.32954 21.8478 2.00012 17.4264 2.00012 12C2.00012 6.49 6.48012 2 12.0001 2C17.5101 2 22.0001 6.49 22.0001 12ZM10.0201 8C9.73012 8.3 9.73012 8.77 10.0301 9.06L12.9801 12L10.0301 14.94C9.73012 15.23 9.73012 15.71 10.0201 16C10.3201 16.3 10.7901 16.3 11.0801 16L14.5701 12.53C14.7101 12.39 14.7901 12.2 14.7901 12C14.7901 11.8 14.7101 11.61 14.5701 11.47L11.0801 8C10.9401 7.85 10.7501 7.78 10.5601 7.78C10.3601 7.78 10.1701 7.85 10.0201 8Z" fill={color || '#000'}/>
</Svg>
);
}
