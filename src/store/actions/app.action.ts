import { ReDrawer } from '@components/layouts/ReDrawer/ReDrawer.layout';
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

interface SetDrawerRef {
  type: AppActionType.SET_DRAWER_REF;
  payload: React.RefObject<DrawerLayout>;
}

interface SetDrawerLockMode {
  type: AppActionType.SET_DRAWER_LOCK_MODE;
  payload: DrawerLockMode;
}

interface SetBotNavVis {
  type: AppActionType.SET_BOT_NAV_VIS;
  payload: boolean;
}

interface SetInternetAccess {
  type: AppActionType.SET_INTERNET_ACCESS;
  payload: boolean;
}

interface SetReDrawer {
  type: AppActionType.SET_RE_DRAWER;
  payload: ReDrawer;
}

export type AppAction =
  | SetFirstDownloadAction
  | SetLoaded
  | SetTheme
  | SetDrawerRef
  | SetDrawerLockMode
  | SetBotNavVis
  | SetInternetAccess
  | SetReDrawer;
