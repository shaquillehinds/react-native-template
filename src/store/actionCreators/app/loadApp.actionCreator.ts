import { Dispatch } from 'redux';
import { AppAction } from '@store/actions';
import { AppActionType } from '@store/actionTypes';
import { retrieveAppInfo, storeAppInfo } from '@utils/storage';
import CONFIG from '@configuration';
import applyTheme from '@utils/themes/applyTheme';
import NetInfo from '@react-native-community/netinfo';

export default function loadApp(isDarkMode: boolean) {
  return async function (dispatch: Dispatch<AppAction>) {
    const appInfo = await retrieveAppInfo();
    NetInfo.addEventListener(state => {
      dispatch({
        type: AppActionType.SET_INTERNET_ACCESS,
        payload: !!state.isConnected,
      });
    });
    if (!appInfo) {
      storeAppInfo({ version: CONFIG.version });
      dispatch({ type: AppActionType.SET_FIRST_DOWNLOAD });
      if (isDarkMode) applyTheme({ appTheme: 'DEFAULT_DARK', system: true });
    } else if (appInfo.theme) {
      dispatch({ type: AppActionType.SET_THEME, payload: appInfo.theme });
    } else if (isDarkMode)
      applyTheme({ appTheme: 'DEFAULT_DARK', system: true });
    dispatch({ type: AppActionType.SET_LOADED, payload: true });
  };
}
