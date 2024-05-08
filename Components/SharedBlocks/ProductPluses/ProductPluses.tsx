import React from 'react';

import { credit, hypotec } from './data';
import styles from './ProductPluses.module.sass';

import PressButton from '@/Components/Buttons/PressButton';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const authPath = `/user/credit/credit_card/credit_parameters_info`;

type Props = {
  type: 'credit' | 'hypotec';
};

const ProductPluses = ({ type }: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistoryWithUTM();

  const { isAuth } = useAppSelector(state => state.session);

  const clickHandler = () => {
    if (isAuth) return history.push(authPath);

    return dispatch(showModal(true, { href: authPath }));
  };

  const data = type === 'credit' ? credit : hypotec;
  const title =
    type === 'credit'
      ? 'С кредитной картой Вы получаете больше'
      : 'Лучшие условия ипотеки для любой недвижимости';

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.cards}>
        {data.map(el => (
          <div className={styles.card} key={el.text}>
            <img className={styles.img} src={el.imageSrc} alt="img" />
            <p className={styles.cardText}>{el.text}</p>
          </div>
        ))}
      </div>

      <PressButton htmlType="button" type="mainBold" onClick={clickHandler} id={type === 'credit' ? 'auth_get_more' : 'auth_best_offer'}>
        Подробнее
      </PressButton>
    </div>
  );
};

export default ProductPluses;
