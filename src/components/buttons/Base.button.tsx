import BaseText from '@components/typography';
import { transformSpacing } from '@styles/Spacer/Spacer.style';
import {
  borderSizes,
  buttonSizes,
  radiusSizes,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import {
  DimensionValue,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { ButtonProps } from './Button.types';

export default function BaseButton(props: PropsWithChildren<ButtonProps>) {
  const sizes = buttonSizes[props.buttonSize || 'medium'];
  const configuredStyles: ViewStyle = {
    ...transformSpacing({ margin: props.margin, padding: props.padding }),
    borderWidth: borderSizes[props.borderWidth || 'thin'],
    borderColor: props.borderColor || theme.primary.button.border,
    paddingHorizontal: sizes.paddingHorizontal,
    paddingVertical: sizes.paddingVertical,
    borderRadius: props.borderRadius
      ? radiusSizes[props.borderRadius]
      : radiusSizes[sizes.borderRadius],
    width: sizes.width as DimensionValue,
    alignItems: 'center',
    alignSelf: props.alignSelf,
    backgroundColor: props.backgroundColor || theme.primary.button.background,
  };
  const ViewComponent = props.animate
    ? Animated.View
    : (View as unknown as typeof Animated.View);
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity || 0.8}
      style={{
        width: configuredStyles.width,
        alignSelf: configuredStyles.alignSelf,
      }}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}>
      <ViewComponent style={[configuredStyles, props.style]}>
        <BaseText
          animate={props.animateText}
          style={props.textStyle}
          fontSize={props.fontSize || sizes.fontSize}
          color={props.fontColor}
          fontStyle={props.fontStyle || 'Poppins'}
          customColor={props.customFontColor || 'white'}>
          {props.children || 'Submit'}
        </BaseText>
      </ViewComponent>
    </TouchableOpacity>
  );
}
