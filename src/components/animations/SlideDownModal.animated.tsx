import Danger from '@components/svgs/filled/Danger';
import { Body, Title } from '@components/typography';
import ImageWithLoader from '@components/wrapped/ImageWithLoader';
import {
  isIOS,
  normalize,
  radiusSizes,
  relativeX,
  relativeY,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

const slideDistance = -relativeY(isIOS ? 15 : 20);

interface SlideDownNotificationProps extends InAppNotification {
  style?: StyleProp<ViewStyle>;
}

const SlideDownModal = ({
  style,
  duration,
  title,
  image,
  onPress,
  onNotificationLeave,
  id,
  message,
  type,
  color,
  messageColor,
  Icon,
  titleColor,
}: SlideDownNotificationProps) => {
  const translateY = useRef(new Animated.Value(slideDistance)).current;

  const slideInAnimation = Animated.spring(translateY, {
    useNativeDriver: true,
    toValue: relativeX(5.05),
    stiffness: 250, //higher stiffness = faster moving
    damping: 23,
    mass: 2,
  });
  const slideOutAnimation = (delay: number) =>
    Animated.timing(translateY, {
      useNativeDriver: true,
      duration: 200,
      delay,
      toValue: slideDistance,
    });
  useEffect(() => {
    id &&
      slideInAnimation.start(() => {
        slideOutAnimation(duration || 3000).start(({ finished }) => {
          if (finished) {
            onNotificationLeave && onNotificationLeave();
          }
        });
      });
  }, [id]);

  const animatedViewStyle = {
    backgroundColor:
      color || type === 'error'
        ? theme.warning
        : type === 'action'
        ? theme.secondary.dark
        : theme.primary.dark,
    shadowColor: '#000',
  };

  return (
    <Animated.View
      style={[
        styles.animatedView,
        animatedViewStyle,
        { transform: [{ translateY }] },
        style,
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          onPress && onPress();
          slideOutAnimation(1).start();
        }}
        style={styles.container}>
        {image ? (
          <ImageWithLoader style={styles.image} source={image} />
        ) : Icon ? (
          <View>{Icon}</View>
        ) : type === 'error' ? (
          <View
            style={{ marginRight: relativeX(2), marginLeft: -relativeX(2) }}>
            <Danger size={30} color={titleColor || 'white'} />
          </View>
        ) : undefined}
        <View>
          <Title
            margin={[0, 0, 0.3, 0]}
            customColor={titleColor || 'white'}
            fontStyle="PoppinsSemiBold"
            style={image ? { width: relativeX(70) } : undefined}>
            {title}
          </Title>
          {message ? (
            <Body
              customColor={messageColor || 'white'}
              fontSize="bodyL"
              fontStyle="PoppinsMedium"
              style={
                image || type === 'error' ? { width: relativeX(70) } : undefined
              }>
              {message}
            </Body>
          ) : undefined}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    top: relativeY(2.9),
    left: relativeX(5),
    borderRadius: radiusSizes.soft,
    width: relativeX(90),
    zIndex: 100,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { height: 6, width: 0 },
  },
  container: {
    borderRadius: radiusSizes.sharp,
    minHeight: relativeY(6.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: relativeX(6),
    paddingVertical: relativeY(1),
  },

  image: {
    width: relativeX(15),
    height: relativeX(15),
    borderRadius: radiusSizes.sharp,
    marginRight: normalize(10),
    marginLeft: -relativeX(2),
  },
});

export default SlideDownModal;
