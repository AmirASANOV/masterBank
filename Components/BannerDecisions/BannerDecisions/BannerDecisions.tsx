import React, { FC, memo } from 'react';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useCreditDecisionTask } from '@/Pages/ApplicationForm/Decisions/hooks/useCreditDecision';

const CreditCardDecision = React.lazy(
  () =>
    import(
      '@/Pages/ApplicationForm/Decisions/DecisionScripts/CreditCard/CreditCardDecision'
    ),
);
const CreditCashDecision = React.lazy(
  () =>
    import(
      '@/Pages/ApplicationForm/Decisions/DecisionScripts/CreditCash/CreditCashDecision'
    ),
);
const MFODecision = React.lazy(
  () => import('@/Pages/ApplicationForm/Decisions/DecisionScripts/MFO/MFODecision'),
);
const Zaimer = React.lazy(
  () => import('@/Pages/ApplicationForm/Decisions/marketing/Zaimer/Zaimer'),
);

interface BannerDecisionsProps {
  placement?: 'children' | 'decisions';
}
const BannerDecisions: FC<BannerDecisionsProps> = ({ placement }) => {
  const { data, sendMFO, finished } = useCreditDecisionTask(placement === 'children');

  const { viewport } = useAppSelector(state => state.config);

  switch (data.decision_type) {
    case 'MFO': {
      if (
        !data.mfo_response?.some(el => el.name === 'Zaimer' && el.status === 'APPROVED')
      ) {
        return (
          <MFODecision
            sendMFO={sendMFO}
            decision_list={data.mfo_response}
            viewport={viewport}
            inProfile={false}
            status="finish"
            hideDescription
          />
        );
      }
      return <Zaimer style={{ minHeight: 0 }} />;
    }

    case 'WAIT_MFO':
      return (
        <MFODecision
          sendMFO={sendMFO}
          inProfile={false}
          decision_list={data.mfo_response}
          viewport={viewport}
          status="wait"
        />
      );

    case 'CARD':
      return (
        <CreditCardDecision
          mfo_response={data.mfo_response}
          finished={finished}
          decision_type={data.decision_type}
          installment_card_list={data.installment_card_response}
          inProfile={false}
          decision_list={data.credit_card_response}
          viewport={viewport}
          status="finish"
        />
      );

    case 'CASH':
      return (
        <CreditCashDecision
          credit_card_list={data.credit_card_response}
          product="credit_cash"
          inProfile={false}
          decision_list={data.credit_cash_response}
          viewport={viewport}
          status="finish"
        />
      );

    case 'ALL_REJECTED':
      return null;

    default:
      return (
        <MFODecision
          sendMFO={sendMFO}
          decision_list={data.mfo_response}
          viewport={viewport}
          inProfile={false}
          status="finish"
          hideDescription
        />
      );
  }
};

export default memo(BannerDecisions);
