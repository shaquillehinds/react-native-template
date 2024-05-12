import React from 'react';
import { BaseModal } from '@components/modals';
import { Body, Heading, Title } from '@components/typography';
import BaseInput from '@components/inputs';
import { PrimaryButton } from '@components/buttons';
import CountdownTimer from '@components/misc/CountdownTimer';
import RowLayout from '@components/layouts/Row.layout';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@utils/themes';
import { relativeX, relativeY } from '@utils/constants/Layout.const';

interface TakenError {
  verify?: string;
}
export interface VerificationModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  verifyPhone: string;
  setVerifyPhone: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  onVerifyPress: () => Promise<void>;
  takenError: TakenError;
  resendTimer: boolean;
  onTimerEnd: () => Promise<void>;
  onResendPress: () => Promise<void>;
  retries: number;
}

export default function VerificationModal(props: VerificationModalProps) {
  return (
    <BaseModal show={props.show} setShow={props.setShow}>
      <Heading>Phone Number Verification</Heading>
      <Body margin={[1, 0, 2, 0]} fontSize="bodyL">
        Enter the code sent to{' '}
        <Title fontSize="titleS">{props.verifyPhone}</Title>
      </Body>
      <BaseInput
        value={props.code}
        onChangeText={t => props.setCode(t)}
        footerText={props.takenError.verify}
      />
      <PrimaryButton
        onPress={props.onVerifyPress}
        style={{ marginVertical: relativeY(3) }}
        buttonSize="wide">
        Verify
      </PrimaryButton>
      {props.resendTimer ? (
        <CountdownTimer
          fontSize="bodyL"
          seconds={30 * (props.retries !== 0 ? props.retries : 1)}
          onTimerEnds={props.onTimerEnd}
          start={props.resendTimer}
        />
      ) : undefined}
      <RowLayout center>
        <Body fontSize="bodyL">Didn't receive code?</Body>
        <TouchableOpacity
          disabled={props.resendTimer}
          onPress={props.onResendPress}>
          <Title
            customColor={
              props.resendTimer ? theme.typeface.tertiary : theme.primary.dark
            }>
            {' '}
            Resend
          </Title>
        </TouchableOpacity>
      </RowLayout>
      <Image
        source={require('@assets/logos/color-transparent.png')}
        style={styles.modalLogo}
        resizeMode="contain"
      />
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  modalLogo: {
    width: relativeX(50),
    height: relativeY(25),
    marginTop: relativeY(2),
    opacity: 0.5,
  },
});
