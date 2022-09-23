import { AppActionType } from '@store/actionTypes';

interface SetFirstDownloadAction {
  type: AppActionType.SET_FIRST_DOWNLOAD;
}

interface SetLoaded {
  type: AppActionType.SET_LOADED;
  payload: boolean;
}

interface SetTheme {
  type: AppActionType.SET_THEME;
  payload: AppTheme;
}

export type AppAction = SetFirstDownloadAction | SetLoaded | SetTheme;
