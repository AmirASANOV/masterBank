import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import useAppDispatch from './useAppDispatch';

import { RemovePhoneApi } from '@/ApiConfig/RemovePhone/RemovePhoneApi';
import { checkPhone } from '@/Common/AppFormController/ControllersFunc';
import { initialStateValid } from '@/Components/ApplicationFormComponents/ResendForm';
import { App } from '@/ProjectTypes/AppTypes';
import { addNotification } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { setRemovePhoneModal } from '@/ReduxStore/reducer/userReducer/userReducer';

export const usePhoneRemoving = () => {
  const dispatch = useAppDispatch();
  const [valid, setValid] = useState<App.Controller<string>>(initialStateValid);
  const setOpenModal = (value: boolean) => {
    dispatch(setRemovePhoneModal(value));
  };

  useEffect(() => {
    if (valid.value.length === 11) {
      setValid(
        checkPhone(
          valid.value,
          true,
          'return_phone_without_mask',
          '+7-(___)-___-__-__',
          true,
          [],
        ),
      );
    } else if (valid.value.length > 11) {
      setValid({ ...initialStateValid, value: valid.value.slice(0, -1), valid: true });
      dispatch(addNotification(`Пожалуйста, убедитесь в правильности номера`));
    } else {
      setValid(initialStateValid);
    }
  }, [valid.value]);

  const phoneRemoveHandler = async () => {
    try {
      if (valid.value.length === 11) {
        await RemovePhoneApi.removePhone({ phone: valid.value });
        setValid(initialStateValid);
        setOpenModal(false);
        dispatch(addNotification(`Вы успешно отписались от звонков`));
      } else {
        dispatch(addNotification(`Пожалуйста, ведите корректный номер телефона`));
      }
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 417) {
        dispatch(
          addNotification('Вы исчерпали лимит запросов, пожалуйста, попробуйте завтра'),
        );
      } else {
        dispatch(addNotification('Пожалуйста, попробуйте позже'));
      }
    }
  };

  return {
    valid,
    setValid,
    phoneRemoveHandler,
  };
};
