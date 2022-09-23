import { PrimaryButton, SecondaryButton } from '@components/buttons';
import { ButtonProps } from '@components/buttons/Button.types';
import { theme } from '@utils/themes';
import React, { PropsWithChildren } from 'react';
import useColorAnimation from './library/color.animation';
import useScaleAnimation from './library/scale.animation';
import { DebugLogger } from '@utils/Logger';
import { useSharedValue } from 'react-native-reanimated';

const log = DebugLogger('Button.animated.tsx');

interface Props extends ButtonProps {
  buttonType: 'primary' | 'secondary';
}

export default function ButtonAnimated(props: PropsWithChildren<Props>) {
  const sharedValue = useSharedValue(1);
  const { style } = useScaleAnimation({ sharedValue });
  const { style: s } = useColorAnimation({
    inputRange: [1, 0.45],
    outputRange: [theme.primary.dark, '#000000'],
    sharedValue,
  });

  if (props.buttonType === 'secondary') return <SecondaryButton />;

  return (
    <PrimaryButton
      activeOpacity={1}
      animate
      {...props}
      onPressIn={e => {
        sharedValue.value = 0.95;
        props.onPressIn && props.onPressIn(e);
      }}
      onPressOut={e => {
        sharedValue.value = 1;
        props.onPressOut && props.onPressOut(e);
      }}
      style={[style, s, props.style]}>
      Animate
    </PrimaryButton>
  );
}
