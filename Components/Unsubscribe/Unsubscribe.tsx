import React, { memo, useEffect, useState } from 'react';

import { initialStateValid } from '../ApplicationFormComponents/ResendForm';
import PressButton from '../Buttons/PressButton';
import { FormInput } from '../Inputs/OtherInputs';
import { TypeOfInputData } from '../Inputs/Types/InputPropsType';
import Subtitle from '../Text/Subtitle/Subtitle';

import styles from './Unsubscribe.module.sass';

import { checkPhone, resetMask } from '@/Common/AppFormController/ControllersFunc';
import { setInputFocus } from '@/Common/AppFormHelpers/Focusable';
import { setInputStatus } from '@/Common/AppFormHelpers/Helpers';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { usePhoneRemoving } from '@/CustomHooks/usePhoneRemoving';
import { App } from '@/ProjectTypes/AppTypes';
import { onPhoneInput } from '@/Utils/utils';

export const creditTargetAndHypothec: TypeOfInputData<App.CreditProduct | 'hypothec'> = [
  { value: 'credit_cash', title: 'Кредит наличными' },
  { value: 'credit_card', title: 'Кредитная карта' },
  { value: 'installment_card', title: 'Карта рассрочки' },
  { value: 'mfo', title: 'Кредит до 30 000 под 0%' },
  { value: 'car_credit', title: 'Автокредит' },
  { value: 'hypothec', title: 'Ипотека' },
];

const Unsubscribe = memo(() => {
  const isAuth = useAppSelector(state => state.session.isAuth);
  const { phoneRemoveHandler, valid, setValid } = usePhoneRemoving();
  const [unSub, setUnSub] = useState(true);

  useEffect(() => {
    if (!isAuth && !valid.value) {
      setValid(initialStateValid);
    }
  }, [isAuth, valid.value]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (valid.valid) {
      phoneRemoveHandler();
      setUnSub(false);
    }

    setInputFocus('.input-error');
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const unmaskedValue = resetMask(event.target.value);
    if (unmaskedValue.length > 1) {
      setValid(
        checkPhone(
          unmaskedValue,
          true,
          'return_phone_without_mask',
          '+7-(___)-___-__-__',
          true,
          [],
        ),
      );
    }
  };

  return (
    <>
      {unSub ? (
        <form className={styles.form} id="feedback" onSubmit={e => onSubmit(e)}>
          <h3 className={`${styles.formTitle} title-text`}>
            Надоели звонки с кредитными предложениями?
          </h3>

          <Subtitle
            subtitleClassName="description-text fs-18-16-13 color-black-main"
            subtitleStyle={{ textAlign: 'center' }}
          >
            Отписаться от&nbsp;звонков очень просто. Введите свой номер телефона ниже
            и&nbsp;рекламные звонки прекратятся навсегда.
          </Subtitle>

          <FormInput
            id="feedback-desktop-unsubscribe"
            placeholder="+7-(___)-___-__-__"
            mask="+7-(999)-999-99-99"
            labelText="Мобильный телефон"
            inputMode="tel"
            defaultValue={valid.value || ''}
            status={setInputStatus(valid)}
            onInput={e => onInput(e)}
            errorMessage={valid.value.length === 11 ? valid.message : ''}
            maskedHandler={onPhoneInput}
          />

          <PressButton
            htmlType="submit"
            type="mainBold"
            text="Отписаться от звонков"
            style={{ width: '100%', padding: '14px 5px' }}
            id="not-open-window"
          />
        </form>
      ) : (
        <>
          <h2 className="header-24" style={{ textAlign: 'center' }}>
            Вы успешно отписались от рекламных звонков
          </h2>
          <p
            className="document-important-text ta-center"
            style={{ textAlign: 'center' }}
          >
            В скором времени звонки перестанут вас беспокоить
          </p>
        </>
      )}
    </>
  );
});

export default Unsubscribe;
