import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function PaperPlus({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.7366 2.76193H8.08455C6.00455 2.75393 4.29955 4.41093 4.25055 6.49093V17.3399C4.21555 19.3899 5.84855 21.0809 7.89955 21.1169C7.96055 21.1169 8.02255 21.1169 8.08455 21.1149H16.0726C18.1416 21.0939 19.8056 19.4089 19.8026 17.3399V8.03993L14.7366 2.76193Z" stroke={color || '#000'}/>
<Path d="M14.4742 2.75012V5.65912C14.4742 7.07912 15.6232 8.23012 17.0432 8.23412H19.7972" stroke={color || '#000'}/>
<Path d="M14.2937 12.9142H9.39368" stroke={color || '#000'}/>
<Path d="M11.8445 15.3639V10.4639" stroke={color || '#000'}/>
</Svg>
);
}
