import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';

export default function setEffectTrigger(payload?: EffectTrigger) {
  return async function (dispatch: Dispatch<AppAction>) {
    dispatch({ type: AppActionType.SET_EFFECT_TRIGGER, payload });
  };
}
