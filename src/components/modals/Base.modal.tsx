import { useActions } from '@hooks/useActions';
import {
  isIOS,
  normalize,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { BlurView, VibrancyView } from '@react-native-community/blur';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

export default function BaseModal(
  props: React.PropsWithChildren<BaseModalProps>,
) {
  const { setBotNavVis } = useActions();

  const [blurType, setBlurType] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (props.show) {
      setBlurType('dark');
    } else {
      setBlurType('light');
    }
  }, [props.show]);

  const modalCloseHandler = useCallback(() => {
    props.setShow(false);
    props.onBackdropPress && props.onBackdropPress();
    if (props.disableCoverScreen) setTimeout(() => setBotNavVis(true), 200);
  }, []);

  const onBackdropPress = modalCloseHandler;
  const onSwipeComplete = modalCloseHandler;
  const onModalWillShow = () =>
    props.disableCoverScreen ? setBotNavVis(false) : undefined;
  return (
    <Modal
      coverScreen={!props.disableCoverScreen}
      deviceHeight={SCREEN_HEIGHT}
      style={styles.modal}
      hideModalContentWhileAnimating
      backdropOpacity={1}
      isVisible={props.show}
      swipeDirection={props.disableSwipe ? undefined : 'down'}
      customBackdrop={
        isIOS ? (
          <>
            <VibrancyView
              blurAmount={2}
              reducedTransparencyFallbackColor="black"
              blurType={blurType}
              onTouchEnd={onBackdropPress}
              style={styles.backdrop}
            />
            <View style={styles.absolute}>{props.backdropComponent}</View>
          </>
        ) : (
          <>
            <BlurView
              onTouchEnd={onBackdropPress}
              reducedTransparencyFallbackColor="black"
              style={styles.backdrop}
              blurAmount={1}
              blurRadius={1}
            />
            <View style={styles.absolute}>{props.backdropComponent}</View>
          </>
        )
      }
      onModalWillShow={onModalWillShow}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onBackdropPress}
      propagateSwipe={props.propagateSwipe}>
      {props.children ? (
        <View
          style={[
            styles.modalSheet,
            { backgroundColor: theme.background },
            props.contentContainerStyle,
          ]}>
          <View style={[styles.bumper]} />
          {props.children}
        </View>
      ) : (
        <></>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: { margin: 0 },
  modalSheet: {
    position: 'absolute',
    bottom: 0,
    margin: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    width: SCREEN_WIDTH,
    overflow: 'hidden',
    zIndex: 10000,
  },
  row: {
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
  },
  bumper: {
    backgroundColor: 'rgba(156,170,180,0.3)',
    width: normalize(50),
    borderRadius: 5,
    height: normalize(8),
    alignSelf: 'center',
    marginTop: normalize(10),
    marginBottom: normalize(20),
  },
  backdrop: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export interface BaseModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onBackdropPress?: () => void;
  onSwipeComplete?: () => void;
  propagateSwipe?: boolean;
  backdropComponent?: JSX.Element;
  contentContainerStyle?: StyleProp<ViewStyle>;
  disableCoverScreen?: boolean;
  disableSwipe?: boolean;
}
