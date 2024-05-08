import React, { useEffect } from 'react';

import { withRouter } from '../Components/WithRouter/WithRouter';
import { useAppSelector } from '../CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '../CustomHooks/useHistoryWithUTM';

const WelcomePage: React.FC = () => {
  const stateAuth = useAppSelector(state => state.session.isAuth);
  const history = useHistoryWithUTM();

  useEffect(() => {
    if (!stateAuth) {
      history.push('/');
    }
  }, [stateAuth]);

  return null;
};

export default withRouter(WelcomePage);
