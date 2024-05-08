import { AxiosResponse } from 'axios';

import { Nullable } from '../DadataApi/DadataPropsTypes';

import { DataElement } from '@/Components/Inputs/Types/InputPropsType';
import { App } from '@/ProjectTypes/AppTypes';
import { UserConfigType } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

export interface FormApiProps {
  getApplication: () => Promise<AxiosResponse<App.ApplicationForm>>;
  getProfile: () => Promise<AxiosResponse<App.UserProfile>>;
  sendCreditParams: (
    data: App.CreditParametersInfo,
  ) => Promise<AxiosResponse<App.CreditParametersInfo>>;
  sendWorkInfo: (data: App.WorkInfo) => Promise<AxiosResponse<App.WorkInfo>>;
  sendAdditionalInfo: (
    data: App.AdditionalInfo,
  ) => Promise<AxiosResponse<App.AdditionalInfo>>;
  sendPassportInfo: (data: App.PassportInfo) => Promise<AxiosResponse<App.PassportInfo>>;
  sendAuthInfo: (
    value: Nullable<string>,
    userConfigs: UserConfigType,
  ) => Promise<AxiosResponse<Nullable<string>>>;
  sendHypothecInfo: (
    data: App.HypothecParametersInfo,
  ) => Promise<AxiosResponse<Nullable<string>>>;
  getStep: () => Promise<AxiosResponse<{ step: number }>>;
  resendForm: (data: resendFormType) => Promise<AxiosResponse>;
}

type resendFormType = {
  credit_target: Nullable<DataElement>;
  credit_sum: string;
};
