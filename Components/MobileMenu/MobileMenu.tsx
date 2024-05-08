import React, { memo, useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import Layout from '../Layouts/Layout';
import Wrapper from '../Layouts/Wrapper';

import creditCardImg from './mobileMenu-1.png';
import cashImg from './mobileMenu-2.png';
import mortgageImg from './mobileMenu-3.png';
import autoImg from './mobileMenu-4.png';
import debitCardImg from './mobileMenu-5.png';
import s from './styles/MobileMenu.module.sass';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Current, currentDomain } from '@/GlobalConfig';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { getPage } from '@/Utils/utils';
import ym from '@/modules/metrika/yandexMetrikaModule';
import IconPay from '../Banner/components/IconPay';

const MobileMenu: React.FC = memo(() => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileRef = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLDivElement>(null);

  const history = useHistoryWithUTM();

  const dispatch = useDispatch();

  const step = useAppSelector(state => state.validator.current_step);
  // const { isAuth } = useAppSelector(state => state.session);

  let scroller = window.scrollY;

  const showModalMessage = 'ShowAuthModal';

  const menuList = [
    {
      id: 'menu_credit_card',
      title: 'Кредитные карты',
      icon: creditCardImg,
      url: '/credit_card/info',
    },
    {
      id: 'menu_credit_cash',
      title: 'Кредит наличными',
      icon: cashImg,
      url: '/credit_cash/info',
    },
    // {
    //   icon: (
    //     <Percentage color="blackColor" size={25} containerStyle={{ marginRight: 12 }} />
    //   ),
    //   title: 'Карты рассрочки',
    //   url: '/installment_card/info',
    // },
    // {
    //   icon: <Money color="blackColor" size={25} containerStyle={{ marginRight: 12 }} />,
    //   title: 'Отписаться от звонков',
    //   url: '/mfo/info',
    // },
    {
      id: 'menu_hypothec',
      icon: mortgageImg,
      title: 'Ипотека',
      url: '/hypothec/info',
    },
    {
      id: "menu_car_credit",
      icon: autoImg,
      title: 'Автокредит',
      url: '/car_credit/info',
    },
    {
      icon: debitCardImg,
      title: 'Дебетовые карты',
      url: '/installment_card/info',
    },
  ];

  const listenToScroll = () => {
    const newScroller = window.scrollY;

    if (newScroller > scroller && newScroller > 0) {
      // Scroll bottom
      if (
        btn.current &&
        !btn.current.classList.value.includes('hidden') &&
        mobileRef.current &&
        !mobileRef.current.classList.value.includes('active')
      ) {
        btn.current.classList.add('hidden');
      }
    } else if (btn.current && btn.current.classList.value.includes('hidden')) {
      btn.current.classList.remove('hidden');
    }

    scroller = newScroller;
  };

  const documentClickHandler = (e: MouseEvent) => {
    const target = e.target as Element;

    if (
      mobileRef.current &&
      !mobileRef.current.contains(target) &&
      btn.current &&
      !btn.current.contains(target)
    ) {
      if (mobileRef.current.classList.value.includes(s.active)) {
        mobileRef.current.classList.remove(s.active);
        setMobileMenu(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', documentClickHandler);
    return () => document.removeEventListener('click', documentClickHandler);
  }, [mobileMenu]);

  useEffect(() => {
    document.addEventListener('scroll', listenToScroll);
    return () => document.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className={`${mobileMenu ? 'modal-container' : ''}`}>
      <div className={s['mobile-menu__circle-container']}>
        <div
          id="menuBtn"
          className={s['mobile-menu__circle']}
          ref={btn}
          onClick={() => {
            if (mobileRef.current) {
              mobileRef.current.classList.toggle(s.active);
              setMobileMenu(prev => !prev);
            }
          }}
          aria-hidden
        >
          <span
            className={`
              ${s['mobile-menu__burger']} 
              ${mobileMenu ? s.active : ''}`}
          />
        </div>
        {mobileMenu ? null : (
          <div className={s['mobile-menu__icon']}>
            <IconPay />
          </div>
        )}
      </div>

      <div className={s['mobile-menu']} ref={mobileRef}>
        <Layout style={{ padding: 20, marginBottom: 75, overflowY: 'auto' }}>
          <div className={s['mobile-menu__table']}>
            {menuList.map((menuItem, index) => (
              <Wrapper
                wrapperClassName={s['mobile-menu__wrapper']}
                id={menuItem.id}
                key={`mobile_menu_item_${index + 1}`}
                classNameAdd={[s['mobile-menu__hover']]}
                onClick={() => {
                  ym({
                    id: Current.yandexMetrics[currentDomain],
                    methodName: 'reachGoal',
                    args: ['button-menu-login-mobile'],
                  });

                  if (menuItem.url !== showModalMessage) {
                    history.push(menuItem.url);
                  } else {
                    dispatch(
                      showModal(true, {
                        href: `/user/credit/${getPage(
                          history.location.pathname,
                        )}/${step}`,
                      }),
                    );
                  }
                  mobileRef.current?.classList.toggle(s.active);
                  setMobileMenu(false);
                }}
              >
                <>
                  <span className={s['mobile-menu_text']}>{menuItem.title}</span>
                  <img
                    className={s['mobile-menu_img']}
                    src={menuItem.icon}
                    alt="иконка"
                  />
                </>
              </Wrapper>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
});

export default MobileMenu;
