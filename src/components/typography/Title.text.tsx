import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { BaseTextProps } from './Text.types';

interface TitleTextProps extends BaseTextProps {
  fontSize?: 'titleS' | 'titleL';
}

export default function Title(props: PropsWithChildren<TitleTextProps>) {
  return (
    <BaseText
      fontSize={props.fontSize ? props.fontSize : 'titleM'}
      fontStyle={props.fontStyle ? props.fontStyle : 'PoppinsMedium'}
      color={props.color}
      style={props.style}
      letterSpacing={props.letterSpacing}
      numberOfLines={props.numberOfLines}
      padding={props.padding}
      margin={props.margin}
      lineHeight={props.lineHeight}>
      {props.children}
    </BaseText>
  );
}
