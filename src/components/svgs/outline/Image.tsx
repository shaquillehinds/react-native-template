import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Image({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M21.21 7.89918V16.0502C21.21 19.0702 19.32 21.2002 16.3 21.2002H7.65C4.63 21.2002 2.75 19.0702 2.75 16.0502V7.89918C2.75 4.87918 4.64 2.75018 7.65 2.75018H16.3C19.32 2.75018 21.21 4.87918 21.21 7.89918Z" stroke={color || '#000'}/>
<Path d="M5.28125 16.4309L6.80925 14.8179C7.34025 14.2549 8.22525 14.2279 8.78925 14.7579C8.80625 14.7749 9.72625 15.7099 9.72625 15.7099C10.2813 16.2749 11.1883 16.2839 11.7533 15.7299C11.7903 15.6939 14.0872 12.9079 14.0872 12.9079C14.6792 12.1889 15.7422 12.0859 16.4622 12.6789C16.5102 12.7189 18.6803 14.9459 18.6803 14.9459" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10.3126 9.13309C10.3126 10.1021 9.52757 10.8871 8.55857 10.8871C7.58957 10.8871 6.80457 10.1021 6.80457 9.13309C6.80457 8.16409 7.58957 7.37909 8.55857 7.37909C9.52757 7.38009 10.3126 8.16409 10.3126 9.13309Z" stroke={color || '#000'}/>
</Svg>
);
}
