import React from 'react';

import { DecisionCapConfig, spacing } from '../../DecisionScriptsConfig';
import { CreditCardSobankDecisionList } from '../types';

import { BannerTinkoffDecisions } from '@/Components/BannerDecisions/BannerTinkoff/BannerTinkoffDecisions';
import { RenderDefaultDecisions } from '@/Components/DecisionBlanks/DecisionBlanks';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { HurryUp } from '@/Components/HurryUp/HurryUp';
import { ClockTimer } from '@/Components/Icons/ClockTimer';
import { Lamp } from '@/Components/Icons/Lamp';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import { Prompt } from '@/Components/Messages/Prompt';
import { RecommendList } from '@/Components/Messages/RecommendList';
import Title from '@/Components/Text/Title/Title';
import { Current, currentDomain } from '@/GlobalConfig';

const CustomListCreditCardSobankFirst = () => {
  if (!window.location.pathname.includes('user')) return null;

  return (
    <CustomList.Description
      descriptionClassName="description-20"
      list={[
        'Подойдите в ближайший офис банка, от которого поступило положительное решение',
        'Ближайший офис Вы сможете узнать на сайте этого банка',
        'Обратитесь к сотруднику с паспортом',
        'Получите карту',
      ]}
    />
  );
};

const CustomListCreditCardSobankSecond = () => {
  if (!window.location.pathname.includes('user')) return null;

  return (
    <GridItem colDesktop={6} colTablet={12}>
      <CustomList.Description
        descriptionClassName="description-20"
        title={
          <div className="flex-jc-center-ai-center-nowrap mb-16">
            <Lamp color={Current.lampColor[currentDomain]} />
          </div>
        }
        list={[
          'На этой странице будут появляться окончательные решения банков',
          'Процесс рассмотрения заявки занимает до 10 минут',
          'Дождитесь решения от всех банков',
          'После одобрения получите карту курьером или в офисе банка',
        ]}
      />
    </GridItem>
  );
};

