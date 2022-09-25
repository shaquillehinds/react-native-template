import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function TicketStar({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M17.8572 20.4171C19.7302 20.4171 21.2492 18.8991 21.2502 17.0261V17.0241V14.3241C20.0132 14.3241 19.0112 13.3221 19.0102 12.0851C19.0102 10.8491 20.0122 9.84612 21.2492 9.84612H21.2502V7.14612C21.2522 5.27212 19.7352 3.75212 17.8622 3.75012H17.8562H6.14424C4.27024 3.75012 2.75124 5.26812 2.75024 7.14212V7.14312V9.93312C3.94424 9.89112 4.94524 10.8251 4.98724 12.0191C4.98824 12.0411 4.98924 12.0631 4.98924 12.0851C4.99024 13.3201 3.99124 14.3221 2.75624 14.3241H2.75024V17.0241C2.74924 18.8971 4.26824 20.4171 6.14124 20.4171H6.14224H17.8572Z" stroke={color || '#000'}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.3713 9.06309L12.9873 10.3101C13.0473 10.4321 13.1633 10.5171 13.2983 10.5371L14.6753 10.7381C15.0163 10.7881 15.1513 11.2061 14.9053 11.4451L13.9093 12.4151C13.8113 12.5101 13.7673 12.6471 13.7893 12.7821L14.0243 14.1521C14.0823 14.4911 13.7273 14.7491 13.4233 14.5891L12.1923 13.9421C12.0713 13.8781 11.9273 13.8781 11.8063 13.9421L10.5763 14.5891C10.2713 14.7491 9.91634 14.4911 9.97434 14.1521L10.2093 12.7821C10.2323 12.6471 10.1873 12.5101 10.0893 12.4151L9.09434 11.4451C8.84834 11.2061 8.98334 10.7881 9.32334 10.7381L10.7003 10.5371C10.8353 10.5171 10.9523 10.4321 11.0123 10.3101L11.6273 9.06309C11.7793 8.75509 12.2193 8.75509 12.3713 9.06309Z" stroke={color || '#000'}/>
</Svg>
);
}
