import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function VolumeOff({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.5329 9.46704L7.71363 16.2869C7.53638 16.1842 7.36847 16.1189 7.21921 16.1096C5.92251 16.0163 5.41876 16.1656 4.70977 15.5592C3.94482 14.9061 4.00079 13.1615 4.00079 11.8834C4.00079 10.6052 3.94482 8.86063 4.70977 8.20757C5.41876 7.60115 5.92251 7.75975 7.21921 7.65713C8.5159 7.55451 11.2586 3.59882 13.3762 4.84897C14.2344 5.54868 14.4676 6.8548 14.5329 9.46704Z" stroke={color || '#000'}/>
<Path d="M14.5329 13.9172C14.4956 16.7906 14.2717 18.1901 13.3762 18.9178C12.3966 19.4962 11.2865 18.9644 10.2417 18.2087" stroke={color || '#000'}/>
<Path d="M4.00122 20L7.71406 16.2869L14.5334 9.46706L20 4" stroke={color || '#000'}/>
</Svg>
);
}
