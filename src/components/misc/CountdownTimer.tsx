import BaseText from '@components/typography';
import { BaseTextProps } from '@components/typography/Text.types';
import Scheduler, { Schedule } from '@utils/Scheduler';
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps extends BaseTextProps {
  seconds: number;
  onTimerEnds: () => void;
  start: boolean;
}

export default function CountdownTimer(props: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(props.seconds % 60);
  const [minutes, setMinutes] = useState(Math.floor(props.seconds / 60));
  const [schedule, setSchedule] = useState<Schedule>();
  useEffect(() => {
    if (props.start && (seconds || minutes)) {
      const sched = new Scheduler.Schedule(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
      sched.start();
      setSchedule(sched);
    }
  }, [props.start]);
  useEffect(() => {
    if (props.start && seconds < 0) {
      if (minutes <= 0) {
        schedule?.stop();
        props.onTimerEnds();
      } else {
        setSeconds(59);
        setMinutes(prev => prev - 1);
      }
    }
  }, [seconds]);
  return (
    <BaseText {...props}>
      {minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </BaseText>
  );
}
