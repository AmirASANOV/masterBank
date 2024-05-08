import React, { memo, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Address, flatInitialState } from '@/ApiConfig/DadataApi/DadataTest';
import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { lsHandler, lsKeyStorage } from '@/Common/LocalStorage/LSHandler';
import PressButton from '@/Components/Buttons/PressButton';
import CryptoPro from '@/Components/CryptoPro/CryptoPro';
import GreenBlock from '@/Components/GreenBlock/GreenBlock';
import {
  DadataFMSUnitInputSuggestions,
  DadataInputAddressSuggestions,
} from '@/Components/Inputs/DadataInputs';
import { CheckboxInputForForm, FormInput } from '@/Components/Inputs/OtherInputs';
import Wrapper from '@/Components/Layouts/Wrapper';
import { Prompt } from '@/Components/Messages/Prompt';
import Protect from '@/Components/Protect/Protect';
import Steps from '@/Components/Steps/Steps';
import Timer from '@/Components/Timer/Timer';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import useFormHandler from '@/CustomHooks/useFormHandler';
import { currentDomain } from '@/GlobalConfig';
import {
  VDataValidationReducer,
  VPassportInfo,
  VWorkAddressFieldList,
} from '@/ReduxStore/reducer/Validator/Types';
import { VActions } from '@/ReduxStore/reducer/Validator/ValidatorActions';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import { ValidatorThunk } from '@/ReduxStore/reducer/Validator/ValidatorThunk';
import { useSendNotFullData } from '@/Utils/useSendNotFullData';
import { checkInitialValue, onDateInput, onPassportInfo } from '@/Utils/utils';

interface PassportInfoProps {
  lsKey: VDataValidationReducer['current_step'];
}

