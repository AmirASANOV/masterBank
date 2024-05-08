import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { initialStateValid } from '../ApplicationFormComponents/ResendForm';
import PressButton from '../Buttons/PressButton';
import { FormInput } from '../Inputs/OtherInputs';
import { Nullable } from '../Inputs/Select/Type';
import Wrapper from '../Layouts/Wrapper';

import CreditCardItem from './CreditCardItem';

import { checkPhone, resetMask } from '@/Common/AppFormController/ControllersFunc';
import { setInputStatus } from '@/Common/AppFormHelpers/Helpers';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { useValid } from '@/CustomHooks/useValid';
import { Current, currentDomain } from '@/GlobalConfig';
import ym from '@/modules/metrika/yandexMetrikaModule';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { setPhoneNumber } from '@/ReduxStore/reducer/userReducer/userReducer';
import { onPhoneInput } from '@/Utils/utils';

import './styles/GetCreditCard.sass';

export interface Description {
  title: string;
  subtitle: string;
}

interface GetCreditCardMobileProps {
  url: string;
  title: string;
  description: Description[];
}

const GetCreditCardMobile: FC<GetCreditCardMobileProps> = ({
  url,
  title,
  description,
}) => {
  const ls = lsHandler();
  const lsPhone: Nullable<string> = ls.get('phoneNumber');

  const { isAuth, token } = useAppSelector(store => store.session);
  const dispatch = useDispatch();
  const history = useHistoryWithUTM();
  const { valid, setValid } = useValid();

  useEffect(() => {
    setValid(
      lsPhone
        ? checkPhone(
            resetMask(lsPhone),
            true,
            'return_phone_without_mask',
            null,
            true,
            [],
          )
        : { ...initialStateValid },
    );
  }, []);

  const onSubmit = async () => {
    const unmaskedPhone = resetMask(valid.value);

    dispatch(setPhoneNumber(unmaskedPhone));

    const modalParams = {
      href: url,
      ...(token ? {} : { phone: unmaskedPhone }),
    };

    return dispatch(showModal(true, modalParams));
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (resetMask(e.target.value).length > 1) {
      setValid(
        checkPhone(
          resetMask(e.target.value),
          true,
          'return_phone_without_mask',
          null,
          true,
          [],
        ),
      );
    }
  };

  return (
    <Wrapper style={{ padding: 0 }} useWrapper={false} hidden>
      <section className="container-root">
        <div className="get-card-container-sovbank">
          <div className="get-card-container-sovbank-header">{title}</div>
          <div className="get-card-content-container-sovbank">
            {description.map((el, index) => (
              <CreditCardItem
                key={`${el}_${index + 1}`}
                id={index + 1}
                title={el.title}
                subtitle={el.subtitle}
              />
            ))}
          </div>
          {!isAuth ? (
            <form style={{ width: '100%' }} onSubmit={e => e.preventDefault()}>
              <FormInput
                id="free_card_for_two_min"
                labelText="Мобильный телефон"
                mask="+7-(999)-999-99-99"
                labelClassNames="label-20"
                inputMode="tel"
                alwaysShowMask
                defaultValue={valid.value || ''}
                status={setInputStatus(valid)}
                onInput={e => onInput(e)}
                maskedHandler={onPhoneInput}
              />
              <PressButton
                type="mainBold"
                text="Получить карту"
                fullWidth
                style={{ marginTop: 16 }}
                htmlType="submit"
                id="not-open-window"
                onClick={() => {
                  ym({
                    id: Current.yandexMetrics[currentDomain],
                    methodName: 'reachGoal',
                    args: ['button-mobile-2'],
                  });
                  onSubmit().then().catch();
                }}
              />
            </form>
          ) : (
            <PressButton
              type="mainBold"
              text="Получить карту"
              style={{ marginTop: 16 }}
              htmlType="button"
              fullWidth
              onClick={() => {
                ym({
                  id: Current.yandexMetrics[currentDomain],
                  methodName: 'reachGoal',
                  args: ['button-mobile-2'],
                });

                history.push(url);
              }}
            />
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default GetCreditCardMobile;
