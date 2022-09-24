import { useActions } from '@hooks/useActions';
import {
  normalize,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

export default function BaseModal(
  props: React.PropsWithChildren<ConfirmModalProps>,
) {
  const { setBotNavVis } = useActions();

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
      style={{ margin: 0, zIndex: 10000 }}
      hideModalContentWhileAnimating
      backdropOpacity={0.15}
      isVisible={props.show}
      swipeDirection={'down'}
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
});

interface ConfirmModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onBackdropPress?: () => void;
  onSwipeComplete?: () => void;
  propagateSwipe?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
