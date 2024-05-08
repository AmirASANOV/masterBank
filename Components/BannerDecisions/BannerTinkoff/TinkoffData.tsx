import React from 'react';

import style from './BannerTinkoffDecisions.module.sass';

import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

type TinkoffCreditCardPropsType = {
  viewport: Viewport;
};

export const TinkoffCreditCard: React.FC<TinkoffCreditCardPropsType> = ({ viewport }) => (
  <>
    <h2 className={style.banner__title}>Карта Tinkoff Black</h2>
    {viewport === 'mobile' ? (
      <p className={style.banner__description}>
        Бесплатное обслуживание, Кэшбэк до 15% и до 6% годовых начисляем на остаток по
        счету
      </p>
    ) : (
      <ul className={style.banner__list}>
        <li>Бесплатное обслуживание</li>
        <li>Кэшбэк до 15%</li>
        <li>До 6% годовых</li>
      </ul>
    )}
  </>
);

export const TinkoffCreditCash: React.FC = () => (
  <>
    <h2 className={style.banner__title}>Как не платить проценты по кредиту вообще?</h2>
    <p className={style.banner__description}>
      Переведите кредит на бесплатную карту Tinkoff Black, совершайте покупки, получайте
      кэшбэк до 15% и компенсируйте проценты по кредиту с помощью кэшбэка
    </p>
  </>
);

export const TinkoffInstallmentCard: React.FC = () => (
  <>
    <h2 className={style.banner__title}>Как не платить проценты по кредиту вообще?</h2>
    <p className={style.banner__description}>
      Переведите кредит на бесплатную карту Tinkoff Black, совершайте покупки, получайте
      кэшбэк до 15% и компенсируйте проценты по кредиту с помощью кэшбэка
    </p>
  </>
);
