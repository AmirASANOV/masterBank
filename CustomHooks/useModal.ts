import React, { useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import ServiceApi from '../ApiConfig/Endpoints/ServiceApi';
import {
  authSignIn,
  confirmAutologinCode,
  confirmCode,
  confirmMobileId,
  localLogOut,
  setCodeMessage,
  setPhoneNumber,
  setSmsLoader,
  signInMobileId,
  signInWithCheckType,
  setStepToPhoneInput,
  setStorageTimeStart,
  clearStorageTimeStart,
} from '../ReduxStore/reducer/userReducer/userReducer';

import useAppDispatch from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { useHistoryWithUTM } from './useHistoryWithUTM';

import { AuthApi } from '@/ApiConfig/auth/authApi';
import { checkPhone, resetMask } from '@/Common/AppFormController/ControllersFunc';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import { initialStateValid } from '@/Components/ApplicationFormComponents/ResendForm';
import { Nullable } from '@/Components/Inputs/Select/Type';
import {
  addNotification,
  showModal,
} from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';

export const useModal = () => {
  const ls = lsHandler();
  const lsPhone: Nullable<string> = ls.get('phoneNumber');
  const phoneInit = resetMask(lsPhone).length === 11;

  const { phone, href, callBack } = useAppSelector(store => store.config.modalWindow);
  const { type } = useAppSelector(state => state.config.user);
  const autoLoginHref = useAppSelector(store => store.config.modalWindow.href);
  const autoLoginCallback = useAppSelector(state => state.config.modalWindow.callBack);
  const isDesktop = useAppSelector(store => store.config.isDesktop);
  const { phoneNumber, token } = useAppSelector(state => state.session);
  const [valid, setValid] = useState(initialStateValid);
  const dispatch = useAppDispatch();
  const [showChangePhone, setShowChangePhone] = useState<Nullable<boolean>>(phoneInit);
  const [showCodeMessage, setShowCodeMessage] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const history = useHistoryWithUTM();
  const [countClickResendSms, setCountClickResendSms] = useState(0);

  const authTypeEnv = useAppSelector(state => state.config.user.type);

  const outputClickHandler = (e: MouseEvent) => {
    const target = e.target as Element;
    if (target && target.className === 'modal-container') {
      dispatch(showModal(false, {}));
    }
  };

  const startTimer = () => {
    dispatch(setStorageTimeStart(Math.floor(Date.now() / 1000)));
  };

  const checkInput = (value: string) => {
    if (value.length !== 11) {
      dispatch(setSmsLoader(false));
      return;
    }

    const newValid = checkPhone(
      resetMask(value),
      true,
      'return_phone_without_mask',
      null,
      true,
      [],
    );

    setValid(newValid);

    if (!newValid.valid || newValid.message) {
      dispatch(setSmsLoader(false));
      return;
    }

    setShowChangePhone(prevState => (prevState === null ? null : true));
    dispatch(setPhoneNumber(newValid.value));
    dispatch(AppFormActions.updateUserPhone({ value: newValid.value, touched: true }));

    if (token && ls.get('waiting-sms')) {
      if (authTypeEnv === 'MTS_ID') dispatch(signInMobileId(newValid.value));
      else dispatch(authSignIn(newValid.value));
    } else if (!token && !ls.get('time-start')) {
      dispatch(signInWithCheckType(newValid.value));
      dispatch(setStorageTimeStart(Math.floor(Date.now() / 1000)));
    }

    setTimeout(() => {
      document.getElementById('code__confirm')?.focus();
    }, 1000);
  };

  const checkCode = (value: string, phoneVal: string) => {
    if (resetMask(value).length === 4) {
      const callback = () => {
        if (callBack) return callBack(valid.value || phoneNumber);

        if (autoLoginCallback) return autoLoginCallback(phoneVal);

        if (href) {
          return history.push(href);
        }

        if (autoLoginHref) {
          return history.push(autoLoginHref);
        }

        return history.push('/user/credit/credit_card/credit_parameters_info/');
      };

      if (type === 'BASIC_SMS')
        dispatch(confirmCode(phoneVal, Number(resetMask(value)), callback));
      else dispatch(confirmMobileId(phoneVal, resetMask(value), callback));

      setSendingCode(false);
    } else {
      dispatch(setCodeMessage(''));
    }
  };
  const checkAutologinCode = (value: Nullable<string>, phoneVal: string) => {
    if (!value) return;

    const callback = () => {
      if (autoLoginCallback) return autoLoginCallback(phoneVal);

      if (autoLoginHref) {
        return history.push(autoLoginHref);
      }

      return history.push('/user/credit/credit_card/credit_parameters_info/');
    };

    dispatch(confirmAutologinCode(phoneVal, Number(value), token, callback));
  };

  const changePhone = async (callback: () => void) => {
    try {
      await ServiceApi.checkChangePhone();

      callback();
      setSendingCode(false);
      setShowChangePhone(null);
      setValid(prevState => ({ ...prevState, value: '', valid: false }));

      startTimer();
      setCountClickResendSms(0);
      dispatch(clearStorageTimeStart());
      dispatch(setSmsLoader(false));
      dispatch(setCodeMessage(null));
    } catch (error) {
      const err = error as AxiosError;
      if (!err.response?.status) return;

      if (err.response.status === 417) {
        dispatch(setPhoneNumber(''));
        dispatch(showModal(false));
        dispatch(
          addNotification(
            'Вы исчерпали лимит смс в сутки, пожалуйста, попробуйте завтра',
          ),
        );
        dispatch(setStepToPhoneInput());
      } else if (err.response.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      } else if (err.response.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      } else if (err.response.status === 404) {
        history.push('/user/myProfile');
        dispatch(addNotification('Пожалуйста, заполните анкету снова'));
      }
    }
  };

  const updateCode = async (phoneVal?: string) => {
    const number = valid.value || phoneVal || '';
    try {
      const repeat =
        type === 'BASIC_SMS'
          ? await ServiceApi.startConfirmPhoneNumber(number)
          : await AuthApi.mobileID({
              phone: phoneVal || valid.value,
            });

      setStorageTimeStart(Math.floor(Date.now() / 1000));
      ls.set('waiting-sms', 'true');

      setCountClickResendSms(countClickResendSms + 1);
      if (repeat.status === 200 || repeat.status === 204) {
        setShowCodeMessage(false);
        startTimer();
        return true;
      }
      if (repeat.status === 217) {
        setShowCodeMessage(false);
        return undefined;
      }

      return undefined;
    } catch (error) {
      const err = error as AxiosError;

      if (!err.response?.status) return undefined;

      if (err.response.status === 403) {
        dispatch(addNotification('Смс уже отправлена, дождитесь её'));
      } else if (err.response.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      } else if (err.response.status === 417) {
        dispatch(showModal(false));
        dispatch(
          addNotification(
            'Вы исчерпали лимит смс в сутки, пожалуйста, попробуйте завтра',
          ),
        );
        dispatch(setStepToPhoneInput());
      }

      return undefined;
    }
  };

  const clearModal = () => {
    dispatch(
      showModal(false, {
        href: undefined,
        withSms: undefined,
        name: undefined,
        surname: undefined,
        phone: undefined,
        callBack: undefined,
      }),
    );
  };

  useEffect(() => {
    setShowCodeMessage(false);

    document.addEventListener('click', outputClickHandler);
    return () => {
      document.removeEventListener('click', outputClickHandler);
    };
  }, []);

  return {
    checkInput: (value: string) => checkInput(value),
    changePhone: (callback: () => void) => changePhone(callback),
    checkCode: (e: React.ChangeEvent<HTMLInputElement>, phoneVal: string) =>
      checkCode(e.target.value, phoneVal),
    checkAutologinCode: (value: Nullable<string>, phoneVal: string) =>
      checkAutologinCode(value, phoneVal),
    setShowChangePhone: (value: boolean) => setShowChangePhone(value),
    clearModal: () => clearModal(),
    showChangePhone,
    showCodeMessage,
    sendingCode,
    isDesktop,
    updateCode: (phoneVal?: string) => updateCode(phoneVal),
    valid,
    defaultPhone: phone || phoneNumber || '',
    countClickResendSms,
    startTimer,
  };
};
