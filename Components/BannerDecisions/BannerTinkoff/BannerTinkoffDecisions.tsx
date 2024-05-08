import React, { lazy } from 'react';

import { WithSuspense } from '../../Suspense/WithSuspense';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { DecisionType } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

const TinkoffDesktop = lazy(() => import('./TinkoffDesktop'));
const TinkoffMobile = lazy(() => import('./TinkoffMobile'));

export type BannerTinkoffDecisionsPropsType = {
  type: DecisionType;
};

export type TinkoffDesktopType = BannerTinkoffDecisionsPropsType & {
  viewport: Viewport;
};

export const tinkoff_link =
  'https://dp.tinkoff.ru/click?sspotct=wQfFeguUEUq8IJZuDWQRLfgZbUqR3F%2BMoUTokmv9cGwPobiLQSnWmgEaghTXhaBx&sub10=xlab&sub11=&sub12=';

export const BannerTinkoffDecisions: React.FC<BannerTinkoffDecisionsPropsType> = ({
  type,
}) => {
  const viewport = useAppSelector(store => store.config.viewport);

  return (
    <>
      {viewport !== 'mobile' ? (
        <WithSuspense fallBack="Загрузка рекламы...">
          <TinkoffDesktop viewport={viewport} type={type} />
        </WithSuspense>
      ) : (
        <WithSuspense fallBack="Загрузка рекламы...">
          <TinkoffMobile viewport={viewport} type={type} />
        </WithSuspense>
      )}
    </>
  );
};
