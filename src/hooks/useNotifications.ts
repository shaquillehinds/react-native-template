import { useEffect } from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { useActions } from './useActions';
import { navigationRef } from '@navigators/navigation.ref';

export default function useNotifications() {
  const { inAppNotification } = useActions();

  const handleBackgroundNotification = async ({
    data,
  }: FirebaseMessagingTypes.RemoteMessage) => {
    switch (data?.type as NotificationType) {
      case 'buyer':
        return navigationRef.current?.navigate('CartTabs', {
          screen: 'Orders',
        });
      case 'seller':
        return navigationRef.current?.navigate('Sales', {
          screen: 'Default',
        });
      default:
    }
  };

  const handleInAppNotification = async ({
    notification,
    data,
  }: FirebaseMessagingTypes.RemoteMessage) => {
    if (!notification) return;
    const { title: t, body: message } = notification;
    if (!t && !message) return;
    const title = t || '';
    let onPress = () => {};
    if (data) {
      switch (data.type as NotificationType) {
        case 'buyer':
          onPress = () =>
            navigationRef.current?.navigate('CartTabs', {
              screen: 'Orders',
            });
          break;
        case 'seller':
          onPress = () =>
            navigationRef.current?.navigate('Sales', { screen: 'Default' });
          break;
        default:
      }
    }
    inAppNotification({ type: 'action', title, message, onPress });
  };

  useEffect(() => {
    // Application Opened from a background state
    messaging().onNotificationOpenedApp(remoteMessage => {
      handleBackgroundNotification(remoteMessage);
    });

    // Application Opened from a closed state
    messaging()
      .getInitialNotification()
      .then(msg => {
        if (msg) {
          handleBackgroundNotification(msg);
        }
      });

    const unsubscribe = messaging().onMessage(handleInAppNotification);
    return unsubscribe;
  }, []);
}

type NotificationType = 'seller' | 'buyer';
