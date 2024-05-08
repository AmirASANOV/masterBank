import { instance } from '../apiConfigs';

import { FormApiProps } from './FormApiTypes';

import { App } from '@/ProjectTypes/AppTypes';

export const FormApi: FormApiProps = {
  async getApplication() {
    return instance.get<App.ApplicationForm>('/api/form/get/current_test');
  },
  async sendCreditParams(data) {
    return instance.post<App.CreditParametersInfo>(
      'api/form/create/credit_parameters_info',
      data,
    );
  },
  async sendWorkInfo(data) {
    return instance.post<App.WorkInfo>('api/form/create/work_info', data);
  },
  async sendAdditionalInfo(data) {
    return instance.post<App.AdditionalInfo>('api/form/create/additional_info', data);
  },
  async sendPassportInfo(data) {
    return instance.post<App.PassportInfo>('api/form/create/passport_info', data);
  },
  async sendHypothecInfo(data) {
    return instance.post('api/form/create/hypothec_info', data);
  },
  async getProfile() {
    return instance.get<App.UserProfile>('api/profile/me');
  },
  async getStep() {
    return instance.get<{ step: number }>('api/form/get/get_step');
  },
  async sendAuthInfo(value, userConfigs) {
    return instance.post('api/form/create/auth_info', {
      ...userConfigs,
      phone_number: value,
      checkin_page: `${window.location.href}`,
    });
  },
  async resendForm(data) {
    return instance.post('/api/form/change_and_resend', data);
  },
};
