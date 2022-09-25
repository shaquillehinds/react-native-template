import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Discount({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M20.3991 9.14599L21.1193 9.86599C21.6895 10.426 21.9996 11.186 21.9996 11.986C22.0096 12.786 21.6995 13.547 21.1393 14.116C21.1327 14.1233 21.126 14.1298 21.1193 14.1362C21.116 14.1394 21.1127 14.1427 21.1093 14.146L20.3991 14.856C20.119 15.136 19.9589 15.516 19.9589 15.917V16.946C19.9589 18.606 18.6084 19.957 16.9478 19.957H15.9174C15.5173 19.957 15.1372 20.116 14.8571 20.396L14.1368 21.116C13.5466 21.707 12.7763 21.996 12.006 21.996C11.2357 21.996 10.4655 21.707 9.87525 21.127L9.14498 20.396C8.86488 20.116 8.48474 19.957 8.0846 19.957H7.05423C5.39362 19.957 4.04313 18.606 4.04313 16.946V15.917C4.04313 15.516 3.88308 15.136 3.60298 14.846L2.88271 14.136C1.71229 12.967 1.70229 11.056 2.87271 9.87699L3.60298 9.14599C3.88308 8.86599 4.04313 8.48599 4.04313 8.07599V7.05599C4.04313 5.39599 5.39362 4.04699 7.05423 4.04699H8.0846C8.48474 4.04699 8.86488 3.88599 9.14498 3.60599L9.86524 2.88599C11.0357 1.70699 12.9464 1.70699 14.1268 2.87699L14.8571 3.60599C15.1372 3.88599 15.5173 4.04699 15.9174 4.04699H16.9478C18.6084 4.04699 19.9589 5.39599 19.9589 7.05599V8.08699C19.9589 8.48599 20.119 8.86599 20.3991 9.14599ZM9.42509 15.446C9.66517 15.446 9.88525 15.356 10.0453 15.186L15.1872 10.047C15.5273 9.70699 15.5273 9.14599 15.1872 8.80599C14.8471 8.46699 14.2969 8.46699 13.9567 8.80599L8.81486 13.946C8.47474 14.286 8.47474 14.846 8.81486 15.186C8.97492 15.356 9.195 15.446 9.42509 15.446ZM13.6966 14.566C13.6966 15.056 14.0868 15.446 14.577 15.446C15.0571 15.446 15.4473 15.056 15.4473 14.566C15.4473 14.087 15.0571 13.696 14.577 13.696C14.0868 13.696 13.6966 14.087 13.6966 14.566ZM9.43509 8.55599C9.91526 8.55599 10.3054 8.94599 10.3054 9.42599C10.3054 9.91699 9.91526 10.306 9.43509 10.306C8.95492 10.306 8.55477 9.91699 8.55477 9.42599C8.55477 8.94599 8.95492 8.55599 9.43509 8.55599Z" fill={color || '#000'}/>
</Svg>
);
}
