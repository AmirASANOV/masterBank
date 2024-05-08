import React, { createRef, FC, ReactNode } from 'react';

import useRenderObserver, { IntersectionArgs } from '../CustomHooks/useRenderObserver';

import { WithSuspense } from './Suspense/WithSuspense';
import Template from './Template';

interface Props {
  render?: IntersectionArgs;
  fallBack?: ReactNode | string;
  children: ReactNode;
}

const WithObserverSuspense: FC<Props> = ({ render, children, fallBack }) => {
  const ref = createRef<HTMLDivElement>();
  const IO = useRenderObserver(ref, render || {});

  return (
    <Template ref={ref}>
      {IO.entry?.isIntersecting ? (
        <WithSuspense fallBack={fallBack || ''}>{children}</WithSuspense>
      ) : (
        ''
      )}
    </Template>
  );
};

export default WithObserverSuspense;
