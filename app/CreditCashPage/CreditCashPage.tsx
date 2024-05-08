import React, { lazy } from 'react';

import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const CreditCashDesktop = lazy(() => import('./CreditCashDesktop'));
const CreditCashMobile = lazy(() => import('./CreditCashMobile'));

const CreditCashPage: React.FC = () => {
  const viewport = useAppSelector(state => state.config.viewport);
  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <CreditCashDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <CreditCashMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default CreditCashPage;
