import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Bookmark({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M19.7388 6.15362C19.7388 3.40274 17.8581 2.29999 15.1503 2.29999H8.79143C6.16687 2.29999 4.19995 3.32756 4.19995 5.97016V20.694C4.19995 21.4198 4.9809 21.8769 5.61348 21.522L11.9954 17.9421L18.3223 21.516C18.9558 21.8729 19.7388 21.4158 19.7388 20.689V6.15362Z" stroke={color || '#000'}/>
<Path d="M8.27112 9.02799H15.5894" stroke={color || '#000'}/>
</Svg>
);
}
