import { Body } from '@components/typography';
import {
  borderSizes,
  fontSizes,
  isIOS,
  radiusSizes,
  relativeX,
  relativeY,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { useMemo } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import { BaseInputProps } from './Inputs.types';
import { transformSpacing } from '@styles/Spacer/Spacer.style';

export default function Base(props: BaseInputProps) {
  const style: TextStyle = useMemo(
    () => ({
      borderColor: props.borderColor,
      paddingTop: props.disabled
        ? relativeY(1.5)
        : props.multiline && isIOS
        ? relativeY(1)
        : 0,
      paddingBottom: props.multiline && isIOS ? relativeY(1) : 0,
      fontSize: props.fontSize ? fontSizes[props.fontSize] : fontSizes.bodyM,
      fontFamily: props.fontStyle ? props.fontStyle : 'Inter',
      borderRadius: props.borderRadius
        ? radiusSizes[props.borderRadius]
        : radiusSizes.soft,
      borderWidth: props.borderWidth
        ? borderSizes[props.borderWidth]
        : undefined,
      backgroundColor: theme.lightBackground,
      color: theme.typeface.primary,
    }),
    [theme.mode],
  );
  const stopPropagation = (event: GestureResponderEvent) =>
    event.stopPropagation();
  return (
    <View
      style={[
        transformSpacing({ margin: props.margin, padding: props.padding }),
        props.style,
      ]}>
      {props.titleText ? (
        <Body
          margin={[0, 0, 1.5, 1]}
          fontStyle="PoppinsSemiBold"
          fontSize="bodyL"
          style={props.titleTextStyles}>
          {props.titleText}
        </Body>
      ) : undefined}
      <View
        style={[
          {
            width: props.inputWidth
              ? relativeX(props.inputWidth)
              : relativeX(75),
          },
          styles.inputContainer,
          props.containerStyle,
        ]}>
        {props.CustomInputComponent ? (
          props.CustomInputComponent
        ) : props.disabled ? (
          <Text
            ref={props.ref}
            numberOfLines={props.numberOfLines}
            style={[
              styles.input,
              style,
              props.rightIcon ? { paddingRight: relativeX(9) } : undefined,
              props.textInputStyle,
            ]}>
            {props.value}
          </Text>
        ) : (
          <TextInput
            ref={props.ref}
            onTouchStart={props.onTouchStart || stopPropagation}
            numberOfLines={props.numberOfLines}
            onChangeText={props.onChangeText}
            multiline={props.multiline}
            onBlur={props.onBlur}
            value={props.value}
            keyboardType={props.keyboardType}
            textAlign={props.textAlign}
            autoCorrect={props.autoCorrect}
            onSubmitEditing={props.onSubmitEditing}
            secureTextEntry={props.secureTextEntry}
            returnKeyType={props.returnKeyType}
            style={[
              styles.input,
              style,
              props.rightIcon ? { paddingRight: relativeX(9) } : undefined,
              props.textInputStyle,
            ]}
            placeholderTextColor={
              props.placeholderColor
                ? theme.typeface[props.placeholderColor]
                : theme.typeface.secondary
            }
            placeholder={props.placeholder}
          />
        )}
        {props.rightIcon ? (
          <View style={[styles.inputIconContainer]}>{props.rightIcon}</View>
        ) : undefined}
      </View>
      {props.footerText ? (
        <Body
          style={props.footerTextStyles}
          margin={[0.5, 0, 0, 1]}
          fontSize="bodyS"
          color="warning">
          {props.footerText}
        </Body>
      ) : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: relativeX(3),
    paddingVertical: 0,
    height: relativeY(6),
    alignItems: 'center',
    fontSize: fontSizes.bodyM,
    borderRadius: radiusSizes.soft,
    borderWidth: borderSizes.razor,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  inputIconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: relativeX(6),
    right: relativeX(3),
  },
});
