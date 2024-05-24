import { useEffect } from 'react';
import { useTypedSelector } from '../useTypedSelector';
import { TasksTriggerType } from '@utils/constants/enums';
import { useActions } from '@hooks/useActions';

//Todo replace any with type
interface UseTasksTriggerProps {
  setArchives: React.Dispatch<React.SetStateAction<any[]>>;
  clearTrigger?: boolean;
}

export default function useArchiveTrigger(props: UseTasksTriggerProps) {
  const effectTrigger = useTypedSelector(state => state.app.effectTrigger);
  const { setEffectTrigger } = useActions();

  useEffect(() => {
    if (effectTrigger?.type === TasksTriggerType.ADD_ARCHIVE) {
      props.setArchives(prev => [effectTrigger.payload, ...prev]);
      props.clearTrigger && setEffectTrigger();
    } else if (effectTrigger?.type === TasksTriggerType.REMOVE_ARCHIVE) {
      props.setArchives(prev =>
        prev.filter(t => t._id !== effectTrigger.payload._id),
      );
      props.clearTrigger && setEffectTrigger();
    }
  }, [effectTrigger?.type]);
}
