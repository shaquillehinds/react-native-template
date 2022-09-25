import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Scan({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M22.5 12.8056H1.5" stroke={color || '#000'}/>
<Path d="M20.6299 8.5951V7.0821C20.6299 5.0211 18.9589 3.3501 16.8969 3.3501H15.6919" stroke={color || '#000'}/>
<Path d="M3.37012 8.5951V7.0821C3.37012 5.0211 5.04112 3.3501 7.10312 3.3501H8.33912" stroke={color || '#000'}/>
<Path d="M20.6299 12.8046V16.8786C20.6299 18.9406 18.9589 20.6116 16.8969 20.6116H15.6919" stroke={color || '#000'}/>
<Path d="M3.37012 12.8046V16.8786C3.37012 18.9406 5.04112 20.6116 7.10312 20.6116H8.33912" stroke={color || '#000'}/>
</Svg>
);
}
