import React, { useEffect } from 'react';

import { useLocation } from 'react-router';
import { useOutlet } from 'react-router-dom';

import PressButton from '../Components/Buttons/PressButton';
import InfoFooter from '../Components/Footers/InfoFooter';
import Layout from '../Components/Layouts/Layout';
import Preloader from '../Components/Preloader/Preloader';
import Title from '../Components/Text/Title/Title';
import Timer from '../Components/Timer/Timer';
import useAppDispatch from '../CustomHooks/useAppDispatch';
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm';

import { analyzeCreditTarget } from '@/Common/AppFormHelpers/Helpers';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { Prompt } from '@/Components/Messages/Prompt';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import { ValidatorThunk } from '@/ReduxStore/reducer/Validator/ValidatorThunk';
import { getProductFromUrl } from '@/Utils/utils';

const Loader = <Preloader message="Загрузка следующего этапа..." type="future" />;

function FormLayout() {
  const outlet = useOutlet();
  const dispatch = useAppDispatch();
  const history = useHistoryWithUTM();
  const { pathname } = useLocation();

  const page = getProductFromUrl();

  const { viewport } = useAppSelector(state => state.config);
  const { validator } = useAppSelector(state => state);
  const { current_step } = validator;

  useEffect(() => {
    history.push(current_step);
  }, [current_step]);

  return (
    <WithSuspense fallBack={Loader}>
      <ApplicationForm />

      <Layout id="wrapper">
        {validator.current_step === 'credit_parameters_info' &&
        !pathname.includes('user/credit/credit_card') ? (
          <Title
            titleType="h1"
            titleClassName="header-30 mb-24"
            titleTextAlign={{ mobile: 'center', tablet: 'center' }}
          >
            Заявка на {analyzeCreditTarget(page, 'title_parental_case')}!
          </Title>
        ) : (
          ''
        )}

        {validator.mode === 'change_anketa' &&
        validator.current_step === 'credit_parameters_info' ? (
          <Grid container space={16} alignSpace={16} style={{ marginBottom: 24 }}>
            <GridItem colDesktop={12}>
              <Prompt
                suggestionItemStyle={{ textAlign: 'center' }}
                suggestionContent={[
                  'Вы находитесь в режиме редактирования ваших анкетных данных',
                  'Если вы хотите вернуться к результатам рассмотрения вашей последней заявки, нажмите "Перейти к решениям".',
                ]}
              />
            </GridItem>

            <GridItem colDesktop={12} justify="center">
              <PressButton
                text="Перейти к решениям"
                type="smallMainBold"
                onClick={() => {
                  dispatch(AppFormActions.setValidatorMode('credit'));
                  dispatch(ValidatorThunk.getAnketa());
                }}
              />
            </GridItem>
          </Grid>
        ) : (
          ''
        )}
      </Layout>

      {outlet}

      {/* {(pathname.includes('user/credit/credit_card') ||
        pathname.includes('user/change_anketa/credit_card')) &&
        viewport === 'mobile' && (
          <>
            <div className="mb-32" />
            <Layout style={{ padding: '16px' }}>
              <Timer />
            </Layout>
          </>
        )} */}

      {/* {validator.current_step !== 'decisions' ? (
        <Layout>
          <InfoFooter />
        </Layout>
      ) : (
        ''
      )} */}
    </WithSuspense>
  );
}

export default FormLayout;
