import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ScreenLayout from '@components/layouts/Screen.layout';
import ButtonAnimated from '@components/animations/Button.animated';
import shadowStyles from '@styles/Shadow.style';
import { BaseModal } from '@components/modals';
import { useActions } from '@hooks/useActions';

export default function HomeScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  props: MainNavigationProps.Home<'Default'>,
) {
  const [show, setShow] = useState(false);
  return (
    <ScreenLayout center centerY>
      <ButtonAnimated buttonType="primary" buttonSize="small">
        Button
      </ButtonAnimated>
      <ButtonAnimated buttonType="primary" buttonSize="medium">
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
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({});
