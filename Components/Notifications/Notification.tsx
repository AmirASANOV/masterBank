import React, { memo, useEffect, useRef, useState } from 'react';

import { Nullable } from '../Inputs/Select/Type';

import { NotificationItemTypes } from './notificationTypes';
import s from './styles/Notification.module.sass';

import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import {
  updateDisableNotification,
  updateNotificationList,
} from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

interface NotificationProps {
  data: NotificationItemTypes;
}

export const RenderNotification: React.FC<NotificationProps> = memo(({ data }) => {
  const [progress, setProgress] = useState(data.duration);
  const [intervalID, setIntervalID] =
    useState<Nullable<ReturnType<typeof setTimeout>>>(null);
  const disableList = useAppSelector(
    store => store.config.notification.disableRepeatShow,
  );
  const notificationList = useAppSelector(
    state => state.config.notification.notification_list,
  );
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const handleStartTimer = () => {
    const id = setInterval(() => {
      setProgress((prev: number) => {
        if (prev > 0) {
          return prev - 0.05;
        }
        return prev;
      });
    }, 50);
    setIntervalID(id);
  };

  const deleteNotification = () => {
    if (ref.current) ref.current?.classList.add(s.deleted);

    setTimeout(() => {
      if (intervalID) clearInterval(intervalID);

      const list = notificationList.filter(item => item.id !== data.id);
      dispatch(updateNotificationList(list));
      if (data.statusCode !== null) {
        const disable = disableList.slice();
        disable.push(data.statusCode);
        dispatch(updateDisableNotification(disable));
      }
    }, 500);
  };

  const handlePauseTimer = () => {
    if (intervalID) clearInterval(intervalID);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  useEffect(() => {
    if (progress <= 0) {
      deleteNotification();

      return () => {
        if (intervalID) clearInterval(intervalID);
      };
    }

    return undefined;
  }, [progress]);

  return (
    <div
      className={s['notification-item']}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      ref={ref}
    >
      <div className={s['notification-body']}>
        <div onClick={deleteNotification} className={s['notification-close']} aria-hidden>
          <div className={s['notification-close-first-line']} />
          <div className={s['notification-close-second-line']} />
        </div>
        <span className={s['notification-content']}>{data.message}</span>
      </div>
      <div
        className={s['notification-bar']}
        style={{ height: `${(progress / data.duration) * 100}%` }}
      />
    </div>
  );
});
