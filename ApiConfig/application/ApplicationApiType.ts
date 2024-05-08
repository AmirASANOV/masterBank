import { AxiosResponse } from 'axios';

import {
  BackendDecisions,
  DepositOfferResponse,
  MFOResponse,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

export type ApplicationApiType = {
  getStatus: () => Promise<AxiosResponse<BackendDecisions>>;
  getDepositDecision: (name: string) => Promise<AxiosResponse<DepositOfferResponse>>;
  getMfoDeposit: () => Promise<AxiosResponse>;
  getMfoRequest: () => Promise<AxiosResponse<BackendDecisions>>;
  getDepositRequest: () => Promise<AxiosResponse<BackendDecisions>>;
  getOffersRequest: () => Promise<AxiosResponse<MFOResponse>>;
};
