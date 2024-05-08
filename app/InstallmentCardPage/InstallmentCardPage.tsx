import React, { lazy } from 'react';

import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const InstallmentCardMobile = lazy(() => import('./InstallmentCardMobile'));
const InstallmentCardDesktop = lazy(() => import('./InstallmentCardDesktop'));

const InstallmentCardPage: React.FC = () => {
  const viewport = useAppSelector(state => state.config.viewport);
  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <InstallmentCardDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <InstallmentCardMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default InstallmentCardPage;
