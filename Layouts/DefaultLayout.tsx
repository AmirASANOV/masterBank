import React from 'react';

import { useOutlet } from 'react-router-dom';

import Preloader from '../Components/Preloader/Preloader';

import { WithSuspense } from '@/Components/Suspense/WithSuspense';

const DocumentContainer = React.lazy(
  () => import('../containers/DocumentContainer/DocumentContainer'),
);

const Loader = <Preloader message="Загрузка страницы..." type="future" />;

function DefaultLayout() {
  const outlet = useOutlet();

  return (
    <WithSuspense fallBack={Loader}>
      {outlet}

      <DocumentContainer />
    </WithSuspense>
  );
}

export default DefaultLayout;
