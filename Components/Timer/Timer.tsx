import React, { memo } from 'react';

import s from './Timer.module.sass';

import useTimer from '@/CustomHooks/useTimer';

function RenderTimer() {
  const { hours, minutes, seconds } = useTimer();

  return (
    <div className={s.timer}>
      <div className={s.timer__item}>
        <div className={s.timer__cells}>
          <div className={s.cell}>{hours.slice(0, 1)}</div>
          <div className={s.cell}>{hours.slice(1, 2)}</div>
        </div>
        <div className={s.timeType}>Часы</div>
      </div>
      <div className={s.timer__item}>
        <div className={s.timer__cells}>
          <div className={s.cell}>{minutes.slice(0, 1)}</div>
          <div className={s.cell}>{minutes.slice(1, 2)}</div>
        </div>
        <div className={s.timeType}>Минуты</div>
      </div>
      <div className={s.timer__item}>
        <div className={s.timer__cells}>
          <div className={s.cell}>{seconds.slice(0, 1)}</div>
          <div className={s.cell}>{seconds.slice(1, 2)}</div>
        </div>
        <div className={s.timeType}>Секунды</div>
      </div>
    </div>
  );
}

const Timer = memo(() => (
  <div className={s.timerContainer}>
    <div className={s.timerContainer__title}>Вечное бесплатное обслуживание</div>
    <div className={s.timerContainer__subtitle}>
      {
        'Успейте заполнить заявку, чтобы\nполучить вечное бесплатное\nобслуживание по кредитной карте'
      }
    </div>
    <RenderTimer />
  </div>
));

export default Timer;
