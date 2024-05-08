import React, { lazy, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { NotificationItemTypes } from '@/Components/Notifications/notificationTypes';
import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { currentDomain } from '@/GlobalConfig';
import { consent } from '@/ReduxStore/reducer/userReducer/userReducer';

const LazyRenderNotification = lazy(() =>
  import('@/Components/Notifications/Notification').then(({ RenderNotification }) => ({
    default: RenderNotification,
  })),
);
const AuthModal = lazy(() => import('@/Components/Modals/AuthModal/AuthModal'));

const MobileMenu = lazy(() => import('@/Components/MobileMenu/MobileMenu'));
const NewSobankMobileMenu = lazy(
  () => import('@/Components/MobileMenu/NewSobankMobileMenu/NewSobankMobileMenu'),
);

interface ConfigProvider {
  children: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProvider> = props => {
  const dispatch = useDispatch();
  const {
    notifications,
    cookie,
    modal,
    loaderStatus,
    message,
    type,
    viewport,
    isAuth,
    zaimerLink,
  } = useAppSelector(state => ({
    notifications: state.config.notification.notification_list,
    cookie: state.config.cookieAccept,
    modal: state.config.modalWindow,
    loaderStatus: state.config.loading.loaderStatus,
    message: state.config.loading.message,
    type: state.config.loading.type,
    viewport: state.config.viewport,
    isAuth: state.session.isAuth,
    zaimerLink: state.config.zaimer.link,
  }));

  const cookiesName = 'Consent';
  const location = useLocation().pathname;

  useEffect(() => {
    if (!cookie) {
      setTimeout(() => {
        Cookies.set(cookiesName, 'true');
        dispatch(consent());
      }, 3000);
    }
  }, []);

  return (
    <div>
      {props.children}

      <div className="notification-wrapper">
        {notifications.length > 0 &&
          notifications.map((item: NotificationItemTypes) => (
            <WithSuspense
              key={`render_notification_func_${item.id}`}
              fallBack={<Preloader message="Загрузка уведомлений" type="future" />}
            >
              <LazyRenderNotification data={item} />
            </WithSuspense>
          ))}
        {loaderStatus && (
          <Preloader message={message || 'Загрузка данных...'} type={type} />
        )}
      </div>
      {modal.view && !isAuth ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка окна авторизации" type="future" />}
        >
          <AuthModal />
        </WithSuspense>
      ) : (
        ''
      )}
      {viewport !== 'desktop' &&
        !modal.view &&
        !zaimerLink &&
        !(currentDomain === 'new_sobank') &&
        !(
          (currentDomain === 'cc_sobank' || currentDomain === 'sovbank') &&
          (location.includes('user/credit/credit_card') ||
            location.includes('user/change_anketa/credit_card'))
        ) && (
          <WithSuspense
            fallBack={<Preloader message="Загрузка мобильного меню" type="future" />}
          >
            <MobileMenu />
          </WithSuspense>
        )}
      {viewport !== 'desktop' &&
        !modal.view &&
        !zaimerLink &&
        !location.includes('user') &&
        currentDomain === 'new_sobank' && (
          <WithSuspense
            fallBack={<Preloader message="Загрузка мобильного меню" type="future" />}
          >
            <NewSobankMobileMenu />
          </WithSuspense>
        )}
    </div>
  );
};

export default ConfigProvider;
