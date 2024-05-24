import React from 'react';
import BaseInput from '@components/inputs';
import { relativeY } from '@utils/constants/Layout.const';
import { StyleSheet } from 'react-native';
import { theme } from '@utils/themes';
import { BaseInputProps } from './Inputs.types';

interface DefaultInputProps extends BaseInputProps {}

export default function DefaultInput(props: DefaultInputProps) {
  return (
    <BaseInput
      inputWidth={93}
      style={props.style}
      {...props}
      textInputStyle={[
        styles.textInput,
        props.multiline && styles.multiline,
        props.textInputStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: relativeY(2.3),
    borderWidth: 1,
    backgroundColor: theme.input,
    borderColor: theme.inputBorder,
  },
  multiline: {
    height: relativeY(13),
  },
});
