import { useIsFocused } from '@react-navigation/native';
import { dataRefreshTimestamps } from '@utils/hashes';
import { useEffect, useState } from 'react';
import { useTypedSelector } from './useTypedSelector';

interface UseDataRefreshProps {
  /**
   * @param minimumWait milliseconds to wait to refresh
   */
  minimumWait?: number;
  /**
   * @param refreshCallback callback used to trigger data refresh
   */
  refreshCallback: () => void;
  /**
   * @param refreshName unique name to reference the stored wait time
   */
  refreshName: string;
}

export default function useDataRefresh(props: UseDataRefreshProps) {
  const isFocused = useIsFocused();

  const status = useTypedSelector(state => state.app.status);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (status === 'active' && isFocused) {
      const refresh = () => {
        if (!props.minimumWait) return props.refreshCallback();
        if (!dataRefreshTimestamps[props.refreshName])
          return props.refreshCallback();
        const elapsedTime =
          Date.now() - dataRefreshTimestamps[props.refreshName];
        // log('warn', 'elapsedTime: ', elapsedTime / 60000);
        if (elapsedTime >= props.minimumWait) {
          dataRefreshTimestamps[props.refreshName] = Date.now();
          props.refreshCallback();
        }
      };
      if (enabled) refresh();
      else {
        setEnabled(true);
        if (props.minimumWait)
          dataRefreshTimestamps[props.refreshName] = Date.now();
      }
    }
  }, [isFocused, status]);

  return { setEnabled };
}
