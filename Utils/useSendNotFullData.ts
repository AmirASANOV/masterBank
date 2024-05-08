import { useEffect } from 'react';

import useAppDispatch from '../CustomHooks/useAppDispatch';
import { useAppSelector } from '../CustomHooks/useAppSelector';
import { useHelpTimer } from '../CustomHooks/useTimer';
import { SendNotFullParamsInfo } from '../features/FormFeatures';

export const useSendNotFullData = (type: string, title: string) => {
  const provider_data = useAppSelector(state => state.config.provider_data);
  const dispatch = useAppDispatch();
  const timer = useHelpTimer(3600);
  const sendOnUnload = (e: BeforeUnloadEvent) => {
    e.returnValue = 'Вы уверены, что хотите закрыть страницу?';
    if (type === 'MTS_ID' && provider_data) {
      dispatch(SendNotFullParamsInfo(title));
    }
  };
  const sendAfterTimer = () => {
    if (type === 'MTS_ID') {
      dispatch(SendNotFullParamsInfo(title));
    }
  };
  useEffect(() => {
    if (timer === 0) sendAfterTimer();
  }, [timer]);

  useEffect(() => {
    window.addEventListener('beforeunload', sendOnUnload);
    return () => {
      window.removeEventListener('beforeunload', sendOnUnload);
    };
  }, [sendOnUnload]);
};
