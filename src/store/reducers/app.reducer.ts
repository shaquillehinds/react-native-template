import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';
import { DebugLogger } from '@utils/Logger';
import applyTheme from '@utils/themes/applyTheme';

const log = DebugLogger('app.reducer.ts');

const initialState: AppState = {
  firstDownload: false,
  loaded: false,
  theme: 'DEFAULT',
  drawerLockMode: 'unlocked',
  isBotNavVisible: true,
  internetAccess: true,
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
    case AppActionType.SET_DRAWER_REF:
      return { ...state, drawerRef: action.payload };
    case AppActionType.SET_DRAWER_LOCK_MODE:
      return { ...state, drawerLockMode: action.payload };
    case AppActionType.SET_BOT_NAV_VIS:
      return { ...state, isBotNavVisible: action.payload };
    case AppActionType.SET_INTERNET_ACCESS:
      return { ...state, internetAccess: action.payload };
    default:
      return state;
  }
};

export default appReducer;
