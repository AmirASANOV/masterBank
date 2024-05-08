import React, { FC } from 'react';

import PressButton from '../Buttons/PressButton';

import background from '@/Assets/in_other_bank/illustration.webp';
import './styles/InOtherBank.sass';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Current, currentDomain } from '@/GlobalConfig';
import ym from '@/modules/metrika/yandexMetrikaModule';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

interface InOtherBankProps {
  title: string;
  subtitle: string;
}

const InOtherBankMobile: FC<InOtherBankProps> = ({ title, subtitle }) => {
  const history = useHistoryWithUTM();

  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(state => state.session);
  const step = useAppSelector(state => state.validator.current_step);
  const href = `/user/credit/credit_card/${step}`;
  const handleClick = () => {
    ym({
      id: Current.yandexMetrics[currentDomain],
      methodName: 'reachGoal',
      args: ['button-mobile-3'],
    });

    if (isAuth) {
      history.push(href);
    } else {
      dispatch(showModal(true, { href }));
    }
  };

  return (
    <div className="in_other_bank-container">
      <div className="in_other_bank-title">{title}</div>
      <div className="in_other_bank-content">
        <div className="in_other_bank-background">
          <img className="in_other_bank-background-image" src={background} alt="" />
        </div>
        <div className="in_other_bank-subtitle">{subtitle}</div>
      </div>
      <div className="in_other_bank-button">
        <PressButton
          type="mainBold"
          text="Оформить карту"
          style={{
            width: '100%',
            zIndex: 10,
            fontWeight: 'bold',
            fontSize: 18,
            padding: '16px 0',
          }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default InOtherBankMobile;
