import React, { FC } from 'react';

import Masonry from 'react-masonry-css';

import { useOffersDecision } from '../../../hooks/useOffersDecision';
import { mfoNameFiltering } from '../../../utils';
import { FinishedTitle } from '../../components/FinishedTitle';
import { mfoSpacing } from '../data';
import s from '../style/Mfo.module.sass';

import { SERVER_URL } from '@/ApiConfig/apiConfigs';
import { RenderMFOResult } from '@/Components/DecisionBlanks/DecisionBlanks';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { HurryUp } from '@/Components/HurryUp/HurryUp';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import { MFOResponse } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

type MfoFinishPropsType = {
  viewport: Viewport;
  decision_list: MFOResponse;
  hideDescription?: boolean;
};

/* eslint-disable */

export const MfoFinish: FC<MfoFinishPropsType> = ({
  viewport,
  decision_list,
  hideDescription,
}) => {
  //@ts-expect-error
  const offers: MFOResponse = useOffersDecision().map(item => ({
    ...item,
    login_link: `${SERVER_URL}/api/redirect/?partner_name=${item.name}&login_link=${item.login_link}`,
  }));

  const mfoApproved = mfoNameFiltering(decision_list, ['МаниМэн', 'Kvik', 'Zaimer']);
  const mfoWorkInfo = mfoNameFiltering(decision_list, ['Zaymigo', 'ZaimExpress']);
  const mfoCall = mfoNameFiltering(decision_list, [
    'Центр подбора займов',
    'Деньги Сразу',
  ]);

  return (
    <>
      <Layout style={{ marginBottom: mfoSpacing.alignSpace[viewport] }}>
        <Grid
          container
          space={mfoSpacing.space[viewport]}
          alignSpace={mfoSpacing.alignSpace[viewport]}
          gridStyle={{ height: 'fit-content' }}
        >
          <GridItem colDesktop={12} wrap="wrap" justify="center">
            <FinishedTitle viewport={viewport} />
          </GridItem>
        </Grid>

        <Masonry
          className={s['my-masonry-grid']}
          columnClassName={s['my-masonry-grid_column']}
          breakpointCols={{ default: 2, 992: 1 }}
        >
          {!!mfoApproved?.length && (
            <div className={s.masonryGrid__item}>
              <RenderMFOResult
                data={mfoApproved}
                showTariffs
                title="Одобрено. Готово к выдаче"
              />
            </div>
          )}
          {!!mfoWorkInfo?.length && (
            <div className={s.masonryGrid__item}>
              <RenderMFOResult
                data={mfoWorkInfo}
                showTariffs
                title="Предодобрено. Заполните информацию о работе"
              />
            </div>
          )}
          {!!offers?.length && (
            <div className={s.masonryGrid__item}>
              <RenderMFOResult data={offers} showTariffs title="Без отказа" />
            </div>
          )}
          {!!mfoCall?.length && (
            <div className={s.masonryGrid__item}>
              <RenderMFOResult
                data={mfoCall}
                showTariffs
                title="Позвонят и озвучат решение"
              />
            </div>
          )}
        </Masonry>
      </Layout>

      {!hideDescription && (
        <>
          <HurryUp viewport={viewport}>
            Одобрение действует 1 день! Успейте воспользоваться
          </HurryUp>

          <Layout>
            <Grid
              container
              space={mfoSpacing.space[viewport]}
              alignSpace={mfoSpacing.alignSpace[viewport]}
            >
              <GridItem colDesktop={6} colTablet={12}>
                <CustomList.Description
                  descriptionClassName="description-20"
                  list={[
                    'Выберите подходящий, нажав кнопку “Получить”',
                    'Если перевод на карту отклонили, то выберите другое одобренное предложение из списка выше, нажмите “Получить” и попробуйте снова',
                  ]}
                />
              </GridItem>
              <GridItem colDesktop={6} colTablet={12}>
                <CustomList.Description
                  descriptionClassName="description-20"
                  title="Как получить кредит на более крупную сумму?"
                  list={[
                    'Возьмите маленький кредит до 30 000 руб.',
                    'Погасите его своевременно без просрочек или досрочно (в течение 5 дней)',
                    'Банк увидит, что Вы надежный заемщик',
                    'Подайте новую заявку через 3 дня после погашения небольшого кредита и получите одобрение на более крупную сумму',
                  ]}
                />
              </GridItem>
            </Grid>
          </Layout>
        </>
      )}
    </>
  );
};
