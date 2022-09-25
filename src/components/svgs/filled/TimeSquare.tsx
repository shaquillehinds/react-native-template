import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function TimeSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M7.66988 2.00012H16.3399C19.7299 2.00012 21.9999 4.37912 21.9999 7.91912V16.0891C21.9999 19.6201 19.7299 22.0001 16.3399 22.0001H7.66988C4.27988 22.0001 1.99988 19.6201 1.99988 16.0891V7.91912C1.99988 4.37912 4.27988 2.00012 7.66988 2.00012ZM15.5799 15.8101C15.8299 15.8101 16.0799 15.6801 16.2199 15.4401C16.4399 15.0891 16.3199 14.6291 15.9599 14.4101L12.3999 12.2901V7.66912C12.3999 7.26012 12.0699 6.91912 11.6499 6.91912C11.2399 6.91912 10.8999 7.26012 10.8999 7.66912V12.7201C10.8999 12.9801 11.0399 13.2301 11.2699 13.3601L15.1899 15.7001C15.3099 15.7801 15.4499 15.8101 15.5799 15.8101Z" fill={color || '#000'}/>
</Svg>
);
}
