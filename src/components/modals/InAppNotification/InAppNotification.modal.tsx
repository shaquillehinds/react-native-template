import SlideDownNotification from '@components/animations/SlideDownModal.animated';
import { useTypedSelector } from '@hooks/useTypedSelector';
import React from 'react';

export default function InAppNotification() {
  const notification = useTypedSelector(state => state.app.inAppNotification);
  return <SlideDownNotification {...notification} />;
}
