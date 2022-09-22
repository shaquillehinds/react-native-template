import React from 'react';
import {
  borderSizes,
  relativeY,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { tabs } from '../tabs';
import { DebugLogger } from '@utils/Logger';

const log = DebugLogger('TabSlider.tsx');

export default function TabSlider({
  index,
}: PropsWithChildren<{ index: number }>) {
  const translateX = useRef(new Animated.Value(0)).current;
  const scaleX = useRef(new Animated.Value(0)).current;
  const width = SCREEN_WIDTH / tabs.length;
  const slide = Animated.spring(translateX, {
    useNativeDriver: true,
    toValue: width * index,
    stiffness: 150,
    damping: 20,
  });
  const expand = Animated.timing(scaleX, {
    useNativeDriver: true,
    toValue: 1.5,
    duration: 250,
    easing: Easing.bounce,
  });
  const contract = Animated.spring(scaleX, {
    useNativeDriver: true,
    toValue: 1,
    stiffness: 150,
    damping: 20,
  });
  useEffect(() => {
    if (index !== undefined) slide.start();
    // expand.reset();
    expand.start(result => contract.start());
  }, [index]);
  const transform = [
    { translateX },
    {
      scaleX,
    },
    {
      scaleY: scaleX.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.5, 1],
      }),
    },
  ];
  return (
    <Animated.View style={[{ transform }, styles.containerStyle, { width }]}>
      <View
        style={[styles.sliderStyle, { backgroundColor: theme.primary.dark }]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    top: -1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderStyle: {
    height: relativeY(0.3),
    borderRadius: borderSizes.medium,
    width: SCREEN_WIDTH / tabs.length / 2,
  },
});
