import React, { PropsWithChildren } from 'react';
import BaseButton from './Base.button';
import { ButtonProps } from './Button.types';

interface Props extends ButtonProps {}

export default function SecondaryButton(props: PropsWithChildren<Props>) {
  return <BaseButton {...props} />;
}
