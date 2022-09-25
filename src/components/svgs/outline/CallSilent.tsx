import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function CallSilent({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M6.5852 14.2053C0.153716 6.91814 3.36946 4.73951 3.65401 4.38535C6.72272 1.27303 7.19873 2.68967 9.60948 5.1366C11.6405 7.20791 9.00759 8.19527 10.0866 10.6529" stroke={color || '#000'}/>
<Path d="M12.4903 13.3824C15.7705 16.0762 16.6957 12.2233 19.0191 14.5844C21.4162 17.0313 22.7945 17.525 19.7551 20.6266C19.3976 20.9378 17.0952 24.4687 9.19965 16.7415" stroke={color || '#000'}/>
<Path d="M4.5 21.5L19.5 5.49996" stroke={color || '#000'}/>
</Svg>
);
}
