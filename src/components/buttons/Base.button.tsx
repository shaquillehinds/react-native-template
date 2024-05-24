import BaseText from '@components/typography';
import { transformSpacing } from '@styles/Spacer/Spacer.style';
import {
  borderSizes,
  buttonSizes,
  radiusSizes,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { PropsWithChildren, useState } from 'react';
import {
  DimensionValue,
  GestureResponderEvent,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { ButtonProps } from './Button.types';

export default function BaseButton(props: PropsWithChildren<ButtonProps>) {
  const automaticDisabling = isDef(props.automaticDisabling)
    ? props.automaticDisabling
    : true;
  const [disabled, setDisabled] = useState(false);
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
    backgroundColor: props.disabled
      ? theme.typeface.tertiary
      : props.backgroundColor || theme.primary.button.background,
  };
  const ViewComponent = props.animate
    ? Animated.View
    : (View as unknown as typeof Animated.View);

  const enableButton = () => {
    setTimeout(() => setDisabled(false), 500);
  };

  const autoDisabler = (
    func?: (event: GestureResponderEvent) => Promise<unknown> | unknown,
  ) => {
    if (!func || !automaticDisabling) return func;
    if (disabled) return undefined;
    return (event: GestureResponderEvent) => {
      setDisabled(true);
      const response = func(event);
      if (response instanceof Promise)
        response.then(enableButton).catch(enableButton);
      else enableButton();
    };
  };
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity || 0.8}
      style={[
        {
          width: configuredStyles.width,
          alignSelf: configuredStyles.alignSelf,
        },
        props.style,
      ]}
      onPress={props.disabled ? undefined : autoDisabler(props.onPress)}
      onPressIn={props.disabled ? undefined : autoDisabler(props.onPressIn)}
      onPressOut={props.disabled ? undefined : autoDisabler(props.onPressOut)}>
      <ViewComponent style={[configuredStyles, props.style]}>
        <BaseText
          animate={props.animateText}
          style={props.textStyle}
          fontSize={props.fontSize || sizes.fontSize}
          color={props.fontColor}
          fontStyle={props.fontStyle || 'PoppinsSemiBold'}
          customColor={props.customFontColor}>
          {props.children || 'Submit'}
        </BaseText>
      </ViewComponent>
    </TouchableOpacity>
  );
}
