import React, { PropsWithChildren } from 'react';
import BaseButton from './Base.button';
import { ButtonProps } from './Button.types';

interface Props extends ButtonProps {}

export default function PrimaryButton(props: PropsWithChildren<Props>) {
  return <BaseButton {...props} />;
}
