import React from 'react';
import Svg, {
  Path,Circle,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Discovery({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z" stroke={color || '#000'}/>
<Circle cx="11.611" cy="11.611" r="9.61098" stroke={color || '#000'}/>
</Svg>
);
}
