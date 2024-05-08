import React, { memo } from 'react';

import PressButton from '../Buttons/PressButton';
import Wrapper from '../Layouts/Wrapper';

import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Current, currentDomain } from '@/GlobalConfig';
import ym from '@/modules/metrika/yandexMetrikaModule';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const InOtherBank: React.FC = memo(() => {
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
    <Wrapper style={{ padding: 0, margin: 0, maxHeight: 390 }} hidden>
      <div
        className="inOtherBank-container"
        style={{
          background: `url(${Current.inOtherBank[currentDomain].image}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      />
      <div className="inOtherBank-container__body">
        <div className="wd-100">
          <div style={{ width: '100%', padding: '24px 16px 16px 16px' }}>
            <h2 className="title-text fs-30-24-17 color-black-main mb-8">
              Есть кредитная карта в другом банке?
            </h2>
            <p
              className="title-text fs-22-17-15 color-black-main mb-16"
              style={{ fontWeight: 'normal' }}
            >
              {Current.inOtherBank[currentDomain].description}
            </p>
            <PressButton
              type="mainBold"
              id="auth_other_bank"
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
      </div>
    </Wrapper>
  );
});

export default InOtherBank;
