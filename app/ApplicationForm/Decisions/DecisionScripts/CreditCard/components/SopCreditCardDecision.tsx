import React from 'react';

import Masonry from 'react-masonry-css';

import { useOffersDecision } from '../../../hooks/useOffersDecision';
import { mfoNameFiltering } from '../../../utils';
import { FinishedTitle } from '../../components/FinishedTitle';
import { spacing } from '../../DecisionScriptsConfig';
import s from '../style/CreditCard.module.sass';
import { CreditCardDecisionList } from '../types';

import {
  RenderDefaultDecisions,
  RenderMFOResult,
} from '@/Components/DecisionBlanks/DecisionBlanks';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { HurryUp } from '@/Components/HurryUp/HurryUp';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';

const SopCreditCardDecision: React.FC<CreditCardDecisionList> = ({
  decision_list,
  decision_type,
  viewport,
  installment_card_list,
  finished,
  mfo_response,
}) => {
  const offers = useOffersDecision();

  const mfoApproved = mfoNameFiltering(mfo_response, ['Kvik', 'Zaimer']);
  const mfoWorkInfo = mfoNameFiltering(mfo_response, [
    'МаниМэн',
    'Zaymigo',
    'ZaimExpress',
  ]);
  const mfoCall = mfoNameFiltering(mfo_response, [
    'Центр подбора займов',
    'Деньги Сразу',
  ]);

  return (
    <>
      <Layout style={{ marginBottom: spacing.alignSpace[viewport] }}>
        {finished && <FinishedTitle viewport={viewport} />}
        {decision_type === 'INSTALLMENT_CARD' ? (
          <Grid
            container
            space={spacing.space[viewport]}
            alignSpace={spacing.alignSpace[viewport]}
          >
            <GridItem colDesktop={6} colTablet={12}>
              <RenderDefaultDecisions
                data={installment_card_list?.filter(item => item.status !== 'REJECTED')}
                product="installment_card"
                title={null}
                showTariffs
              />
            </GridItem>
          </Grid>
        ) : (
          <Masonry
            className={s['my-masonry-grid']}
            columnClassName={s['my-masonry-grid_column']}
            breakpointCols={{ default: 2, 992: 1 }}
          >
            {!!decision_list?.length && (
              <div className={s.masonryGrid__item}>
                <RenderDefaultDecisions
                  data={decision_list?.filter(item => item.status !== 'REJECTED')}
                  product="credit_card"
                  title="Заявка на кредитную карту"
                  showTariffs
                />
              </div>
            )}
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
        )}
      </Layout>
      <HurryUp viewport={viewport}>
        Одобрение действует 1 день! Успейте воспользоваться
      </HurryUp>
      <Layout>
        <Grid
          container
          space={spacing.space[viewport]}
          alignSpace={spacing.alignSpace[viewport]}
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
  );
};

export default SopCreditCardDecision;
