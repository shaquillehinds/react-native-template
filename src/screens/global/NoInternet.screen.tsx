import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import { BlurView } from 'expo-blur';
import { Heading } from '@components/typography';
import {
  isIOS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { internet } from '@components/svgs/illustration/Internet';
import { SvgFromXml } from 'react-native-svg';

export default function NoInternetScreen({ darkMode }: { darkMode: boolean }) {
  return (
    <ScreenLayout>
      <ImageBackground
        source={isIOS ? require('@assets/gifs/nointernetbackdrop.gif') : ''}
        style={[
          styles.fullScreen,
          { backgroundColor: darkMode ? '#222' : '#FFF' },
        ]}
        resizeMode="cover">
        <BlurView
          style={[styles.fullScreen, styles.textContainer]}
          intensity={50}
          tint={'dark'}>
          <Heading customColor={isIOS || darkMode ? 'white' : 'black'}>
            No Internet Access
          </Heading>
          <SvgFromXml
            xml={internet}
            width="90%"
            height="40%"
            opacity={isIOS ? 0.5 : 1}
          />
        </BlurView>
      </ImageBackground>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  fullScreen: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
  textContainer: { justifyContent: 'center', alignItems: 'center' },
});
