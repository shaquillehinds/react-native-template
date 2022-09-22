import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { BaseTextProps } from './Text.types';

interface BodyTextProps extends BaseTextProps {
  fontSize?: 'bodyL' | 'bodyS';
}

export default function Body(props: PropsWithChildren<BodyTextProps>) {
  return (
    <BaseText
      fontSize={props.fontSize}
      fontStyle={props.fontStyle}
      color={props.color}
      style={props.style}
      letterSpacing={props.letterSpacing}
      lineHeight={props.lineHeight}
      padding={props.padding}
      margin={props.margin}
      numberOfLines={props.numberOfLines}>
      {props.children}
    </BaseText>
  );
}
