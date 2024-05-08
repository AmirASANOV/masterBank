import React, { memo, useEffect, useRef, useState } from 'react';

import { useLocation } from 'react-router';

import s from './MobileMenu.module.sass';

import { Current, currentDomain } from '@/GlobalConfig';
import ym from '@/modules/metrika/yandexMetrikaModule';

const NewSobankMobileMenu: React.FC = memo(() => {
  const { search } = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLDivElement>(null);
  const utm =
    !!search.length && !search.includes('redirect') ? `${search}&redirect` : `${search}`;
  let scroller = window.scrollY;

  const menuList = [
    {
      title: 'Кредитные карты',
      url: 'https://sobank.online/credit_card/info',
    },
    {
      title: 'Кредит наличными',
      url: 'https://sobank.online/credit_cash/info',
    },
    {
      title: 'Карты рассрочки',
      url: 'https://sobank.online/installment_card/info',
    },
    {
      title: 'Отписаться от звонков',
      url: 'https://sobank.online/mfo/info',
    },
    {
      title: 'Ипотека',
      url: 'https://sobank.online/hypothec/info',
    },
    {
      title: 'Войти',
      url: 'https://sobank.online/user/myProfile',
    },
  ];

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
      // Scroll top
      btn.current.classList.remove('hidden');
    }

    scroller = newScroller;
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
    <div className={`${mobileMenu ? s.modalContainer : ''}`}>
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
      <div className={s['mobile-menu']} ref={mobileRef}>
        <div className={`${s['mobile-menu__layout']}`}>
          <div className={s['mobile-menu__table']}>
            {menuList.map((menuItem, index) => (
              <button
                type="button"
                key={`mobile_menu_item_${index + 1}`}
                id={`mobile_menu_item_${index}`}
                className={s.mobileMenu_item}
                onClick={() => {
                  ym({
                    id: Current.yandexMetrics[currentDomain],
                    methodName: 'reachGoal',
                    args: ['button-menu-login-mobile'],
                  });
                  window.open(`${menuItem.url}${utm}`, '_blank');
                  setTimeout(() => {
                    window.location.replace(`https://microzaim.org${search}`);
                  }, 2000);
                  mobileRef.current?.classList.toggle(s.active);
                  setMobileMenu(false);
                }}
              >
                <div className={s.mobileMenu_item__text}>{menuItem.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* ) : ''} */}
    </div>
  );
});

export default NewSobankMobileMenu;
