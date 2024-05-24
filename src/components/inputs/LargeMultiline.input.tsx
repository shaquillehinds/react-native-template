import React from 'react';
import { borderSizes, relativeY } from '@utils/constants/Layout.const';
import { StyleSheet } from 'react-native';
import { theme } from '@utils/themes';
import { BaseInputProps } from './Inputs.types';
import DefaultInput from './Default.input';
import shadowStyles from '@styles/Shadow.style';

interface LargeMultilineInput extends BaseInputProps {
  height: number;
}

export default function LargeMultilineInput(props: LargeMultilineInput) {
  const configuredStyle = { height: relativeY(props.height) };
  return (
    <DefaultInput
      margin={[1, 0, 0, 0]}
      multiline
      fontSize={'titleL'}
      fontStyle={'PoppinsMedium'}
      {...props}
      textInputStyle={[styles.textInput, configuredStyle, props.textInputStyle]}
      containerStyle={[shadowStyles(), props.containerStyle]}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: theme.border,
    borderWidth: borderSizes.thin,
    paddingTop: relativeY(4),
  },
});
