import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';

export default function inAppNotification(payload: InAppNotification) {
  return async function (dispatch: Dispatch<AppAction>) {
    dispatch({ type: AppActionType.SET_IN_APP_NOTIFICATION, payload });
  };
}
