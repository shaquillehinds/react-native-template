import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';
import { DebugLogger } from '@utils/Logger';
import applyTheme from '@utils/themes/applyTheme';

const log = DebugLogger('app.reducer.ts');

const initialState: AppState = {
  firstDownload: false,
  loaded: false,
  theme: 'DEFAULT',
};

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.SET_FIRST_DOWNLOAD:
      return { ...state, firstDownload: true };
    case AppActionType.SET_LOADED:
      return { ...state, loaded: action.payload };
    case AppActionType.SET_THEME:
      applyTheme({ appTheme: action.payload });
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default appReducer;
