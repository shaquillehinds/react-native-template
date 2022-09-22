import BaseText from '@components/typography';
import {
  borderSizes,
  buttonSizes,
  radiusSizes,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

interface Props {
  borderColor?: string;
  borderRadius?: RadiusSize;
  borderWidth?: BorderSize;
  backgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  activeOpacity?: number;
  fontStyle?: FontStyle;
  fontSize?: FontSize;
  fontColor?: FontColor;
  customFontColor?: string;
  buttonSize?: ButtonSize;
  textStyle?: StyleProp<Animated.AnimateStyle<StyleProp<TextStyle>>>;
  animateText?: boolean;
  animate?: boolean;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

export default function BaseButton(props: PropsWithChildren<Props>) {
  const sizes = buttonSizes[props.buttonSize || 'medium'];
  const configuredStyles: ViewStyle = {
    borderWidth: borderSizes[props.borderWidth || 'thin'],
    borderColor: props.borderColor || theme.primary.button.border,
    paddingHorizontal: sizes.paddingHorizontal,
    paddingVertical: sizes.paddingVertical,
    borderRadius: radiusSizes[sizes.borderRadius],
    backgroundColor: props.backgroundColor || theme.primary.button.background,
  };
  const ViewComponent = props.animate
    ? Animated.View
    : (View as unknown as typeof Animated.View);
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity || 0.8}
      onPress={props.onPress}>
      <ViewComponent style={[configuredStyles, props.style]}>
        <BaseText
          animate={props.animateText}
          style={props.textStyle}
          fontSize={sizes.fontSize}
          color={props.fontColor}
          fontStyle={props.fontStyle || 'PoppinsSemiBold'}
          customColor={props.customFontColor || 'white'}>
          {props.children || 'Submit'}
        </BaseText>
      </ViewComponent>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  textContainer: {},
});
