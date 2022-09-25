import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Delete({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M19.3249 9.4682C19.3249 9.4682 18.7819 16.2032 18.4669 19.0402C18.3169 20.3952 17.4799 21.1892 16.1089 21.2142C13.4999 21.2612 10.8879 21.2642 8.27991 21.2092C6.96091 21.1822 6.13791 20.3782 5.99091 19.0472C5.67391 16.1852 5.13391 9.4682 5.13391 9.4682" stroke={color || '#000'}/>
<Path d="M20.7082 6.23969H3.75024" stroke={color || '#000'}/>
<Path d="M17.4407 6.23967C16.6557 6.23967 15.9797 5.68467 15.8257 4.91567L15.5827 3.69967C15.4327 3.13867 14.9247 2.75067 14.3457 2.75067H10.1127C9.5337 2.75067 9.0257 3.13867 8.8757 3.69967L8.6327 4.91567C8.4787 5.68467 7.8027 6.23967 7.0177 6.23967" stroke={color || '#000'}/>
</Svg>
);
}
