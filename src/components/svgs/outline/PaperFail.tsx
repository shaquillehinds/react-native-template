import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function PaperFail({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.7372 2.7619H7.97924C5.91924 2.7619 4.25024 4.4319 4.25024 6.4909V17.3399C4.26224 19.4389 5.97324 21.1299 8.07224 21.1169C8.11224 21.1169 8.15124 21.1159 8.19024 21.1149H16.0732C18.1412 21.0939 19.8062 19.4089 19.8022 17.3399V8.0399L14.7372 2.7619Z" stroke={color || '#000'}/>
<Path d="M14.4741 2.75018V5.65918C14.4741 7.07918 15.6221 8.23018 17.0421 8.23418H19.7971" stroke={color || '#000'}/>
<Path d="M13.5762 14.6481L10.1102 11.1821" stroke={color || '#000'}/>
<Path d="M10.1113 14.6481L13.5773 11.1821" stroke={color || '#000'}/>
</Svg>
);
}
