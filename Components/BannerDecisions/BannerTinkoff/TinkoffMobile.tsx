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

import tinkoffMobile from '@/Assets/banner_decisions/tinkoff-mobile.webp';

const TinkoffMobile: React.FC<TinkoffDesktopType> = ({ viewport, type }) => (
  <Layout background="grayLayout" className={style.banner}>
    <GridItem colDesktop={12}>
      <Grid container justify="space-between">
        <GridItem colDesktop={12} direction="column" className={style.banner__column}>
          {type === 'CARD' ? (
            <TinkoffCreditCard viewport={viewport} />
          ) : type === 'CASH' ? (
            <TinkoffCreditCash />
          ) : (
            <TinkoffInstallmentCard />
          )}
        </GridItem>
        <GridItem colDesktop={12} justify="center">
          <div className={style.banner__image}>
            <img src={tinkoffMobile} alt="banner_tinkoff" />
            <div className={style.banner__btn}>
              <PressButton
                type="tinkoff"
                text="Оформить карту"
                htmlType="link"
                href={tinkoff_link}
                target="_blank"
              />
            </div>
          </div>
        </GridItem>
      </Grid>
    </GridItem>
  </Layout>
);

export default TinkoffMobile;
