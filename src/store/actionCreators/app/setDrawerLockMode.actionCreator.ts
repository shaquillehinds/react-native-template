import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';

export default function setDrawerLockMode(payload: DrawerLockMode) {
  return async function (dispatch: Dispatch<AppAction>) {
    dispatch({ type: AppActionType.SET_DRAWER_LOCK_MODE, payload });
  };
}
