import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Game({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M8.84831 12.314V16.059" stroke={color || '#000'}/>
<Path d="M10.759 14.1867H6.93787" stroke={color || '#000'}/>
<Path d="M15.3661 12.428H15.259" stroke={color || '#000'}/>
<Path d="M17.1797 16.0026H17.0726" stroke={color || '#000'}/>
<Path d="M8.07214 2C8.07214 2.74048 8.68463 3.34076 9.44016 3.34076H10.4966C11.6623 3.34492 12.6064 4.27026 12.6117 5.41266V6.08771" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16.4283 21.9626C13.4231 22.0135 10.473 22.0114 7.57275 21.9626C4.3535 21.9626 2 19.6664 2 16.5113V11.8617C2 8.70664 4.3535 6.41041 7.57275 6.41041C10.4889 6.36056 13.4411 6.3616 16.4283 6.41041C19.6476 6.41041 22 8.70767 22 11.8617V16.5113C22 19.6664 19.6476 21.9626 16.4283 21.9626Z" stroke={color || '#000'}/>
</Svg>
);
}
