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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { tabs } from '../tabs';
import { DebugLogger } from '@utils/Logger';
import { useIsFocused } from '@react-navigation/native';
import { Body } from '@components/typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const log = DebugLogger('TabButton.animated.tsx');

export interface TabButtonProps extends BottomTabBarButtonProps {
  name: keyof MainBottomTabParamList;
  label: string;
  type: typeof MaterialCommunityIcons;
  activeIcon: string;
  inActiveIcon: string;
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
        <props.type
          name={isFocused ? props.activeIcon : props.inActiveIcon}
          size={props.name === 'Settings' ? relativeY(2.8) : relativeY(3.4)}
          color={isFocused ? theme.primary.dark : theme.typeface.tertiary}
        />
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
