import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { AppTextProps } from './types';

interface HeadingTextProps extends AppTextProps {
  fontSize?: 'headingM' | 'headingL';
}

export default function Heading(props: PropsWithChildren<HeadingTextProps>) {
  return (
    <BaseText
      fontSize={props.fontSize ? props.fontSize : 'headingS'}
      fontStyle={props.fontStyle ? props.fontStyle : 'PoppinsSemiBold'}
      color={props.color}
      style={props.style}
      letterSpacing={props.letterSpacing}
      lineHeight={props.lineHeight}>
      {props.children}
    </BaseText>
  );
}
