import React, { useState } from 'react';
import ScreenLayout from '@components/layouts/Screen.layout';
import ButtonAnimated from '@components/animations/Button.animated';
import shadowStyles from '@styles/Shadow.style';
import MapModal from '@components/modals/Map';

export default function SettingsScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  _: MainNavigationProps.Settings<'Default'>,
) {
  const [show, setShow] = useState(false);
  return (
    <ScreenLayout center centerY>
      <ButtonAnimated
        onPress={() => {
          setShow(true);
        }}
        style={shadowStyles({ shadowRadius: 8 })}
        buttonSize="large"
        buttonType="primary">
        Animated
      </ButtonAnimated>
      <MapModal show={show} setShow={setShow} onCoordSave={() => {}} />
    </ScreenLayout>
  );
}
