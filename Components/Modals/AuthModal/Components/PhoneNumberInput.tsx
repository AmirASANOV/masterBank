import React, { CSSProperties, useCallback } from 'react';

import { FormInput as PhoneInput } from '@ca-actual-projects/sobankui';

import styles from './PhoneNumberInput.module.sass';

import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import { FormInput } from '@/Components/Inputs/OtherInputs';
import { Prompt } from '@/Components/Messages/Prompt';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useModal } from '@/CustomHooks/useModal';
import {
  setPhoneNumber,
  setStepToSmsInput,
} from '@/ReduxStore/reducer/userReducer/userReducer';
import { onPhoneInput } from '@/Utils/utils';

function isPhoneNumberValid(phone: string) {
  if (phone.length === 11) {
    return resetMask(phone).length === 11;
  }
  return undefined;
}

const PhoneNumberInput = () => {
  const ls = lsHandler();
  const dispatch = useAppDispatch();
  const modal = useModal();
  const token = useAppSelector(state => state.session.token);
  const phoneNumber = useAppSelector(state => state.session.phoneNumber);

  const handlePhoneChange = useCallback(
    (value: string): void => {
      dispatch(setPhoneNumber(value));
      if (value.length === 11) {
        dispatch(setStepToSmsInput());
      }
    },
    [dispatch, phoneNumber, ls],
  );

  const style: { [key: string]: CSSProperties } = {
    subtitle: {
      textAlign: 'center',
      fontSize: '16px',
      paddingBottom: '6px',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      paddingBottom: '20px',
    },
  };

  return (
    <div className={styles.phone_modal_content}>
      <Prompt title="Онлайн-заявка" titleStyle={style.title} />

      <Prompt title="Укажите ваш номер телефона" titleStyle={style.subtitle} />
      {token ? (
        <FormInput
          inputStyle={{ background: 'rgba(3, 49, 140, 0.12)', padding: 10 }}
          id="auth_phone_number"
          mask="+7-(999)-999-99-99"
          alwaysShowMask
          labelStyle={{ textAlign: 'center' }}
          defaultValue={phoneNumber}
          status
          animationEffect="fade-up"
          readOnly
          inputMode="tel"
        />
      ) : (
        <PhoneInput
          theme="sobank"
          id="auth_phone_number"
          inputStyle={{ background: 'rgba(3, 49, 140, 0.12)', padding: 10 }}
          mask="+7-(999)-999-99-99"
          alwaysShowMask
          value={modal.defaultPhone || phoneNumber || ''}
          onChange={handlePhoneChange}
          inputClass="phoneInput"
          disabled={isPhoneNumberValid(phoneNumber || '')}
          errorMessage={modal.valid?.message || ''}
          required={modal.valid?.required || false}
          type="tel"
          formKey="auth-phone"
          checker={value => isPhoneNumberValid(value)}
          validator={onPhoneInput}
        />
      )}
    </div>
  );
};

export default PhoneNumberInput;
