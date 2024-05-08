import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppDispatch, AppThunkType, RootState } from '../../index';
import { clearDecisionsWithoutValidator } from '../AppDecisions/AppDecisionsReducer';
import {
  addNotification,
  setAuthType,
  setProviderData,
  setShowHypothecModal,
  setSpinner,
  showModal,
} from '../ConfigReducer/ConfigReducer';
import { localLogOut, setPhoneNumber } from '../userReducer/userReducer';

import { VItem } from './Types';
import { VActions } from './ValidatorActions';
import { AppFormActions, initialValidatorState } from './ValidatorReducer';

import { FormApi } from '@/ApiConfig/Endpoints/FormApi';
import ServiceApi from '@/ApiConfig/Endpoints/ServiceApi';
import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { setInputFocus } from '@/Common/AppFormHelpers/Focusable';

type thunkKeys =
  | 'getAnketa'
  | 'sendCreditParams'
  | 'sendWorkInfoState'
  | 'sendHypothecInfo'
  | 'sendAdditionalInfoState'
  | 'sendPassportInfoState'
  | 'codeConfirmStart'
  | 'codeConfirmResult';

/* eslint-disable */
type ThunkType = { [key in thunkKeys]: any };

export const ErrorValues = {
  notLogin: 'not login',
  phone_number: 'not phone number',
};

