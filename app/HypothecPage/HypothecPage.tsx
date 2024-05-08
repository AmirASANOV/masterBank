import React, { lazy } from 'react';

import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const HypothecPageMobile = lazy(() => import('./HypothecPageMobile'));
const HypothecPageDesktop = lazy(() => import('./HypothecPageDesktop'));

const HypothecPage: React.FC = () => {
  const viewport = useAppSelector(state => state.config.viewport);

  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <HypothecPageDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <HypothecPageMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default HypothecPage;
