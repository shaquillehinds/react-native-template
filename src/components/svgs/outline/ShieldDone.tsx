import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ShieldDone({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11.9844 21.606C11.9844 21.606 19.6564 19.283 19.6564 12.879C19.6564 6.474 19.9344 5.974 19.3194 5.358C18.7034 4.742 12.9904 2.75 11.9844 2.75C10.9784 2.75 5.26544 4.742 4.65044 5.358C4.03444 5.974 4.31244 6.474 4.31244 12.879C4.31244 19.283 11.9844 21.606 11.9844 21.606Z" stroke={color || '#000'}/>
<Path d="M9.38586 11.8746L11.2779 13.7696L15.1759 9.86963" stroke={color || '#000'}/>
</Svg>
);
}
