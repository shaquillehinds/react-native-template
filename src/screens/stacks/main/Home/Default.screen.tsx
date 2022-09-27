import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import ButtonAnimated from '@components/animations/Button.animated';
import shadowStyles from '@styles/Shadow.style';
import { BaseModal } from '@components/modals';
import { useActions } from '@hooks/useActions';
import {
  radiusSizes,
  relativeX,
  relativeY,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import BottomSheet, { SCREEN_HEIGHT } from '@gorhom/bottom-sheet';
import { useTypedSelector } from '@hooks/useTypedSelector';

export default function HomeScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Home<'Default'>,
) {
  const [show, setShow] = useState(false);
  const drawer = useTypedSelector(state => state.app.drawerRef);

  const openDrawer = () => {
    if (drawer?.current) drawer.current.openDrawer();
    else console.warn(drawer);
  };

  // const ref = useRef<BottomSheet>(null);
  return (
    <ScreenLayout center centerY>
      <ButtonAnimated buttonType="primary" buttonSize="small">
        Button
      </ButtonAnimated>
      <ButtonAnimated
        onPress={openDrawer}
        buttonType="primary"
        buttonSize="medium">
        Button
      </ButtonAnimated>
      <ButtonAnimated
        onPress={() => {
          setShow(true);
        }}
        style={shadowStyles({ shadowRadius: 8 })}
        buttonSize="large"
        buttonType="primary">
        Animated
      </ButtonAnimated>
      <BaseModal show={show} setShow={setShow}>
        <ButtonAnimated buttonSize="wide" buttonType="primary">
          Close
        </ButtonAnimated>
      </BaseModal>
      {/* <View style={styles.transparent} /> */}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  transparent: {
    position: 'absolute',
    width: relativeX(60),
    height: relativeX(60),
    borderRadius: radiusSizes.curvy,
    overflow: 'hidden',
    // backgroundColor: 'rgba(122,122,122,.9)',
    zIndex: 10,
    // ...shadowStyles(),
  },
});
