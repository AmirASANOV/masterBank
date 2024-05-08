import { instance } from '../apiConfigs';

import {
  ActivateSessionResponse,
  AuthApiType,
  AuthResponse,
  AuthResponseWithType,
  AuthTokenResponse,
  IValueFormSignIn,
  IValuesFormConfirmCode,
  IValuesFormConfirmCodeAutologin,
  IValuesFormSignUp,
  MobileIDSignIn,
  SmsVerif,
} from './authType';

enum AuthPath {
  SIGN_IN = 'api/auth/sign-in',
  SIGN_UP = 'api/auth/sign-up',
  CONFIRM = 'api/auth/confirm',
  MOBILE_ID = 'api/auth/mobile_id/send-sms',
  VERIFY_SMS = 'api/auth/mobile_id/verify-sms',
  LOGOUT = 'api/auth/logout',
  ACTIVATE_SESSION = 'api/auth/create_session_crm',
  GET_AUTOLOGIN_DATA = 'api/auth/get_autologin_data',
  CONFIRM_AUTOLOGIN = 'api/auth/confirm_autologin',
  MTS_SIGN_IN = 'api/auth/sign_in_mts',
  MTS_SIGN_UP = 'api/auth/sign_up_mts',
  SIGN_IN_WITH_CHECK = 'api/auth/universal_sign_in',
}

export const AuthApi: AuthApiType = {
  async signIn({ phone }: IValueFormSignIn) {
    return instance.post<AuthResponse>(AuthPath.SIGN_IN, { phone });
  },
  async signUp({ phone }: IValuesFormSignUp) {
    return instance.post<AuthResponse>(AuthPath.SIGN_UP, { phone });
  },
  async mobileID({ phone }: MobileIDSignIn) {
    return instance.post<AuthResponse>(AuthPath.MOBILE_ID, {
      send_sms_code_body: {
        phone,
      },
      phone_number: {
        phone,
      },
    });
  },
  async smsVerif({ phone, code }: SmsVerif) {
    return instance.post<AuthTokenResponse>(AuthPath.VERIFY_SMS, {
      phone,
      code,
    });
  },
  async confirmCode(data: IValuesFormConfirmCode) {
    return instance.post<AuthTokenResponse>(AuthPath.CONFIRM, data);
  },
  async logOut() {
    return instance.get(AuthPath.LOGOUT);
  },
  async activateSession(token) {
    return instance.post<ActivateSessionResponse>(AuthPath.ACTIVATE_SESSION, {
      token,
    });
  },
  async getAutologinData(autologin_token) {
    return instance.get(
      `${AuthPath.GET_AUTOLOGIN_DATA}?autologin_token=${autologin_token}`,
    );
  },
  async confirmAutologinCode(data: IValuesFormConfirmCodeAutologin) {
    return instance.post<AuthTokenResponse>(AuthPath.CONFIRM_AUTOLOGIN, data);
  },
  async sendMtsSignIn({ phone }: IValueFormSignIn) {
    return instance.post<AuthResponse>(AuthPath.MTS_SIGN_IN, { phone });
  },
  async sendMtsSignUp({ phone }: IValuesFormSignUp) {
    return instance.post<AuthResponse>(AuthPath.MTS_SIGN_UP, { phone });
  },
  async signInWithCheck({ phone }: IValueFormSignIn) {
    return instance.post<AuthResponseWithType>(AuthPath.SIGN_IN_WITH_CHECK, { phone });
  },
};
