import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Video({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.2969 15.5383C16.3778 17.3704 14.8992 18.9196 12.9946 18.9975C12.8543 19.0034 6.01531 18.9896 6.01531 18.9896C4.11996 19.1335 2.46115 17.7715 2.31165 15.9463C2.30039 15.8103 2.30346 8.47219 2.30346 8.47219C2.21949 6.63815 3.69604 5.08499 5.60163 5.00418C5.74396 4.99728 12.5738 5.01009 12.5738 5.01009C14.4783 4.86818 16.1423 6.24001 16.2897 8.07405C16.3 8.2061 16.2969 15.5383 16.2969 15.5383Z" stroke={color || '#000'}/>
<Path d="M16.3 9.97984L19.593 7.28484C20.409 6.61684 21.633 7.19884 21.632 8.25184L21.62 15.6008C21.619 16.6538 20.394 17.2308 19.58 16.5628L16.3 13.8678" stroke={color || '#000'}/>
</Svg>
);
}
