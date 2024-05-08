import React from 'react';

import { CardIcon } from './assets/CardIcon';
import { ChartIcon } from './assets/ChartIcon';
import { OfficeIcon } from './assets/OfficeIcon';
import { PhoneIcon } from './assets/PhoneIcon';
import style from './Services.module.sass';

const Services = () => (
  <div className={style.wrapper}>
    <ul className={style.list}>
      <li className={style.item}>
        <PhoneIcon />
        <h4 className={style.itemTitle}>Мобильное приложение</h4>
      </li>
      <li className={style.item}>
        <CardIcon />
        <h4 className={style.itemTitle}>Переводы на карту</h4>
      </li>
      <li className={style.item}>
        <OfficeIcon />
        <h4 className={style.itemTitle}>Отделения в городе</h4>
      </li>
      <li className={style.item}>
        <ChartIcon />
        <h4 className={style.itemTitle}>Покупка акций</h4>
      </li>
    </ul>
  </div>
);

export default Services;
