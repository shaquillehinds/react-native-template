import React, { PropsWithChildren } from 'react';
import BaseButton from './Base.button';
import { ButtonProps } from './Button.types';
import { StyleSheet } from 'react-native';
import { relativeX, relativeY } from '@utils/constants/Layout.const';

interface Props extends ButtonProps {
  size: number;
}

export default function CircleButton(props: PropsWithChildren<Props>) {
  const configuredStyles = {
    width: relativeX(props.size),
    height: relativeX(props.size),
  };
  return (
    <BaseButton
      padding={[0]}
      style={[configuredStyles, styles.circleButton]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  circleButton: {
    borderRadius: relativeY(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
