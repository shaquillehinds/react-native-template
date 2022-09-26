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
import { DebugLogger } from '@utils/Logger';

const log = DebugLogger('Base.modal.tsx');

export default function BaseModal(
  props: React.PropsWithChildren<ConfirmModalProps>,
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
    setTimeout(() => setBotNavVis(true), 200);
  }, []);

  const onBackdropPress = modalCloseHandler;
  const onSwipeComplete = modalCloseHandler;
  const onModalWillShow = () => setBotNavVis(false);
  return (
    <Modal
      coverScreen={false}
      deviceHeight={SCREEN_HEIGHT}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating
      backdropOpacity={1}
      isVisible={props.show}
      swipeDirection={'down'}
      customBackdrop={
        isIOS ? (
          <VibrancyView
            blurAmount={2}
            reducedTransparencyFallbackColor="black"
            blurType={blurType}
            onTouchEnd={onBackdropPress}
            style={styles.backdrop}
          />
        ) : (
          <BlurView
            onTouchEnd={onBackdropPress}
            reducedTransparencyFallbackColor="black"
            style={styles.backdrop}
            blurAmount={1}
            blurRadius={1}
          />
        )
      }
      onModalWillShow={onModalWillShow}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onBackdropPress}
      propagateSwipe={props.propagateSwipe}>
      <View
        style={[
          styles.modal,
          { backgroundColor: theme.background },
          props.contentContainerStyle,
        ]}>
        <View style={[styles.bumper]} />
        {props.children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
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
    // zIndex: 10,
    // position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,.4)',
  },
});

interface ConfirmModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onBackdropPress?: () => void;
  onSwipeComplete?: () => void;
  propagateSwipe?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
