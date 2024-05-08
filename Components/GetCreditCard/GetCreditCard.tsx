import React, { CSSProperties, memo, ReactNode, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { initialStateValid } from '../ApplicationFormComponents/ResendForm';
import PressButton from '../Buttons/PressButton';
import { CheckboxInput, FormInput } from '../Inputs/OtherInputs';
import { Nullable } from '../Inputs/Select/Type';
import Wrapper from '../Layouts/Wrapper';
import CustomListNumbers from '../Lists/CustomListNumbers';

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

interface Props {
  descriptionList?: Array<string>;
  url: string;
  buttonText?: string;
  useWrapper?: boolean;
  title?: (() => ReactNode) | string;
  showImage?: boolean;
  buttonStyle?: CSSProperties;
  contentContainerStyle?: CSSProperties;
}

const GetCreditCard: React.FC<Props> = memo(
  ({ descriptionList, url, useWrapper, showImage, contentContainerStyle }) => {
    const ls = lsHandler();
    const lsPhone: Nullable<string> = ls.get('phoneNumber');

    const resolution = useAppSelector(state => state.config.viewport);
    const { isAuth, phoneNumber, token } = useAppSelector(store => store.session);
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

    const onSubmit = () => {
      const phoneParam = token ? undefined : { phone: valid.value };
      dispatch(setPhoneNumber(valid.value));
      dispatch(showModal(true, { href: url, ...phoneParam }));
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

    useEffect(() => {
      if (!phoneNumber) return;

      setValid(s => ({ ...s, value: phoneNumber, valid: true, dirty: true }));

      ls.set('phoneNumber', resetMask(phoneNumber));
    }, [phoneNumber]);

    return (
      <Wrapper style={{ padding: 0 }} useWrapper={useWrapper} hidden>
        <section className="container-root">
          <div className="get-card-container">
            <div
              className={`${
                descriptionList ? 'get-card-list-container' : 'get-card-content-container'
              }`}
              style={contentContainerStyle}
            >
              {descriptionList ? (
                <>
                  <CustomListNumbers
                    title=""
                    items={[
                      'Заполните онлайн анкету',
                      'Дождитесь одобренные условия в СМС',
                      'Оператор свяжется с Вами, чтобы уточнить, куда доставить карту',
                    ]}
                  />

                  <PressButton
                    type="mainBold"
                    text="Получить карту"
                    id="auth_get_card"
                    fullWidth
                    style={
                      resolution !== 'desktop' ? { marginTop: 24 } : { marginTop: 16 }
                    }
                    htmlType="submit"
                    onClick={() => {
                      if (isAuth) {
                        history.push(url);
                      } else {
                        onSubmit();
                      }
                    }}
                  />
                </>
              ) : (
                <>
                  <h2 className="title-text fs-30-24-17 color-black-main mb-8">
                    Получите бесплатную карту за 2 минуты
                  </h2>
                  <p
                    className="title-text fs-22-17-15 mb-16"
                    style={{ color: '#5A5A5A', fontWeight: 'normal' }}
                  >
                    {Current.getCreditCard[currentDomain].description}
                  </p>

                  {!isAuth ? (
                    <form
                      style={{ width: '100%' }}
                      onSubmit={e => {
                        e.preventDefault();
                      }}
                    >
                      <FormInput
                        labelText="Мобильный телефон"
                        mask="+7-(999)-999-99-99"
                        alwaysShowMask
                        defaultValue={valid.value || ''}
                        labelClassNames="label-20"
                        status={setInputStatus(valid)}
                        onInput={e => onInput(e)}
                        inputMode="tel"
                        maskedHandler={onPhoneInput}
                      />
                      <div style={{ marginBottom: '16px' }}>
                        <PressButton
                          type="mainBold"
                          id="auth_get_card"
                          text="Получить карту"
                          fullWidth
                          style={
                            resolution !== 'desktop'
                              ? { marginTop: 24 }
                              : { marginTop: 16 }
                          }
                          htmlType="submit"
                          onClick={() => {
                            ym({
                              id: Current.yandexMetrics[currentDomain],
                              methodName: 'reachGoal',
                              args: ['button-mobile-2'],
                            });

                            onSubmit();
                          }}
                        />
                      </div>
                      <CheckboxInput
                        state
                        setState={() => ''}
                        target="_blank"
                        containerId={Math.random().toString()}
                        id="123"
                        required
                      />
                    </form>
                  ) : (
                    <>
                      <div style={{ marginBottom: '16px' }}>
                        <PressButton
                          type="mainBold"
                          id="auth_get_card"
                          text="Получить карту"
                          style={
                            resolution !== 'desktop'
                              ? { marginTop: 24 }
                              : { marginTop: 16 }
                          }
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
                      </div>
                      <CheckboxInput
                        state
                        setState={() => ''}
                        target="_blank"
                        containerId={Math.random().toString()}
                        id="123"
                        required
                      />
                    </>
                  )}
                </>
              )}
            </div>
            {/* {showImage !== false ? (
              <div
                className="get-card-image-container"
                style={{
                  backgroundImage: `url(${Current.getCreditCard[currentDomain].image})`,
                }}
              />
            ) : (
              ''
            )} */}
          </div>
        </section>
      </Wrapper>
    );
  },
);

export default GetCreditCard;
