import { transformSpacing } from '@styles/Spacer/Spacer.style';
import { Spaces } from '@styles/Spacer/Spacer.types';
import { relativeX } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import {
  FlexAlignType,
  GestureResponderEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

interface RowLayoutProps {
  center?: boolean;
  style?: StyleProp<ViewStyle>;
  padding?: Spaces;
  margin?: Spaces;
  spaceEven?: boolean;
  spaceBetween?: boolean;
  width?: number;
  wrap?: boolean;
  centerX?: boolean;
  backgroundColor?: string;
  alignSelf?: FlexAlignType;
  onTouchStart?: (event: GestureResponderEvent) => void;
}

export default function RowLayout(props: PropsWithChildren<RowLayoutProps>) {
  const style: ViewStyle = {
    alignItems: props.center ? 'center' : undefined,
    ...transformSpacing({ margin: props.margin, padding: props.padding }),
    justifyContent: props.spaceEven
      ? 'space-evenly'
      : props.spaceBetween
      ? 'space-between'
      : props.centerX
      ? 'center'
      : undefined,
    width: props.width ? relativeX(props.width) : undefined,
    flexDirection: 'row',
    backgroundColor: props.backgroundColor || theme.background,
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    alignSelf: props.alignSelf,
  };
  return (
    <View onTouchStart={props.onTouchStart} style={[style, props.style]}>
      {props.children}
    </View>
  );
}
