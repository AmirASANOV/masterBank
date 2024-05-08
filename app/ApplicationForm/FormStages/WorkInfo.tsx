import React, { memo, useEffect, useMemo } from 'react';

import { useDispatch } from 'react-redux';

import s from './WorkInfo.module.sass';

import { Address, flatInitialState } from '@/ApiConfig/DadataApi/DadataTest';
import ServiceApi from '@/ApiConfig/Endpoints/ServiceApi';
import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { employmentType } from '@/Common/AppFormHelpers/DropdownLists';
import { setInputMask, setSpaceOfNumber } from '@/Common/AppFormHelpers/Helpers';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import PressButton from '@/Components/Buttons/PressButton';
import FreeService from '@/Components/FreeService/FreeService';
import GreenBlock from '@/Components/GreenBlock/GreenBlock';
import {
  DadataInputAddressSuggestions,
  DadataInputCompanyInfoSuggestions,
} from '@/Components/Inputs/DadataInputs';
import { HhInputPositionSuggestions } from '@/Components/Inputs/HHInputs';
import {
  FormInput,
  InputLabel,
  generatedYears,
  monthList,
} from '@/Components/Inputs/OtherInputs';
import { SelectedInput } from '@/Components/Inputs/SelectInputs';
import Wrapper from '@/Components/Layouts/Wrapper';
import { Prompt } from '@/Components/Messages/Prompt';
import Protect from '@/Components/Protect/Protect';
import Steps from '@/Components/Steps/Steps';
import Timer from '@/Components/Timer/Timer';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import useFormHandler from '@/CustomHooks/useFormHandler';
import { useNotInitialEffect } from '@/CustomHooks/useNotInitialEffect';
import { currentDomain } from '@/GlobalConfig';
import { VWorkAddressFieldList, VWorkInfo } from '@/ReduxStore/reducer/Validator/Types';
import { VActions } from '@/ReduxStore/reducer/Validator/ValidatorActions';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import {
  ValidatorThunk,
  workInfoPopStateHandler,
} from '@/ReduxStore/reducer/Validator/ValidatorThunk';
import { useSendNotFullData } from '@/Utils/useSendNotFullData';
import { checkInitialValue } from '@/Utils/utils';

interface propsType {
  lsKey: string;
}

