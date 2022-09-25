import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function DangerTriangle({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.81403 20.4368H19.197C20.779 20.4368 21.772 18.7268 20.986 17.3528L13.8 4.78781C13.009 3.40481 11.015 3.40381 10.223 4.78681L3.02503 17.3518C2.23903 18.7258 3.23103 20.4368 4.81403 20.4368Z" stroke={color || '#000'}/>
<Path d="M12.0025 13.4148V10.3148" stroke={color || '#000'}/>
<Path d="M11.995 16.5H12.005" stroke={color || '#000'}/>
</Svg>
);
}
