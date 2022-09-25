import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Graph({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M17.2779 13.8891C17.9527 13.8891 18.519 14.446 18.4158 15.1123C17.8106 19.0323 14.4548 21.9428 10.4074 21.9428C5.92952 21.9428 2.30005 18.3134 2.30005 13.8365C2.30005 10.1481 5.10215 6.7123 8.25689 5.93546C8.93479 5.76809 9.62952 6.24493 9.62952 6.94283C9.62952 11.6712 9.78847 12.8944 10.6864 13.5597C11.5843 14.2249 12.64 13.8891 17.2779 13.8891Z" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M21.6926 9.95157C21.7463 6.91368 18.0147 2.01684 13.4674 2.10105C13.1137 2.10736 12.8305 2.4021 12.8147 2.75473C12.7 5.25263 12.8547 8.48947 12.9411 9.95684C12.9674 10.4137 13.3263 10.7726 13.7821 10.7989C15.2905 10.8853 18.6453 11.0032 21.1074 10.6305C21.4421 10.58 21.6874 10.2895 21.6926 9.95157Z" stroke={color || '#000'}/>
</Svg>
);
}
