import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import AppProvider from 'App.Provider';
import { loadAsync } from 'expo-font';
import MainBottomTabNavigator from '@navigators/bottomtab/main/Main.BottomTab.Navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loadingComplete, setLoadingComplete] = useState(false);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#111' : '#FFF',
  };
  loadAsync({
    Poppins: require('@assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('@assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('@assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('@assets/fonts/Poppins-Bold.ttf'),
    PoppinsItalic: require('@assets/fonts/Poppins-Italic.ttf'),
    'Material Design Icons': require('@assets/fonts/MaterialCommunityIcons.ttf'),
  }).then(() => setLoadingComplete(true));
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {loadingComplete ? (
          <AppProvider>
            <MainBottomTabNavigator />
          </AppProvider>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
