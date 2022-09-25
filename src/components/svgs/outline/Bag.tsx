import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Bag({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.5137 21.5H8.16592C5.09955 21.5 2.74715 20.3925 3.41534 15.9348L4.19338 9.89363C4.60528 7.66937 6.02404 6.81812 7.26889 6.81812H17.4474C18.7105 6.81812 20.0469 7.73345 20.5229 9.89363L21.3009 15.9348C21.8684 19.8891 19.5801 21.5 16.5137 21.5Z" stroke={color || '#000'}/>
<Path d="M16.651 6.59842C16.651 4.21235 14.7167 2.27805 12.3306 2.27805V2.27805C11.1816 2.27319 10.078 2.72622 9.26381 3.53697C8.44963 4.34772 7.99193 5.44941 7.99194 6.59842H7.99194" stroke={color || '#000'}/>
<Path d="M15.2963 11.1018H15.2506" stroke={color || '#000'}/>
<Path d="M9.46566 11.1018H9.41989" stroke={color || '#000'}/>
</Svg>
);
}