export const ValidatorThunk: ThunkType = {
  getAnketa: createAsyncThunk('app/form', async (arg, thunkAPI) => {
    const dispatch = thunkAPI.dispatch as AppDispatch;
    dispatch(
      setSpinner({
        loaderStatus: true,
        message: 'Загрузка анкетных данных',
        type: 'future',
      }),
    );
    try {
      const response = await FormApi.getApplication();
      const { data } = response;
      const { provider_data, auth_info } = data;
      dispatch(setProviderData(provider_data));
      dispatch(setAuthType(data.auth_info?.type || 'BASIC_SMS'));

      if (auth_info?.phone_number) dispatch(setPhoneNumber(auth_info.phone_number));

      let profile;
      if (response.data.credit_parameters_info === null) {
        try {
          profile = await FormApi.getProfile();
          const profileData = profile.data;

          data.credit_parameters_info = {
            phone_number: profileData.phone || null,
            credit_target: VActions.helpers.askCreditProduct(),
            credit_sum: null,
            name: profileData.name || null,
            surname: profileData.lastname || null,
            patronymic: profileData.middlename || null,
            gender:
              profileData.gender === 'male'
                ? {
                    value: 'MALE',
                    title: 'Мужской',
                  }
                : profileData.gender === 'female'
                  ? { value: 'FEMALE', title: 'Женский' }
                  : null,
            email: profileData.email || null,
            deposit_car: null,
            email_generated: false,
            credit_city: null,
            checked: true,
          };
        } catch (error) {
          const err = error as AxiosError;

          dispatch(setSpinner({ loaderStatus: false, message: null }));
          if (err.response?.status === 429) {
            dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
          } else if (err.response?.status === 401) {
            dispatch(localLogOut());
            dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
          }
        }
      }

      if (!data.credit_parameters_info.checked)
        data.credit_parameters_info.checked = true;

      dispatch(AppFormActions.packageValidator({ value: data, touched: true }));
      return dispatch(setSpinner({ loaderStatus: false, message: null }));
    } catch (error) {
      const err = error as AxiosError;

      dispatch(setSpinner({ loaderStatus: false, message: null }));
      if (err.response?.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      } else if (err.response?.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      }
      dispatch(AppFormActions.setValidatorState(initialValidatorState));
      thunkAPI.rejectWithValue(initialValidatorState);
      return initialValidatorState;
    }
  }),
  sendCreditParams: createAsyncThunk(
    'app/form/credit_parameters_info',
    async (arg, thunkApi) => {
      const dispatch = thunkApi.dispatch as AppDispatch;
      dispatch(
        setSpinner({
          loaderStatus: true,
          message: 'Отправка параметров кредита на сервер...',
          type: 'future',
        }),
      );
      const prevState = thunkApi.getState() as RootState;
      const data = VActions.packageData.credit_parameters_info(
        prevState.validator.credit_parameters_info,
        false,
      );
      dispatch(AppFormActions.buildCreditParameters({ value: data, type: 'check' }));

      const afterState = thunkApi.getState() as RootState;
      const current = afterState.validator.credit_parameters_info;

      if (
        current.errors.length === 1 &&
        current.errors[0].result.fieldName ===
          initialValidatorState.credit_parameters_info.phone_number.result.fieldName
      ) {
        if (afterState.session.isAuth) {
          try {
            const profile = await FormApi.getProfile();

            thunkApi.dispatch(
              AppFormActions.updateUserPhone({
                value: profile.data.phone,
                touched: true,
              }),
            );
            const state = thunkApi.getState() as RootState;
            const dataWithPhone = VActions.packageData.credit_parameters_info(
              state.validator.credit_parameters_info,
              false,
            );
            dispatch(
              AppFormActions.buildCreditParameters({
                value: dataWithPhone,
                type: 'check',
              }),
            );
          } catch (error) {
            const err = error as AxiosError;

            if (err.response?.status === 429) {
              dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
            } else if (err.response?.status === 401) {
              dispatch(localLogOut());
              dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
            }
            dispatch(setSpinner({ loaderStatus: false, message: null }));
            dispatch(addNotification(['При отправке запроса произошла ошибка'], 10));
            return thunkApi.rejectWithValue(ErrorValues.phone_number);
          }
        } else {
          thunkApi.dispatch(setSpinner({ loaderStatus: false, message: null }));
          dispatch(showModal(true));
          return thunkApi.rejectWithValue(ErrorValues.notLogin);
        }
      } else if (current.errors.length === 0 && !afterState.session.isAuth) {
        thunkApi.dispatch(setSpinner({ loaderStatus: false, message: null }));
        dispatch(showModal(true));
        return thunkApi.rejectWithValue(ErrorValues.notLogin);
      }

      const lastState = thunkApi.getState() as RootState;

      if (
        lastState.validator.credit_parameters_info.errors.length === 0 &&
        afterState.session.isAuth
      ) {
        const newData = VActions.packageData.credit_parameters_info(
          lastState.validator.credit_parameters_info,
          true,
        );
        try {
          await FormApi.sendCreditParams(newData);
          dispatch(AppFormActions.setApplicationStep('work_info'));
          dispatch(ValidatorThunk.getAnketa());
        } catch (e) {
          const err = e as AxiosError;

          if (err.response?.status === 429) {
            dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
          } else if (err.response?.status === 401) {
            dispatch(localLogOut());
            dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
          }
          const error = err.response?.data as { detail: [unknown] };

          if (error.detail && error.detail.length > 0)
            dispatch(addNotification([error.detail.join(', ')]));
          else dispatch(addNotification(['Неизвестная ошибка']));
          thunkApi.rejectWithValue(err.response?.status);
        }
        return dispatch(setSpinner({ loaderStatus: false, message: null }));
      }
      setInputFocus('.input-error', `#credit_parameters_info`);
      const message = `Допущены ошибки в следующих полях: ${lastState.validator.credit_parameters_info.errors
        .slice(0, 3)
        .map(item => `"${item.result.fieldName}"`)
        .join(', ')}. Пожалуйста, исправьте ошибки, чтобы продолжить.`;
      dispatch(addNotification([message], 8));
      dispatch(setSpinner({ loaderStatus: false, message: null }));
      return thunkApi.rejectWithValue(message);
    },
  ),
  sendWorkInfoState: createAsyncThunk('app/form/work_info', async (arg, thunkApi) => {
    const dispatch = thunkApi.dispatch as AppDispatch;
    dispatch(
      setSpinner({
        loaderStatus: true,
        message: 'Отправка информации о работе...',
        type: 'future',
      }),
    );
    const prevState = thunkApi.getState() as RootState;
    const data = VActions.packageData.work_info(prevState.validator.work_info, false);
    const builder = VActions.work_info.build(prevState.validator, {
      value: data,
      type: 'check',
    });

    dispatch(AppFormActions.updateWorkInfoState(builder));

    const newState = thunkApi.getState() as RootState;
    const current = newState.validator.work_info;

    if (current.errors.length > 0) {
      dispatch(setSpinner({ loaderStatus: false, message: null }));
      const notificationMessage = VActions.helpers.packageNotification(
        current.errors.slice(0, 3),
      );
      setInputFocus('.input-error');
      dispatch(addNotification([notificationMessage], 10));
    } else {
      const newData = VActions.packageData.work_info(current, true);
      try {
        await FormApi.sendWorkInfo(newData);
        dispatch(AppFormActions.setApplicationStep('additional_info'));
        dispatch(ValidatorThunk.getAnketa());
        dispatch(setSpinner({ loaderStatus: false, message: null }));
      } catch (error) {
        const err = error as AxiosError;

        if (err.response?.status === 429) {
          dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
        } else if (err.response?.status === 401) {
          dispatch(localLogOut());
          dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
        }
        const r = err.response?.data as unknown as { detail: Array<string> };
        dispatch(setSpinner({ loaderStatus: false, message: null }));
        dispatch(addNotification(r.detail, 10));
      }
    }
  }),
  sendHypothecInfo: createAsyncThunk('app/form/hypothec', async (_, thunkApi) => {
    const dispatch = thunkApi.dispatch as AppDispatch;
    const prevState = thunkApi.getState() as RootState;
    const data = VActions.packageDataHypothec.hypothec_info(
      prevState.validator.hypothec_info,
    );
    const builder = VActions.hypothec_info.build(prevState.validator.hypothec_info, {
      value: data,
      type: 'check',
    });

    dispatch(AppFormActions.buildHypothecInfo(builder));

    const newState = thunkApi.getState() as RootState;
    const current = newState.validator.hypothec_info;

    if (current.errors.length > 0) {
      const notificationMessage = VActions.helpers.packageNotification(
        current.errors.slice(0, 3),
      );
      setInputFocus('.input-error');
      dispatch(addNotification([notificationMessage], 10));
    } else {
      const newData = VActions.packageDataHypothec.hypothec_info(current);
      try {
        await FormApi.sendHypothecInfo(newData);
        dispatch(setShowHypothecModal(true));
      } catch (error) {
        const err = error as AxiosError;

        if (err.response?.status === 429) {
          dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
        } else if (err.response?.status === 401) {
          dispatch(localLogOut());
          dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
        }
        const r = err.response?.data as unknown as { detail: Array<string> };
        dispatch(setSpinner({ loaderStatus: false, message: null }));
        dispatch(addNotification(r.detail, 10));
      }
    }
  }),
  sendAdditionalInfoState: createAsyncThunk(
    'app/form/additional_info',
    async (arg, thunkApi) => {
      const dispatch = thunkApi.dispatch as AppDispatch;
      dispatch(
        setSpinner({
          loaderStatus: true,
          message: 'Отправка дополнительной информации...',
          type: 'future',
        }),
      );
      const prevState = thunkApi.getState() as RootState;
      const data = VActions.packageData.additional_info(
        prevState.validator.additional_info,
        false,
      );
      const builder = VActions.additional_info.build(prevState.validator, {
        value: data,
        type: 'check',
      });

      dispatch(AppFormActions.updateAdditionalInfoState(builder));

      const newState = thunkApi.getState() as RootState;
      const current = newState.validator.additional_info;
      if (current.errors.length > 0) {
        dispatch(setSpinner({ loaderStatus: false, message: null }));
        const notificationMessage = VActions.helpers.packageNotification(
          current.errors.slice(0, 3),
        );
        setInputFocus('.input-error');
        dispatch(addNotification([notificationMessage], 10));
      } else {
        const newData = VActions.packageData.additional_info(current, true);
        try {
          await FormApi.sendAdditionalInfo(newData);
          dispatch(AppFormActions.setApplicationStep('passport_info'));
          dispatch(ValidatorThunk.getAnketa());
          dispatch(setSpinner({ loaderStatus: false, message: null }));
        } catch (error) {
          const err = error as AxiosError;

          if (err.response?.status === 429) {
            dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
          } else if (err.response?.status === 401) {
            dispatch(localLogOut());
            dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
          }
          const r = err.response?.data as unknown as { detail: Array<string> };
          dispatch(setSpinner({ loaderStatus: false, message: null }));
          dispatch(addNotification(r.detail, 10));
        }
      }
    },
  ),
  sendPassportInfoState: createAsyncThunk(
    'app/form/passport_info',
    async (arg: boolean | undefined, thunkApi) => {
      const dispatch = thunkApi.dispatch as AppDispatch;
      dispatch(
        setSpinner({
          loaderStatus: true,
          message: 'Отправляем заявку партнерам...',
          type: 'future',
        }),
      );
      const prevState = thunkApi.getState() as RootState;
      const data = VActions.packageData.passport_info(
        prevState.validator.passport_info,
        arg || false,
      );
      const builder = VActions.passport_info.build(prevState.validator, {
        value: data,
        type: 'check',
      });

      dispatch(AppFormActions.updatePassportInfoState(builder));

      const newState = thunkApi.getState() as RootState;
      const current = newState.validator.passport_info;

      if (current.errors.length > 0) {
        dispatch(setSpinner({ loaderStatus: false, message: null }));
        dispatch(clearDecisionsWithoutValidator());
        const notificationMessage = VActions.helpers.packageNotification(
          current.errors.slice(0, 3),
        );
        setInputFocus('.input-error');
        dispatch(addNotification([notificationMessage], 10));
      } else {
        const newData = VActions.packageData.passport_info(current, true);
        try {
          await FormApi.sendPassportInfo(newData);
          dispatch(AppFormActions.setApplicationStep('decisions'));
          dispatch(setSpinner({ loaderStatus: false, message: null }));
        } catch (error) {
          const err = error as AxiosError;

          if (err.response?.status === 429) {
            dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
          } else if (err.response?.status === 401) {
            dispatch(localLogOut());
            dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
          }
          const r = err.response?.data as unknown as { detail: Array<string> };
          dispatch(setSpinner({ loaderStatus: false, message: null }));
          dispatch(addNotification(r.detail, 10));
        }
      }
    },
  ),
  codeConfirmStart: createAsyncThunk('app/form/show_confirm', async (arg, thunkApi) => {
    const dispatch = thunkApi.dispatch as AppDispatch;
    const prevState = thunkApi.getState() as RootState;

    try {
      console.log('validator');
      await ServiceApi.startConfirmPhoneNumber(
        prevState.validator.credit_parameters_info.phone_number.result.value || '',
      );

      dispatch(AppFormActions.updateShowConfirm(true));
      setInputFocus('#code__confirm');
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      } else if (err.response?.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      }
      dispatch(
        addNotification([
          'При подтверждении номера телефона произошла ошибка, пожалуйста, повторите попытку позже.',
        ]),
      );
    }
  }),
  codeConfirmResult: createAsyncThunk(
    'app/form/result_confirm',
    async (arg: string, thunkApi) => {
      const dispatch = thunkApi.dispatch as AppDispatch;

      dispatch(
        AppFormActions.updateSmsCode({
          value: resetMask(arg),
          touched: false,
        }),
      );

      const state = thunkApi.getState() as RootState;
      const smsState = state.validator.additional_info.sms_code as VItem<string>;

      if (smsState.result.status === 'correct') {
        try {
          await ServiceApi.checkConfirmPhoneNumber({
            code: resetMask(arg),
            phone: state.validator.credit_parameters_info.phone_number.result.value || '',
          });

          dispatch(AppFormActions.updateShowConfirm(false));

          dispatch(
            AppFormActions.setSmsCodeState({
              result: {
                value: smsState.result.value,
                fieldName: smsState.result.fieldName,
                status: 'correct',
                message: '',
                touched: true,
                modified: Date.now(),
              },
              config: {
                ...smsState.config,
              },
            }),
          );

          return await dispatch(ValidatorThunk.sendAdditionalInfoState());
        } catch (error) {
          const err = error as AxiosError;

          if (err.response?.status === 429) {
            dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
          } else if (err.response?.status === 401) {
            dispatch(localLogOut());
            dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
          }
          dispatch(
            AppFormActions.setSmsCodeState({
              result: {
                value: smsState.result.value,
                fieldName: smsState.result.fieldName,
                status: 'incorrect',
                message: 'Вы указали неверный код подтверждения',
                touched: true,
                modified: Date.now(),
              },
              config: {
                ...smsState.config,
              },
            }),
          );

          return setInputFocus('#code__confirm');
        }
      }

      return undefined;
    },
  ),
};

export const workInfoPopStateHandler = (): AppThunkType => (dispatch, getState) => {
  const { work } = getState().validator.work_info;
  const { employment_type } = getState().validator.work_info;
  if (work === undefined || work === null) {
    dispatch(AppFormActions.setApplicationStep('credit_parameters_info'));
  } else if (work === 'work') {
    if (employment_type.result.value === null) {
      dispatch(
        AppFormActions.updateWorkStatus({
          value: null,
          touched: true,
        }),
      );
    } else {
      dispatch(
        AppFormActions.updateEmployment({
          value: null,
          touched: true,
          field: 'work',
        }),
      );
    }
  } else if (work === 'dont_work') {
    dispatch(
      AppFormActions.updateEmployment({
        value: null,
        touched: true,
        field: null,
      }),
    );
  }
};
