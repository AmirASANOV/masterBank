import React from 'react';

import { DecisionComponent } from '../CreditCash/CreditCashDecision';

import { MfoFinish } from './components/MfoFinish';
import { MfoProcess } from './components/MfoProcess';
import { MfoWait } from './components/MfoWait';

import { MFOResponse } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

interface MfoDecisionList extends DecisionComponent<MFOResponse> {
  sendMFO: () => void;
  timer?: { seconds: string; minute: string };
  hideDescription?: boolean;
}

const MFODecision: React.FC<MfoDecisionList> = ({
  status,
  decision_list,
  viewport,
  sendMFO,
  timer,
  hideDescription,
}) => (
  <>
    {status === 'wait' ? (
      <MfoWait viewport={viewport} sendMFO={sendMFO} />
    ) : status === 'process' ? (
      <MfoProcess viewport={viewport} timer={timer} />
    ) : status === 'finish' ? (
      <MfoFinish
        viewport={viewport}
        decision_list={decision_list}
        hideDescription={hideDescription}
      />
    ) : (
      ''
    )}
  </>
);

export default MFODecision;
