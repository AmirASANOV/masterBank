import React from 'react';

import { DecisionCapConfig, spacing } from '../../DecisionScriptsConfig';
import { CreditCashDecisionList } from '../CreditCashDecision';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { BannerTinkoffDecisions } from '@/Components/BannerDecisions/BannerTinkoff/BannerTinkoffDecisions';
import { RenderDefaultDecisions } from '@/Components/DecisionBlanks/DecisionBlanks';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { HurryUp } from '@/Components/HurryUp/HurryUp';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import Title from '@/Components/Text/Title/Title';
import { App } from '@/ProjectTypes/AppTypes';

type CreditCashFinishProps = Omit<CreditCashDecisionList, 'status' | 'credit_card_list'>;

const RecomendationListForFinishedTrue: React.FC<{
  product: Nullable<App.CreditProduct> | undefined;
}> = ({ product }) => (
  <GridItem colDesktop={6} colTablet={12}>
    <CustomList.Description
      descriptionClassName="description-20"
      list={
        product !== 'car_credit'
          ? [
              'Подойдите в ближайший офис банка, от которого поступило положительное решение',
              'Ближайший офис Вы сможете узнать на сайте этого банка',
              'Обратитесь к сотруднику с паспортом',
              'Получите кредит',
            ]
          : [
              'Подойдите в ближайший офис банка, от которого поступило положительное решение',
              'Обратитесь к сотруднику с паспортом',
              'Получите кредит',
            ]
      }
    />
  </GridItem>
);

export const CreditCashFinish: React.FC<CreditCashFinishProps> = ({
  decision_list,
  viewport,
  product,
  inProfile,
}) => (
  <>
    <Layout style={{ marginBottom: spacing.alignSpace[viewport] }}>
      <Grid
        container
        space={spacing.space[viewport]}
        alignSpace={spacing.alignSpace[viewport]}
        gridStyle={{ height: 'fit-content' }}
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
              <RenderDefaultDecisions
                data={decision_list?.filter(item => item.status !== 'REJECTED')}
                product={product === 'car_credit' ? 'car_credit' : 'credit_cash'}
                title="Заявка на кредит наличными"
                showTariffs
              />
            </GridItem>
            {!inProfile && <RecomendationListForFinishedTrue product={product} />}
          </>
        ) : (
          <>
            <GridItem colDesktop={6} colTablet={12}>
              <RenderDefaultDecisions
                data={decision_list?.filter(item => item.status !== 'REJECTED')}
                product={product === 'car_credit' ? 'car_credit' : 'credit_cash'}
                title="Заявка на кредит наличными"
                showTariffs
              />
            </GridItem>
            <GridItem
              style={{ marginRight: -20, marginLeft: -20 }}
              colMobile={12}
              colDesktop={12}
              colTablet={12}
              justify="center"
            >
              <HurryUp viewport={viewport} useMargin={false}>
                Одобрение действует 2 дня! Успейте воспользоваться
              </HurryUp>
            </GridItem>
          </>
        )}
      </Grid>
    </Layout>

    {viewport === 'desktop' ? (
      <>
        <BannerTinkoffDecisions type="CASH" />
        <HurryUp viewport={viewport}>
          Одобрение действует 2 дня! Успейте воспользоваться
        </HurryUp>
      </>
    ) : (
      ''
    )}

    {!inProfile && viewport !== 'desktop' ? (
      <>
        <Layout style={{ marginBottom: 25 }}>
          <Grid
            container
            space={spacing.space[viewport]}
            alignSpace={spacing.alignSpace[viewport]}
          >
            <RecomendationListForFinishedTrue product={product} />
          </Grid>
        </Layout>
        <BannerTinkoffDecisions type="CASH" />
      </>
    ) : (
      <>{viewport !== 'desktop' && <BannerTinkoffDecisions type="CASH" />}</>
    )}
  </>
);
