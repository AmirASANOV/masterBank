import React, { useEffect, useState } from 'react';

import { setTextTimer } from '@/Common/AppFormHelpers/Helpers';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { clearStorageTimeStart } from '@/ReduxStore/reducer/userReducer/userReducer';

interface CodeSmsTimerProps {
  onClick: () => void;
}

const CodeSmsTimer: React.FC<CodeSmsTimerProps> = ({ onClick }) => {
  const maxValueTimer = 60; // Максимальное значение таймера в секундах
  const getNow = () => Math.floor(Date.now() / 1000);
  const dispatch = useAppDispatch();
  const lsTimer = Number(useAppSelector(state => state.session.lsTimer));

  // В useState сохраняем секунды с момента начала время-исчесления
  const [timeStart, setTimeStart] = useState(lsTimer || undefined);
  const [different, setDifferent] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>();

  useEffect(() => {
    // Если таймер в local storage определен, тогда мы сохраняем его в стейт
    if (lsTimer && lsTimer !== timeStart) {
      setTimeStart(lsTimer);
    }

    // Если стартовое время не определено - заканчиваем выполнение
    if (!timeStart) {
      return undefined;
    }

    // Если нет в local storage значения - очищаем состояния
    if (!lsTimer) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setDifferent(0);
      setTimeStart(lsTimer);
      dispatch(clearStorageTimeStart());
      return undefined;
    }

    // Если в LocalStorage обновилось значение StartTime
    if (lsTimer > timeStart) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setDifferent(0);
      setTimeStart(lsTimer);
      return undefined;
    }

    // Проверяем, если прошло 60 секунд от стартового времени - очищаем состояния
    if (getNow() - timeStart >= maxValueTimer) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setDifferent(0);
      setTimeStart(undefined);
      dispatch(clearStorageTimeStart());
      return undefined;
    }

    // Если время не истекло, но у нас нет интервала, который двигает таймер, тогда создадим его
    if (!intervalId) {
      setDifferent(getNow() - timeStart);

      const interval = setInterval(() => {
        setDifferent(getNow() - timeStart);
      }, 500);

      setIntervalId(interval);
    }

    return undefined;
  }, [timeStart, different, intervalId, lsTimer]);

  useEffect(
    () => () => {
      if (intervalId) clearInterval(intervalId);
      setIntervalId(undefined);
    },
    [],
  );

  return (
    <>
      {different ? (
        <>
          <p className="document-text link-color font-main">Не пришел код?</p>
          <p className="document-text link-color font-main">
            Запросите повторно через{' '}
            <span style={{ whiteSpace: 'nowrap' }}>{setTextTimer(60 - different)}</span>
          </p>
        </>
      ) : (
        <p
          id="auth_send_new_code"
          className="document-text link-color link-action font-main"
          onClick={onClick}
          style={{ cursor: 'pointer' }}
          aria-hidden
        >
          Отправить код повторно
        </p>
      )}
    </>
  );
};

export default CodeSmsTimer;
