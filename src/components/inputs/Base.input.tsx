import { Body } from '@components/typography';
import { fontSizes } from '@components/typography/Base.text';
import {
  borderSizes,
  radiusSizes,
  relativeX,
  relativeY,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { BaseInputProps } from './Inputs.types';

export default function Base(props: BaseInputProps) {
  return (
    <View>
      {props.titleText ? (
        <Body
          margin={[0, 0, 1, 1]}
          color={'secondary'}
          fontStyle="PoppinsSemiBold"
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
        ]}>
        <TextInput
          numberOfLines={props.numberOfLines}
          multiline={props.multiline}
          style={[
            styles.input,
            {
              borderColor: props.borderColor,
              fontSize: props.fontSize
                ? fontSizes[props.fontSize]
                : fontSizes.bodyM,
              borderRadius: props.borderRadius
                ? radiusSizes[props.borderRadius]
                : radiusSizes.soft,
              borderWidth: props.borderWidth
                ? borderSizes[props.borderWidth]
                : borderSizes.razor,
            },

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
  inputContainer: { position: 'relative', justifyContent: 'center' },
  input: {
    backgroundColor: theme.input,
    paddingHorizontal: relativeX(3),
    paddingBottom: relativeY(1.5),
    fontSize: fontSizes.bodyM,
    paddingTop: relativeY(1.5),
    borderRadius: radiusSizes.soft,
    borderWidth: borderSizes.razor,
    borderColor: 'transparent',
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
