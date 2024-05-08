import { DecisionComponent } from '../../CreditCash/CreditCashDecision';

import {
  CreditCardResponse,
  DecisionType,
  MFOResponse,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

export interface CreditCardSobankDecisionList
  extends DecisionComponent<CreditCardResponse> {
  decision_type: DecisionType;
  installment_card_list: CreditCardResponse;
}

export interface CreditCardDecisionList extends CreditCardSobankDecisionList {
  mfo_response: MFOResponse;
  finished: boolean;
}
