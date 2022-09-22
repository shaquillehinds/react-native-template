import React, { PropsWithChildren } from 'react';
import BaseText from './Base.text';
import { BaseTextProps } from './Text.types';

interface BodyTextProps extends BaseTextProps {
  fontSize?: 'bodyL' | 'bodyS';
}

export default function Body(props: PropsWithChildren<BodyTextProps>) {
  return <BaseText {...props} />;
}
