import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Image3({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3028 2.74982H7.65076C4.63876 2.74982 2.74976 4.88382 2.74976 7.90382V16.0498C2.74976 19.0698 4.63076 21.2038 7.65076 21.2038H16.2978C19.3228 21.2038 21.2028 19.0698 21.2028 16.0498V7.90382C21.2068 4.88382 19.3258 2.74982 16.3028 2.74982Z" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10.7031 8.78503C10.7031 9.80503 9.87711 10.631 8.85711 10.631C7.83811 10.631 7.01111 9.80503 7.01111 8.78503C7.01111 7.76503 7.83811 6.93903 8.85711 6.93903C9.87611 6.94003 10.7021 7.76603 10.7031 8.78503Z" stroke={color || '#000'}/>
<Path d="M21.207 14.951C20.284 14.001 18.509 12.082 16.579 12.082C14.648 12.082 13.535 16.315 11.678 16.315C9.821 16.315 8.134 14.401 6.646 15.628C5.158 16.854 3.75 19.361 3.75 19.361" stroke={color || '#000'}/>
</Svg>
);
}
