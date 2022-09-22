import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { BaseTextProps } from './Text.types';

interface HeadingTextProps extends BaseTextProps {
  fontSize?: 'headingM' | 'headingL';
}

export default function Heading(props: PropsWithChildren<HeadingTextProps>) {
  return (
    <BaseText
      {...props}
      fontSize={props.fontSize ? props.fontSize : 'headingS'}
      fontStyle={props.fontStyle ? props.fontStyle : 'PoppinsSemiBold'}
    />
  );
}
