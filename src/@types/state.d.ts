type DrawerLayout = import('react-native-gesture-handler').DrawerLayout;
type DrawerLockMode = 'locked-closed' | 'locked-open' | 'unlocked';
type ImageSource = import('react-native').ImageSourcePropType;

type InAppNotificationType = 'action' | 'success' | 'error';

interface InAppNotification {
  id?: number;
  title: string;
  type: InAppNotificationType;
  color?: string;
  titleColor?: string;
  messageColor?: string;
  message?: string;
  Icon?: JSX.Element;
  duration?: number;
  onPress?: () => void;
  onNotificationLeave?: () => void;
  image?: ImageSource;
}

interface AppState {
  status: import('react-native').AppStateStatus;
  firstDownload: boolean;
  internetAccess: boolean;
  loaded: boolean;
  theme?: AppTheme;
  drawerRef: React.RefObject<DrawerLayout>;
  drawerLockMode: DrawerLockMode;
  reDrawer?: import('@components/layouts/ReDrawer/ReDrawer.layout').ReDrawer;
  isBotNavVisible: boolean;
  inAppNotification: InAppNotification;
}
