import React, { memo, useCallback, useEffect, useMemo } from 'react';

import { CustomButton } from '@ca-actual-projects/sobankui';

import { RenderIcon } from '../../Inputs/Icons/RenderIcons';
import { CheckboxInput } from '../../Inputs/OtherInputs';
import Wrapper from '../../Layouts/Wrapper';
import s from '../../Notifications/styles/Notification.module.sass';

import styled from './AuthModal.module.sass';
import PhoneNumberInput from './Components/PhoneNumberInput';
import SmsCodeInput from './Components/SmsCodeInput/SmsCodeInput';

import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useModal } from '@/CustomHooks/useModal';
import {
  resetModalPhone,
  showModal,
} from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import {
  setPhoneNumber,
  setSmsLoader,
  setStepToPhoneInput,
  setStepToSmsInput,
} from '@/ReduxStore/reducer/userReducer/userReducer';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import { getPage } from '@/Utils/utils';

const CHANGE_PHONE_NUMBER_LENGTH = 11;

const AuthModal = memo(() => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const ls = lsHandler();

  const session = useAppSelector(state => state.session);
  const { token, loader, code, step, phoneNumber, isMtsIdModify } = session;
  const { type } = useAppSelector(state => state.config.user);
  const { current_step } = useAppSelector(state => state.validator);

  const href = `/user/credit/${getPage(window.location.origin)}/${current_step}`;

  useEffect(() => {
    if (phoneNumber?.length !== CHANGE_PHONE_NUMBER_LENGTH) return;
    // Если клиент отправил запрос на СМС по токену, но с номером !== MTS_ID
    // Тогда он ожидает смс и далее нам не нужно повторно делать checkInput
    if (isMtsIdModify) return;

    modal.checkInput(phoneNumber);
    dispatch(setSmsLoader(false));
    dispatch(setStepToSmsInput());
  }, [phoneNumber, isMtsIdModify, dispatch]);

  useEffect(
    () => () => {
      modal.clearModal();
      if (!ls.get('time-start')) ls.remove('waiting-sms');
    },
    [],
  );

  const clickHandler = useCallback(() => {
    if (!phoneNumber) return;

    dispatch(showModal(false, { href }));

    if (code) modal.checkAutologinCode(code, phoneNumber);
  }, [dispatch, modal, type, phoneNumber, code, href]);

  const goStepPhoneInput = useCallback(() => {
    dispatch(setStepToPhoneInput());
    modal.setShowChangePhone(false);
    dispatch(setPhoneNumber(null));
    dispatch(AppFormActions.updateUserPhone({ value: null, touched: false }));
    dispatch(resetModalPhone());
    dispatch(setPhoneNumber(''));
    ['phoneNumber', 'phoneNumberFromState', 'waiting-sms'].forEach(ls.remove);
  }, [dispatch, modal, ls]);

  const preventDefault = useCallback((e: React.SyntheticEvent) => e.preventDefault(), []);

  const closeWindow = () => dispatch(showModal(false));

  const showChangePhoneButton = !token && step === 'smsInput' && modal.showChangePhone;
  const showButton = useMemo(
    () => type === 'BASIC_SMS' && !ls.get('waiting-sms') && token && step === 'smsInput',
    [type, token, step],
  );

  return (
    <div className={`modal-container ${styled.modalContainer}`}>
      <Wrapper onClick={preventDefault} className={styled.wrapper}>
        <div onClick={closeWindow} className={s['notification-close']} aria-hidden="true">
          <div className={s['notification-close-first-line']} />
          <div className={s['notification-close-second-line']} />
        </div>
        <div className={token ? styled.authModal : ''}>
          {modal.valid.valid && loader && modal.sendingCode ? (
            <div className="centered-container">
              <RenderIcon status="waiting" field="text" className={styled.waitingIcon} />
              <p className="document-text">Происходит авторизация...</p>
            </div>
          ) : (
            <>
              <PhoneNumberInput />

              {showChangePhoneButton && (
                <p
                  className="document-text link-color link-action font-main"
                  id="auth_change_number"
                  style={{ marginTop: '10px' }}
                  onClick={() => modal.changePhone(goStepPhoneInput)}
                  aria-hidden
                >
                  Изменить номер телефона
                </p>
              )}

              {step === 'smsInput' && <SmsCodeInput />}
            </>
          )}

          <CheckboxInput
            required
            state
            target="_blank"
            rel="noopener noreferrer"
            setState={() => {}}
            id="agreement_document"
            containerId="container_agreement_document"
            containerStyle={{
              width: '100%',
              marginTop: token ? '0' : step === 'smsInput' ? '5px' : '20px',
            }}
          />

          {showButton && (
            <CustomButton
              id="auth_submit_btn"
              type="button"
              theme="sobank"
              onClick={clickHandler}
              additionalClassName={styled.button__auth}
            >
              Далее
            </CustomButton>
          )}
        </div>
      </Wrapper>
    </div>
  );
});

export default AuthModal;
