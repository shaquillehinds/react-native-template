import React from 'react';
import { ImageBackground, StyleSheet, ViewStyle } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@utils/constants/Layout.const';

export default function SplashScreen({ darkMode }: { darkMode: boolean }) {
  const background: ViewStyle = { backgroundColor: darkMode ? '#222' : '#FFF' };
  return (
    <ScreenLayout>
      <ImageBackground
        source={
          darkMode
            ? require('@assets/splashscreens/dark.png')
            : require('@assets/splashscreens/light.png')
        }
        style={[styles.fullScreen, background]}
        resizeMode="cover"
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  center: { alignSelf: 'center' },
  fullScreen: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
  },
});
