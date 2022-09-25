import React, { PropsWithChildren, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  relativeX,
  relativeY,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Tab, tabs } from '../Main.tabs';
import { DebugLogger } from '@utils/Logger';
import { useIsFocused } from '@react-navigation/native';
import { Body } from '@components/typography';
import User from '@components/svgs/filled/User';
import Profile from '@components/svgs/outline/Profile';
import FilledProfile from '@components/svgs/filled/Profile';

const log = DebugLogger('TabButton.animated.tsx');

export interface TabButtonProps extends BottomTabBarButtonProps, Tab {
  name: keyof MainBottomTabParamList;
  label: string;
}

export default function TabButton(props: PropsWithChildren<TabButtonProps>) {
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const adjustY = useRef(new Animated.Value(0)).current;

  const slideIn = Animated.spring(translateY, {
    useNativeDriver: true,
    toValue: -relativeY(2),
    stiffness: 150,
    damping: 20,
  });
  const slideOut = Animated.timing(translateY, {
    useNativeDriver: true,
    toValue: relativeY(10),
    duration: 200,
    easing: Easing.ease,
  });
  const scaleUp = Animated.spring(scale, {
    useNativeDriver: true,
    toValue: 1.15,
    speed: 10,
    bounciness: 20,
  });
  const scaleDown = Animated.spring(scale, {
    useNativeDriver: true,
    toValue: 1,
  });
  const isFocused = useIsFocused();
  const transform = [{ translateY }];

  useEffect(() => {
    if (isFocused) {
      slideIn.start();
      scaleUp.start();
    } else {
      slideOut.start();
      scaleDown.start();
    }
  }, [isFocused]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [
              { scale },
              {
                translateY: scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -relativeY(1.8)],
                }),
              },
            ],
          },
        ]}>
        {isFocused ? (
          <props.iconFilled color={theme.primary.dark} size={30} />
        ) : (
          <props.icon color={theme.typeface.tertiary} size={30} />
        )}
      </Animated.View>
      <Animated.View style={[{ transform }]}>
        <Body
          fontSize="bodyS"
          fontStyle="PoppinsSemiBold"
          style={{
            color: isFocused ? theme.primary.dark : theme.typeface.tertiary,
          }}>
          {props.label}
        </Body>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / tabs.length,
    display: 'flex',
    alignItems: 'center',
    paddingTop: relativeY(3.25),
    height: relativeY(7),
  },
});
