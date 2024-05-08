import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import AllRejectedDecision from './DecisionScripts/AllRejected/AllRejected';
import { useCreditDecisionTask } from './hooks/useCreditDecision';

import { creditTarget } from '@/Common/AppFormHelpers/DropdownLists';
import { analyzeCreditTarget } from '@/Common/AppFormHelpers/Helpers';
import PressButton from '@/Components/Buttons/PressButton';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
import { Prompt } from '@/Components/Messages/Prompt';
import Preloader from '@/Components/Preloader/Preloader';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { setSpinner } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';

const CreditCardDecision = React.lazy(
  () => import('./DecisionScripts/CreditCard/CreditCardDecision'),
);
const CreditCashDecision = React.lazy(
  () => import('./DecisionScripts/CreditCash/CreditCashDecision'),
);
const MFODecision = React.lazy(() => import('./DecisionScripts/MFO/MFODecision'));
const DepositDecision = React.lazy(
  () => import('./DecisionScripts/Deposit/DepositDecision'),
);

const Decisions: React.FC = () => {
  const result = useCreditDecisionTask();
  const dispatch = useDispatch();
  const history = useHistoryWithUTM();
  const viewport = useAppSelector(store => store.config.viewport);
  const inProfile = window.location.pathname.includes('myApplications');
  const changeMessage = useAppSelector(store => store.feedback.change_anketa_message);
  const product = useAppSelector(
    state => state.validator.credit_parameters_info.credit_target.result.value?.value,
  );

  useEffect(() => {
    dispatch(
      setSpinner({
        loaderStatus:
          !!result.data.response_status && result.data.response_status !== 'success',
        message: 'Загружаем решения по вашей заявке...',
        type: 'future',
      }),
    );
  }, [result.data.response_status]);

  return (
    <>
      {!result.data.finished &&
      /change_anketa/.test(history.location.pathname) &&
      changeMessage ? (
        <Layout>
          <Wrapper>
            <Prompt
              title="Дождитесь завершения рассмотрения текущей заявки"
              suggestionContent={[changeMessage]}
              titleStyle={{ marginBottom: 16 }}
              titleTextAlign={{ desktop: 'left', tablet: 'left', mobile: 'left' }}
            />
          </Wrapper>
        </Layout>
      ) : (
        ''
      )}

      {result.data.response_status === 'success' ? (
        <>
          {result.data.decision_type === 'CASH' ? (
            <>
              {result.data.credit_cash_response &&
              result.data.credit_cash_response.filter(item => item.status === 'APPROVED')
                .length > 0 &&
              result.data.finished ? (
                <WithSuspense
                  fallBack={
                    <Preloader
                      message="Получаем итоговые ответы от партнеров..."
                      type="future"
                    />
                  }
                >
                  <CreditCashDecision
                    credit_card_list={result.data.credit_card_response}
                    inProfile={inProfile}
                    decision_list={result.data.credit_cash_response}
                    viewport={viewport}
                    status="finish"
                    product={product}
                  />
                </WithSuspense>
              ) : (
                <WithSuspense
                  fallBack={
                    <Preloader
                      message="Получаем список партнеров, предварительно одобривших заявку..."
                      type="future"
                    />
                  }
                >
                  <CreditCashDecision
                    credit_card_list={result.data.credit_card_response}
                    inProfile={inProfile}
                    decision_list={result.data.credit_cash_response}
                    viewport={viewport}
                    status="process"
                    product={product}
                  />
                </WithSuspense>
              )}
            </>
          ) : result.data.decision_type === 'CARD' ||
            result.data.decision_type === 'INSTALLMENT_CARD' ? (
            <WithSuspense
              fallBack={
                <Preloader message="Получаем ответы от партнеров..." type="future" />
              }
            >
              <CreditCardDecision
                decision_type={result.data.decision_type}
                decision_list={result.data.credit_card_response}
                installment_card_list={result.data.installment_card_response}
                mfo_response={result.data.mfo_response}
                finished={result.data.finished}
                inProfile={inProfile}
                viewport={viewport}
                status="finish"
              />
            </WithSuspense>
          ) : result.data.decision_type === 'MFO' ||
            result.data.decision_type === 'WAIT_MFO' ? (
            <>
              {result.data.decision_type === 'WAIT_MFO' ? (
                <WithSuspense
                  fallBack={
                    <Preloader
                      message="Получаем одобрение с дополнительными условиями..."
                      type="future"
                    />
                  }
                >
                  <MFODecision
                    sendMFO={result.sendMFO}
                    inProfile={inProfile}
                    decision_list={result.data.mfo_response}
                    viewport={viewport}
                    status="wait"
                  />
                </WithSuspense>
              ) : result.data.mfo_response && result.data.finished ? (
                <WithSuspense
                  fallBack={
                    <Preloader
                      message="Получаем итоги заявки с дополнительными условиями..."
                      type="future"
                    />
                  }
                >
                  <MFODecision
                    sendMFO={result.sendMFO}
                    inProfile={inProfile}
                    decision_list={result.data.mfo_response}
                    viewport={viewport}
                    status="finish"
                  />
                </WithSuspense>
              ) : (
                <WithSuspense
                  fallBack={
                    <Preloader message="Отправляем запрос партнерам..." type="future" />
                  }
                >
                  <MFODecision
                    sendMFO={result.sendMFO}
                    inProfile={inProfile}
                    decision_list={result.data.mfo_response}
                    viewport={viewport}
                    status="process"
                    timer={result.timer}
                  />
                </WithSuspense>
              )}
            </>
          ) : result.data.decision_type === 'DEPOSIT' ||
            result.data.decision_type === 'WAIT_DEPOSIT' ? (
            <WithSuspense
              fallBack={
                <Preloader message="Загрузка залоговых продуктов..." type="future" />
              }
            >
              <DepositDecision
                decision_list={(result.data.deposit_car_response || []).concat(
                  result.data.deposit_estate_response || [],
                )}
                status={result.data.decision_type === 'WAIT_DEPOSIT' ? 'wait' : 'finish'}
                inProfile={inProfile}
                viewport={viewport}
                sendDeposit={result.sendDeposit}
                sendMFO={result.sendMFO}
                decision_type={result.data.decision_type}
              />
            </WithSuspense>
          ) : result.data.decision_type === 'ALL_REJECTED' ? (
            <AllRejectedDecision />
          ) : result.data.decision_type === null ? (
            <Layout>
              <Wrapper>
                <Prompt
                  title="Произошла ошибка."
                  titleStyle={{ marginBottom: 16 }}
                  suggestionContainerStyle={{ background: 'transparent' }}
                  suggestionContent={[
                    'При загрузке результатов рассмотрения вашей заявки произошла ошибка.;;Пожалуйста перезагрузите страницу или попробуйте зайти позже.',
                  ]}
                />
              </Wrapper>
            </Layout>
          ) : (
            ''
          )}
        </>
      ) : result.data.response_status === 'error' ? (
        <Layout>
          <Wrapper>
            <Prompt
              title="Произошла ошибка."
              titleStyle={{ marginBottom: 16 }}
              suggestionContainerStyle={{ background: 'transparent' }}
              suggestionContent={[
                'При загрузке результатов рассмотрения вашей заявки произошла ошибка.;;Пожалуйста перезагрузите страницу или попробуйте зайти позже.',
              ]}
            />
          </Wrapper>
        </Layout>
      ) : result.data.response_status === 'empty' ? (
        <Layout>
          <Wrapper style={{ overflow: 'hidden' }}>
            <Prompt
              titleClassName="header-30 mb-16"
              title="У вас еще нет отправленных заявок"
              suggestionContainerStyle={{ background: 'transparent' }}
              suggestionContent={[
                'Чтобы сформировать заявку выберите кредитный продукт ниже:',
              ]}
            />
            <Grid
              container
              direction="row"
              justify="space-around"
              align="stretch"
              alignSpace={viewport !== 'mobile' ? 20 : 10}
              space={20}
            >
              {creditTarget.map((item, index) => (
                <GridItem
                  colDesktop={4}
                  colTablet={4}
                  colMobile={12}
                  key={`product_${index + 1}`}
                >
                  <PressButton
                    type={viewport !== 'mobile' ? 'mainBold' : 'smallMainBold'}
                    text={`Оформить ${analyzeCreditTarget(
                      item.value,
                      'title_parental_case',
                    )}`}
                    onClick={() => {
                      dispatch(
                        AppFormActions.updateCreditProduct({
                          value: creditTarget.filter(i => i.value === item.value)[0],
                          touched: true,
                        }),
                      );
                      history.push(`/user/credit/${item.value}/`);
                    }}
                    key={`form_re_send_${index + 1}_btn`}
                  />
                </GridItem>
              ))}
            </Grid>
          </Wrapper>
        </Layout>
      ) : (
        ''
      )}
    </>
  );
};

export default Decisions;
