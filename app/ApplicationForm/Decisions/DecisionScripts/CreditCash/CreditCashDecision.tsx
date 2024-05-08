import React from 'react';

import { CreditCashFinish } from './components/CreditCashFinish';
import { CreditCashProcess } from './components/CreditCashProcess';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { App } from '@/ProjectTypes/AppTypes';
import {
  CreditCardResponse,
  CreditCashResponse,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

export interface DecisionComponent<T> {
  inProfile: boolean;
  decision_list: T;
  viewport: Viewport;
  status: 'finish' | 'wait' | 'process';
}

export interface CreditCashDecisionList extends DecisionComponent<CreditCashResponse> {
  credit_card_list: CreditCardResponse;
  product: Nullable<App.CreditProduct> | undefined;
}

const CreditCashDecision: React.FC<CreditCashDecisionList> = ({
  inProfile,
  decision_list,
  viewport,
  status,
  product,
}) => (
  <>
    {status === 'finish' ? (
      <CreditCashFinish
        inProfile={inProfile}
        decision_list={decision_list}
        viewport={viewport}
        product={product}
      />
    ) : (
      <CreditCashProcess
        inProfile={inProfile}
        decision_list={decision_list}
        viewport={viewport}
        product={product}
      />
    )}
  </>
);

export default CreditCashDecision;
