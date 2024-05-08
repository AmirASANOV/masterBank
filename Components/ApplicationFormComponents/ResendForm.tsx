import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import PressButton from '../Buttons/PressButton';
import { FormInput } from '../Inputs/OtherInputs';
import Wrapper from '../Layouts/Wrapper';
import { Prompt } from '../Messages/Prompt';
import Result from '../Messages/Result';

import style from './style.module.sass';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { checkNumber, resetMask } from '@/Common/AppFormController/ControllersFunc';
import { creditTarget } from '@/Common/AppFormHelpers/DropdownLists';
import {
  analyzeCreditTarget,
  getMaxSum,
  getMinSum,
  setInputMask,
  setInputStatus,
  setSpaceOfNumber,
  setTextTimerWithWords,
} from '@/Common/AppFormHelpers/Helpers';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { App } from '@/ProjectTypes/AppTypes';
import { ResendRequest } from '@/ReduxStore/reducer/feedbackReducer/feedbackReducer';

interface ResendFormContainerProps {
  date?: string;
  timer: number;
}

export const initialStateValid = {
  valid: false,
  message: '',
  value: '',
  required: true,
  dirty: false,
};

const ResendForm: React.FC<ResendFormContainerProps> = ({ date, timer }) => {
  const dispatch = useDispatch();
  const history = useHistoryWithUTM();
  const [showInput, setShowInput] = useState(false);
  const [target, setTarget] = useState<Nullable<App.CreditProduct>>(null);
  const [valid, setValid] = useState<App.Controller<string>>(initialStateValid);
  const complete = useAppSelector(store => store.feedback.resendRequestAnketa);
  const viewport = useAppSelector(state => state.config.viewport);

  const checkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      (resetMask(e.target.value).length < 4 && resetMask(e.target.value).length > 0
        ? `${resetMask(e.target.value)} 000`
        : e.target.value) || '';
    if (Date.now() - timer > 300 * 1000) {
      setValid(
        checkNumber(
          value,
          true,
          getMinSum(target), // Наличка  - 10 000 000, карта - 1 000 000 руб
          getMaxSum(target), // Наличка - 50 000 руб, карта - 10 000 руб.
          true,
          'currency',
        ),
      );
    } else {
      setValid({
        valid: false,
        required: true,
        message: `Заявка рассматривается, осталось: ${setTextTimerWithWords(
          (timer - Date.now()) / 1000,
        )}`,
        dirty: true,
        value,
      });
    }
  };

  const sendRequest = () => {
    if (valid.valid && valid.message.length === 0) {
      dispatch(
        ResendRequest(creditTarget.filter(item => item.value === target)[0], valid.value),
      );
    }
  };

  return (
    <Wrapper style={{ justifyContent: 'flex-start', overflow: 'hidden' }}>
      {!complete ? (
        <>
          <Prompt
            title={`Отправьте повторную заявку на ${analyzeCreditTarget(
              target,
              'title_parental_case',
            )}`}
            titleStyle={{ marginBottom: 16 }}
          >
            <p className={style.suggestion__item}>
              Последняя заявка была: {date} <br />
            </p>
            <p className={style.suggestion__item}>
              1. Мы не рекомендуем отправлять заявки чаще, чем 1 раз в неделю.
              <br />
            </p>
            <p className={style.suggestion__item}>
              2. Если Ваши паспортные данные или данные о работе поменялись, то сначала
              отредактируйте анкету{' '}
              <NavLink to="/user/myProfile/">в разделе моя анкета</NavLink>, только после
              этого отправьте заявку на повторное рассмотрение.
            </p>
          </Prompt>
          {showInput ? (
            <div style={{ maxWidth: 400 }}>
              <FormInput
                onBlur={e => checkInput(e)}
                status={setInputStatus(valid)}
                defaultValue={setInputMask(
                  valid.value.trim() || '',
                  setSpaceOfNumber(valid.value.trim()),
                )}
                labelText={
                  target === 'credit_cash'
                    ? 'Сумма кредита, руб.'
                    : 'Желаемый кредитный лимит, руб.'
                }
                required
                errorMessage={valid.message}
                animationEffect="zoom-up"
                containerStyle={{
                  marginTop: 20,
                  maxWidth: viewport === 'desktop' ? 400 : 'none',
                }}
                onInput={(e, mask, setMasked, setValue) => {
                  const value = setInputMask(
                    e.target.value.trim() || '',
                    setSpaceOfNumber(e.target.value.trim()),
                  );
                  setValue(value);
                }}
                placeholder="Укажите необходимую сумму"
              />
            </div>
          ) : (
            ''
          )}

          <div
            className="btn-group"
            style={{ justifyContent: 'flex-start', padding: 0, marginTop: 20 }}
          >
            {!showInput ? (
              <>
                {creditTarget.map(item => (
                  <PressButton
                    text={`Получить ${analyzeCreditTarget(
                      item.value as App.CreditProduct,
                      'title_parental_case',
                    )}`}
                    type="smallMainBold"
                    onClick={() => {
                      setValid(initialStateValid);
                      setShowInput(true);
                      setTarget(item.value as App.CreditProduct);
                    }}
                  />
                ))}
              </>
            ) : (
              <div
                className="btn-group"
                style={{ justifyContent: 'flex-start', padding: 0 }}
              >
                <PressButton
                  text="Отмена"
                  type="escape"
                  size="small"
                  onClick={() => {
                    setValid(initialStateValid);
                    setShowInput(false);
                    setTarget(null);
                  }}
                />
                <PressButton
                  text="Отправить"
                  type="main"
                  size="small"
                  onClick={() => {
                    sendRequest();
                  }}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Result
            type="success"
            animationEffect="fade-right"
            btnText="Смотреть результаты"
            btnSize="small"
            btnType="main"
            btnStyle={{ padding: '12px 20px' }}
            onClick={() => {
              if (history.location.pathname.includes(`/user/credit/`)) {
                history.reload();
              } else {
                history.push(`/user/credit/${target}/waiting_for_application`);
              }
            }}
            containerStyle={{
              maxWidth: viewport === 'desktop' ? '50%' : '100%',
              justifyContent: 'center',
            }}
          >
            <Prompt
              title={`Ваша заявка на ${analyzeCreditTarget(
                target,
                'title_parental_case',
              )} успешно отправлена!`}
              titleStyle={{ textAlign: 'center' }}
            />
          </Result>
        </div>
      )}
    </Wrapper>
  );
};

export default ResendForm;
