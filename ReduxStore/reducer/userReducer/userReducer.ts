import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

import { AppThunkType } from '../../index';
import { clearState } from '../AppDecisions/AppDecisionsReducer';
import {
  addNotification,
  resetModalWindow,
  setAuthType,
  setCodeInResponse,
  setSpinner,
  showModal,
} from '../ConfigReducer/ConfigReducer';
import { UserConfigType } from '../ConfigReducer/ConfigTypes';
import { AppFormActions } from '../Validator/ValidatorReducer';

import ERROR_TEXT from './const';

import { AuthApi } from '@/ApiConfig/auth/authApi';
import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { FormApi } from '@/ApiConfig/Endpoints/FormApi';
import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import { removeTokenFromUTM } from '@/CustomHooks/useHistoryWithUTM';
import { getPage } from '@/Utils/utils';

type StepType = 'phoneInput' | 'smsInput';

interface IUserInfo {
  isAuth: boolean;
  isConsent: boolean | string | undefined;
  phoneNumber: Nullable<string>;
  code: Nullable<string>;
  loader: boolean;
  codeMessage: Nullable<string>;
  authFromAutoLoginToken: boolean;
  removePhoneModal: boolean;
  token: Nullable<string>;
  lsTimer: Nullable<number>;
  step: StepType;
  isMtsIdModify: boolean;
}

const ls = lsHandler();
const hrefWindowLocation = () =>
  `/user/credit/${getPage(window.location.origin)}/credit_parameters_info`;

const initialState: IUserInfo = {
  isAuth: !!Cookies.get('Bearer'),
  isConsent: !!Cookies.get('Consent'),
  phoneNumber: ls.get('phoneNumberFromState'),
  authFromAutoLoginToken: false,
  loader: false,
  codeMessage: null,
  removePhoneModal: false,
  code: null,
  token: null,
  lsTimer: localStorage.getItem('time-start')
    ? Number(localStorage.getItem('time-start'))
    : null,
  step: 'phoneInput',
  isMtsIdModify: false,
};

const userSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setStepToPhoneInput: state => {
      state.step = 'phoneInput';
    },
    setStepToSmsInput: state => {
      state.step = 'smsInput';
    },
    addUser: state => {
      state.isAuth = true;
      state.isConsent = !!Cookies.get('Consent');
    },
    logOut: state => {
      state.isAuth = false;
      state.isConsent = !!Cookies.get('Consent');
    },
    consent: state => {
      state.isAuth = !!Cookies.get('Bearer');
      Cookies.set('Consent', 'true');
      state.isConsent = true;
    },
    setStorageTimeStart: (state, { payload }: PayloadAction<Nullable<number>>) => {
      ls.set('time-start', payload);
      state.lsTimer = payload;
    },
    clearStorageTimeStart: state => {
      ls.remove('time-start');
      state.lsTimer = ls.get('time-start');
    },
    setPhoneNumber(state, data: PayloadAction<Nullable<string>>) {
      ls.set('phoneNumber', data.payload);
      ls.remove('time-start');
      state.phoneNumber = data.payload;
    },
    setIsAuth(state, data: PayloadAction<boolean>) {
      if (!data.payload) {
        Cookies.remove('Bearer');
        Cookies.remove('Consent');
      }
      state.isAuth = data.payload;
    },
    setSmsLoader(state, action: PayloadAction<boolean>) {
      state.loader = action.payload;
    },
    setCodeMessage(state, action: PayloadAction<Nullable<string>>) {
      state.codeMessage = action.payload;
    },
    setCreateAutoSessionStatus(state, data: PayloadAction<boolean>) {
      state.authFromAutoLoginToken = data.payload;
    },
    setRemovePhoneModal(state, data: PayloadAction<boolean>) {
      state.removePhoneModal = data.payload;
    },
    setCode(state, data: PayloadAction<string>) {
      state.code = data.payload;
    },
    setToken(state, data: PayloadAction<Nullable<string>>) {
      state.token = data.payload;
    },
    setMtsIdModify: state => {
      state.isMtsIdModify = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(clearState, () => ({
      ...initialState,
    }));
  },
});

