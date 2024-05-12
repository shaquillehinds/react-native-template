import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';
import applyTheme from '@utils/themes/applyTheme';

const initialState: AppState = {
  status: 'active',
  firstDownload: false,
  loaded: false,
  theme: 'DEFAULT',
  drawerLockMode: 'unlocked',
  isBotNavVisible: true,
  internetAccess: true,
  drawerRef: { current: null },
  inAppNotification: { id: 0, title: '', type: 'success' },
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
    case AppActionType.SET_RE_DRAWER:
      return { ...state, reDrawer: action.payload };
    case AppActionType.SET_APP_STATUS:
      return { ...state, status: action.payload };
    case AppActionType.SET_IN_APP_NOTIFICATION:
      const inAppNotification = action.payload;
      const currentId = state.inAppNotification.id;
      inAppNotification.id = currentId ? currentId + 1 : 1;
      return { ...state, inAppNotification };
    default:
      return state;
  }
};

export default appReducer;
