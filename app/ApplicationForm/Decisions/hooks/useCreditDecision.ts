import { useEffect, useState } from 'react';

import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import useTimeout from '@/CustomHooks/useTimeout';
import { useTimerForDate } from '@/CustomHooks/useTimerForDate';
import { currentDomain } from '@/GlobalConfig';
import { initialStateDecisions } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsBlanks';
import {
  getDecisionStatus,
  sendDepositRequest,
  sendMFORequest,
  updateReducer,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsReducer';
import {
  DecisionFinished,
  DecisionsResponseStatus,
  LocalDecisions,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import {
  addNotification,
  setZaimerConfig,
} from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

export interface UseCreditDecisionTask {
  timer: { seconds: string; minute: string };
  redirect: (url: string) => void;
  finished: DecisionFinished;
  status: DecisionsResponseStatus;
  data: LocalDecisions;
  sendMFO: () => void;
  sendDeposit: () => void;
}

export const useCreditDecisionTask = (stop?: boolean) => {
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();
  const data = useAppSelector(store => store.anketaResponse);
  const zaimerIsShow = useAppSelector(state => state.config.zaimer.isShow);
  const isAuth = useAppSelector(state => state.session.isAuth);
  const t = useTimeout();
  const asyncFuncName = 'getDecisionStatus';
  const [errors, setErrors] = useState<Array<string>>([]);

  const { timer, runTimer, stopTimer, isActive, setDate } = useTimerForDate();

  const clearState = () => {
    t.deleteInterval(asyncFuncName);
    dispatch(updateReducer(initialStateDecisions));
    stopTimer();
  };

  const func = () => {
    if (stop) return;
    if (!isAuth) return;
    dispatch(getDecisionStatus(t.clearAll));
  };

  useEffect(() => {
    clearState();

    t.setInterval(asyncFuncName, func, 15, true);
    return () => clearState();
  }, []);

  useEffect(() => {
    if (data.mfo_timestamp && data.decision_type === 'MFO') {
      if (!isActive) {
        setDate(data.mfo_timestamp);
        runTimer(true);
      }
    }
  }, [data.mfo_timestamp, data.decision_type, data]);

  useEffect(() => {
    if (data.finished) {
      t.clearAll();
      stopTimer();
    }
  }, [data.finished, data]);

  useEffect(() => {
    if (errors.filter(item => item === 'error').length >= 5) {
      t.clearAll();
      stopTimer();
      dispatch(
        addNotification(
          [
            'Нам не удалось загрузить результаты последней заявки на кредит, пожалуйста, попробуйте посетить этот раздел позже.',
          ],
          20,
          '',
        ),
      );
      setErrors([]);
    }
  }, [errors]);

  useEffect(() => {
    setErrors(prev => {
      const newState = prev.slice();
      newState.push(data.response_status || '');
      return newState;
    });
  }, [data.response_status]);

  useEffect(() => {
    if (!history.location.pathname.includes('user')) return;

    if (data.mfo_response) {
      const zaimer = data.mfo_response.filter(
        el => el.name === 'Zaimer' && el.status === 'APPROVED',
      );
      if (
        zaimer.length > 0 &&
        !!zaimer[0].login_link &&
        !zaimerIsShow &&
        data.finished &&
        currentDomain !== 'sop'
      ) {
        const path = zaimer[0].login_link;
        setTimeout(() => {
          dispatch(setZaimerConfig({ link: path, isShow: true }));
          history.push(`/zaimerapprove`);
        }, 1000);
      }
    }
  }, [data.mfo_response, data.finished, history.location.pathname]);

  const methodsAndProperty: UseCreditDecisionTask = {
    timer,
    redirect: (url: string) => history.push(url),
    finished: data.finished,
    status: data.response_status,
    data,
    sendMFO() {
      dispatch(sendMFORequest());
    },
    sendDeposit() {
      dispatch(sendDepositRequest());
    },
  };

  return methodsAndProperty;
};
