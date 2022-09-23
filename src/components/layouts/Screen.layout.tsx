import { transformSpacing } from '@styles/Spacer/Spacer.style';
import { Spacing } from '@styles/Spacer/Spacer.types';
import {
  normalize,
  relativeY,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren, useMemo } from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
interface ScreenLayoutProps extends Spacing {
  center?: boolean;
  centerY?: boolean;
  safe?: boolean;
  height?: number;
  style?: StyleProp<ViewStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
  onTouchStart?: ((event: GestureResponderEvent) => void) | undefined;
  onTouchEnd?: ((event: GestureResponderEvent) => void) | undefined;
}
export default function ScreenLayout(
  props: PropsWithChildren<ScreenLayoutProps>,
) {
  const style: ViewStyle = useMemo(
    () => ({
      display: 'flex',
      flex: 1,
      backgroundColor: theme.background,
      alignItems: props.center ? 'center' : undefined,
      justifyContent: props.centerY ? 'center' : undefined,
      height: props.height && normalize(props.height),
      paddingBottom: relativeY(7.8),
      ...transformSpacing({ padding: props.padding, margin: props.margin }),
    }),
    [],
  );
  return (
    <View
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
      onLayout={props.onLayout}
      style={[style, props.style]}>
      {props.children}
    </View>
  );
}
