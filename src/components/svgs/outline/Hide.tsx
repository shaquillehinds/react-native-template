import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Hide({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M9.76069 14.3668C9.18569 13.7928 8.83569 13.0128 8.83569 12.1378C8.83569 10.3848 10.2477 8.9718 11.9997 8.9718C12.8667 8.9718 13.6647 9.3228 14.2297 9.8968" stroke={color || '#000'}/>
<Path d="M15.1049 12.6989C14.8729 13.9889 13.8569 15.0069 12.5679 15.2409" stroke={color || '#000'}/>
<Path d="M6.65463 17.4723C5.06763 16.2263 3.72363 14.4063 2.74963 12.1373C3.73363 9.85829 5.08663 8.02829 6.68363 6.77229C8.27063 5.51629 10.1016 4.83429 11.9996 4.83429C13.9086 4.83429 15.7386 5.52629 17.3356 6.79129" stroke={color || '#000'}/>
<Path d="M19.4477 8.99078C20.1357 9.90478 20.7407 10.9598 21.2497 12.1368C19.2827 16.6938 15.8067 19.4388 11.9997 19.4388C11.1367 19.4388 10.2857 19.2988 9.46765 19.0258" stroke={color || '#000'}/>
<Path d="M19.887 4.24957L4.11304 20.0236" stroke={color || '#000'}/>
</Svg>
);
}
