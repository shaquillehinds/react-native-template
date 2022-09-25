import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Folder({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M13.4499 4.88017H16.5199C20.2099 4.88017 22.0099 6.85017 21.9999 10.8902V15.7602C21.9999 19.6202 19.6199 22.0002 15.7499 22.0002H8.23988C4.38988 22.0002 1.99988 19.6202 1.99988 15.7502V8.24017C1.99988 4.10017 3.83988 2.00017 7.46988 2.00017H9.04988C9.98088 1.99017 10.8499 2.42017 11.4199 3.15017L12.2999 4.32017C12.5799 4.67017 12.9999 4.88017 13.4499 4.88017ZM7.36988 15.2902H16.6299C17.0399 15.2902 17.3699 14.9502 17.3699 14.5402C17.3699 14.1202 17.0399 13.7902 16.6299 13.7902H7.36988C6.94988 13.7902 6.61988 14.1202 6.61988 14.5402C6.61988 14.9502 6.94988 15.2902 7.36988 15.2902Z" fill={color || '#000'}/>
</Svg>
);
}
