import { DebugLogger } from '@utils/Logger';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { VerificationModalProps } from '@components/modals/Verification.modal';

const log = DebugLogger('usePhoneVerification.ts');

interface TakenError {
  verify?: string;
}

interface UsePhoneVerificationProps {
  actions: typeof import('src/store/actionCreators/index');
  handleVerifyPress: () => Promise<void>;
}

export default function usePhoneVerification(props: UsePhoneVerificationProps) {
  const [code, setCode] = useState('');
  const [verify, setVerify] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [retries, setRetries] = useState(0);
  const [resendTimer, setResendTimer] = useState(false);
  const [show, setShow] = useState(false);
  const [takenError, setTakenError] = useState<TakenError>({});
  const [verifyPhone, setVerifyPhone] = useState('');
  const [unsubscribe, setUnsubscribe] = useState<() => void>();

  useEffect(() => {
    if (unsubscribe) unsubscribe();
    const unsub = auth().onAuthStateChanged(user => {
      if (!verifyPhone) return;
      if (user) {
        props.handleVerifyPress();
        setShow(false);
      }
    });
    setUnsubscribe(unsub);
    return () => {
      unsub();
    };
  }, [props.handleVerifyPress]);

  const sendCode = async (phone: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+' + phone);
      setVerify(confirmation);
      setRetries(prev => prev + 1);
      return true;
    } catch (error: any) {
      log('warn', error);
      setResendTimer(false);
      props.actions.inAppNotification({
        title: 'Phone Auth Error',
        message: error.message,
        type: 'error',
        duration: 3500,
      });
      return false;
    }
  };

  const sendVerificationCode = async (phone: string) => {
    if (resendTimer) return log('warn', 'timer is on, cannot resend');
    if (await sendCode(phone)) {
      setResendTimer(true);
      setVerifyPhone(phone);
      setShow(true);
    }
  };

  const onVerifyPress = async () => {
    if (!code) return;
    try {
      await verify?.confirm(code);
      setShow(false);
      setTakenError({});
      await props.handleVerifyPress();
    } catch (error) {
      if (error instanceof Error) {
        setTakenError({ verify: error.message });
      } else {
        setTakenError({ verify: 'Unknown error occured.' });
      }
    }
  };

  const onResendPress = async () => {
    if (resendTimer) return;
    sendVerificationCode(verifyPhone);
  };

  const onTimerEnd = async () => {
    setResendTimer(false);
  };

  const modalProps: VerificationModalProps = {
    code,
    setCode,
    show,
    setShow,
    setVerifyPhone,
    verifyPhone,
    onResendPress,
    onTimerEnd,
    onVerifyPress,
    resendTimer,
    retries,
    takenError,
  };

  return {
    modalProps,
    sendVerificationCode,
  };
}
