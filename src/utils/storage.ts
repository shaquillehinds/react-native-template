import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTemplate = async (template: string) => {
  return await AsyncStorage.setItem('@App-template', template);
};
export const retrieveTemplate = async () => {
  return await AsyncStorage.getItem('@App-template');
};
