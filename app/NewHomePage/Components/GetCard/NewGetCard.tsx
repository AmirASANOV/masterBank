import React, { FC } from 'react';

import { DefaultPageProps } from '../types';

import { data } from './data';
import s from './GetCard.module.sass';

import PressButton from '@/Components/Buttons/PressButton';

const NewGetCard: FC<DefaultPageProps> = ({ search, viewport }) => {
  const utm =
    !!search.length && !search.includes('redirect') ? `${search}&redirect` : `${search}`;
  const clickHandler = () => {
    window.open(`https://sobank.online/credit_card/info${utm}`, '_blank');
    setTimeout(() => {
      window.location.replace(`https://microzaim.org${search}`);
    }, 2000);
  };

  return (
    <div className={s.getCardWrapper}>
      <div className={s.getCardWrapper__getCard}>
        <div className={s.title}>Для того, чтобы получить карту:</div>
        <div className={s.content}>
          <div className={s.stages}>
            {data.map((el, index) => (
              <div className={s.stages__item} key={`${el}_${index + 1}`}>
                <div className={s.item__count}>{index + 1}</div>
                <div className={s.item__text}>{el}</div>
              </div>
            ))}
          </div>
          <PressButton
            type="mainBold"
            text="Заполнить анкету"
            onClick={clickHandler}
            style={{
              backgroundColor: '#319c4a',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '8px',
              maxWidth: viewport === 'mobile' ? '100%' : '320px',
              fontWeight: 500,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewGetCard;