const SobankCreditCardDecision: React.FC<CreditCardSobankDecisionList> = ({
  decision_list,
  status,
  decision_type,
  viewport,
  installment_card_list,
}) => (
  <>
    {status === 'finish' ? (
      <>
        <Layout style={{ marginBottom: spacing.alignSpace[viewport] }}>
          <Grid
            container
            space={spacing.space[viewport]}
            alignSpace={spacing.alignSpace[viewport]}
          >
            <GridItem colDesktop={12}>
              <div
                className="flex-jc-center-ai-center-nowrap green-border success-shadow"
                style={{ padding: DecisionCapConfig.padding[viewport] }}
              >
                <Title
                  titleClassName="header-30"
                  titleType="h1"
                  titleStyle={{ textAlign: 'center', padding: 0, margin: 0 }}
                >
                  Поздравляем! {viewport !== 'desktop' ? <br /> : ''}
                  Ваша <span className="bold-text">заявка</span> окончательно{' '}
                  <span className="bold-text">одобрена</span>
                </Title>
              </div>
            </GridItem>
            {viewport === 'desktop' ? (
              <>
                <GridItem colDesktop={6} colTablet={12}>
                  <CustomListCreditCardSobankFirst />
                </GridItem>
                <GridItem colDesktop={6} colTablet={12}>
                  {decision_type === 'INSTALLMENT_CARD' ? (
                    <RenderDefaultDecisions
                      data={installment_card_list?.filter(
                        item => item.status !== 'REJECTED',
                      )}
                      product="installment_card"
                      title={null}
                      showTariffs
                    />
                  ) : (
                    <RenderDefaultDecisions
                      data={decision_list?.filter(item => item.status !== 'REJECTED')}
                      product="credit_card"
                      title={null}
                      showTariffs
                    />
                  )}
                </GridItem>
              </>
            ) : (
              <GridItem colDesktop={6} colTablet={12}>
                {decision_type === 'INSTALLMENT_CARD' ? (
                  <RenderDefaultDecisions
                    data={installment_card_list?.filter(
                      item => item.status !== 'REJECTED',
                    )}
                    product="installment_card"
                    title={null}
                    showTariffs
                  />
                ) : (
                  <RenderDefaultDecisions
                    data={decision_list?.filter(item => item.status !== 'REJECTED')}
                    product="credit_card"
                    title={null}
                    showTariffs
                  />
                )}
              </GridItem>
            )}
          </Grid>
        </Layout>

        {viewport === 'desktop' ? (
          <>
            <BannerTinkoffDecisions type="CARD" />
            <HurryUp viewport={viewport}>
              Одобрение действует 2 дня! Успейте воспользоваться
            </HurryUp>
          </>
        ) : (
          <>
            <HurryUp viewport={viewport}>
              Одобрение действует 2 дня! Успейте воспользоваться
            </HurryUp>
            <Layout>
              <Grid container>
                <GridItem colTablet={12} style={{ paddingBottom: 25 }}>
                  <CustomListCreditCardSobankFirst />
                </GridItem>
              </Grid>
            </Layout>
            <BannerTinkoffDecisions type="CARD" />
          </>
        )}

        <Layout>
          <Grid container>
            <GridItem colDesktop={12}>
              <RecommendList
                body={
                  <Prompt
                    suggestionContainerStyle={{ background: 'transparent' }}
                    suggestionContent={[
                      `Рекомендация:`,
                      'Если суммы, одобренной одним банком не хватает, то Вы можете воспользоваться сразу несколькими одобрениями, получив кредитную карту в нескольких банках. Также, если Вы будете активно пользоваться кредитной картой и не совершать просрочку платежей, то Банк увеличит лимит и предложит более выгодные условия. ',
                    ]}
                  />
                }
              />
            </GridItem>
          </Grid>
        </Layout>
      </>
    ) : (
      <Layout>
        <Grid
          container
          space={spacing.space[viewport]}
          alignSpace={spacing.alignSpace[viewport]}
        >
          <GridItem
            colDesktop={12}
            justify="center"
            align="center"
            wrap="nowrap"
            useWrapperLayout
            style={{ padding: '12px 8px' }}
          >
            <ClockTimer
              size={viewport === 'mobile' ? 27 : 50}
              minutesArrowWidth="38%"
              arrowDepth={viewport === 'mobile' ? 2 : 3}
              hoursArrowWidth="30%"
              borderWidth={viewport === 'mobile' ? 2 : 4}
              color={Current.clockTimer[currentDomain]}
            />
            <h2 className="header-24" style={{ paddingLeft: 15, width: 'fit-content' }}>
              Ваша заявка рассматривается в банках-партнерах.
            </h2>
          </GridItem>
          {viewport === 'desktop' ? (
            <>
              <CustomListCreditCardSobankSecond />
              <GridItem colDesktop={6} colTablet={12}>
                {decision_type === 'INSTALLMENT_CARD' ? (
                  <RenderDefaultDecisions
                    data={installment_card_list}
                    product="installment_card"
                    title={null}
                  />
                ) : (
                  <RenderDefaultDecisions
                    data={decision_list}
                    product="credit_card"
                    title={null}
                  />
                )}
              </GridItem>
            </>
          ) : (
            <>
              <GridItem colDesktop={6} colTablet={12}>
                {decision_type === 'INSTALLMENT_CARD' ? (
                  <RenderDefaultDecisions
                    data={installment_card_list}
                    product="installment_card"
                    title={null}
                  />
                ) : (
                  <RenderDefaultDecisions
                    data={decision_list}
                    product="credit_card"
                    title={null}
                  />
                )}
              </GridItem>
              <CustomListCreditCardSobankSecond />
            </>
          )}
        </Grid>
      </Layout>
    )}
  </>
);

export default SobankCreditCardDecision;
