import React, { FC } from 'react';

import { mfoSpacing } from '../data';

import { Grid, GridItem } from '@/Components/Grid/Grid';
import { ClockTimer } from '@/Components/Icons/ClockTimer';
import { iconsConfig } from '@/Components/Icons/IconConfig';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import { Prompt } from '@/Components/Messages/Prompt';
import { RecommendList } from '@/Components/Messages/RecommendList';
import { Current, currentDomain } from '@/GlobalConfig';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

type MfoProcessPropsType = {
  viewport: Viewport;
  timer?: { seconds: string; minute: string };
};

export const MfoProcess: FC<MfoProcessPropsType> = ({ timer, viewport }) => (
  <Layout>
    <Grid
      container
      space={mfoSpacing.space[viewport]}
      alignSpace={mfoSpacing.alignSpace[viewport]}
      gridStyle={{ height: 'fit-content' }}
    >
      <GridItem
        colDesktop={12}
        justify={viewport === 'desktop' ? 'center' : 'flex-start'}
        align="center"
        wrap="nowrap"
        useWrapperLayout
      >
        <ClockTimer
          size={viewport === 'mobile' ? 36 : 50}
          minutesArrowWidth="38%"
          arrowDepth={3}
          hoursArrowWidth="30%"
          borderWidth={4}
          color={Current.clockTimer[currentDomain]}
        />
        <h2 className="header-24" style={{ marginLeft: 10, width: 'fit-content' }}>
          Получаем условия по кредиту до 30 000 руб.
        </h2>
      </GridItem>
      <GridItem colDesktop={6} colTablet={12} colMobile={12} useWrapperLayout>
        <div className="flex-jc-center-ai-center-wrap">
          <span
            className="subtitle"
            style={{ textAlign: 'center', padding: 0, margin: 0 }}
          >
            В этом окне появятся одобренные условия по первому кредиту на маленькую сумму,
            это занимает <span className="bold-text">до 5 минут.</span>
          </span>
          <div className="flex-jc-center-ai-center-nowrap mt-12">
            <span
              className="timer-text"
              style={{ color: iconsConfig.colors[Current.lampColor[currentDomain]] }}
            >
              {timer?.minute} : {timer?.seconds}
            </span>
          </div>
        </div>
      </GridItem>
      <GridItem colDesktop={6} colTablet={12} colMobile={12}>
        <CustomList.Description
          descriptionClassName="description-20"
          title={
            viewport === 'desktop'
              ? 'Пока идет согласование условий, прочитайте полезную информацию'
              : `Как получить кредит на более крупную сумму?`
          }
          list={[
            'Возьмите маленький кредит до 30 000 руб.',
            'Погасите его своевременно без просрочек или досрочно (в течение 5 дней)',
            'Банк увидит, что Вы надежный заемщик',
            'Подайте новую заявку через 3 дня после погашения небольшого кредита и получите одобрение на сумму до 2 000 000 руб.',
          ]}
        />
      </GridItem>
      <GridItem colDesktop={12} colMobile={12}>
        <RecommendList
          body={
            <Prompt
              suggestionContainerStyle={{ background: 'transparent' }}
              suggestionContent={[
                `Рекомендация:;; - Если нужна более крупная сумма прямо сейчас, то Вы можете воспользоваться несколькими одобренными предложениями;; - Не покидайте страницу сайта в течение 5 минут, чтобы получить все условия`,
              ]}
            />
          }
        />
      </GridItem>
    </Grid>
  </Layout>
);
