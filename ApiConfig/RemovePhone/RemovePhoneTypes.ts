import { AxiosResponse } from 'axios';

import { RemovePhoneResponse } from './RemovePhoneApi';

export type RemoveApiType = {
  removePhone: (data: IValueRemovePhone) => Promise<AxiosResponse<RemovePhoneResponse>>;
};

export interface IValueRemovePhone {
  phone: string | undefined;
}
