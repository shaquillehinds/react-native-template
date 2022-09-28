import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';
import { ReDrawer } from '@components/layouts/ReDrawer/ReDrawer.layout';

export default function setReDrawer(payload: ReDrawer) {
  return async function (dispatch: Dispatch<AppAction>) {
    dispatch({ type: AppActionType.SET_RE_DRAWER, payload });
  };
}
