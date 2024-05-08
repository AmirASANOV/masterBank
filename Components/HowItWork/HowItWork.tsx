import React, { memo } from 'react';

import PressButton from '../Buttons/PressButton';

import styles from './HowItWork.module.sass';
import { IconCircle } from './IconCircle';

import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const HowItWork: React.FC = memo(() => {
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(state => state.session);
  const step = useAppSelector(state => state.validator.current_step);
  const href = `/user/credit/credit_card/${step}`;

  const handleClick = () => {
    if (isAuth) history.push(href);
    else dispatch(showModal(true, { href }));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Как работает период без процентов?</h2>

      <h3 className={styles.text}>Например, 365 дней без платежей</h3>

      <div className={styles.wrapper}>
        <div className={styles.wrapperItem}>
          <div className={styles.decorItem}>
            <IconCircle />
            <p className={styles.text2} style={{ textAlign: 'start' }}>
              335 дней на&nbsp;покупки
            </p>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Покупка №1</p>
              <p className={styles.cardText}>12 000₽</p>
            </div>

            <div className={styles.card}>
              <p className={styles.cardTitle}>Покупка №2</p>
              <p className={styles.cardText}>7 000₽</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapperItem}>
          <div className={styles.decorItem}>
            <IconCircle />
            <p className={styles.text2}>30 дней на&nbsp;погашение</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Оплата задолженности</p>
              <p className={styles.cardText}>19 000₽</p>
            </div>
          </div>
          <div className={styles.decor}>
            <svg
              className={styles.decorLine}
              width="621"
              height="48"
              viewBox="0 0 621 48"
              fill="none"
            >
              <path d="M0 24H621" stroke="#ECD7A4" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container-flex-center-row">
        <PressButton
          id="auth_how_it_work"
          type="mainBold"
          text="Получить карту"
          onClick={handleClick}
        />      </div>
    </section>
  );
});

export default HowItWork;
