import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@utils/constants/Layout.const';

export default function Voice2({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.1748 15.2165H11.825C9.42166 15.2165 7.47358 13.2928 7.47358 10.9204V6.29708C7.47358 3.92374 9.42166 2 11.825 2H12.1748C14.1693 2 15.8501 3.32395 16.3645 5.13098C16.4352 5.37874 16.2482 5.62459 15.9886 5.62459H14.8562C14.5142 5.62459 14.2362 5.89818 14.2362 6.23586V6.23682C14.2362 6.57546 14.5142 6.84905 14.8562 6.84905H15.9004C16.2463 6.84905 16.5272 7.12551 16.5272 7.46702C16.5272 7.80853 16.2463 8.08499 15.9004 8.08499H14.8562C14.5142 8.08499 14.2362 8.35953 14.2362 8.69817C14.2362 9.03585 14.5142 9.3104 14.8562 9.3104H15.9004C16.2463 9.3104 16.5272 9.58686 16.5272 9.92933C16.5272 10.2699 16.2463 10.5463 15.9004 10.5463H14.8562C14.5142 10.5463 14.2362 10.8209 14.2362 11.1595C14.2362 11.4972 14.5142 11.7708 14.8562 11.7708H15.9334C16.1988 11.7708 16.3887 12.0272 16.3054 12.2759C15.7309 13.9844 14.0996 15.2165 12.1748 15.2165ZM18.5626 10.7828C18.5626 10.2538 18.9966 9.8262 19.5313 9.8262C20.066 9.8262 20.5 10.2538 20.5 10.7828C20.5 15.0866 17.2006 18.6404 12.9692 19.1177V21.0434C12.9692 21.5714 12.5352 22 12.0005 22C11.4648 22 11.0318 21.5714 11.0318 21.0434V19.1177C6.79945 18.6404 3.5 15.0866 3.5 10.7828C3.5 10.2538 3.93398 9.8262 4.46872 9.8262C5.00345 9.8262 5.43743 10.2538 5.43743 10.7828C5.43743 14.3557 8.38136 17.2629 12.0005 17.2629C15.6186 17.2629 18.5626 14.3557 18.5626 10.7828Z" fill={color || '#000'}/>
</Svg>
);
}