const WorkInfo: React.FC<propsType> = memo(({ lsKey }) => {
  const addrConfig: VWorkAddressFieldList = { step: 'work_info', field: 'work_address' };
  const viewport = useAppSelector(state => state.config.viewport);
  const v = useAppSelector(state => state.validator.work_info);
  const { credit_target } = useAppSelector(
    state => state.validator.credit_parameters_info,
  );
  const reducer = useAppSelector(state => state.validator);
  const { type } = useAppSelector(state => state.config.user);
  const vStatus = VActions.helpers.getInputStatus;
  const form = useFormHandler();
  const ls = lsHandler();
  const vLs: VWorkInfo = ls.get(lsKey);
  const dispatch = useDispatch();

  const checker = () => {
    dispatch(ValidatorThunk.sendWorkInfoState());
    ls.remove(lsKey);
    ServiceApi.reportInaction(false).then().catch();
  };

  useSendNotFullData(type, 'work_info');

  const popStateHandler = (e: PopStateEvent) => {
    e.preventDefault();
    dispatch(workInfoPopStateHandler());
  };

  useEffect(() => {
    window.addEventListener('popstate', popStateHandler);
    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, []);

  const deps = useMemo(() => v, []);
  useNotInitialEffect(() => {
    if (
      !checkInitialValue(v, 'work_info') &&
      !!vLs &&
      v.employment_type.result.value !== null
    ) {
      dispatch(
        AppFormActions.updateWorkInfoState(
          VActions.work_info.build(reducer, {
            value: VActions.packageData.work_info(vLs, false),
            type: 'check',
          }),
        ),
      );
      return;
    }
    ls.set(lsKey, v);
  }, [deps]);

  const availableMonths: typeof monthList = React.useMemo(() => {
    const d = new Date();
    return Number(v.start_work?.year?.result?.value?.value) === d.getFullYear()
      ? monthList.filter(({ value }) => Number(value) - 1 <= d.getMonth())
      : monthList;
  }, [v.start_work.year.result.value]);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <div className="wrapper">
          <Steps number={2} bonus={30} />
          <div className="flex-jc-start-ai-center-nowrap">
            {v.employment_type.result.value === null ? (
              <GreenBlock
                text="Ваша карта предодобрена, информация о работе нужна для полноты анкеты"
                imgUrl="/2.svg"
              />
            ) : v.employment_type.result.value?.value === 'WORKACTIVITY.1' ||
              v.employment_type.result.value?.value === 'WORKACTIVITY.2' ||
              v.employment_type.result.value?.value === 'WORKACTIVITY.4' ? (
              <GreenBlock text=" Для того, чтобы мы сформировали персональные условия, заполните поля ниже. Проверять и звонить на работу мы не будем." />
            ) : v.employment_type.result.value?.value === 'WORKACTIVITY.3' ? (
              <h2 className="header-24">
                <GreenBlock text="Многие наши клиенты работают неофициально. Заполните поля ниже, чтобы мы сформировали для Вас индивидуальные условия. Проверять и звонить на работу мы не будем." />
              </h2>
            ) : v.employment_type.result.value?.value === 'WORKACTIVITY.7' ? (
              <h2 className="header-24">
                Если в ближайшее время Вы планируете устроиться на работу, то ниже
                заполните информацию о предыдущем месте работы и мы предложим
                индивидуальные условия.
              </h2>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <form
        style={{ width: '100%' }}
        onSubmit={(e: React.FormEvent) => form.submitHandler(e, checker)}
        onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>) =>
          form.enterHandler(e, checker)
        }
        autoComplete="off"
        ref={form.form}
        autoSave="off"
        aria-hidden
      >
        <div className="wrapper">
          {v.employment_type.result.value === null ? (
            <div style={{ marginBottom: 20 }}>
              {v.work === null ? (
                <div style={{ marginBottom: 16, width: '100%' }}>
                  <h1
                    style={{
                      fontWeight: 500,
                      textAlign: 'center',
                      fontFamily: 'Geologica',
                    }}
                  >
                    Вы работаете?
                  </h1>
                </div>
              ) : v.work === 'work' || vLs?.work === 'work' ? (
                <div style={{ marginBottom: 16, width: '100%', textAlign: 'center' }}>
                  <p style={{ fontWeight: 500, fontFamily: 'Geologica', fontSize: 28 }}>
                    Информация о трудоустройстве
                  </p>

                  <p style={{ fontFamily: 'Geologica', fontWeight: 500 }}>
                    Как Вы трудоустроены?
                  </p>
                </div>
              ) : (
                ''
              )}

              <div>
                {v.work === undefined || v.work === null ? (
                  <div className={s.smartGrid}>
                    <button
                      id="form_yes"
                      style={{
                        fontFamily: 'Geologica',
                        color: '#fff',
                        backgroundColor: '#D70F27',
                        border: 'none',
                        borderRadius: 12,
                        width: '100%',
                        fontSize: 18,
                        maxWidth: 360,
                        margin: '0 10px',
                        padding: '10px 5px',
                        textAlign: 'center',
                      }}
                      onClick={() => {
                        dispatch(
                          AppFormActions.updateWorkStatus({
                            value: 'work',
                            touched: true,
                          }),
                        );
                      }}
                    >
                      Да
                    </button>
                    <button
                      id="form_no"
                      style={{
                        fontFamily: 'Geologica',
                        width: '100%',
                        maxWidth: 360,
                        borderRadius: 12,
                        fontSize: 18,
                        margin: '0 10px',
                        padding: '10px 5px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        border: '4px solid #D70F27',
                        color: '#D70F27',
                      }}
                      onClick={() => {
                        dispatch(
                          AppFormActions.updateEmployment({
                            value: {
                              value: 'WORKACTIVITY.7',
                              title: 'Нет работы, бизнеса.',
                            },
                            touched: true,
                            field: 'dont_work',
                          }),
                        );
                      }}
                    >
                      Нет
                    </button>
                  </div>
                ) : v.work === 'work' ? (
                  <div className={s.smartGridJobs}>
                    {employmentType
                      .filter(item => item.value !== 'WORKACTIVITY.7')
                      .map((emp, index) => (
                        <PressButton
                          id={`form_${emp.value}`}
                          text={emp.title}
                          type="mainBold"
                          style={{
                            width: '100%',
                            margin: 0,
                            padding: '10px 5px',
                            textAlign: 'center',
                          }}
                          htmlType="button"
                          onClick={() =>
                            dispatch(
                              AppFormActions.updateEmployment({
                                value: emp,
                                touched: true,
                                field: 'work',
                              }),
                            )
                          }
                          key={`work_press_button_${index + 1}`}
                        />
                      ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          ) : (
            ''
          )}
          {v.employment_type.result.value ? (
            <>
              <Wrapper
                style={{ marginBottom: 20, padding: '20px 0' }}
                id="workAddress-info"
              >
                <Prompt
                  titleStyle={{ textAlign: 'center' }}
                  title="Рабочий адрес"
                  containerId="workAddress"
                  fullGrid
                />
                {/* {(!!v.work_address?.region.result.value?.value ||
                  !!v.work_address?.city.result.value?.value) && (
                  <DadataInputAddressSuggestions
                    defaultValue={
                      v.work_address?.region?.result?.value?.value ||
                      vLs?.work_address?.region.result.value?.value ||
                      ''
                    }
                    required={v.work_address.region.config.required}
                    name={v.work_address.region.result.fieldName}
                    animation={false}
                    listValue={
                      v.work_address.region.result.value?.list_value ||
                      vLs?.work_address.region.result.value?.list_value
                    }
                    style={{ width: '100%' }}
                    inputType="input"
                    addrKey="region"
                    status={vStatus(v.work_address.region.result.status)}
                    clearFunc={(key: keyof Address.Full, clearCurrent) => {
                      dispatch(
                        AppFormActions.clearAddrState({
                          ...addrConfig,
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
                            step: 'work_info',
                            field: 'work_address',
                            key: 'region',
                          },
                        }),
                      )
                    }
                    message={v.work_address.region.result.message || ''}
                    minLength={5}
                    placeholder="Например: Московская область"
                  />
                )} */}

                <DadataInputAddressSuggestions // выберите улицу города или населенного пункта
                  defaultValue={
                    v.work_address?.settlement?.result?.value?.value ||
                    v.work_address?.city?.result?.value?.value ||
                    vLs?.work_address?.settlement?.result?.value?.value ||
                    vLs?.work_address?.city?.result?.value?.value ||
                    ''
                  }
                  required={v.work_address.city.config.required}
                  name={
                    v.work_address.city.result?.value?.value ||
                      !!v.work_address.region.result?.value?.value
                      ? v.work_address.city.result.fieldName
                      : 'Выберите улицу города или н.п.*'
                  }
                  animation={false}
                  listValue={
                    v.work_address.city.result.value?.list_value ||
                    vLs?.work_address.city.result.value?.list_value
                  }
                  style={{ width: '100%' }}
                  inputType="input"
                  addrKey="city"
                  status={vStatus(v.work_address.city.result.status)}
                  clearFunc={(key: keyof Address.Full, clearCurrent) => {
                    dispatch(
                      AppFormActions.clearAddrState({
                        ...addrConfig,
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
                          step: 'work_info',
                          field: 'work_address',
                          key: 'city',
                        },
                      }),
                    )
                  }
                  message={v.work_address.city.result.message || ''}
                  minLength={5}
                  placeholder={
                    !!v.work_address.city.result?.value?.value ||
                      !!v.work_address.region.result?.value?.value
                      ? 'Например: Москва'
                      : 'Например: Москва Ленина д 2 кв 1'
                  }
                />

                {!!v.work_address.city?.result.value?.value ||
                  !!v.work_address.settlement?.result.value?.value ? (
                  <>
                    <DadataInputAddressSuggestions
                      defaultValue={
                        v.work_address.street?.result.value?.value ||
                        vLs?.work_address.street?.result.value?.value ||
                        ''
                      }
                      required={v.work_address.street?.config.required}
                      name={v.work_address.street?.result.fieldName}
                      animation={false}
                      style={{ width: '100%' }}
                      inputType="input"
                      addrKey="street"
                      from_bound="street"
                      listValue={
                        v.work_address.street.result.value?.list_value ||
                        vLs?.work_address.street.result.value?.list_value
                      }
                      to_bound="street"
                      locations={[
                        {
                          kladr_id:
                            v.work_address.settlement?.result.value
                              ?.settlement_kladr_id ||
                            v.work_address.city?.result.value?.city_kladr_id ||
                            vLs?.work_address.settlement?.result.value
                              ?.settlement_kladr_id ||
                            vLs?.work_address.city?.result.value?.city_kladr_id ||
                            '',
                        },
                      ]}
                      status={vStatus(v.work_address.street.result.status)}
                      clearFunc={(key: keyof Address.Full, clearCurrent) =>
                        dispatch(
                          AppFormActions.clearAddrState({
                            ...addrConfig,
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
                              step: 'work_info',
                              field: 'work_address',
                              key: 'street',
                            },
                          }),
                        )
                      }
                      message={v.work_address.street.result.message || ''}
                      minLength={5}
                      placeholder="Например: Ленина"
                    />
                    <DadataInputAddressSuggestions
                      defaultValue={
                        v.work_address.house?.result.value?.value ||
                        vLs?.work_address.house?.result.value?.value ||
                        ''
                      }
                      required={v.work_address.house?.config.required}
                      name={v.work_address.house?.result.fieldName}
                      animation={false}
                      style={{ width: '100%' }}
                      inputType="input"
                      addrKey="house"
                      from_bound="house"
                      to_bound="house"
                      listValue={
                        v.work_address.house.result.value?.list_value ||
                        vLs?.work_address.house.result.value?.list_value
                      }
                      locations={[
                        {
                          kladr_id:
                            v.work_address.street?.result.value?.street_kladr_id ||
                            v.work_address.settlement?.result.value
                              ?.settlement_kladr_id ||
                            v.work_address.city?.result.value?.city_kladr_id ||
                            '',
                        },
                      ]}
                      status={vStatus(v.work_address.house.result.status)}
                      clearFunc={(key: keyof Address.Full, clearCurrent) =>
                        dispatch(
                          AppFormActions.clearAddrState({
                            ...addrConfig,
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
                              step: 'work_info',
                              field: 'work_address',
                              key: 'house',
                            },
                          }),
                        )
                      }
                      message={v.work_address.house.result.message || ''}
                      minLength={5}
                      placeholder="Например: 13"
                    />
                    <DadataInputAddressSuggestions
                      defaultValue={
                        v.work_address.flat.result.value?.value ||
                        vLs?.work_address.flat.result.value?.value ||
                        ''
                      }
                      required={v.work_address.flat.config.required}
                      requestAdditional={
                        v.work_address.full_address
                          ? VActions.address.getAddrRequestAdditional(v.work_address)
                          : undefined
                      }
                      name={v.work_address.flat.result.fieldName}
                      animation={false}
                      style={{ width: '100%' }}
                      inputType="input"
                      addrKey="flat"
                      listValue={
                        v.work_address.flat.result.value?.list_value ||
                        vLs?.work_address.flat.result.value?.list_value
                      }
                      filter={v.work_address.house?.result.value?.value}
                      locations={[
                        {
                          kladr_id:
                            v.work_address.house?.result.value?.house_kladr_id ||
                            v.work_address.street?.result.value?.street_kladr_id ||
                            v.work_address.settlement?.result.value
                              ?.settlement_kladr_id ||
                            v.work_address.city?.result.value?.city_kladr_id ||
                            '',
                        },
                      ]}
                      status={vStatus(v.work_address.flat.result.status)}
                      clearFunc={(key: keyof Address.Full, clearCurrent) => {
                        dispatch(
                          AppFormActions.clearAddrState({
                            ...addrConfig,
                            key,
                            clearCurrent,
                          }),
                        );
                      }}
                      setState={(data: Address.Full) => {
                        dispatch(
                          AppFormActions.updateAddrState({
                            value: data,
                            touched: true,
                            field: {
                              step: 'work_info',
                              field: 'work_address',
                              key: 'flat',
                            },
                          }),
                        );
                      }}
                      flatHandler={value => {
                        const data = VActions.address.buildAddress(v.work_address);
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
                              ...addrConfig,
                              key: 'flat',
                            },
                          }),
                        );
                      }}
                      message={v.work_address.flat.result.message || ''}
                      minLength={1}
                      placeholder="Например: 17"
                    />
                  </>
                ) : (
                  ''
                )}
              </Wrapper>
              {v.work_address.house.result.status === 'correct' ? (
                <Wrapper style={{ marginBottom: 20 }} id="workPlace-info">
                  <Prompt
                    titleStyle={{ textAlign: 'center' }}
                    title="Место работы"
                    containerId="companyDescription"
                  />
                  <DadataInputCompanyInfoSuggestions
                    inn={
                      v.organization_info.result.value?.inn ||
                      vLs?.organization_info.result.value?.inn ||
                      null
                    }
                    containerId="organization_info"
                    defaultValue={
                      v.organization_info?.result.value?.name.short_with_opf ||
                      vLs?.organization_info?.result.value?.name.short_with_opf ||
                      v.organization_info?.result.value?.name.full_with_opf ||
                      vLs?.organization_info?.result.value?.name.full_with_opf ||
                      ''
                    }
                    required={v.organization_info.config.required}
                    status={vStatus(v.organization_info.result.status)}
                    message={v.organization_info.result.message || ''}
                    locations_boost={[
                      {
                        kladr_id:
                          v.work_address?.house?.result.value?.house_kladr_id ||
                          v.work_address?.street?.result.value?.street_kladr_id ||
                          v.work_address?.settlement?.result.value?.settlement_kladr_id ||
                          v.work_address?.city?.result.value?.city_kladr_id ||
                          v.work_address?.region?.result.value?.region_kladr_id ||
                          '',
                      },
                    ]}
                    name={v.organization_info.result.fieldName}
                    fullGrid
                    minLength={3}
                    count={20}
                    setState={value =>
                      dispatch(
                        AppFormActions.updateOrganizationState({
                          value,
                          touched: true,
                        }),
                      )
                    }
                    placeholder={'например: ПАО "Сбербанк"'}
                    extra_placeholder="Введите в свободной форме или выберите из выпадающего списка"
                  />
                  <div style={{ marginTop: '-19px' }} id="startWorkCredit">
                    <InputLabel
                      style={{ position: 'static' }}
                      required={v.start_work.year.config.required}
                      text="Начало работы на последнем месте"
                      containerId="startWorkHeader"
                    />
                    <SelectedInput
                      defaultValue={
                        v.start_work.year.result.value?.title?.trim() ||
                        vLs?.start_work.year.result.value?.title?.trim() ||
                        null
                      }
                      data={generatedYears(new Date(0).getFullYear())}
                      required={v.start_work.year.config.required}
                      setState={value =>
                        dispatch(
                          AppFormActions.updateStartWorkState({
                            value,
                            touched: true,
                            field: 'year',
                          }),
                        )
                      }
                      status={vStatus(v.start_work.year.result.status)}
                      message={v.start_work.year.result.message || ''}
                      placeholder="Выберите год"
                    />
                    <SelectedInput
                      defaultValue={
                        v.start_work.month.result.value?.title?.trim() ||
                        vLs?.start_work.month.result.value?.title?.trim() ||
                        null
                      }
                      data={availableMonths}
                      required={v.start_work.month.config.required}
                      setState={value =>
                        dispatch(
                          AppFormActions.updateStartWorkState({
                            value,
                            touched: true,
                            field: 'month',
                          }),
                        )
                      }
                      status={vStatus(v.start_work.month.result.status)}
                      message={v.start_work.month.result.message || ''}
                      placeholder="Выберите месяц"
                      readOnly
                      disabled={!v.start_work.year.result.value}
                    />
                  </div>
                  <HhInputPositionSuggestions
                    name={v.job_title.result.fieldName}
                    required={v.job_title.config.required}
                    defaultValue={
                      v.job_title.result.value?.trim() ||
                      vLs?.job_title.result.value?.trim() ||
                      ''
                    }
                    status={vStatus(v.job_title.result.status)}
                    message={v.job_title.result.message || ''}
                    setState={(value: string) =>
                      dispatch(
                        AppFormActions.updateJobTitleState({
                          value,
                          touched: true,
                        }),
                      )
                    }
                    minLength={2}
                    delay={600}
                    placeholder="например: Менеджер по продажам"
                  />
                  <FormInput
                    maxLength={9}
                    labelText={v.monthly_income.result.fieldName}
                    required={v.monthly_income.config.required}
                    status={vStatus(v.monthly_income.result.status)}
                    errorMessage={v.monthly_income.result.message || ''}
                    defaultValue={
                      setInputMask(
                        v.monthly_income.result.value?.trim() || '',
                        setSpaceOfNumber(v.monthly_income.result.value?.trim() || ''),
                      ) ||
                      setInputMask(
                        vLs?.monthly_income.result.value?.trim() || '',
                        setSpaceOfNumber(vLs?.monthly_income.result.value?.trim() || ''),
                      )
                    }
                    onInput={(e, mask, setMasked, setValue) => {
                      const value = setInputMask(
                        e.target.value.trim() || '',
                        setSpaceOfNumber(e.target.value.trim()),
                      );
                      setValue(value);
                    }}
                    onBlur={e =>
                      dispatch(
                        AppFormActions.updateMonthlyIncomeState({
                          value:
                            (resetMask(e.target.value).length < 4 &&
                              resetMask(e.target.value).length > 0
                              ? `${resetMask(e.target.value)} 000`
                              : e.target.value) || '',
                          touched: true,
                        }),
                      )
                    }
                    placeholder="например: 50 000"
                    extraPlaceholder="Совокупный доход в месяц от всех источников заработка"
                    inputMode="numeric"
                  />
                </Wrapper>
              ) : (
                ''
              )}

              <div
                style={{
                  width: '100%',
                  maxWidth: 740,
                  margin: '0 auto',
                  display: 'flex',
                  marginBottom: '20px',
                }}
                id="btnGroupCredit"
              >
                {(currentDomain === 'cc_sobank' ||
                  (currentDomain === 'sovbank' && viewport === 'mobile')) &&
                  (window.location.pathname.includes('user/credit/credit_card') ||
                    window.location.pathname.includes(
                      'user/change_anketa/credit_card',
                    )) && <div className="btn-group__title">Осталось пару шагов</div>}
                {v.employment_type.result.status === 'correct' && v.work !== null ? (
                  <button
                    style={{
                      fontFamily: 'Geologica',
                      width: '100%',
                      maxWidth: 360,
                      borderRadius: 12,
                      fontSize: 18,
                      margin: '0 10px',
                      padding: '10px 5px',
                      textAlign: 'center',
                      backgroundColor: '#D70F27',
                      border: '4px solid #D70F27',
                      color: '#fff',
                    }}
                  >
                    Продолжить
                  </button>
                ) : (
                  ''
                )}
                <button
                  style={{
                    fontFamily: 'Geologica',
                    width: '100%',
                    maxWidth: 360,
                    borderRadius: 12,
                    fontSize: 18,
                    margin: '0 10px',
                    padding: '10px 5px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    border: '4px solid #D70F27',
                    color: '#D70F27',
                  }}
                  onClick={() => {
                    dispatch(workInfoPopStateHandler());
                  }}
                >
                  Назад
                </button>
              </div>
            </>
          ) : (
            ''
          )}
          <Timer />
          <br />
          <Protect />
        </div>
      </form>
    </>
  );
});

export default WorkInfo;
