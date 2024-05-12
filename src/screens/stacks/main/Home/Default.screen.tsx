import React, { useState } from 'react';
import ScreenLayout from '@components/layouts/Screen.layout';
import ButtonAnimated from '@components/animations/Button.animated';
import shadowStyles from '@styles/Shadow.style';
import { BaseModal } from '@components/modals';
import { useTypedSelector } from '@hooks/useTypedSelector';

export default function HomeScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  _: MainNavigationProps.Home<'Default'>,
) {
  const [show, setShow] = useState(false);
  const reDrawer = useTypedSelector(state => state.app.reDrawer);
  // const ref = useRef<BottomSheet>(null);
  return (
    <ScreenLayout center centerY>
      <ButtonAnimated
        onPress={reDrawer?.closeDrawer}
        buttonType="primary"
        buttonSize="small">
        Button
      </ButtonAnimated>
      <ButtonAnimated
        onPress={reDrawer?.openDrawer}
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
    // </ReDrawerLayout>
  );
}
