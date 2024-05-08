import React from 'react';

import s from './CryptoPro.module.sass';

import cryptoLogo from '@/Assets/icons/cryptoPro.svg';

const CryptoPro = () => (
  <div className={s.cryptoProContainer}>
    <div className={s.cryptoProContainer__logo}>
      <img src={cryptoLogo} alt="" className={s.img} />
    </div>
    <div className={s.cryptoProContainer__content}>
      Паспортные данные необходимы для того, чтобы оценить Вашу финансовую нагрузку и
      предложить оптимальный лимит по кредитной карте. Все данные надежно защищены,
      обрабатываются и передаются в зашифрованном виде через специальный шлюз КриптоПро.
    </div>
  </div>
);

export default CryptoPro;
