import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { AppTextProps } from './types';

interface TitleTextProps extends AppTextProps {
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
      lineHeight={props.lineHeight}>
      {props.children}
    </BaseText>
  );
}
