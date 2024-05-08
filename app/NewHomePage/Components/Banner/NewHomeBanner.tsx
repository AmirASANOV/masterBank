import React, { FC } from 'react';

import { DefaultPageProps } from '../types';

import s from './Banner.module.sass';

import PressButton from '@/Components/Buttons/PressButton';
import { getNameFromUrl } from '@/Utils/utils';

const NewHomeBanner: FC<DefaultPageProps> = ({ search }) => {
  const name = getNameFromUrl();

  const utm =
    !!search.length && !search.includes('redirect') ? `${search}&redirect` : `${search}`;

  const clickHandler = () => {
    window.open(`https://sobank.online${utm}`, '_blank');
    setTimeout(() => {
      window.location.replace(`https://microzaim.org${search}`);
    }, 2000);
  };

  return (
    <div className={s.bannerWrapper}>
      <div className={s.bannerWrapper__banner}>
        <div className={s.bannerTitle}>
          <div className={s.bannerTitle__title}>
            <h2 className={s.bannerTitle__name}>{name} </h2>Вам одобрен лимит
          </div>
          <div className={s.bannerTitle__sum}>283 500 ₽</div>
        </div>
        <div className={s.bannerSubtitle}>
          <div className={s.bannerSubtitle__text}>Беспроцентный период 1 год</div>
          <div className={s.bannerSubtitle__text}>Бесплатный выпуск и обслуживание</div>
        </div>
        <PressButton
          type="mainBold"
          text="Оформить карту"
          onClick={clickHandler}
          style={{
            backgroundColor: '#319c4a',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 500,
          }}
        />
      </div>
    </div>
  );
};

export default NewHomeBanner;
