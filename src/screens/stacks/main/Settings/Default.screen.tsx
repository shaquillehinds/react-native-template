import React from 'react';
import ScreenLayout from '@components/layouts/Screen.layout';

export default function SettingsScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  _: MainNavigationProps.Settings<'Default'>,
) {
  return <ScreenLayout />;
}