const PassportInfo: React.FC<PassportInfoProps> = memo(({ lsKey }) => {
  const dispatch = useDispatch();
  const form = useFormHandler();
  const ls = lsHandler();
  const regAddrConfig: VWorkAddressFieldList = {
    step: 'passport_info',
    field: 'registration_address',
  };
  const factAddrConfig: VWorkAddressFieldList = {
    step: 'passport_info',
    field: 'fact_address',
  };
  const viewport = useAppSelector(state => state.config.viewport);
  const v = useAppSelector(state => state.validator.passport_info);
  const reducer = useAppSelector(state => state.validator);
  const vLs: VPassportInfo = ls.get(lsKey);
  const mode = useAppSelector(state => state.validator.mode);
  const vStatus = VActions.helpers.getInputStatus;
  const [showAddressContainer, setShowAddressContainer] = useState<boolean>(false);
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const addrInputMain = 'reg_addr_get_city';
  const addrFactInputMain = 'fact_addr_get_city';
  const { type } = useAppSelector(state => state.config.user);

  let intervalId: ReturnType<typeof setInterval>;

  const checker = (autoComplete?: boolean) => {
    dispatch(ValidatorThunk.sendPassportInfoState(autoComplete));
    ls.remove(lsKey);
  };
  useSendNotFullData(type, 'passport_step');

  useEffect(
    () => () => {
      clearTimeout(intervalId);
    },
    [],
  );

  useEffect(() => {
    if (
      v.issued_by.result.status === 'correct' &&
      v.department_code.result.status === 'correct' &&
      v.date_birthday.result.status === 'correct' &&
      v.series_and_number.result.status === 'correct' &&
      v.born_city.result.status === 'correct' &&
      v.issued_date.result.status === 'correct'
    ) {
      setShowAddressContainer(prev => (!prev ? true : prev));
    } else {
      setShowAddressContainer(prev => (prev ? false : prev));
    }
  }, [
    v.issued_by,
    v.department_code,
    v.date_birthday,
    v.series_and_number,
    v.born_city,
    v.issued_date,
  ]);

  useEffect(() => {
    if (v.registration_address.city.result.status !== 'correct') {
      // setInputFocus(`#${addrInputMain}`)
    }
  }, [showAddressContainer]);

  useEffect(() => {
    if (
      v.registration_address.house.result.status === 'correct' &&
      showAddressContainer
    ) {
      if (v.equalAddr === undefined) {
        // setInputFocus(`#${getEqual}`)
      } else if (v.equalAddr) {
        setShowContacts(true);
      } else if (!v.equalAddr) {
        if (v.fact_address.house.result.status === 'correct') {
          setShowContacts(true);
        } else {
          // setInputFocus(`#${addrFactInputMain}`)
        }
      }
    } else {
      setShowContacts(false);
    }
  }, [
    v.registration_address.house.result.status,
    showAddressContainer,
    v.equalAddr,
    v.fact_address.house.result.status,
  ]);

  useEffect(() => {
    if (mode === 'credit') {
      if (showContacts || showAll) {
        clearTimeout(intervalId);
        intervalId = setTimeout(
          () => {
            checker(true);
          },
          5 * 1000 * 60,
        );
      }
    }
    return () => clearTimeout(intervalId);
  }, [showContacts, showAll]);

  useEffect(() => {
    if (!checkInitialValue(v, 'passport_info') && !!vLs) {
      dispatch(
        AppFormActions.updatePassportInfoState(
          VActions.passport_info.build(reducer, {
            value: VActions.packageData.passport_info(vLs, false),
            type: 'check',
          }),
        ),
      );
    }
  }, [v]);

  useEffect(
    () => () => {
      ls.set(lsKey, v);
    },
    [],
  );

  return (
    <div className="wrapper">
      <Steps number={4} bonus={40} />
      <form
        style={{ width: '100%' }}
        onSubmit={(e: React.FormEvent) => form.submitHandler(e, checker)}
        onKeyDown={e => form.enterHandler(e, checker)}
        autoComplete="off"
        ref={form.form}
        autoSave="off"
        aria-hidden
      >
        <Wrapper style={{ marginBottom: 20 }} id="passport-info">
          <Prompt
            containerId="passportHeader"
            title={
              (currentDomain === 'cc_sobank' || currentDomain === 'sovbank') &&
              (window.location.pathname.includes('user/credit/credit_card') ||
                window.location.pathname.includes('user/change_anketa/credit_card'))
                ? ''
                : 'Паспортные данные'
            }
            titleStyle={{ marginBottom: 16 }}
            suggestionContent={[
              'Ваши данные надежно защищены по ФЗ "О персональных данных" N 152. Лицензия №74-18-004739 Приказ № 212',
            ]}
            fullGrid
            suggestionContainerClassName={
              (currentDomain === 'cc_sobank' || currentDomain === 'sovbank') &&
              (window.location.pathname.includes('user/credit/credit_card') ||
                window.location.pathname.includes('user/change_anketa/credit_card'))
                ? 'suggestion-info cc_sobank'
                : undefined
            }
            suggestionItemClassName={
              (currentDomain === 'cc_sobank' || currentDomain === 'sovbank') &&
              (window.location.pathname.includes('user/credit/credit_card') ||
                window.location.pathname.includes('user/change_anketa/credit_card'))
                ? 'suggestion-item cc_sobank'
                : undefined
            }
          />

          <FormInput
            labelText={v.date_birthday.result.fieldName}
            defaultValue={
              resetMask(v.date_birthday.result.value) ||
              resetMask(vLs?.date_birthday.result.value) ||
              ''
            }
            status={vStatus(v.date_birthday.result.status)}
            errorMessage={v.date_birthday.result.message || ''}
            onBlur={e =>
              dispatch(
                AppFormActions.updateDateBirthday({
                  value: e.target.value,
                  touched: true,
                }),
              )
            }
            required={v.date_birthday.config.required}
            placeholder="например: 25-09-1972"
            mask="99-99-9999"
            inputMode="numeric"
            maskedHandler={onDateInput}
          />

          <FormInput
            labelText={v.born_city.result.fieldName}
            inputType="text"
            defaultValue={
              v.born_city.result.value?.trim() ||
              vLs?.born_city.result.value?.trim() ||
              ''
            }
            required={v.born_city.config.required}
            onBlur={e =>
              dispatch(
                AppFormActions.updateBornCityState({
                  value: e.target.value,
                  touched: true,
                }),
              )
            }
            status={vStatus(v.born_city.result.status)}
            errorMessage={v.born_city.result.message || ''}
            placeholder="Например: г. Москва"
          />

          <FormInput
            labelText={v.series_and_number.result.fieldName}
            onBlur={e =>
              dispatch(
                AppFormActions.updateSeriesAndNumberState({
                  value: e.target.value,
                  touched: true,
                }),
              )
            }
            defaultValue={
              resetMask(v.series_and_number.result.value) ||
              resetMask(vLs?.series_and_number.result.value) ||
              ''
            }
            required={v.series_and_number.config.required}
            maxLength={11}
            minLength={11}
            status={vStatus(v.series_and_number.result.status)}
            errorMessage={v.series_and_number.result.message || ''}
            placeholder="например: 7777 777777"
            mask="9999 999999"
            inputMode="numeric"
            maskedHandler={onPassportInfo}
          />

          <FormInput
            labelText={v.issued_date.result.fieldName}
            defaultValue={
              v.issued_date.result.value?.trim() ||
              vLs?.issued_date.result.value?.trim() ||
              ''
            }
            onBlur={e =>
              dispatch(
                AppFormActions.updateIssuedDate({
                  value: e.target.value,
                  touched: true,
                }),
              )
            }
            required={v.issued_date.config.required}
            status={vStatus(v.issued_date.result.status)}
            errorMessage={v.issued_date.result.message || ''}
            placeholder="например: 22-10-2012"
            mask="99-99-9999"
            inputMode="numeric"
            maskedHandler={onDateInput}
          />

          <DadataFMSUnitInputSuggestions
            defaultValue={
              v.department_code.result.value?.trim() ||
              vLs?.department_code.result.value?.trim() ||
              ''
            }
            required={v.department_code.config.required}
            setState={value => {
              dispatch(
                AppFormActions.updateDepartmentCodeState({
                  value,
                  touched: true,
                }),
              );
            }}
            issuedBy={v.issued_by.result.value || ''}
            status={vStatus(v.department_code.result.status)}
            message={v.department_code.result.message || ''}
            name={v.department_code.result.fieldName}
            minLength={7}
            count={20}
            delay={300}
            placeholder="например: 740-023"
          />

          <FormInput
            containerId="issuedByCredit"
            labelText={v.issued_by.result.fieldName}
            inputType="text"
            fullGrid
            defaultValue={
              v.issued_by.result.value?.trim() ||
              vLs?.issued_by.result.value?.trim() ||
              ''
            }
            required={v.issued_by.config.required}
            onBlur={e =>
              dispatch(
                AppFormActions.updateIssuedByState({
                  value: e.target.value,
                  touched: true,
                }),
              )
            }
            status={vStatus(v.issued_by.result.status)}
            errorMessage={v.issued_by.result.message || ''}
            placeholder="Заполнится автоматически при выборе кода подразделения"
          />
        </Wrapper>

        {showAddressContainer || showAll ? (
          <Wrapper
            style={{ marginBottom: 20 }}
            id={`${v.equalAddr ? 'reg-address' : 'full-address'}`}
          >
            <Prompt
              titleStyle={{ textAlign: 'center' }}
              title="Адрес регистрации"
              fullGrid
            />
            {(!!v.registration_address?.region?.result?.value?.value ||
              !!v.registration_address?.city?.result?.value?.value ||
              !!vLs?.registration_address?.region?.result?.value?.value ||
              !!vLs?.registration_address?.city?.result?.value?.value) && (
              <DadataInputAddressSuggestions
                defaultValue={
                  v.registration_address?.region?.result?.value?.value ||
                  vLs?.registration_address?.region?.result?.value?.value ||
                  ''
                }
                required={v.registration_address.region.config.required}
                name={v.registration_address.region.result.fieldName}
                animation={false}
                listValue={v.registration_address.region.result.value?.list_value}
                style={{ width: '100%' }}
                inputType="input"
                addrKey="region"
                status={vStatus(v.registration_address.region.result.status)}
                clearFunc={(key: keyof Address.Full, clearCurrent) => {
                  dispatch(
                    AppFormActions.clearAddrState({
                      ...regAddrConfig,
                      key,
                      clearCurrent,
                    }),
                  );
                }}
                setState={(data: Address.Full) =>
                  dispatch(
                    AppFormActions.updateAddrState({
                      value: data,
                      touched: true,
                      field: {
                        ...regAddrConfig,
                        key: 'region',
                      },
                    }),
                  )
                }
                message={v.registration_address.region.result.message || ''}
                minLength={5}
                placeholder="Например: Московская область"
              />
            )}
            <DadataInputAddressSuggestions
              defaultValue={
                v.registration_address?.settlement?.result?.value?.value ||
                v.registration_address?.city?.result?.value?.value ||
                vLs?.registration_address?.settlement?.result?.value?.value ||
                vLs?.registration_address?.city?.result?.value?.value ||
                ''
              }
              required={v.registration_address.city.config.required}
              name={
                v.registration_address.city.result?.value?.value ||
                !!v.registration_address.region.result?.value?.value
                  ? v.registration_address.city.result.fieldName
                  : 'Выберите город или населен. пункт*'
              }
              listValue={
                v.registration_address.city.result.value?.list_value ||
                vLs?.registration_address.city.result.value?.list_value
              }
              id={addrInputMain}
              animation={false}
              style={{ width: '100%' }}
              inputType="input"
              addrKey="city"
              status={vStatus(v.registration_address.city.result.status)}
              clearFunc={(key: keyof Address.Full, clearCurrent) =>
                dispatch(
                  AppFormActions.clearAddrState({
                    ...regAddrConfig,
                    key,
                    clearCurrent,
                  }),
                )
              }
              setState={(data: Address.Full) =>
                dispatch(
                  AppFormActions.updateAddrState({
                    value: data,
                    touched: true,
                    field: {
                      ...regAddrConfig,
                      key: 'city',
                    },
                  }),
                )
              }
              message={v.registration_address.city.result.message || ''}
              minLength={5}
              placeholder={
                v.registration_address.city.result?.value?.value ||
                !!v.registration_address.region.result?.value?.value
                  ? 'Например: Москва'
                  : 'Например: Москва Ленина д 2 кв 1'
              }
            />
            {v.registration_address?.city?.result.status === 'correct' ||
            v?.registration_address?.settlement?.result.status === 'correct' ||
            vLs?.registration_address?.city?.result.status === 'correct' ||
            vLs?.registration_address?.settlement?.result.status === 'correct' ? (
              <>
                <DadataInputAddressSuggestions
                  defaultValue={
                    v.registration_address.street?.result?.value?.value ||
                    vLs?.registration_address.street?.result?.value?.value ||
                    ''
                  }
                  required={v.registration_address.street.config.required}
                  name={v.registration_address.street.result.fieldName}
                  animation={false}
                  style={{ width: '100%' }}
                  inputType="input"
                  addrKey="street"
                  from_bound="street"
                  to_bound="street"
                  listValue={
                    v.registration_address.street.result.value?.list_value ||
                    vLs?.registration_address.street.result.value?.list_value
                  }
                  locations={[
                    {
                      kladr_id:
                        v.registration_address.settlement?.result?.value
                          ?.settlement_kladr_id ||
                        v.registration_address.city?.result?.value?.city_kladr_id ||
                        vLs?.registration_address.settlement?.result?.value
                          ?.settlement_kladr_id ||
                        vLs?.registration_address.city?.result?.value?.city_kladr_id ||
                        '',
                    },
                  ]}
                  status={vStatus(v.registration_address.street.result.status)}
                  clearFunc={(key: keyof Address.Full, clearCurrent) =>
                    dispatch(
                      AppFormActions.clearAddrState({
                        ...regAddrConfig,
                        key,
                        clearCurrent,
                      }),
                    )
                  }
                  setState={(data: Address.Full) =>
                    dispatch(
                      AppFormActions.updateAddrState({
                        value: data,
                        touched: true,
                        field: {
                          ...regAddrConfig,
                          key: 'street',
                        },
                      }),
                    )
                  }
                  message={v.registration_address.street.result.message || ''}
                  minLength={5}
                  placeholder="Например: Ленина"
                />
                <DadataInputAddressSuggestions
                  defaultValue={
                    v.registration_address.house?.result?.value?.value ||
                    vLs?.registration_address.house?.result?.value?.value ||
                    ''
                  }
                  required={v.registration_address.house.config.required}
                  name={v.registration_address.house.result.fieldName}
                  listValue={
                    v.registration_address.house.result.value?.list_value ||
                    vLs?.registration_address.house.result.value?.list_value
                  }
                  animation={false}
                  style={{ width: '100%' }}
                  inputType="input"
                  addrKey="house"
                  from_bound="house"
                  to_bound="house"
                  locations={[
                    {
                      kladr_id:
                        v.registration_address.street?.result?.value?.street_kladr_id ||
                        v.registration_address.settlement?.result?.value
                          ?.settlement_kladr_id ||
                        v.registration_address.city?.result?.value?.city_kladr_id ||
                        vLs?.registration_address.street?.result?.value
                          ?.street_kladr_id ||
                        vLs?.registration_address.settlement?.result?.value
                          ?.settlement_kladr_id ||
                        vLs?.registration_address.city?.result?.value?.city_kladr_id ||
                        '',
                    },
                  ]}
                  status={vStatus(v.registration_address.house.result.status)}
                  clearFunc={(key: keyof Address.Full, clearCurrent) =>
                    dispatch(
                      AppFormActions.clearAddrState({
                        ...regAddrConfig,
                        key,
                        clearCurrent,
                      }),
                    )
                  }
                  setState={(data: Address.Full) =>
                    dispatch(
                      AppFormActions.updateAddrState({
                        value: data,
                        touched: true,
                        field: {
                          ...regAddrConfig,
                          key: 'house',
                        },
                      }),
                    )
                  }
                  message={v.registration_address.house.result.message || ''}
                  minLength={5}
                  placeholder="Например: 13"
                />
                <DadataInputAddressSuggestions
                  defaultValue={
                    v.registration_address.flat?.result?.value?.value ||
                    vLs?.registration_address.flat?.result?.value?.value ||
                    ''
                  }
                  required={v.registration_address.flat.config.required}
                  requestAdditional={
                    v.registration_address.full_address
                      ? VActions.address.getAddrRequestAdditional(v.registration_address)
                      : undefined
                  }
                  name={v.registration_address.flat?.result?.fieldName}
                  animation={false}
                  listValue={
                    v.registration_address.flat.result.value?.list_value ||
                    vLs?.registration_address.flat.result.value?.list_value
                  }
                  filter={v.registration_address.house?.result?.value?.value}
                  style={{ width: '100%' }}
                  inputType="input"
                  addrKey="flat"
                  status={vStatus(v.registration_address.flat.result.status)}
                  clearFunc={(key: keyof Address.Full, clearCurrent) =>
                    dispatch(
                      AppFormActions.clearAddrState({
                        ...regAddrConfig,
                        key,
                        clearCurrent,
                      }),
                    )
                  }
                  setState={(data: Address.Full) =>
                    dispatch(
                      AppFormActions.updateAddrState({
                        value: data,
                        touched: true,
                        field: {
                          ...regAddrConfig,
                          key: 'flat',
                        },
                      }),
                    )
                  }
                  flatHandler={value => {
                    const data = VActions.address.buildAddress(v.registration_address);
                    data.flat = {
                      ...flatInitialState,
                      value: value || '',
                      list_value: value || '',
                      flat: value || '',
                    };

                    dispatch(
                      AppFormActions.updateAddrState({
                        value: data,
                        touched: true,
                        field: {
                          ...regAddrConfig,
                          key: 'flat',
                        },
                      }),
                    );
                  }}
                  message={v.registration_address.flat.result.message || ''}
                  minLength={1}
                  placeholder="Например: 17"
                />
                <CheckboxInputForForm
                  state={!!v.equalAddr}
                  setState={value => dispatch(AppFormActions.updateEqualAddress(value))}
                  label="Адрес фактического проживания совпадает с адресом регистрации"
                  containerId="factAddressConfirmCredit"
                  id="factAddressConfirm"
                  required={false}
                  fullGrid
                  message=""
                />
                {v.equalAddr === false ? (
                  <div
                    data-full-grid="true"
                    id="reg-address"
                    style={{
                      boxShadow: 'none',
                      borderRadius: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    <Prompt
                      titleStyle={{ textAlign: 'center' }}
                      title="Адрес фактического проживания"
                      fullGrid
                    />
                    {(!!v.fact_address?.region?.result?.value?.value ||
                      !!v.fact_address?.city?.result?.value?.value ||
                      !!vLs?.fact_address?.region?.result?.value?.value ||
                      !!vLs?.fact_address?.city?.result?.value?.value) && (
                      <DadataInputAddressSuggestions
                        defaultValue={
                          v.fact_address?.region?.result?.value?.value ||
                          vLs?.fact_address?.region?.result?.value?.value ||
                          ''
                        }
                        required={v.fact_address.region.config.required}
                        name={v.fact_address.region.result.fieldName}
                        animation={false}
                        listValue={
                          v.fact_address.region.result.value?.list_value ||
                          vLs?.fact_address.region.result.value?.list_value
                        }
                        style={{ width: '100%' }}
                        inputType="input"
                        addrKey="region"
                        status={vStatus(v.fact_address.region.result.status)}
                        clearFunc={(key: keyof Address.Full, clearCurrent) => {
                          dispatch(
                            AppFormActions.clearAddrState({
                              ...factAddrConfig,
                              key,
                              clearCurrent,
                            }),
                          );
                        }}
                        setState={(data: Address.Full) =>
                          dispatch(
                            AppFormActions.updateAddrState({
                              value: data,
                              touched: true,
                              field: {
                                ...factAddrConfig,
                                key: 'region',
                              },
                            }),
                          )
                        }
                        message={v.fact_address.region.result.message || ''}
                        minLength={5}
                        placeholder="Например: Московская область"
                      />
                    )}
                    <DadataInputAddressSuggestions
                      defaultValue={
                        v.fact_address?.settlement?.result?.value?.value ||
                        v.fact_address?.city?.result?.value?.value ||
                        vLs?.fact_address?.settlement?.result?.value?.value ||
                        vLs?.fact_address?.city?.result?.value?.value ||
                        ''
                      }
                      required={v.fact_address.city.config.required}
                      name={
                        v.fact_address.city.result?.value?.value ||
                        !!v.fact_address.region.result?.value?.value
                          ? v.fact_address.city.result.fieldName
                          : 'Введите адрес в поле ниже и\nвыберите подходящий из списка'
                      }
                      animation={false}
                      style={{ width: '100%' }}
                      inputType="input"
                      addrKey="city"
                      listValue={
                        v.fact_address.city.result.value?.list_value ||
                        vLs?.fact_address.city.result.value?.list_value
                      }
                      id={addrFactInputMain}
                      status={vStatus(v.fact_address.city.result.status)}
                      clearFunc={(key: keyof Address.Full, clearCurrent) =>
                        dispatch(
                          AppFormActions.clearAddrState({
                            ...factAddrConfig,
                            key,
                            clearCurrent,
                          }),
                        )
                      }
                      setState={(data: Address.Full) =>
                        dispatch(
                          AppFormActions.updateAddrState({
                            value: data,
                            touched: true,
                            field: {
                              ...factAddrConfig,
                              key: 'city',
                            },
                          }),
                        )
                      }
                      message={v.fact_address.city.result.message || ''}
                      minLength={5}
                      placeholder={
                        v.fact_address.city.result?.value?.value ||
                        !!v.fact_address.region.result?.value?.value
                          ? 'Например: Москва'
                          : 'Например: Москва Ленина д 2 кв 1'
                      }
                    />
                    {v.fact_address?.city?.result.status === 'correct' ||
                    v.fact_address?.settlement?.result?.status === 'correct' ? (
                      <>
                        <DadataInputAddressSuggestions
                          defaultValue={v.fact_address.street?.result?.value?.value || ''}
                          required={v.fact_address.street.config.required}
                          name={v.fact_address.street.result.fieldName}
                          animation={false}
                          style={{ width: '100%' }}
                          listValue={v.fact_address.street.result.value?.list_value}
                          inputType="input"
                          addrKey="street"
                          from_bound="street"
                          to_bound="street"
                          locations={[
                            {
                              kladr_id:
                                v.fact_address.settlement?.result?.value
                                  ?.settlement_kladr_id ||
                                v.fact_address.city?.result?.value?.city_kladr_id ||
                                '',
                            },
                          ]}
                          status={vStatus(v.fact_address.street.result.status)}
                          clearFunc={(key: keyof Address.Full, clearCurrent) =>
                            dispatch(
                              AppFormActions.clearAddrState({
                                ...factAddrConfig,
                                key,
                                clearCurrent,
                              }),
                            )
                          }
                          setState={(data: Address.Full) =>
                            dispatch(
                              AppFormActions.updateAddrState({
                                value: data,
                                touched: true,
                                field: {
                                  ...factAddrConfig,
                                  key: 'street',
                                },
                              }),
                            )
                          }
                          message={v.fact_address.street.result.message || ''}
                          minLength={5}
                          placeholder="Например: Ленина"
                        />
                        <DadataInputAddressSuggestions
                          defaultValue={v.fact_address.house?.result?.value?.value || ''}
                          required={v.fact_address.house.config.required}
                          name={v.fact_address.house.result.fieldName}
                          animation={false}
                          style={{ width: '100%' }}
                          inputType="input"
                          addrKey="house"
                          listValue={v.fact_address.house.result.value?.list_value}
                          from_bound="house"
                          to_bound="house"
                          locations={[
                            {
                              kladr_id:
                                v.fact_address.street?.result?.value?.street_kladr_id ||
                                v.fact_address.settlement?.result?.value
                                  ?.settlement_kladr_id ||
                                v.fact_address.city?.result?.value?.city_kladr_id ||
                                '',
                            },
                          ]}
                          status={vStatus(v.fact_address.house.result.status)}
                          clearFunc={(key: keyof Address.Full, clearCurrent) =>
                            dispatch(
                              AppFormActions.clearAddrState({
                                ...factAddrConfig,
                                key,
                                clearCurrent,
                              }),
                            )
                          }
                          setState={(data: Address.Full) =>
                            dispatch(
                              AppFormActions.updateAddrState({
                                value: data,
                                touched: true,
                                field: {
                                  ...factAddrConfig,
                                  key: 'house',
                                },
                              }),
                            )
                          }
                          message={v.fact_address.house.result.message || ''}
                          minLength={5}
                          placeholder="Например: 13"
                        />
                        <DadataInputAddressSuggestions
                          defaultValue={v.fact_address.flat?.result?.value?.value || ''}
                          required={v.fact_address.flat.config.required}
                          requestAdditional={
                            v.fact_address.full_address
                              ? VActions.address.getAddrRequestAdditional(v.fact_address)
                              : undefined
                          }
                          name={v.fact_address.flat.result.fieldName}
                          animation={false}
                          filter={v.fact_address.house?.result?.value?.value}
                          style={{ width: '100%' }}
                          listValue={v.fact_address.flat.result.value?.list_value}
                          inputType="input"
                          addrKey="flat"
                          status={vStatus(v.fact_address.flat.result.status)}
                          clearFunc={(key: keyof Address.Full, clearCurrent) =>
                            dispatch(
                              AppFormActions.clearAddrState({
                                ...factAddrConfig,
                                key,
                                clearCurrent,
                              }),
                            )
                          }
                          setState={(data: Address.Full) =>
                            dispatch(
                              AppFormActions.updateAddrState({
                                value: data,
                                touched: true,
                                field: {
                                  ...factAddrConfig,
                                  key: 'flat',
                                },
                              }),
                            )
                          }
                          flatHandler={value => {
                            const data = VActions.address.buildAddress(v.fact_address);
                            data.flat = {
                              ...flatInitialState,
                              value: value || '',
                              list_value: value || '',
                              flat: value || '',
                            };

                            dispatch(
                              AppFormActions.updateAddrState({
                                value: data,
                                touched: true,
                                field: {
                                  ...factAddrConfig,
                                  key: 'flat',
                                },
                              }),
                            );
                          }}
                          message={v.fact_address.flat.result.message || ''}
                          minLength={5}
                          placeholder="Например: 17"
                        />
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )}
          </Wrapper>
        ) : (
          ''
        )}
        {(showContacts || showAll) && mode === 'change_anketa' ? (
          <Wrapper>
            <Prompt
              title="Предупреждение"
              titleStyle={{ marginBottom: 24 }}
              suggestionContent={[
                'Ваши данные сохранены.',
                'Вы находитесь в режиме редактирования вашей анкеты. Нажимая на кнопку "Отправить заявку" вы создадите новую заявку, с новыми решениями наших партнеров.',
              ]}
            />
          </Wrapper>
        ) : (
          ''
        )}
        <div
          className={`btn-group ${viewport !== 'mobile' ? 'reverse-row mr0' : 'mr0'}`}
          id="second-form-btn-group"
          style={{
            margin: '0 auto 40px auto',
            maxWidth: '740px',
            gap: '20px',
          }}
        >
          <PressButton
            type="mainBold"
            text="Отправить заявку"
            htmlType="submit"
            onClick={() => {
              setShowAll(true);
              Object.values(lsKeyStorage.anketa).forEach(key => {
                ls.remove(key);
              });
            }}
          />
          <PressButton
            type="escape"
            onClick={() => dispatch(AppFormActions.setApplicationStep('additional_info'))}
            text="Назад"
            htmlType="button"
          />
        </div>
        {(currentDomain === 'cc_sobank' || currentDomain === 'sovbank') &&
          (window.location.pathname.includes('user/credit/credit_card') ||
            window.location.pathname.includes('user/change_anketa/credit_card')) && (
            <CryptoPro />
          )}
      </form>
      <GreenBlock
        style={{ marginBottom: '40px' }}
        text=" Ваши данные защищены в соответствии с ФЗ 152 и стандартами 
PCI DSS, ISO/IEC 27001, 27017, 27018"
      />
      <Timer />
      <br />
      <Protect />
    </div>
  );
});

export default PassportInfo;
