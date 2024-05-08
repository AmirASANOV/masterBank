import React, { useEffect, useState } from 'react';

import { ShowcaseDesktop } from './components/ShowcaseDesktop';
import { ShowcaseMobile } from './components/ShowcaseMobile';
import { showcaseArray, showcaseMFO } from './data';
import s from './style/Showcase.module.sass';

import { Grid, GridItem } from '@/Components/Grid/Grid';
import Layout from '@/Components/Layouts/Layout';
import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const Showcase: React.FC = () => {
  const resolution = useAppSelector(state => state.config.viewport);
  const { isAuth } = useAppSelector(store => store.session);
  const [isRedirect, setIsRedirect] = useState(false);
  const [howProduct, setHowProduct] = useState('');
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();

  const arrayFromUrl =
    history.location.pathname === '/showcase' ? showcaseArray(resolution) : showcaseMFO;

  const onclickHandler = (product: string) => {
    if (!isAuth) {
      dispatch(showModal(true));
      setIsRedirect(true);
      setHowProduct(product);
    } else {
      history.push(`/user/credit/${product}/`);
    }
  };

  useEffect(() => {
    if (isAuth && isRedirect) {
      history.push(`/user/credit/${howProduct}/credit_parameters_info`);
    }
  }, [isAuth, isRedirect]);

  return (
    <Layout className={s.showcase}>
      <Grid container alignSpace={20}>
        <GridItem
          colDesktop={12}
          wrap="wrap"
          justify="center"
          className={s.showcase__header}
        >
          <div
            className="flex-jc-center-ai-center-nowrap  green-border"
            style={{ padding: resolution !== 'desktop' ? 16 : 24 }}
          >
            <h1 className={s.showcase__title}>
              Для Вас уже <span>готовы одобренные решения</span> от банков из списка ниже.
              <p>
                Для того, чтобы узнать условия, подтвердите свои данные, заполнив короткую
                анкету.
              </p>
            </h1>
          </div>
        </GridItem>
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          {resolution !== 'mobile' ? (
            <ShowcaseDesktop
              showcaseArray={arrayFromUrl}
              resolution={resolution}
              onclickHandler={onclickHandler}
            />
          ) : (
            <ShowcaseMobile
              showcaseArray={arrayFromUrl}
              onclickHandler={onclickHandler}
            />
          )}
        </WithSuspense>
      </Grid>
    </Layout>
  );
};

export default Showcase;
