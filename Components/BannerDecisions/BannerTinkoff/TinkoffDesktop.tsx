import React from 'react';

import PressButton from '../../Buttons/PressButton';
import { Grid, GridItem } from '../../Grid/Grid';
import Layout from '../../Layouts/Layout';

import { tinkoff_link, TinkoffDesktopType } from './BannerTinkoffDecisions';
import style from './BannerTinkoffDecisions.module.sass';
import {
  TinkoffCreditCard,
  TinkoffCreditCash,
  TinkoffInstallmentCard,
} from './TinkoffData';

import tinkoff from '@/Assets/banner_decisions/tinkoff.webp';

const TinkoffDesktop: React.FC<TinkoffDesktopType> = ({ viewport, type }) => (
  <Layout background="grayLayout" className={style.banner}>
    <GridItem colDesktop={12}>
      <Grid container justify="space-between">
        <GridItem colDesktop={7} direction="column">
          {type === 'CARD' ? (
            <TinkoffCreditCard viewport={viewport} />
          ) : type === 'CASH' ? (
            <TinkoffCreditCash />
          ) : (
            <TinkoffInstallmentCard />
          )}
          <div className={style.banner__btn}>
            <PressButton
              type="tinkoff"
              text="Оформить карту"
              htmlType="link"
              href={tinkoff_link}
              target="_blank"
            />
          </div>
        </GridItem>
        <GridItem colDesktop={5} justify="flex-end">
          <div className={style.banner__image}>
            <div className={`${style.banner__image_bgc}`} />
            <img src={tinkoff} alt="banner_tinkoff" />
          </div>
        </GridItem>
      </Grid>
    </GridItem>
  </Layout>
);

export default TinkoffDesktop;
