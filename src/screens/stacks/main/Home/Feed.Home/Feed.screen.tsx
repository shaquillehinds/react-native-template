import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';

export default function FeedScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Home<'Feed'>,
) {
  return <ScreenLayout />;
}

const styles = StyleSheet.create({});
