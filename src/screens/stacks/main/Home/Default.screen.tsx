import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import BaseButton from '@components/buttons/Base.button';

export default function HomeScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Home<'Default'>,
) {
  return (
    <ScreenLayout center centerY>
      <BaseButton buttonSize="medium">Button</BaseButton>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({});
