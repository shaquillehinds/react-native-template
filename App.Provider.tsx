import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@store';

interface Props {
  store: Store;
}

export default function AppProvider({
  children,
  store,
}: PropsWithChildren<Props>) {
  return <Provider store={store}>{children}</Provider>;
}
