import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Category({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.53988 2H7.91988C9.32988 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32988 10.53 7.91988 10.53H4.53988C3.13988 10.53 1.99988 9.39 1.99988 7.97V4.561C1.99988 3.15 3.13988 2 4.53988 2ZM4.53988 13.4697H7.91988C9.32988 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32988 21.9997 7.91988 21.9997H4.53988C3.13988 21.9997 1.99988 20.8497 1.99988 19.4397V16.0307C1.99988 14.6107 3.13988 13.4697 4.53988 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" fill={color || '#000'}/>
</Svg>
);
}