export const {
  addUser,
  logOut,
  consent,
  setToken,
  setPhoneNumber,
  setSmsLoader,
  setCodeMessage,
  setCreateAutoSessionStatus,
  setRemovePhoneModal,
  setCode,
  setStorageTimeStart,
  clearStorageTimeStart,
  setStepToPhoneInput,
  setStepToSmsInput,
  setMtsIdModify,
} = userSlice.actions;

export const sendAuthInfo =
  (
    value: Nullable<string>,
    userConfigs: UserConfigType,
    authType: 'MTS_ID' | 'BASIC_SMS',
  ): AppThunkType =>
  async dispatch => {
    try {
      await FormApi.sendAuthInfo(value, { ...userConfigs, type: authType });

      localStorage.removeItem('waiting-sms');
      localStorage.removeItem('phoneNumber');

      dispatch(showModal(false));
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return;

      if (err.response.status >= 400 && value && err.response.status !== 429) {
        setTimeout(() => {
          sendAuthInfo(value, userConfigs, authType);
        }, 20000);
      }
    }
  };

export const localLogOut = (): AppThunkType => dispatch => {
  Cookies.remove('Bearer');

  dispatch(clearState());
  dispatch(resetModalWindow());
  dispatch(logOut());
};

export const apiAuthLogOut = (): AppThunkType => async dispatch => {
  try {
    await AuthApi.logOut();
  } catch (err) {
    return;
  } finally {
    removeTokenFromUTM();
    dispatch(localLogOut());
  }
};

export const activateNewSession =
  (token: string): AppThunkType =>
  async (dispatch, getState) => {
    const currentSession = getState().session.isAuth;
    const currentCookieSession = !!Cookies.get('Bearer');
    if (token) {
      if (currentSession || currentCookieSession) {
        try {
          dispatch(
            setSpinner({
              loaderStatus: true,
              message: 'Удаляем текущую сессию...',
              type: 'future',
            }),
          );
          dispatch(apiAuthLogOut());
        } catch (err) {
          dispatch(localLogOut());
          dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
        } finally {
          dispatch(setSpinner({ loaderStatus: false, message: null }));
        }
      }

      try {
        dispatch(
          setSpinner({
            loaderStatus: true,
            message: 'Создаем новую сессию...',
            type: 'future',
          }),
        );
        const response = await AuthApi.activateSession(token);
        if (response.data?.token) {
          dispatch(addUser());
          Cookies.set('Bearer', response.data.token, { expires: 21 });
        }
        dispatch(addNotification(['Сессия успешно создана!']));
        dispatch(setCreateAutoSessionStatus(true));
      } catch (e) {
        dispatch(addNotification([ERROR_TEXT.SESSION_CREATE_ERROR]));
      } finally {
        dispatch(setSpinner({ loaderStatus: false, message: null }));
      }
    }
  };

export const confirmCode =
  (phone: string, code: number, callback?: () => void): AppThunkType =>
  async (dispatch, getState) => {
    const { user } = getState().config;
    try {
      const response = await AuthApi.confirmCode({ code, phone }).then(res => {
        localStorage.removeItem('phoneNumber');

        return res;
      });

      Cookies.set('Bearer', response.data.token, { expires: 21 });

      dispatch(addUser());

      dispatch(clearStorageTimeStart());

      dispatch(
        AppFormActions.updateUserPhone({
          value: resetMask(phone),
          touched: true,
        }),
      );

      dispatch(
        sendAuthInfo(
          resetMask(phone),
          { ...user, sms_code: resetMask(String(code)) },
          'BASIC_SMS',
        ),
      );

      dispatch(setPhoneNumber(resetMask(phone)));
      if (callback) {
        setTimeout(() => {
          callback();
        }, 500);
      }
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return;

      if (err.response.status === 429) {
        dispatch(addNotification(ERROR_TEXT.SMILES));
      }
      dispatch(setCodeMessage('Неверный код подтверждения'));
    }
  };

