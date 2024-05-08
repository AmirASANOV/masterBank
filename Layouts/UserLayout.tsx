import React, { Suspense, useEffect } from 'react';

import { useOutlet } from 'react-router-dom';

import Preloader from '../Components/Preloader/Preloader';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';

function UserLayout() {
  const outlet = useOutlet();
  const history = useHistoryWithUTM();

  const { isAuth } = useAppSelector(state => state.session);

  useEffect(() => {
    if (isAuth) return;

    history.returnToBack();
  }, [isAuth, history]);

  return (
    <Suspense fallback={<Preloader message="Идёт загрузка страницы" />}>
      {outlet}
    </Suspense>
  );
}

export default UserLayout;
