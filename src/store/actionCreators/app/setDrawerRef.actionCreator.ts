import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';

export default function setDrawerRef(payload: React.RefObject<DrawerLayout>) {
  return async function (dispatch: Dispatch<AppAction>) {
    dispatch({ type: AppActionType.SET_DRAWER_REF, payload });
  };
}
