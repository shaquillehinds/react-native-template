import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function AddUser({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z" stroke={color || '#000'}/>
<Path d="M19.2037 8.66907V12.6791" stroke={color || '#000'}/>
<Path d="M21.2496 10.674H17.1596" stroke={color || '#000'}/>
</Svg>
);
}
