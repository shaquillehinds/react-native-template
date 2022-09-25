import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function ArrowUp({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0066 13.165L12.3607 13.1634C13.7652 13.1513 15.0183 13.0666 15.8124 12.9206C15.8267 12.9206 16.6143 12.7613 16.8764 12.6599C17.2554 12.5006 17.577 12.2126 17.7808 11.8515C17.9262 11.5624 18 11.2592 18 10.9417C17.9884 10.6922 17.8629 10.2806 17.7576 9.98692L17.664 9.74283C17.0218 8.12612 14.9234 5.03561 13.6402 3.85199L13.5505 3.76473L13.1302 3.37527C12.8085 3.12982 12.4153 3 11.9923 3C11.6134 3 11.2344 3.11563 10.9282 3.3469C10.829 3.41614 10.7017 3.52766 10.5942 3.62693L10.1974 4.006C8.87572 5.31046 7.02183 8.13485 6.40756 9.59883C6.39435 9.59883 6.01432 10.5086 6 10.9417V10.9995C6 11.6639 6.37892 12.2846 6.99137 12.6021C7.1588 12.6888 7.48678 12.772 7.77483 12.8352L8.31871 12.949C9.19332 13.0788 10.535 13.165 12.0066 13.165ZM10.4817 19.4967C10.4817 20.3269 11.1613 21 11.9996 21C12.8378 21 13.5175 20.3269 13.5175 19.4967L13.1903 15.7975C13.1903 15.1463 12.6583 14.6183 11.9996 14.6183C11.3419 14.6183 10.8088 15.1463 10.8088 15.7975L10.4817 19.4967Z" fill={color || '#000'}/>
</Svg>
);
}
