import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';
import { DebugLogger } from '@utils/Logger';

const log = DebugLogger('setDrawerRef.actionCreator.ts');

export default function setDrawerRef(payload: React.RefObject<DrawerLayout>) {
  return async function (dispatch: Dispatch<AppAction>) {
    dispatch({ type: AppActionType.SET_DRAWER_REF, payload });
  };
}
