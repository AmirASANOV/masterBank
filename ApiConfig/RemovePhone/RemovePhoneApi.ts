import { instance } from '../apiConfigs';

import { IValueRemovePhone, RemoveApiType } from './RemovePhoneTypes';

const REMOVE_PHONE = 'api/remove-phone';

export const RemovePhoneApi: RemoveApiType = {
  async removePhone({ phone }: IValueRemovePhone) {
    return instance.post<RemovePhoneResponse>(REMOVE_PHONE, { phone });
  },
};

export interface RemovePhoneResponse {
  status: string;
}
