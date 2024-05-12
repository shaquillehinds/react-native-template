import { Store } from '@store/index';
import { useEffect } from 'react';
import { AppActionType } from '@store/actionTypes';
import { AppState } from 'react-native';
import {
  refreshUser,
  updateDeviceActivity,
} from '@transports/main/Main.transport.derivatives';

export default function useAuthentication(store: Store) {
  useEffect(() => {
    refreshUser(true);
    AppState.addEventListener('change', payload => {
      const state = store.getState().app;
      store.dispatch({ type: AppActionType.SET_APP_STATUS, payload });
      if (payload !== 'active') return;
      if (!state.loaded) {
        updateDeviceActivity();
        return refreshUser(true);
      }
      if (state.status === 'background') {
        updateDeviceActivity();
        return refreshUser();
      }
    });
  }, []);
}
