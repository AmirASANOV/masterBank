import React, { useCallback } from 'react';

// import { useDispatch } from 'react-redux';

// import PressButton from '../../Buttons/PressButton';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { Divider } from '../../Divider/Divider';
import Layout from '../../Layouts/Layout';
import { arrayLinks } from '../data/header-data';
import style from '../style/Header.module.sass';

import { CabinetIcon } from './CabinetIcon';
import styles from './HeaderMain.module.sass';

import masterbankLogo from '@/Assets/logo/masterbank-new.svg';
// import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
// import { currentDomain } from '@/GlobalConfig';
// import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
// import { getPage } from '@/Utils/utils';
const authPath = `/user/credit/credit_card/credit_parameters_info`;

export const HeaderMain: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistoryWithUTM();
  const { isAuth } = useAppSelector(state => state.session);
  // const step = useAppSelector(state => state.validator.current_step);
  const url = history.location.pathname;
  // const href = `/user/credit/${getPage(history.location.pathname)}/${step}`;

  const navigateToMainPage = useCallback(() => {
    history.replace('/');
  }, []);

  // const setOpenModal = (value: boolean) => {
  //   dispatch(setRemovePhoneModal(value));
  // };

  const clickHandler = () => {
    if (isAuth) return history.push(authPath);

    return dispatch(showModal(true, { href: authPath }));
  };

  // const authHandler = () => dispatch(showModal(true, { href }));

  return (
    <header className={styles.headerContainer}>
      <Layout>
        <div className={style.header__toolbar}>
          <button onClick={navigateToMainPage} className={style.header__logo}>
            <img src={masterbankLogo} alt="logo group" />
          </button>

          <nav className={styles.nav}>
            {arrayLinks.map(item => (
              <button
                key={item.title}
                className={`${styles.navItem} ${item.agreementUrl.filter(el => url.includes(el)).length > 0 ? 'active' : ''}`}
                onClick={() => history.push(item.url)}
                aria-hidden
              >
                {item.title}
              </button>
            ))}
          </nav>

          <button className={styles.buttonCabinet} type="button" onClick={clickHandler}>
            <CabinetIcon />
            <p>Личный кабинет</p>
          </button>
        </div>
      </Layout>
      <Divider />
      {/* <Layout className="navbar">
          <div className={style.header__bottom}>
            <nav className={style.header__nav}>
              <ul
                className={`${style.header__nav_container} ${style[`header__${currentDomain}__nav_container`]}`}
              ></ul>
            </nav>
          </div>
        </Layout> */}
    </header>
  );
};
