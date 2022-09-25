import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function VolumeOff({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M20.4201 3.27085C20.7801 2.91095 21.3538 2.90884 21.7275 3.26979C22.0906 3.63285 22.0906 4.21926 21.7286 4.58127L4.57987 21.729C4.40943 21.8994 4.16383 22 3.92458 22C3.69062 22 3.45984 21.9047 3.27352 21.7322C2.90936 21.3543 2.90936 20.7795 3.27035 20.4186L6.09689 17.5924H6.0683C4.65927 17.5924 3.63346 16.5974 3.4429 15.052C3.23012 13.5066 3.27247 10.8603 3.4429 9.4525C3.64299 7.99177 4.72385 6.98725 6.0683 6.98725H7.89867L11.3921 4.12929C11.8167 3.7694 12.5683 3.42962 13.1495 3.42009C14.2081 3.42009 15.182 4.15999 15.5314 5.34551C15.669 5.84407 15.723 6.3405 15.7653 6.81789L15.849 7.49427C15.8627 7.59801 15.8754 7.69751 15.886 7.80336L20.4201 3.27085ZM14.8809 13.7314C15.0238 13.5917 15.3435 13.4911 15.4874 13.5282C15.876 13.6266 15.9522 14.1844 15.9458 14.6227C15.9278 15.895 15.8855 16.7799 15.8177 17.3271L15.7701 17.7781L15.7693 17.7864C15.724 18.24 15.6772 18.7094 15.5425 19.2102C15.19 20.3936 14.2446 21.1621 13.1701 21.1621C13.1352 21.1621 13.1002 21.1621 13.0642 21.161C12.4704 21.161 11.8267 20.8054 11.4615 20.4952L10.1604 19.4886C9.66605 19.1213 9.81214 18.5349 10.0895 18.1951C10.2966 17.9422 12.786 15.6569 14.0935 14.4566C14.5369 14.0496 14.8444 13.7673 14.8809 13.7314Z" fill={color || '#000'}/>
</Svg>
);
}
