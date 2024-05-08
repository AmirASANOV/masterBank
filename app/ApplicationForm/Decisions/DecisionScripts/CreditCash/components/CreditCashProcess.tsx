import React from 'react';

import { spacing } from '../../DecisionScriptsConfig';
import { CreditCashDecisionList } from '../CreditCashDecision';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { RenderDefaultDecisions } from '@/Components/DecisionBlanks/DecisionBlanks';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { ClockTimer } from '@/Components/Icons/ClockTimer';
import { Lamp } from '@/Components/Icons/Lamp';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import { Current, currentDomain } from '@/GlobalConfig';
import { App } from '@/ProjectTypes/AppTypes';

type CreditCashProcessProps = Omit<CreditCashDecisionList, 'status' | 'credit_card_list'>;

const RecomendationListForFinishedFalse: React.FC<{
  product: Nullable<App.CreditProduct> | undefined;
}> = ({ product }) => (
  <GridItem colDesktop={6} colTablet={12}>
    <CustomList.GridList
      gridItemConfig={{ colDesktop: 12, colTablet: 12 }}
      gridConfig={{ container: true, space: 20, alignSpace: 24 }}
      descriptionClassName="description-20"
      titleConfig={{
        children: (
          <div className="flex-jc-center-ai-center-nowrap mb-16">
            <Lamp color={Current.lampColor[currentDomain]} />
          </div>
        ),
      }}
      list={
        product !== 'car_credit'
          ? [
              'В этом окне будут появляться окончательные решения банков-партнеров',
              'Процесс рассмотрения заявки занимает до 10 минут',
              'Дождитесь решения от всех банков',
              'Если поступит положительное решение, то кредит (карту) останется получить курьером или в офисе банка',
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

export const CreditCashProcess: React.FC<CreditCashProcessProps> = ({
  viewport,
  product,
  inProfile,
  decision_list,
}) => (
  <Layout>
    <Grid
      container
      space={spacing.space[viewport]}
      alignSpace={spacing.alignSpace[viewport]}
      gridStyle={{ height: 'fit-content' }}
    >
      <GridItem
        colDesktop={12}
        style={{ padding: '12px 8px' }}
        justify="center"
        useWrapperLayout
        align="center"
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ClockTimer
            size={viewport === 'mobile' ? 27 : 50}
            minutesArrowWidth="38%"
            arrowDepth={2}
            hoursArrowWidth="30%"
            borderWidth={2}
            color={Current.clockTimer[currentDomain]}
          />
          <h2 className="header-24" style={{ paddingLeft: 15 }}>
            Ваша заявка рассматривается в банках-партнерах.
          </h2>
        </div>
      </GridItem>
      {viewport === 'desktop' ? (
        <>
          <GridItem colDesktop={6} colTablet={12}>
            <RenderDefaultDecisions
              data={decision_list}
              product={product === 'car_credit' ? 'car_credit' : 'credit_cash'}
              title="Заявка на кредит наличными"
            />
          </GridItem>
          {!inProfile && <RecomendationListForFinishedFalse product={product} />}
        </>
      ) : (
        <>
          <GridItem colDesktop={6} colTablet={12}>
            <RenderDefaultDecisions
              data={decision_list}
              product={product === 'car_credit' ? 'car_credit' : 'credit_cash'}
              title="Заявка на кредит наличными"
            />
          </GridItem>
          {!inProfile && <RecomendationListForFinishedFalse product={product} />}
        </>
      )}
    </Grid>
  </Layout>
);
