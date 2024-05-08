import React from 'react';

import SobankCreditCardDecision from './components/SobankCreditCardDecision';
import SopCreditCardDecision from './components/SopCreditCardDecision';
import { CreditCardDecisionList } from './types';

import { currentDomain } from '@/GlobalConfig';

const CreditCardDecision: React.FC<CreditCardDecisionList> = ({
  viewport,
  installment_card_list,
  finished,
  mfo_response,
  decision_type,
  decision_list,
  inProfile,
}) => {
  const creditCardLength =
    decision_list && decision_list.filter(item => item.status === 'APPROVED').length > 0;
  const installmentCardLength =
    installment_card_list &&
    installment_card_list.filter(item => item.status === 'APPROVED').length > 0;

  return (
    <>
      {currentDomain === 'sop' ? (
        <SopCreditCardDecision
          mfo_response={mfo_response}
          finished={finished}
          decision_type={decision_type}
          installment_card_list={installment_card_list}
          inProfile={inProfile}
          decision_list={decision_list}
          viewport={viewport}
          status="finish"
        />
      ) : (creditCardLength || installmentCardLength) && finished ? (
        <SobankCreditCardDecision
          decision_list={decision_list}
          decision_type={decision_type}
          installment_card_list={installment_card_list}
          viewport={viewport}
          status="finish"
          inProfile={inProfile}
        />
      ) : (
        <SobankCreditCardDecision
          decision_list={decision_list}
          decision_type={decision_type}
          installment_card_list={installment_card_list}
          viewport={viewport}
          status="process"
          inProfile={inProfile}
        />
      )}
    </>
  );
};

export default CreditCardDecision;
