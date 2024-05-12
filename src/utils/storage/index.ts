import AsyncStorage from '@react-native-async-storage/async-storage';
import { DebugLogger } from '@utils/Logger';
import { AppCache } from './storage.types';
import messaging from '@react-native-firebase/messaging';

const log = DebugLogger('storage.ts');

export const storeAppInfo = async (info: AppCache) => {
  try {
    const string = JSON.stringify(info);
    return await AsyncStorage.setItem('@Casuarina-app-info', string);
  } catch (error) {
    log('warn', error);
  }
};
export const retrieveAppInfo = async () => {
  try {
    const string = await AsyncStorage.getItem('@Casuarina-app-info');
    if (string) return JSON.parse(string) as AppCache;
    else return null;
  } catch (error) {
    log('warn', error);
    return null;
  }
};
export const storeFcmToken = async (userId: string, fcmToken?: string) => {
  try {
    if (fcmToken)
      return await AsyncStorage.setItem(
        `@Casuarina-fcm-token-${userId}`,
        fcmToken,
      );
    else {
      const token = await messaging().getToken();
      return await AsyncStorage.setItem(
        `@Casuarina-fcm-token-${userId}`,
        token,
      );
    }
  } catch (error) {
    log('warn', error);
  }
};
export const storeJwt = async (jwt: string) => {
  return await AsyncStorage.setItem('@Casuarina-jwt', jwt);
};
export const removeJwt = async () => {
  return await AsyncStorage.removeItem('@Casuarina-jwt');
};
export const retrieveJwt = async () => {
  return await AsyncStorage.getItem('@Casuarina-jwt');
};
export const removeFcmToken = async (userId: string) => {
  return await AsyncStorage.removeItem(`@Casuarina-fcm-token-${userId}`);
};
export const retrieveFcmToken = async (userId: string) => {
  return await AsyncStorage.getItem(`@Casuarina-fcm-token-${userId}`);
};
export const storeDeviceInfo = async (info: UnpopulatedDevice) => {
  try {
    const string = JSON.stringify(info);
    return await AsyncStorage.setItem('@Casuarina-device-info', string);
  } catch (error) {
    log('warn', error);
  }
};

export const retrieveDeviceInfo = async () => {
  try {
    const string = await AsyncStorage.getItem('@Casuarina-device-info');
    if (string) return JSON.parse(string) as UnpopulatedDevice;
    else return null;
  } catch (error) {
    log('warn', error);
    return null;
  }
};
