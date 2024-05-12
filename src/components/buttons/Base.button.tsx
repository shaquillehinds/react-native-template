import BaseText from '@components/typography';
import {
  borderSizes,
  buttonSizes,
  radiusSizes,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { ButtonProps } from './Button.types';

export default function BaseButton(props: PropsWithChildren<ButtonProps>) {
  const sizes = buttonSizes[props.buttonSize || 'medium'];
  const configuredStyles: ViewStyle = {
    borderWidth: borderSizes[props.borderWidth || 'thin'],
    borderColor: props.borderColor || theme.primary.button.border,
    paddingHorizontal: sizes.paddingHorizontal,
    paddingVertical: sizes.paddingVertical,
    borderRadius: radiusSizes[sizes.borderRadius],
    width: sizes.width,
    alignItems: 'center',
    backgroundColor: props.backgroundColor || theme.primary.button.background,
  };
  const ViewComponent = props.animate
    ? Animated.View
    : (View as unknown as typeof Animated.View);
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity || 0.8}
      style={{ width: configuredStyles.width }}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}>
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
