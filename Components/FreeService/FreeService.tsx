import React from 'react';

import s from './FreeService.module.sass';

const FreeService = () => (
  <div className={s.wrapper}>
    <h1 className={s.title}>Вечное бесплатное обслуживание</h1>
    <p className={s.text}>
      Успейте заполнить заявку, чтобы получить вечное бесплатное обслуживание по кредитной
      карте
    </p>

    <div className={s.clock}>
      <div className={s.time}>
        <h1 className={s.count}>01</h1>
        <p className={s.nameCount}>часы</p>
      </div>
      <div className={s.time}>
        <h1 className={s.count}>01</h1>
        <p className={s.nameCount}>минуты</p>
      </div>
      <div className={s.time}>
        <h1 className={s.count}>01</h1>
        <p className={s.nameCount}>секунды</p>
      </div>
    </div>
  </div>
);

export default FreeService;
