import React, { lazy } from 'react';

import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const CarCreditMobile = lazy(() => import('./CarCreditPageMobile'));
const CarCreditDesktop = lazy(() => import('./CarCreditPageDesktop'));

const CarCreditPage: React.FC = () => {
  const viewport = useAppSelector(state => state.config.viewport);

  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <CarCreditDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <CarCreditMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default CarCreditPage;
