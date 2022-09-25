import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Message({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.06037C4.26937 21 2.00037 18.74 2.00037 15.95V8.05C2.00037 5.26 4.25937 3 7.06037 3H16.9394ZM18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.50037 8.4C6.18937 8.17 5.75937 8.2 5.50037 8.47C5.23037 8.74 5.20037 9.17 5.42937 9.47L5.56037 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54Z" fill={color || '#000'}/>
</Svg>
);
}
