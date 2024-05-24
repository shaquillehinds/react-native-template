import { useEffect } from 'react';
import { useTypedSelector } from '../useTypedSelector';
import { TasksTriggerType } from '@utils/constants/enums';
import { useActions } from '@hooks/useActions';

//Todo replace any with type
interface UseTasksTriggerProps {
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
  clearTrigger?: boolean;
}

export default function useTasksTrigger(props: UseTasksTriggerProps) {
  const effectTrigger = useTypedSelector(state => state.app.effectTrigger);
  const { setEffectTrigger } = useActions();

  useEffect(() => {
    if (effectTrigger?.type === TasksTriggerType.ADD_TASK) {
      props.setTasks(prev => [effectTrigger.payload, ...prev]);
      props.clearTrigger && setEffectTrigger();
    } else if (effectTrigger?.type === TasksTriggerType.REMOVE_TASK) {
      props.setTasks(prev =>
        prev.filter(t => t._id !== effectTrigger.payload._id),
      );
      props.clearTrigger && setEffectTrigger();
    }
  }, [effectTrigger?.type]);
}
