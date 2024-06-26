import Scheduler, { Schedule } from '@utils/Scheduler';
import { useEffect, useState } from 'react';

interface UseTimerProps {
  seconds: number;
  onTimerEnds: () => void;
  start: boolean;
}

export function useTimer(props: UseTimerProps) {
  const [seconds, setSeconds] = useState(props.seconds % 60);
  const [minutes, setMinutes] = useState(Math.floor(props.seconds / 60) % 60);
  const [hours, setHours] = useState(Math.floor(props.seconds / 3600));
  const [schedule, setSchedule] = useState<Schedule>();
  useEffect(() => {
    if (props.start && (seconds || minutes)) {
      const sched = new Scheduler.Schedule(() => {
        setSeconds(prev => prev - 1);
      }, 990);
      sched.start();
      setSchedule(sched);
    }
    return () => {
      // log('warn', 'cleanup');
      schedule?.stop();
    };
  }, [props.start]);
  useEffect(() => {
    if (props.start && seconds < 0) {
      if (minutes <= 0) {
        if (hours <= 0) {
          schedule?.stop();
          props.onTimerEnds();
        } else {
          setSeconds(59);
          setMinutes(59);
          setHours(prev => prev - 1);
        }
      } else {
        setSeconds(59);
        setMinutes(prev => prev - 1);
      }
    }
  }, [seconds]);

  return { seconds, minutes, hours };
}
