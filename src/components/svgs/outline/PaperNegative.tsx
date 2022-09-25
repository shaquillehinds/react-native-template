import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function PaperNegative({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.7366 2.76194H8.08455C6.00455 2.75294 4.29955 4.41094 4.25055 6.49094V17.3399C4.21555 19.3899 5.84855 21.0809 7.89955 21.1169C7.96055 21.1169 8.02255 21.1169 8.08455 21.1149H16.0726C18.1416 21.0939 19.8056 19.4089 19.8026 17.3399V8.03994L14.7366 2.76194Z" stroke={color || '#000'}/>
<Path d="M14.4734 2.75012V5.65912C14.4734 7.07912 15.6224 8.23012 17.0424 8.23412H19.7964" stroke={color || '#000'}/>
<Path d="M14.2927 13.7472H9.3927" stroke={color || '#000'}/>
</Svg>
);
}
