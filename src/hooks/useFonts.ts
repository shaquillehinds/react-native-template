import { useState } from 'react';
import { loadAsync } from 'expo-font';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { Store } from '@store';
import { loadApp } from '@store/actionCreators';
import wait from '@utils/wait';

function useFonts(store: Store, isDarkMode: boolean) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded)
    (async () => {
      await preventAutoHideAsync();
      await loadAsync({
        Poppins: require('@assets/fonts/Poppins-Regular.ttf'),
        PoppinsMedium: require('@assets/fonts/Poppins-Medium.ttf'),
        PoppinsSemiBold: require('@assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsBold: require('@assets/fonts/Poppins-Bold.ttf'),
        PoppinsItalic: require('@assets/fonts/Poppins-Italic.ttf'),
        Ionicons: require('@assets/fonts/Ionicons.ttf'),
      });
      // !? loadApp: Loads all cached resources
      store.dispatch(loadApp(isDarkMode) as any);
      let retries = 0;
      while (retries < 20) {
        retries++;
        if (store.getState().app.loaded) break;
        await wait(100);
      }
      setFontsLoaded(true);
    })();
  return { loaded: fontsLoaded };
}

export default useFonts;
