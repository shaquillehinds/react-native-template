import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';

export default function DefaultScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Profile<'Default'>,
) {
  return <ScreenLayout />;
}

const styles = StyleSheet.create({});
