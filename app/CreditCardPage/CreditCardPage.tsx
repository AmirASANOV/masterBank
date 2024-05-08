import React, { lazy } from 'react';

import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const CreditCardMobile = lazy(() => import('./CreditCardMobile'));
const CreditCardDesktop = lazy(() => import('./CreditCardDesktop'));

const CreditCardPage: React.FC = () => {
  const viewport = useAppSelector(state => state.config.viewport);
  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <CreditCardDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <CreditCardMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default CreditCardPage;
