import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import AppProvider from 'App.Provider';
import { DebugLogger } from '@utils/Logger';
import { normalize } from '@utils/Layout';
import { loadAsync } from 'expo-font';
import { Body, Heading, Title } from '@components/typography';

const log = DebugLogger('App.tsx');

enum Test {
  NUM = 25,
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#111' : '#FFF',
  };
  // log('warn', PixelRatio.getPixelSizeForLayoutSize(24));
  log('warn', normalize(22));
  log('warn', typeof Test.NUM);
  loadAsync({
    Poppins: require('@assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('@assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('@assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('@assets/fonts/Poppins-Bold.ttf'),
    PoppinsItalic: require('@assets/fonts/Poppins-Italic.ttf'),
  });
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppProvider>
        <Body fontSize="bodyS">Hello</Body>
        <Title>Hello</Title>
        <Heading fontSize="headingL">Hello</Heading>
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;
