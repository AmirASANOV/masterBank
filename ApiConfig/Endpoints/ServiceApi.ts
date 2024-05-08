import { AxiosResponse } from 'axios';

import { instance } from '../apiConfigs';
import { FrontendVersion } from '../VersionConfig';

interface ServiceApiProps {
  getBackendVersion: () => Promise<boolean>;
  startConfirmPhoneNumber: (phoneNumber: string) => Promise<AxiosResponse>;
  checkConfirmPhoneNumber: (params: {
    code: string;
    phone: string;
  }) => Promise<AxiosResponse>;
  reportInaction: (flag: boolean) => Promise<AxiosResponse>;
  sendFeedback: (data: { message: string; phone: string }) => Promise<AxiosResponse>;
  checkChangePhone: () => Promise<AxiosResponse>;
}

interface BackendVersion {
  form_version: string;
  gateway_version: string;
}

const ServiceApi: ServiceApiProps = {
  async getBackendVersion() {
    const response = await instance.get<BackendVersion>('api/get_version');

    const { data } = response;
    let overlap = false;
    const frontVersion = Object.values(FrontendVersion).join('.');
    if (response.status === 200) {
      if ('gateway_version' in data && data.gateway_version && data.form_version) {
        if ('gateway_version' in data) {
          overlap =
            data.gateway_version === frontVersion && data.form_version === frontVersion;
        }
      }
    }
    return overlap;
  },
  async startConfirmPhoneNumber(phoneNumber: string) {
    return instance.post('api/send_sms_to_user', {
      phone: phoneNumber,
    });
  },
  async checkConfirmPhoneNumber(params) {
    return instance.post('api/check_sms_for_valid', params);
  },
  async reportInaction(flag) {
    return instance.post<{ flag: boolean }>('api/form/user_inaction', { flag });
  },
  async sendFeedback(data) {
    return instance.post('api/feedback/create', data);
  },
  async checkChangePhone() {
    return instance.get('api/check_for_change_number');
  },
};

export default ServiceApi;
