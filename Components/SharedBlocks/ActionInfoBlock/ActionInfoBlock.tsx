import React from 'react';

import styles from './ActionInfoBlock.module.sass';
import ImageSrc from './image.png';

import PressButton from '@/Components/Buttons/PressButton';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const authPath = `/user/credit/credit_card/credit_parameters_info`;

const ActionInfoBlock = () => {
  const dispatch = useAppDispatch();
  const history = useHistoryWithUTM();

  const { isAuth } = useAppSelector(state => state.session);

  const clickHandler = () => {
    if (isAuth) return history.push(authPath);

    return dispatch(showModal(true, { href: authPath }));
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Рефинансирование кредитных карт в других банках</h3>
        <p className={styles.text}>
          Оформите карту на&nbsp;&laquo;Мастербанк&raquo;, закройте с&nbsp;ее&nbsp;помощью
          другие кредитки, сэкономьте свои средства за&nbsp;счет льготного периода
          до&nbsp;одного года.
        </p>

        <PressButton
          id='auth_refinancing'
          className={styles.btn}
          htmlType="button"
          type="mainBold"
          onClick={clickHandler}
        >
          Получить карту
        </PressButton>
      </div>
      <img className={styles.image} src={ImageSrc} alt="" />
    </div>
  );
};

export default ActionInfoBlock;
