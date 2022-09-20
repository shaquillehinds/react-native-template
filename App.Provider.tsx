import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@store';

interface Props {}

export default function AppProvider({ children }: PropsWithChildren<Props>) {
  return <Provider store={store}>{children}</Provider>;
}

const styles = StyleSheet.create({});