export const confirmMobileId =
  (phone: string, code: string, callback?: () => void): AppThunkType =>
  async (dispatch, getState) => {
    const { user } = getState().config;

    try {
      dispatch(
        setSpinner({
          loaderStatus: true,
          message: 'Проверяем введённый код...',
          type: 'future',
        }),
      );

      const response = await AuthApi.smsVerif({
        phone,
        code,
      }).then(res => {
        localStorage.removeItem('phoneNumber');
        localStorage.removeItem('birthday');

        return res;
      });

      Cookies.set('Bearer', response.data.token, { expires: 21 });

      dispatch(addUser());

      dispatch(clearStorageTimeStart());

      dispatch(
        AppFormActions.updateUserPhone({
          value: resetMask(phone),
          touched: true,
        }),
      );

      dispatch(
        sendAuthInfo(
          resetMask(phone),
          { ...user, sms_code: resetMask(String(code)) },
          'MTS_ID',
        ),
      );

      dispatch(setPhoneNumber(resetMask(phone)));

      if (callback) {
        setTimeout(() => {
          callback();
        }, 500);
      }
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return;

      if (err.response.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      }
      dispatch(setCodeMessage('Неверный код подтверждения'));
    } finally {
      dispatch(setSpinner({ loaderStatus: false, message: null }));
    }
  };

export const confirmAutologinCode =
  (
    phone: Nullable<string>,
    code: number,
    token: Nullable<string>,
    callback?: () => void,
  ): AppThunkType =>
  async (dispatch, getState) => {
    const { user } = getState().config;
    const phoneNumber = phone === null ? undefined : resetMask(phone);
    try {
      const response = await AuthApi.confirmAutologinCode({
        code,
        phone: phoneNumber,
        token,
      });
      Cookies.set('Bearer', response.data.token, { expires: 21 });
      dispatch(addUser());

      dispatch(clearStorageTimeStart());

      dispatch(
        AppFormActions.updateUserPhone({
          value: resetMask(phone),
          touched: true,
        }),
      );
      dispatch(
        sendAuthInfo(
          resetMask(phone),
          { ...user, sms_code: resetMask(String(code)) },
          'BASIC_SMS',
        ),
      );
      dispatch(setPhoneNumber(resetMask(phone)));

      if (callback) setTimeout(callback, 500);
    } catch (error) {
      dispatch(setPhoneNumber(null));
      dispatch(setCode(''));
      dispatch(setStepToPhoneInput());
      dispatch(setToken(null));
      dispatch(addNotification(ERROR_TEXT.TOKEN_EXPIRED));
      dispatch(showModal(false));

      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('phoneNumberFromState');
      localStorage.removeItem('waiting-sms');

      dispatch(showModal(true, { href: hrefWindowLocation() }));
    }
  };

export const authSignUp =
  (phone: string): AppThunkType =>
  async dispatch => {
    try {
      await AuthApi.signUp({ phone });
      dispatch(setSmsLoader(true));
      dispatch(setPhoneNumber(phone));
      dispatch(setAuthType('BASIC_SMS'));
      document.getElementById('codeConfirm')?.focus();
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return;

      if (err.response.status === 429) {
        dispatch(addNotification(ERROR_TEXT.SMILES));
      } else if (err.response.status === 400) {
        dispatch(addNotification(ERROR_TEXT.NO_CORRECT_PHONE));
      } else if (err.response.status === 500) {
        dispatch(addNotification(ERROR_TEXT.SERVER_ERROR));
      } else if (err.response.status === 417) {
        dispatch(showModal(false));
        dispatch(addNotification(ERROR_TEXT.LIMIT_SMS));
        dispatch(setStepToPhoneInput());
      }
      dispatch(setPhoneNumber(''));
      dispatch(setSmsLoader(false));
    }
  };

