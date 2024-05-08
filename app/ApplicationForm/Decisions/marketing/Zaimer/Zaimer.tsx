import React, { CSSProperties, FC, useEffect } from 'react';

import s from './style/Zaimer.module.sass';

import zaimer from '@/Assets/mfo-partner/zaymer-ru.webp';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { setZaimerConfig } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

interface ZaimerProps {
  style?: CSSProperties;
}

const data = [
  { num: '01', description: 'Нажмите кнопку\n “Получить кредит”' },
  { num: '02', description: 'Вы попадете на сайт\n компании Займер' },
  {
    num: '03',
    description:
      'Введите дату рождения и номер телефона, чтобы войти в свой личный кабинет',
  },
  { num: '04', description: 'Выберите способ получения кредита и получите деньги' },
];

const pathDecisions = '/user/credit/mfo/decisions/mfo';

const Zaimer: FC<ZaimerProps> = ({ style }) => {
  const { link } = useAppSelector(state => state.config.zaimer);
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    history.push(pathDecisions);
    dispatch(
      setZaimerConfig({
        link: null,
        isShow: true,
      }),
    );
  };

  useEffect(() => {
    if (!link && window.location.pathname.includes('user')) {
      history.returnToBack();
    }
  }, []);

  return (
    <div className={s.zaimer} style={style}>
      <div className={s.zaimer__body}>
        <div className={s.zaimer__image}>
          <img src={zaimer} alt="zaimer_logo" />
        </div>
        <div className={s.zaimer__title}>
          <h2>{'Ваша заявка одобрена в компании Займер.\n Ставка 0% в день.'}</h2>
        </div>
        <div className={s.zaimer__content}>
          {data.map(el => (
            <div key={el.num} className={s.zaimer__row}>
              <div className={s.zaimer__num}>{el.num}</div>
              <div className={s.zaimer__description}>{el.description}</div>
            </div>
          ))}
          <div className={s.zaimer__btnBlock}>
            <button className={s.zaimer__btn}>
              <a
                onClick={onClickHandler}
                href={link || ''}
                target="_blank"
                rel="noreferrer"
              >
                Забрать кредит
              </a>
            </button>
            <button className={s.zaimer__link} onClick={onClickHandler}>
              Посмотреть другие одобренные предложения
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zaimer;
