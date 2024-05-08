import React, { FC } from 'react';

import { DecisionCapConfig } from '../DecisionScriptsConfig';

import s from './style/FinishedTitle.module.sass';

import { GridItem } from '@/Components/Grid/Grid';
import Wrapper from '@/Components/Layouts/Wrapper';
import Title from '@/Components/Text/Title/Title';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

type FinishedTitlePropsType = {
  viewport: Viewport;
};

export const FinishedTitle: FC<FinishedTitlePropsType> = ({ viewport }) => (
  <Wrapper>
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
          <span className="bold-text">Условия согласованы</span>
        </Title>
      </div>
      <p className={s.subtitle}>
        Ниже указаны одобренные сумма и ставка по первому кредиту.
      </p>
    </GridItem>
  </Wrapper>
);
