import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import AppProvider from 'App.Provider';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#111' : '#FFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppProvider />
    </SafeAreaView>
  );
};

export default App;
