import React from 'react';

import s from './Delivery.module.sass';

import PressButton from '@/Components/Buttons/PressButton';

const Delivery = () => (
  <div className={s.wrapper}>
    <img src="/hand.png" alt="" />

    <div className={s.content}>
      <h1 className={s.title}>Бесплатно доставим карту уже сегодня</h1>

      <div className={s.step}>
        <img src="/oneStep.png" alt="" />
        <p className={s.text}>Заполните онлайн-заявку — вам не нужно посещать банк</p>
      </div>

      <div className={s.step}>
        <img src="/twoStep.png" alt="" />
        <p className={s.text}>Узнайте решение банка сразу после заполнения заявки</p>
      </div>

      <div className={s.step}>
        <img src="/threeStep.png" alt="" />
        <p className={s.text}>Банк бесплатно доставит карту, куда удобно. Прямо в руки</p>
      </div>

      <button className={s.button}>Получить карту</button>
    </div>
  </div>
);

export default Delivery;
