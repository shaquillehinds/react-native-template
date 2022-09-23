import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import ButtonAnimated from '@components/animations/Button.animated';
import shadowStyles from '@styles/Shadow.style';

export default function HomeScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Home<'Default'>,
) {
  return (
    <ScreenLayout center centerY>
      <ButtonAnimated buttonType="primary" buttonSize="small">
        Button
      </ButtonAnimated>
      <ButtonAnimated buttonType="primary" buttonSize="medium">
        Button
      </ButtonAnimated>
      <ButtonAnimated
        style={shadowStyles({ shadowRadius: 8 })}
        buttonSize="large"
        buttonType="primary">
        Animated
      </ButtonAnimated>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({});
