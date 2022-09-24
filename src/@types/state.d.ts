type DrawerLayout = import('react-native-gesture-handler').DrawerLayout;
type DrawerLockMode = 'locked-closed' | 'locked-open' | 'unlocked';

interface AppState {
  firstDownload: boolean;
  loaded: boolean;
  theme?: AppTheme;
  drawerRef?: React.RefObject<DrawerLayout>;
  drawerLockMode: DrawerLockMode;
  isBotNavVisible: boolean;
}
