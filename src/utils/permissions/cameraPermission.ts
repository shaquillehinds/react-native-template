import { requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { Alert, Platform } from 'react-native';

const cameraPermission = async () => {
  if (Platform.OS === 'ios') {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
};

export default cameraPermission;
