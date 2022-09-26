import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { hideAsync } from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppProvider from 'App.Provider';
import MainBottomTabNavigator from '@navigators/bottomtab/main/Main.tab.navigator';
import { store } from '@store/index';
import useFonts from '@hooks/useFonts';
import { theme } from '@utils/themes';
import NoInternetScreen from '@screens/global/NoInternet.screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const { loaded } = useFonts(store, isDarkMode);

  const styles = {
    gestureHandler: { flex: 1 },
    safeArea: {
      backgroundColor: theme.background,
    },
  };

  if (!loaded) return <></>;

  setTimeout(() => hideAsync(), 300);

  if (!store.getState().app.internetAccess)
    return <NoInternetScreen darkMode={isDarkMode} />;

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={styles.safeArea.backgroundColor}
      />
      <AppProvider store={store}>
        <MainBottomTabNavigator />
      </AppProvider>
    </GestureHandlerRootView>
  );
};

export default App;
