import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Download({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.1222 15.4361L12.1222 3.39508" stroke={color || '#000'}/>
<Path d="M15.0382 12.5084L12.1222 15.4364L9.20621 12.5084" stroke={color || '#000'}/>
<Path d="M16.755 8.12799H17.688C19.723 8.12799 21.372 9.77699 21.372 11.813V16.697C21.372 18.727 19.727 20.372 17.697 20.372L6.55701 20.372C4.52201 20.372 2.87201 18.722 2.87201 16.687V11.802C2.87201 9.77299 4.51801 8.12799 6.54701 8.12799L7.48901 8.12799" stroke={color || '#000'}/>
</Svg>
);
}
