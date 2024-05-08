import React, { FC, useCallback } from 'react';

import masterbankLogo from '@/Assets/logo/masterbank-new.svg';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import s from './Steps.module.sass';

interface ISteps {
  number: number;
  bonus: number;
}

const Steps: FC<ISteps> = ({ number, bonus }) => {
  const history = useHistoryWithUTM();

  const navigateToMainPage = useCallback(() => {
    history.replace('/');
  }, []);

  return (
    <div className={s.wrapper}>
      <button className={s.logo} onClick={navigateToMainPage}>
        <img src={masterbankLogo} alt="logo group" />
      </button>
      <p className={s.title}>Шаг {number} из 4</p>
      <p className={s.bonus}>
        +{bonus}% к одобрению, если заполните шаг {number}
      </p>
    </div>
  );
};

export default Steps;
