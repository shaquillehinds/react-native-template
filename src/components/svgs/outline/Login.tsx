import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Login({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M15.8125 12.0218H3.77148" stroke={color || '#000'}/>
<Path d="M12.8848 9.10577L15.8128 12.0218L12.8848 14.9378" stroke={color || '#000'}/>
<Path d="M8.50439 7.38897V6.45597C8.50439 4.42097 10.1534 2.77197 12.1894 2.77197H17.0734C19.1034 2.77197 20.7484 4.41697 20.7484 6.44697V17.587C20.7484 19.622 19.0984 21.272 17.0634 21.272H12.1784C10.1494 21.272 8.50439 19.626 8.50439 17.597V16.655" stroke={color || '#000'}/>
</Svg>
);
}
