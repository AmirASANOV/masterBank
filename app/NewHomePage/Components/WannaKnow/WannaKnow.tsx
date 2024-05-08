import React, { FC } from 'react';

import { DefaultPageProps } from '../types';

import s from './WannaKnow.module.sass';

const WannaKnow: FC<DefaultPageProps> = ({ search, viewport }) => {
  const utm =
    !!search.length && !search.includes('redirect') ? `${search}&redirect` : `${search}`;
  const clickHandler = () => {
    window.open(`https://sobank.online/credit_card/info${utm}`, '_blank');
    setTimeout(() => {
      window.location.replace(`https://microzaim.org${search}`);
    }, 2000);
  };

  return (
    <div className={s.wannaKnowWrapper}>
      <div className={s.wannaKnowWrapper__block}>
        {viewport !== 'mobile' && (
          <div className={s.title}>Хотите узнать подробнее о кредитных картах?</div>
        )}
        <div className={s.backgroundImage} />
        {viewport === 'mobile' ? (
          <button className={s.button__mobile} onClick={clickHandler}>
            Узнать подробнее про кредитные карты
          </button>
        ) : (
          <button className={s.button__desktop} onClick={clickHandler}>
            Узнать
          </button>
        )}
      </div>
    </div>
  );
};

export default WannaKnow;
