import { AxiosResponse } from 'axios';

export type AuthApiType = {
  signIn: (data: IValueFormSignIn) => Promise<AxiosResponse<AuthResponse>>;
  signUp: (data: IValuesFormSignUp) => Promise<AxiosResponse<AuthResponse>>;
  mobileID: (data: MobileIDSignIn) => Promise<AxiosResponse<AuthResponse>>;
  smsVerif: (data: SmsVerif) => Promise<AxiosResponse<AuthTokenResponse>>;
  confirmCode: (
    data: IValuesFormConfirmCode,
  ) => Promise<AxiosResponse<AuthTokenResponse>>;
  logOut: () => Promise<AxiosResponse<Response>>;
  activateSession: (token: string) => Promise<AxiosResponse<ActivateSessionResponse>>;
  confirmAutologinCode: (
    data: IValuesFormConfirmCodeAutologin,
  ) => Promise<AxiosResponse<AuthTokenResponse>>;
  getAutologinData: (autologin_token: string) => Promise<AxiosResponse<GetAutologinData>>;
  sendMtsSignIn: (data: IValueFormSignIn) => Promise<AxiosResponse<AuthResponse>>;
  sendMtsSignUp: (data: IValueFormSignIn) => Promise<AxiosResponse<AuthResponse>>;
  signInWithCheck: (
    data: IValueFormSignIn,
  ) => Promise<AxiosResponse<AuthResponseWithType>>;
};

export interface IValueFormSignIn {
  phone: string | undefined;
}

export interface MobileIDSignIn {
  phone: string;

  // partner: string;
}

export interface SmsVerif {
  phone: string;
  code: string;

  // partner: string;
}

export interface ActivateSessionResponse {
  token: string;
}

export interface GetAutologinData {
  token: string;
  code: string;
  phone: string;
}

export interface IValuesFormSignUp {
  phone?: string | undefined;
}

export interface IValuesFormConfirmCode {
  code: number;
  phone: string | undefined;
}
export interface IValuesFormConfirmCodeAutologin {
  code: number;
  phone: string | undefined;
  token: string | null;
}

export interface AuthResponse {
  status: string;
}

export interface AuthResponseWithType {
  type: 'BASIC_SMS' | 'MTS_ID';
}

export interface AuthTokenResponse extends AuthResponse {
  token: string;
}