export const authSignIn =
  (phone: string): AppThunkType =>
  async dispatch => {
    try {
      await AuthApi.signIn({ phone });

      dispatch(setSmsLoader(true));
      dispatch(setPhoneNumber(phone));
      dispatch(setAuthType('BASIC_SMS'));
      localStorage.setItem('waiting-sms', 'true');
    } catch (err) {
      localStorage.removeItem('waiting-sms');

      dispatch(clearStorageTimeStart());

      const error = err as AxiosError;

      if (!error.response) {
        dispatch(showModal(false));
      }
      const statusCode = error.response?.status;

      if (!statusCode) return;

      if (statusCode === 403) return;

      if (statusCode === 423) {
        dispatch(addNotification([ERROR_TEXT.PHONE_BAN], 10));
        dispatch(showModal(false));
      } else if (statusCode === 417) {
        dispatch(showModal(false));
        dispatch(setPhoneNumber(''));
        dispatch(addNotification(ERROR_TEXT.LIMIT_SMS));
        dispatch(setStepToPhoneInput());
      } else if (statusCode === 429) {
        dispatch(addNotification(ERROR_TEXT.SMILES));
      } else if (statusCode === 400) {
        dispatch(addNotification(ERROR_TEXT.NO_CORRECT_PHONE));
      } else if (statusCode === 500) {
        dispatch(addNotification(ERROR_TEXT.SERVER_ERROR));
      } else {
        dispatch(authSignUp(phone));
      }
    }
  };

export const signInWithCheckType =
  (phone: string): AppThunkType =>
  async dispatch => {
    dispatch(
      setSpinner({ loaderStatus: true, type: 'future', message: 'Идёт проверка номера' }),
    );
    try {
      const response = await AuthApi.signInWithCheck({ phone });
      const { type } = response.data;
      dispatch(setSpinner({ loaderStatus: false, message: null }));

      dispatch(setSmsLoader(true));
      dispatch(setPhoneNumber(phone));
      dispatch(setAuthType(type));
      localStorage.setItem('waiting-sms', 'true');
      return document.getElementById('codeConfirm')?.focus();
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return undefined;

      if (err.response.status === 417) {
        dispatch(showModal(false));
        dispatch(addNotification(ERROR_TEXT.LIMIT_SMS));
        dispatch(setStepToPhoneInput());
      } else if (err.response.status === 403) {
        localStorage.setItem('waiting-sms', 'true');
        dispatch(setSpinner({ loaderStatus: false, message: null }));

        return dispatch(addNotification(ERROR_TEXT.WAITING_SMS));
      } else if (err.response.status === 400) {
        dispatch(addNotification(ERROR_TEXT.NO_CORRECT_PHONE));
      } else if (err.response.status === 500) {
        dispatch(addNotification(ERROR_TEXT.SERVER_ERROR));
      }

      dispatch(setStepToPhoneInput());
      dispatch(setPhoneNumber(''));
      dispatch(setSmsLoader(false));
      return dispatch(setSpinner({ loaderStatus: false, message: null }));
    }
  };

export const mtsAuthSignUp =
  (phone: string): AppThunkType =>
  async dispatch => {
    try {
      await AuthApi.sendMtsSignUp({ phone });
      dispatch(setSmsLoader(true));
      dispatch(setPhoneNumber(phone));
      localStorage.setItem('waiting-sms', 'true');
      dispatch(setStorageTimeStart(Math.floor(Date.now() / 1000)));
      document.getElementById('codeConfirm')?.focus();
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return;

      if (err.response.status === 429) {
        dispatch(addNotification(ERROR_TEXT.SMILES));
      } else if (err.response.status === 417) {
        dispatch(showModal(false));
        dispatch(addNotification(ERROR_TEXT.LIMIT_SMS));
        dispatch(setStepToPhoneInput());
      } else if (err.response.status === 400) {
        dispatch(addNotification(ERROR_TEXT.NO_CORRECT_PHONE));
      } else if (err.response.status === 500) {
        dispatch(addNotification(ERROR_TEXT.SERVER_ERROR));
      }
      dispatch(setPhoneNumber(''));
      dispatch(setSmsLoader(false));
    }
  };

