import React, { CSSProperties, useCallback } from 'react';

import CodeRequestAgain from './Components/CodeRequestAgain';
import useConfigSelector from './Hooks/useConfigSelector';
import useSessionSelector from './Hooks/useSessionSelector';
import styles from './SmsCodeInput.module.sass';

import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import { FormInput } from '@/Components/Inputs/OtherInputs';
import { Prompt } from '@/Components/Messages/Prompt';
import { useModal } from '@/CustomHooks/useModal';

const CHANGE_PHONE_NUMBER_LENGTH = 11;
const SMS_CODE_LENGTH = 4;

const SmsCodeInput = () => {
  const ls = lsHandler();
  const modal = useModal();
  const { phoneNumber, token, code, codeMessage } = useSessionSelector();
  const { type, code_in_response } = useConfigSelector();
  const unmaskedPhoneNumber = resetMask(phoneNumber);
  const waitingSms = !!ls.get('waiting-sms');

  const style: { [key: string]: CSSProperties } = {
    input_with_token: {
      padding: 10,
      textAlign: 'center',
      letterSpacing: 5,
      backgroundColor: code_in_response ? 'rgba(3, 49, 140, 0.12)' : 'transparent',
    },
    title: {
      textAlign: 'center',
      fontSize: '16px',
      paddingBottom: '6px',
    },
  };

  const title =
    type === 'MTS_ID'
      ? 'Вам поступит 4х-значный смс код от Вашего сотового оператора. Введите этот код для подтверждения номера телефона.'
      : 'Введите код подтверждения из СМС';

  const codeChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = resetMask(e.target.value);
      if (value.length === SMS_CODE_LENGTH || value.length === 0) {
        modal.checkCode(e, unmaskedPhoneNumber);
      }
    },
    [unmaskedPhoneNumber, modal],
  );

  return (
    <div className={styles.wrapper}>
      <Prompt title={title} titleStyle={style.title} />

      {token && ((type === 'BASIC_SMS' && code) || !waitingSms) ? (
        <FormInput
          inputStyle={style.input_with_token}
          id="auth_sms_code"
          mask="9999"
          alwaysShowMask
          animationEffect="zoom-up"
          defaultValue={code}
          onChange={codeChangeHandler}
          readOnly={!!code_in_response}
        />
      ) : (
        <>
          {phoneNumber?.length === CHANGE_PHONE_NUMBER_LENGTH && (
            <FormInput
              id="auth_sms_code"
              inputStyle={{ textAlign: 'center', padding: 10, letterSpacing: 5 }}
              placeholder="____"
              maxLength={4}
              animationEffect="zoom-up"
              inputType="one-time-code"
              autoFocus
              autoComplete="one-time-code"
              onInput={codeChangeHandler}
            />
          )}
        </>
      )}

      {codeMessage && (
        <p className="span-error font-main" style={{ padding: 0 }}>
          Вы ввели неправильный код.
        </p>
      )}

      <CodeRequestAgain
        token={token}
        phoneNumber={phoneNumber}
        waitingSms={waitingSms}
        modal={modal}
      />
    </div>
  );
};

export default SmsCodeInput;
