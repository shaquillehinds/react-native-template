import React from 'react';
import ScreenLayout from '@components/layouts/Screen.layout';

export default function FeedScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  _: MainNavigationProps.Home<'Feed'>,
) {
  return <ScreenLayout />;
}
