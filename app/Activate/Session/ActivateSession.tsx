import { memo, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { activateNewSession } from '@/ReduxStore/reducer/userReducer/userReducer';
import { getPage } from '@/Utils/utils';

export const ActivateSession = memo(() => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistoryWithUTM();
  const step = useAppSelector(state => state.validator.current_step);
  const autoSessionStatus = useAppSelector(state => state.session.authFromAutoLoginToken);
  const isAuth = useAppSelector(state => state.session.isAuth);
  const autoLogin = useAppSelector(store => store.config.modalWindow);

  const token = params.token || '';

  useEffect(() => {
    dispatch(activateNewSession(token));
  }, [token]);

  useEffect(() => {
    if (autoSessionStatus && isAuth && !autoLogin) {
      history.push(`/user/credit/${getPage(history.location.pathname)}/${step}`);
    }
  }, [autoSessionStatus, isAuth]);

  return null;
});
