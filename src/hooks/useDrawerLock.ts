import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';

export default function useDrawerLock() {
  const actions = useActions();
  const drawerLockMode = useTypedSelector(state => state.app.drawerLockMode);
  const isFocused = useIsFocused();

  const lockDrawer = () =>
    setTimeout(() => {
      actions.setDrawerLockMode('locked-closed');
    }, 500);

  useEffect(() => {
    if (isFocused) lockDrawer();
    else drawerLockMode !== 'unlocked' && actions.setDrawerLockMode('unlocked');
    return () => {
      drawerLockMode !== 'unlocked' && actions.setDrawerLockMode('unlocked');
    };
  }, [isFocused]);
}
