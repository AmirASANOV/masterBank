import React, { FC, ReactNode, Suspense } from 'react';

interface WithSuspense {
  fallBack?: ReactNode | string;
  children: ReactNode;
}

export const WithSuspense: FC<WithSuspense> = ({ fallBack, children }) => (
  <Suspense fallback={fallBack || ''}>{children}</Suspense>
);
