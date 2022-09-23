import AsyncStorage from '@react-native-async-storage/async-storage';
import { DebugLogger } from '@utils/Logger';
import { AppCache } from './storage.types';

const log = DebugLogger('storage.ts');

export const storeAppInfo = async (info: AppCache) => {
  try {
    const string = JSON.stringify(info);
    return await AsyncStorage.setItem('@App-Info', string);
  } catch (error) {
    log('warn', error);
  }
};
export const retrieveAppInfo = async () => {
  try {
    const string = await AsyncStorage.getItem('@App-Info');
    if (string) return JSON.parse(string) as AppCache;
  } catch (error) {
    log('warn', error);
    return null;
  }
};
