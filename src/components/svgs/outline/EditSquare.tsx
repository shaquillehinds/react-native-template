import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function EditSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.4922 2.789H7.75324C4.67824 2.789 2.75024 4.966 2.75024 8.048V16.362C2.75024 19.444 4.66924 21.621 7.75324 21.621H16.5772C19.6622 21.621 21.5812 19.444 21.5812 16.362V12.334" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.82775 10.9209L16.3008 3.44793C17.2318 2.51793 18.7408 2.51793 19.6718 3.44793L20.8888 4.66493C21.8198 5.59593 21.8198 7.10593 20.8888 8.03593L13.3798 15.5449C12.9728 15.9519 12.4208 16.1809 11.8448 16.1809H8.09875L8.19275 12.4009C8.20675 11.8449 8.43375 11.3149 8.82775 10.9209Z" stroke={color || '#000'}/>
<Path d="M15.1652 4.60254L19.7312 9.16854" stroke={color || '#000'}/>
</Svg>
);
}
