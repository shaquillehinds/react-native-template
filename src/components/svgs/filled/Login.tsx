import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Login({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11.8861 2H16.9254C19.445 2 21.5 4 21.5 6.44V17.56C21.5 20.01 19.445 22 16.9047 22H11.8758C9.35611 22 7.29083 20.01 7.29083 17.57V12.77H13.6932L12.041 14.37C11.7312 14.67 11.7312 15.16 12.041 15.46C12.1959 15.61 12.4024 15.68 12.6089 15.68C12.8051 15.68 13.0117 15.61 13.1666 15.46L16.1819 12.55C16.3368 12.41 16.4194 12.21 16.4194 12C16.4194 11.8 16.3368 11.6 16.1819 11.46L13.1666 8.55C12.8568 8.25 12.3508 8.25 12.041 8.55C11.7312 8.85 11.7312 9.34 12.041 9.64L13.6932 11.23H7.29083V6.45C7.29083 4 9.35611 2 11.8861 2ZM2.5 11.9999C2.5 11.5799 2.85523 11.2299 3.2815 11.2299H7.29052V12.7699H3.2815C2.85523 12.7699 2.5 12.4299 2.5 11.9999Z" fill={color || '#000'}/>
</Svg>
);
}