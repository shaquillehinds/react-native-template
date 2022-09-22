import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { BaseTextProps } from './Text.types';

interface TitleTextProps extends BaseTextProps {
  fontSize?: 'titleS' | 'titleL';
}

export default function Title(props: PropsWithChildren<TitleTextProps>) {
  return (
    <BaseText
      {...props}
      fontSize={props.fontSize ? props.fontSize : 'titleM'}
      fontStyle={props.fontStyle ? props.fontStyle : 'PoppinsMedium'}
    />
  );
}
