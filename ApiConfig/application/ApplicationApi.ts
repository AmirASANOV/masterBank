import { instance } from '../apiConfigs';

import { ApplicationApiType } from './ApplicationApiType';

import {
  BackendDecisions,
  DepositOfferResponse,
  MFOResponse,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

export const ApplicationApi: ApplicationApiType = {
  async getStatus() {
    return instance.get<BackendDecisions>('api/application/status');
  },
  async getDepositDecision(name: string) {
    return instance.get<DepositOfferResponse>(
      `/api/application/get_deposit_decision?deposit_name=${name}`,
    );
  },
  async getMfoDeposit() {
    return instance.get('/api/application/mfo_deposit');
  },
  async getMfoRequest() {
    return instance.get<BackendDecisions>(`/api/application/send_mfo_request`);
  },
  async getDepositRequest() {
    return instance.get<BackendDecisions>(`/api/application/send_deposit_request`);
  },
  async getOffersRequest() {
    return instance.get<MFOResponse>(`/api/offers/get_offer_list`);
  },
};
