import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';

import { SocialLinks } from '../../SocialLinks/SocialLinks';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

import { getUrlSearchParams } from '@/Common/AppFormHelpers/Helpers';
import { lsHandler, lsKeyStorage } from '@/Common/LocalStorage/LSHandler';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { getProductFromUrl } from '@/Utils/utils';

const pathMatch = {
  main: '/',
  cash: '/credit_cash/info',
  card: '/credit_card/info',
  installment: '/installment_card/info',
  MFO: '/mfo/info',
  hypothec: '/hypothec/info',
  carCredit: '/car_credit/info/',
  cashWithSlash: '/credit_cash/info/',
  cardWithSlash: '/credit_card/info/',
  installmentWithSlash: '/installment_card/info/',
  MFOWithSlash: '/mfo/info/',
  hypothecWithSlash: '/hypothec/info/',
  carCreditWithSlash: '/car_credit/info/',
};

const ShowcaseModal: React.FC = () => {
  const resolution = useAppSelector(state => state.config.viewport);
  const { isAuth } = useAppSelector(state => state.session);
  const product = useAppSelector(
    state => state.validator.credit_parameters_info.credit_target,
  );
  const [showcase, setShowcase] = useState(false);
  const [showcaseLsFlag, setShowcaseLsFlag] = useState(false);
  const [showCount] = useState(0);
  const history = useHistoryWithUTM();
  const location = useLocation();
  const ls = lsHandler();
  const sourceWithUrlSearch = getUrlSearchParams('utm_source');
  const dispatch = useAppDispatch();
  // let timer: ReturnType<typeof setTimeout>
  const path = location.pathname;

  /**
   * showcaseModal - открытие закрытие модального окна + сколько раз открывалось окно
   */
  // const showcaseModal = () => {
  //   setShowcase(true)
  //   setShowCount(showCount + 1)
  // }
  /**
   * clickListener ф-я оброточика событй клика. Отработает при клике на 'button' Открывает вкладку в новом окне,
   * в зависимости от расположения пользователя на первой вкладке. Записывает в LS ключ по которому определяется дочерняя
   * ли это вкладка, перешёл ли пользователь на неё из-за клика по кнопке на которой висел обработчик
   */
  const clickListener = () => {
    // const element = e.target as HTMLElement
    // if (element.nodeName === 'BUTTON' || element.tagName === 'BUTTON' || element.localName === 'button') {
    //   if (element.id !== 'not-open-window') {
    //     ls.set(lsKeyStorage.showcase, true)
    //     let newWindow = path === pathMatch.hypothec
    //       ? `${window.location.origin}/hypothec${location.search}${!!location.search.length && !location.search.includes('redirect') ? '&redirect' : ''}`
    //       : `${window.location.origin}${path}${location.search}${!!location.search.length && !location.search.includes('redirect') ? '&redirect' : ''}`
    //     window.open(newWindow, '_blank')
    //     setTimeout(() => {
    //       window.location.replace(`https://microzaim.org${location.search}`)
    //     }, 2000)
    //   }
    // }
  };
  /**
   * useEffect удаляет флаг из LS который для понимания откуда пришёл пользователь при закрытии вкладки браузера.
   */
  useEffect(() => {
    const removeShowcase = () => ls.remove(lsKeyStorage.showcase);
    window.addEventListener('DOMContentLoaded', removeShowcase);
    return () => window.removeEventListener('DOMContentLoaded', removeShowcase);
  }, []);
  /**
   * Записывает в локальный стейт флаг из LS для понимания откуда пришёл пользователь, открыта ли новая вкладка по
   * по срабатыванию обработчика clickListener
   */
  useEffect(() => {
    const isShowing = ls.get(lsKeyStorage.showcase);
    if (isShowing) {
      setShowcaseLsFlag(!!isShowing);
    }
  }, [ls]);
  /**
   * Вешает обработчик событий для показа модального окна. Обработчик вешается только на главной и дочерних страницах
   * (КК, КН, КР, МФО, Ипотека, Автокредит) на десктопе отрабатывает по выходу курсора за пределы окна браузера и 30 секунд,
   * на планшете и мобиле
   * по истечению 30 секунд. Модалка показывается только один раз по любому событию. Если выход за окно браузера был первым,
   * то таймер очищается что бы не показывать окно два раза подряд. Так же обработчики очищаются всякий раз когда
   * условия не соответствуют.
   */
  // useEffect(() => {
  //   const clearAllSideEffect = () => {
  //     document.body.removeEventListener('mouseleave', showcaseModal)
  //     clearTimeout(timer)
  //   }
  //   if (Object.values(pathMatch).includes(path) && sourceWithUrlSearch !== 'google') {
  //     if (!showcaseLsFlag && showCount === 0) {
  //       if (resolution === 'desktop') {
  //         document.body.addEventListener('mouseleave', showcaseModal)
  //       }
  //       timer = setTimeout(() => {
  //         setShowcase(true)
  //         clearAllSideEffect()
  //       }, 30000)
  //     } else {
  //       clearAllSideEffect()
  //     }
  //   } else {
  //     clearAllSideEffect()
  //     showcase && setShowcase(false)
  //   }
  //   return () => {
  //     clearAllSideEffect()
  //   }
  // }, [showcaseLsFlag, showCount, setShowCount, path])
  /**
   * Вешает слушатель событий на ПЕРВЫЙ клик по любо кнопке на главной и дочерних (КК, КН, КР). Обработчик вешается в
   * зависимости от того, показывалось ли модальное окно, есть ли в LS флаг, залогинен ли пользователь
   * TODO если пользователь залогинен и модалка показалась один раз, то слушаетль удаляется, из-за второго условия, возможно нужно поправить
   *
   */
  useEffect(() => {
    const xiaomi = /xiaomi/gi.test(window.navigator.userAgent);
    if (!xiaomi) {
      if (Object.values(pathMatch).includes(path) && sourceWithUrlSearch !== 'google') {
        if (
          (!showcaseLsFlag && showCount === 0) ||
          (!showcaseLsFlag && showCount === 1 && !isAuth)
        ) {
          document.addEventListener('click', clickListener);
        } else {
          document.removeEventListener('click', clickListener);
        }
      } else {
        document.removeEventListener('click', clickListener);
      }
    }
    return () => document.removeEventListener('click', clickListener);
  }, [showcaseLsFlag, showCount, location]);
  /**
   * Закрывает на витрине окно с логинизацией и модалкой с соц сетями при редиректе. Бывают кейсы при которых модалки могут
   * оставаться открытми при редиректе
   */
  useEffect(() => {
    if (path === '/showcase') {
      setShowcase(false);
      dispatch(showModal(false));
    }
  }, [location]);
  /**
   * Этот useEffect отвечает за логику провала в анкету на первый этап при логинизации только на главной и дочерних страницах
   * если не ставить условие location.pathname !== '/showcase' то при редиректе на витрину залогиненого пользователя
   * он сразу провалится на первый этап анкеты не увидев витрину.
   * За провал в анкету с витрины отвечает useEffect в Showcase.tsx
   */
  useEffect(() => {
    if (isAuth && showcaseLsFlag && path !== '/showcase' && path !== '/hypothec') {
      history.push(
        `/user/credit/${
          product.result.value?.value ? product.result.value.value : getProductFromUrl()
        }/credit_parameters_info`,
      );
    } else if (isAuth && showCount > 0 && location.pathname !== '/showcase') {
      history.push(
        `/user/credit/${
          product.result.value?.value ? product.result.value.value : getProductFromUrl()
        }/credit_parameters_info`,
      );
    }
  }, [showcaseLsFlag, isAuth, showCount]);

  return (
    <ModalWrapper setModalActive={setShowcase} modalActive={showcase}>
      {showcase && (
        <SocialLinks
          title="Получайте уведомление о персональном одобрении кредита"
          style={{ marginTop: resolution !== 'mobile' ? 0 : 10 }}
          titleStyle={{ maxWidth: 450, margin: '0 auto', fontWeight: 'bold' }}
          description="Вы получите сообщение, если для Вас будет доступно положительное решение"
          modal
        />
      )}
    </ModalWrapper>
  );
};

export default ShowcaseModal;
