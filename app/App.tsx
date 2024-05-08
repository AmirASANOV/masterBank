import React, { lazy, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import '../ProjectStyles/main.sass';

import ServiceApi from '../ApiConfig/Endpoints/ServiceApi';
import Preloader from '../Components/Preloader/Preloader';
import ym from '../modules/metrika/yandexMetrikaModule';

import ScrollToTop from './ScrollToTop';

import { resolution } from '@/Common/Config/ConfigReducerCommon';
import { lsHandler, lsKeyStorage } from '@/Common/LocalStorage/LSHandler';
import { HeaderMain } from '@/Components/Header/components/HeaderMain';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useAutoLogin } from '@/CustomHooks/useAutoLogin';
import { useChangeStorage } from '@/CustomHooks/useChangePhoneInState';
import useGetInfoOnAuth from '@/CustomHooks/useGetInfoOnAuth';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { getCurrentDomainTitle } from '@/GlobalConfig';
import {
  openAuthWindowFromUrlValue,
  showModal,
  updateIsDesktop,
} from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { useLocation } from 'react-router';

const SubModal = lazy(() => import('../Components/Modals/SubModal/SubModal'));
const Router = lazy(() => import('../Router/Router'));
const FooterMain = lazy(() => import('../Components/Footers/FooterMain'));
const PhoneModal = lazy(() => import('../Components/Modals/PhoneModal/PhoneModal'));
const ShowcaseModal = lazy(
  () => import('../Components/Modals/ShowcaseModal/ShowcaseModal'),
);

const locationPathForMonetization = {
  hypothecPage: '/hypothec/info',
  hypothecForm: '/hypothec',
  hypothecPageWithSlash: '/hypothec/info/',
  hypothecFormWithSlash: '/hypothec/',
};
const Application: React.FC = () => {
  const ls = lsHandler();

  const dispatch = useDispatch();
  const history = useHistoryWithUTM();
  const location = useLocation().pathname;

  const url = history.location.pathname;
  const { isAuth } = useAppSelector(store => store.session);
  const zaimerLink = useAppSelector(state => state.config.zaimer.link);

  const hideHeader = false;

  const Loader = <Preloader message="Загрузка страницы..." type="future" />;

  const checkDesktop = () => {
    dispatch(updateIsDesktop(resolution(window.innerWidth)));
  };

  useEffect(() => {
    const isShowcase = ls.get(lsKeyStorage.showcase);

    if (
      isShowcase &&
      !Object.values(locationPathForMonetization).includes(history.location.pathname)
    ) {
      dispatch(showModal(true));
    }

    document.title = `${getCurrentDomainTitle('eng')} - получите лучшие условия онлайн.`;

    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    history.scroll(0, { duration: 0, smooth: true });

    ym({
      id: 85610464,
      methodName: 'hit',
      args: [window.location.href],
    });
  }, [url, isAuth]);

  useEffect(() => {
    if (isAuth) {
      ServiceApi.reportInaction(false).then().catch();
    } else if (!!window.location.search && !isAuth) {
      dispatch(openAuthWindowFromUrlValue());
    }
  }, [isAuth]);

  useEffect(() => {
    dispatch(useAutoLogin(isAuth, history));
  }, []);

  useChangeStorage();
  useGetInfoOnAuth();

  return (
    <>
      <div id="notifications" />

      <WithSuspense fallBack={Loader}>
        <div>
          {!zaimerLink &&
            !location.includes('user/credit/credit_cash/work_info') &&
            !location.includes('user/credit/installment_card/additional_info') &&
            !location.includes('user/credit/installment_card/work_info') &&
            !location.includes('user/credit/credit_card/credit_parameters_info') &&
            !location.includes('user/credit/credit_cash/passport_info') &&
            !location.includes('user/credit/credit_cash/additional_info') &&
            !hideHeader && <HeaderMain />}
          <ScrollToTop />
          <Router />

          {!zaimerLink && <FooterMain />}
        </div>

        <ShowcaseModal />

        <PhoneModal />

        <SubModal />
      </WithSuspense>
    </>
  );
};

export default Application;
