import React, { PropsWithChildren } from 'react';
import BaseButton from './Base.button';
import { ButtonProps } from './Button.types';
import { theme } from '@utils/themes';

interface Props extends ButtonProps {}

export default function SecondaryButton(props: PropsWithChildren<Props>) {
  return (
    <BaseButton
      buttonSize="wide"
      backgroundColor={theme.secondary.button.background}
      borderColor={theme.secondary.button.border}
      borderWidth={'medium'}
      fontColor={'primary'}
      {...props}
    />
  );
}
