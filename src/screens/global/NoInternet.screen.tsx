import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import { BlurView } from '@react-native-community/blur';
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
        source={require('@assets/gifs/nointernetbackdrop.gif')}
        style={[
          styles.fullScreen,
          { backgroundColor: darkMode ? '#222' : '#FFF' },
        ]}
        resizeMode="cover">
        <BlurView style={styles.textContainer} blurAmount={10} blurType="dark">
          {isIOS ? (
            <>
              <Heading style={{ alignSelf: 'center' }} customColor={'white'}>
                No Internet Access
              </Heading>
              <SvgFromXml
                xml={internet}
                width="90%"
                height="40%"
                opacity={0.5}
              />
            </>
          ) : undefined}
        </BlurView>
        {isIOS ? undefined : (
          <View style={styles.textContainer}>
            <Heading style={{ alignSelf: 'center' }} customColor={'white'}>
              No Internet Access
            </Heading>
            <SvgFromXml xml={internet} width="90%" height="40%" opacity={0.5} />
          </View>
        )}
      </ImageBackground>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
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
