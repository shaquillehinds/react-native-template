import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';

export default function SearchScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Search<'Default'>,
) {
  return <ScreenLayout />;
}

const styles = StyleSheet.create({});
