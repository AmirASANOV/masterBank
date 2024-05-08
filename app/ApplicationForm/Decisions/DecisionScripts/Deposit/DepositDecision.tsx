import React from 'react';

import { DecisionComponent } from '../CreditCash/CreditCashDecision';
import { spacing } from '../DecisionScriptsConfig';

import DepositProductDecisionsList from '@/Components/ApplicationFormComponents/DepositProductDecisionsList';
import PressButton from '@/Components/Buttons/PressButton';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import {
  DecisionType,
  DepositResponses,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

interface DecisionList extends DecisionComponent<DepositResponses> {
  sendMFO: () => void;
  sendDeposit: () => void;
  decision_type: DecisionType;
}

const DepositDecision: React.FC<DecisionList> = ({
  decision_list,
  status,
  viewport,
  sendMFO,
  sendDeposit,
  decision_type,
}) => (
  <>
    {status === 'wait' ? (
      <Layout>
        <Grid
          container
          space={spacing.space[viewport]}
          alignSpace={spacing.alignSpace[viewport]}
          gridStyle={{ height: 'fit-content' }}
        >
          <GridItem colDesktop={12} useWrapperLayout justify="center">
            <span
              className="subtitle"
              style={{ textAlign: 'center', padding: 0, margin: 0 }}
            >
              Ваша <span className="bold-text">заявка одобрена</span> с{' '}
              {viewport !== 'desktop' ? <br /> : ''}
              <span style={{ whiteSpace: 'nowrap' }}>Дополнительными условиями</span>
            </span>
          </GridItem>
          <GridItem
            colDesktop={12}
            style={{ height: '100%' }}
            useWrapperLayout
            wrap="nowrap"
          >
            {viewport === 'desktop' ? (
              <CustomList.HorizontalList
                descriptionClassName="description-20"
                itemStyle={{ minHeight: 150, padding: 10 }}
                useWrapper={false}
                headerContainerStyle={{ marginBottom: 20 }}
                descriptionStyle={{ marginTop: 16, textAlign: 'center' }}
                title="Доступные варианты"
                list={[
                  'Вы можете получить всю запрашиваемую сумму сразу, но под залог автомобиля или недвижимости',
                  `Получите первый кредит без залога на сумму до 30 000 руб. Верните его без просрочек в течение 30 дней. Банк оценит Вас как надежного клиента и одобрит следующую сумму до  2 000 000 руб. без залога`,
                ]}
              />
            ) : (
              <CustomList.Description
                descriptionClassName="description-20"
                useWrapper={false}
                titleStyle={{ textAlign: 'left' }}
                headerContainerStyle={{
                  marginBottom: 20,
                  justifyContent: 'flex-start',
                  width: '100%',
                }}
                title="Доступные варианты"
                list={[
                  'Вы можете получить всю запрашиваемую сумму сразу, но под залог автомобиля или недвижимости',
                  `Получите первый кредит без залога на сумму до 30 000 руб. Верните его без просрочек в течение 30 дней. Банк оценит Вас как надежного клиента и одобрит следующую сумму до  2 000 000 руб. без залога`,
                ]}
              />
            )}
          </GridItem>
          <GridItem colDesktop={6} colTablet={12}>
            <PressButton
              type={viewport === 'mobile' ? 'mainBold' : 'mainBold'}
              htmlType="button"
              onClick={sendDeposit}
              style={{ width: '100%', padding: '16px 10px' }}
            >
              <span className="bold-text">
                Получить всю сумму{viewport !== 'desktop' ? '' : <br />} под залог
              </span>
            </PressButton>
          </GridItem>
          <GridItem colDesktop={6} colTablet={12}>
            <PressButton
              type={viewport === 'mobile' ? 'mainBold' : 'mainBold'}
              htmlType="button"
              onClick={sendMFO}
              style={{ width: '100%', padding: '16px 10px' }}
            >
              <span className="bold-text">
                Получить первый кредит{viewport !== 'desktop' ? ' ' : <br />}
                <span style={{ whiteSpace: 'nowrap' }}>30 000 руб.</span>
              </span>
            </PressButton>
          </GridItem>
          <GridItem colDesktop={6} colTablet={12}>
            <CustomList.Description
              descriptionClassName="description-20"
              title={
                <h2 className="header-24">
                  Почему банк не одобрил всю сумму без залога?
                </h2>
              }
              headerContainerStyle={{ margin: 0, width: '100%' }}
              subTitle="Возможные причины ниже:"
              list={[
                `Плохая кредитная история`,
                `Нет кредитной истории`,
                `Высокая кредитная нагрузка`,
                `Наличие долгов или судимостей`,
                `Долги у родственников первой линии`,
              ]}
            />
          </GridItem>
          <GridItem colDesktop={6} colTablet={12}>
            <CustomList.Description
              descriptionClassName="description-20"
              title={
                <h2 className="header-24" style={{ marginBottom: 16 }}>
                  Как получить кредит на более крупную сумму, если я не хочу оставлять
                  залог?
                </h2>
              }
              headerContainerStyle={{ margin: 0 }}
              list={[
                'Возьмите первый кредит до 30 000 руб.',
                'Погасите его своевременно без просрочек или досрочно (в течение 5 дней)',
                'Банк увидит, что Вы надежный заемщик',
                'Подайте новую заявку через 3 дня после погашения первого кредита и получите одобрение на сумму до 2 000 000 руб.',
              ]}
            />
          </GridItem>
        </Grid>
      </Layout>
    ) : (
      <Layout>
        <Grid
          container
          space={spacing.space[viewport]}
          alignSpace={spacing.alignSpace[viewport]}
          gridStyle={{ height: 'fit-content' }}
        >
          <GridItem colDesktop={12}>
            <CustomList.GridList
              titleConfig={{
                children: (
                  <span
                    className="subtitle"
                    style={{ textAlign: 'center', padding: 0, margin: 0 }}
                  >
                    Поздравляем!
                    <br />
                    <span style={{ fontWeight: 600 }}>Условия согласованы!</span>
                  </span>
                ),
                titleClassName: 'green-border',
                titleStyle: {
                  padding: 10,
                  marginTop: 0,
                  marginBottom: 20,
                },
              }}
              subtitleConfig={{
                subtitleClassName: 'header-24',
                children: 'Ниже указаны одобренные сумма, ставка и вид залога.',
                subtitleStyle: { display: 'block' },
                subtitleMargins: {
                  desktop: { bottom: 24 },
                  tablet: { bottom: 16 },
                  mobile: { bottom: 16 },
                },
              }}
              gridConfig={{
                container: true,
                space: spacing.space[viewport],
                alignSpace: 24,
              }}
              descriptionClassName="description-20"
              list={[
                'Выберите подходящий, нажав кнопку “Получить”',
                'Дождитесь звонка оператора',
                'Подойдите в офис и получите кредит',
              ]}
            />
          </GridItem>
          <GridItem colDesktop={6} colTablet={12}>
            <DepositProductDecisionsList
              list={decision_list}
              header=""
              decision_type={decision_type}
            />
          </GridItem>
          <GridItem colDesktop={6} colTablet={12}>
            <CustomList.Description
              descriptionClassName="description-20"
              title={
                <h2 className="header-24">
                  Как получить кредит на более крупную сумму, если я не хочу оставлять
                  залог?
                </h2>
              }
              list={[
                `Возьмите первый кредит до 30 000 руб.`,
                'Погасите его своевременно без просрочек или досрочно (в течение 5 дней)',
                'Банк увидит, что Вы надежный заемщик',
                'Подайте новую заявку через 3 дня после погашения первого кредита и получите одобрение на сумму до 2 000 000 руб.',
              ]}
            />
          </GridItem>
          <GridItem colDesktop={12} colTablet={12}>
            <PressButton
              type={viewport === 'mobile' ? 'mainBold' : 'mainBold'}
              text="Получить первый кредит 30 000 руб."
              htmlType="button"
              onClick={sendMFO}
              style={{ width: '100%' }}
            />
          </GridItem>
        </Grid>
      </Layout>
    )}
  </>
);

export default DepositDecision;