export const mtsAuthSignIn =
  (phone: string): AppThunkType =>
  async dispatch => {
    dispatch(setAuthType('BASIC_SMS'));
    try {
      await AuthApi.sendMtsSignIn({ phone });
      dispatch(setSmsLoader(true));
      dispatch(setPhoneNumber(phone));
      localStorage.setItem('waiting-sms', 'true');
      dispatch(setStorageTimeStart(Math.floor(Date.now() / 1000)));
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        dispatch(showModal(false));
      }

      if (!error.response?.status) return;

      if (error.response.status === 423) {
        dispatch(addNotification([ERROR_TEXT.PHONE_BAN], 10));
        dispatch(showModal(false));
      } else if (error.response.status === 417) {
        dispatch(showModal(false));
        dispatch(setPhoneNumber(''));
        dispatch(addNotification(ERROR_TEXT.LIMIT_SMS));
        dispatch(setStepToPhoneInput());
      }
      if (error.response.status === 429) {
        dispatch(addNotification(ERROR_TEXT.SMILES));
      } else if (error.response.status === 400) {
        dispatch(addNotification(ERROR_TEXT.NO_CORRECT_PHONE));
      } else if (error.response.status === 500) {
        dispatch(addNotification(ERROR_TEXT.SERVER_ERROR));
      } else {
        dispatch(setMtsIdModify());
        dispatch(mtsAuthSignUp(phone));
      }
    } finally {
      dispatch(setSpinner({ loaderStatus: false, message: null }));
    }
  };

export const signInMobileId =
  (phone: string): AppThunkType =>
  async dispatch => {
    dispatch(
      setSpinner({ loaderStatus: true, type: 'future', message: 'Идёт проверка номера' }),
    );
    try {
      await AuthApi.mobileID({ phone });
      dispatch(setSmsLoader(true));
      dispatch(setPhoneNumber(phone));
      dispatch(setAuthType('MTS_ID'));
      localStorage.setItem('waiting-sms', 'true');
      dispatch(setStorageTimeStart(Math.floor(Date.now() / 1000)));
      return document.getElementById('codeConfirm')?.focus();
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response) {
        dispatch(setSmsLoader(true));
        dispatch(setPhoneNumber(phone));
        dispatch(setAuthType('MTS_ID'));
        localStorage.setItem('waiting-sms', 'true');
        return document.getElementById('codeConfirm')?.focus();
      }

      if (!err.response?.status) return undefined;

      if (err.response.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      } else if (err.response.status === 403) {
        localStorage.setItem('waiting-sms', 'true');

        return dispatch(addNotification(ERROR_TEXT.WAITING_SMS));
      } else if (err.response.status === 417) {
        dispatch(showModal(false));
        dispatch(addNotification(ERROR_TEXT.LIMIT_SMS));
        dispatch(setStepToPhoneInput());
      } else if (err.response.status === 500) {
        dispatch(addNotification(ERROR_TEXT.SERVER_ERROR));
      } else if (err.response.status === 400) {
        dispatch(mtsAuthSignIn(phone));
      }
      return dispatch(setSmsLoader(false));
    } finally {
      dispatch(setSpinner({ loaderStatus: false, message: null }));
    }
  };

export const getAutologinData =
  (token: string): AppThunkType =>
  async dispatch => {
    try {
      const response = await AuthApi.getAutologinData(token);
      dispatch(setPhoneNumber(resetMask(response.data.phone.toString())));

      if (!response.data.code) {
        localStorage.setItem('waiting-sms', 'true');
        return dispatch(setAuthType('MTS_ID'));
      }

      dispatch(setCodeInResponse(true));
      dispatch(setAuthType('BASIC_SMS'));
      dispatch(setCode(response.data.code));

      return dispatch(showModal(false, { href: hrefWindowLocation() }));
    } catch (error) {
      const err = error as AxiosError;

      dispatch(setToken(null));
      dispatch(showModal(false));
      dispatch(setStepToPhoneInput());

      if (!err.response?.status) return undefined;

      if (err.response.status === 404) {
        dispatch(addNotification(ERROR_TEXT.TOKEN_EXPIRED));
        return dispatch(showModal(false, { href: hrefWindowLocation() }));
      }

      return undefined;
    }
  };

export const userReducer = userSlice.reducer;
