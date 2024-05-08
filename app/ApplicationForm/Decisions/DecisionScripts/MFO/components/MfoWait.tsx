import React, { FC } from 'react';

import { DecisionCapConfig } from '../../DecisionScriptsConfig';
import { mfoSpacing } from '../data';

import PressButton from '@/Components/Buttons/PressButton';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import Layout from '@/Components/Layouts/Layout';
import CustomList from '@/Components/Lists/CustomList';
import Title from '@/Components/Text/Title/Title';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

type MfoWaitPropsType = {
  viewport: Viewport;
  sendMFO: () => void;
};

const buttonSize = {
  desktop: 'fit-content',
  tablet: '100%',
  mobile: '100%',
};

export const MfoWait: FC<MfoWaitPropsType> = ({ viewport, sendMFO }) => {
  const history = useHistoryWithUTM();

  const sendMfoAndOpenShowcase = () => {
    sendMFO();
    window.open(
      `${window.location.origin}/user/credit/mfo/decisions/mfo${history.location.search}`,
      '_blank',
    );
    setTimeout(() => {
      window.location.replace(`https://microzaim.org${history.location.search}`);
    }, 2000);
    history.push('/showcase/mfo');
  };

  return (
    <Layout>
      <Grid
        container
        space={mfoSpacing.space[viewport]}
        alignSpace={mfoSpacing.alignSpace[viewport]}
        gridStyle={{ height: 'fit-content' }}
      >
        <GridItem
          wrap="nowrap"
          justify="center"
          align="center"
          useWrapperLayout
          colDesktop={12}
          className="green-border"
          style={{ padding: DecisionCapConfig.padding[viewport] }}
        >
          <Title
            titleClassName="header-30"
            titleStyle={{ fontWeight: 400 }}
            titleTextAlign={{ desktop: 'center', tablet: 'center', mobile: 'center' }}
          >
            Ваша <b>заявка одобрена</b> с дополнительными условиями
          </Title>
        </GridItem>
        <GridItem colDesktop={6} colTablet={12}>
          <CustomList.Description
            descriptionClassName="description-20"
            itemStyle={{ whiteSpace: 'pre-line' }}
            title={viewport !== 'desktop' ? '' : 'Условия первого кредита'}
            list={[
              `Сумма первого кредита до 30 000 руб.`,
              'Срок возврата до 30 дней',
              'Получение онлайн, без посещения офиса на любую карту, за 1 минуту',
              'Если первый кредит возвращаете без просрочек, то следующая заявка на кредит или кредитную карту может быть рассмотрена \nдо 2 000 000 руб.',
            ]}
          />
        </GridItem>
        {viewport !== 'desktop' ? (
          <GridItem colDesktop={12} colTablet={12}>
            <div className="btn-group reverse-row" style={{ margin: 0 }}>
              <PressButton
                type="mainBold"
                htmlType="button"
                onClick={sendMfoAndOpenShowcase}
                style={{ width: buttonSize[viewport] }}
              >
                <span className="bold-text">Получить кредит</span>
              </PressButton>
            </div>
          </GridItem>
        ) : (
          ''
        )}
        <GridItem colDesktop={6} colTablet={12}>
          <CustomList.Description
            descriptionClassName="description-20"
            title="Почему первый кредит небольшой?"
            subTitle="Возможные причины ниже:"
            subTitleStyle={{
              marginTop: 16,
              textAlign: 'left',
            }}
            subTitleClassName="deposit-header-description"
            headerContainerStyle={{
              margin: 0,
              justifyContent: 'flex-start',
              width: '100%',
            }}
            list={[
              `Плохая кредитная история`,
              'Нет кредитной истории',
              'Высокая кредитная нагрузка',
              'Наличие долгов или судимостей',
              'Долги у родственников первой линии',
            ]}
          />
        </GridItem>
        {viewport === 'desktop' ? (
          <GridItem colDesktop={12} colTablet={12}>
            <div className="btn-group reverse-row" style={{ margin: 0 }}>
              <PressButton
                type="mainBold"
                htmlType="button"
                onClick={sendMfoAndOpenShowcase}
                style={{ width: buttonSize[viewport] }}
              >
                <span className="bold-text">Получить кредит до 30 000 руб.</span>
              </PressButton>
            </div>
          </GridItem>
        ) : (
          ''
        )}
        <GridItem colDesktop={12} colTablet={12}>
          {viewport === 'desktop' ? (
            <CustomList.GridList
              descriptionClassName="description-20"
              titleConfig={{
                titleClassName: 'header-24',
                titleMargins: {
                  desktop: { bottom: 24 },
                  tablet: { bottom: 16 },
                  mobile: { bottom: 16 },
                },
                children: 'Как получить кредит на более крупную сумму?',
              }}
              list={[
                `Возьмите маленький кредит до 30 000 руб.`,
                'Погасите его своевременно без просрочек или досрочно (в течение 5 дней)',
                'Банк увидит, что Вы надежный заемщик',
                'Подайте новую заявку через 3 дня после погашения небольшого кредита и получите одобрение на сумму до 2 000 000  руб.',
              ]}
            />
          ) : (
            <CustomList.Description
              descriptionClassName="description-20"
              title="Как получить кредит на более крупную сумму?"
              titleClassName="header-24"
              titleStyle={{ marginBottom: 16 }}
              list={[
                `Возьмите маленький кредит до 30 000 руб.`,
                'Погасите его своевременно без просрочек или досрочно (в течение 5 дней)',
                'Банк увидит, что Вы надежный заемщик',
                'Подайте новую заявку через 3 дня после погашения небольшого кредита и получите одобрение на сумму до 2 000 000  руб.',
              ]}
            />
          )}
        </GridItem>
        <GridItem colDesktop={12} colTablet={12}>
          <div className="btn-group reverse-row" style={{ margin: 0 }}>
            <PressButton
              type={viewport === 'mobile' ? 'mainBold' : 'mainBold'}
              htmlType="button"
              onClick={sendMfoAndOpenShowcase}
              style={{ width: buttonSize[viewport] }}
            >
              <span className="bold-text">Получить кредит до 30 000 руб.</span>
            </PressButton>
          </div>
        </GridItem>
      </Grid>
    </Layout>
  );
};
