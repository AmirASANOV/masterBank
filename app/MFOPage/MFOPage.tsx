import React, { lazy } from 'react';

import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const MFOPageMobile = lazy(() => import('./MFOPageMobile'));
const MFOPageDesktop = lazy(() => import('./MFOPageDesktop'));

const MFOPage: React.FC = () => {
  const viewport = useAppSelector(state => state.config.viewport);

  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <MFOPageDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <MFOPageMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default MFOPage;
