import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { AppTextProps } from './types';

interface BodyTextProps extends AppTextProps {
  fontSize?: 'bodyM' | 'bodyS';
}

export default function Body(props: PropsWithChildren<BodyTextProps>) {
  return (
    <BaseText
      fontSize={props.fontSize}
      fontStyle={props.fontStyle}
      color={props.color}
      style={props.style}
      letterSpacing={props.letterSpacing}
      lineHeight={props.lineHeight}>
      {props.children}
    </BaseText>
  );
}
