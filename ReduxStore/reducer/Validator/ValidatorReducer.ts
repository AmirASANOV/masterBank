import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { clearState } from '../AppDecisions/AppDecisionsReducer';

import {
  PayloadDataType,
  PayloadMain,
  VAdditionalInfo,
  VBuilder,
  VCreditParameters,
  VCreditParamsAgreement,
  VCurrentStepProps,
  VDataValidationReducer,
  VDepartmentCodeProps,
  VHypothec,
  VItem,
  VPassportInfo,
  VPassportInfoContacts,
  VResult,
  VWorkAddressFieldList,
  VWorkInfo,
} from './Types';
import { VActions } from './ValidatorActions';
import { ValidatorThunk } from './ValidatorThunk';

import { Dadata, Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { Address } from '@/ApiConfig/DadataApi/DadataTest';
import {
  childrenData,
  EducationData,
  employmentType,
  familyStatusData,
  havingCarData,
  havingRealEstateData,
  workActivityTypeData,
} from '@/Common/AppFormHelpers/DropdownLists';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import { generatedYears, monthList } from '@/Components/Inputs/OtherInputs';
import { DataElement, TypeOfInputData } from '@/Components/Inputs/Types/InputPropsType';
import { App } from '@/ProjectTypes/AppTypes';

const defaultStateResult: Omit<VResult<unknown>, 'value' | 'fieldName'> = {
  status: 'insipid',
  touched: false,
  message: '',
  modified: Date.now(),
  focusTime: 0,
};
const defaultStateConfig: { strict: boolean } = {
  strict: false,
};
const ls = lsHandler();

const getValidatorModeFromUrl = (): VDataValidationReducer['mode'] => {
  const { pathname } = window.location;
  let mode: VDataValidationReducer['mode'] = 'credit';

  if (/^\/user\/change_anketa\//.test(pathname)) {
    mode = 'change_anketa';
  }

  return mode;
};

export const initialValidatorState: VDataValidationReducer = {
  fetchingFromChildren: false,
  mode: getValidatorModeFromUrl(),
  current_step: 'credit_parameters_info',
  fetchStatus: null,
  modified: {
    lastModified: 'create initial state',
    lastTimeStamp: Date.now(),
  },
  credit_parameters_info: ls.get('credit_parameters_info') || {
    credit_target: {
      result: {
        value: { value: 'credit_card', title: 'Кредитная карта' },
        fieldName: 'Выберите продукт',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    name: {
      result: {
        value: null,
        fieldName: 'Ваше имя',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
        minLength: 2,
        maxLength: 128,
      },
    },
    surname: {
      result: {
        value: null,
        fieldName: 'Ваша фамилия',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
        minLength: 2,
        maxLength: 128,
      },
    },
    patronymic: {
      result: {
        value: null,
        fieldName: 'Ваше отчество',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
        minLength: 2,
        maxLength: 128,
      },
    },
    credit_sum: {
      result: {
        value: null,
        fieldName: 'Сумма кредита, руб.',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    deposit_car: {
      result: {
        value: null,
        fieldName: 'Первоначальный взнос *',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    email: {
      result: {
        value: null,
        fieldName: 'Электронная почта',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    gender: {
      result: {
        value: null,
        fieldName: 'Пол',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    agreement: {
      result: {
        value: {
          state: true,
          description: 'Я соглашаюсь с правилами обработки информации',
          pathName:
            '/documents/Soglasie%20na%20obrabotku%20personalnikh%20dannikh/fromForm',
        },
        fieldName: 'Согласие с правилами обработки информации',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    phone_number: {
      result: {
        value: null,
        fieldName: 'Номер телефона',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    email_generated: false,
    errors: [],
  },
  work_info: ls.get('work_info') || {
    work: null,
    employment_type: {
      result: {
        value: null,
        fieldName: 'Тип занятости',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    work_address: {
      full_address: {
        result: {
          value: null,
          fieldName: 'Введите адрес в поле ниже и\nвыберите подходящий из списка',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      region: {
        result: {
          value: null,
          fieldName: 'Выберите регион',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      area: {
        result: {
          value: null,
          fieldName: 'Укажите район региона',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      city: {
        result: {
          value: null,
          fieldName: 'Выберите улицу города или н.п.',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      settlement: {
        result: {
          value: null,
          fieldName: 'Выберите населенный пункт',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      street: {
        result: {
          value: null,
          fieldName: 'Выберите улицу (если есть)',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      house: {
        result: {
          value: null,
          fieldName: 'Выберите дом',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      flat: {
        result: {
          value: null,
          fieldName: 'Укажите офис (если есть)',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
    },
    organization_info: {
      result: {
        value: null,
        fieldName: 'Организация, в которой вы работаете(-ли)',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    start_work: {
      month: {
        result: {
          value: null,
          fieldName: 'Месяц начала работы на последнем месте',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      year: {
        result: {
          value: null,
          fieldName: 'Год начала работы на последнем месте',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
    },
    expirience: {
      result: {
        value: { value: '120', title: 'От 3 лет до 10 лет' },
        fieldName: 'Общий трудовой стаж',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    phone_work: {
      result: {
        value: null,
        fieldName: 'Рабочий номер телефона',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    job_title: {
      result: {
        value: null,
        fieldName: 'Название должности',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    monthly_income: {
      result: {
        value: null,
        fieldName: 'Общий ежемесячный доход',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    work_activity_type: {
      result: {
        value:
          workActivityTypeData[
            Math.floor(Math.random() * (workActivityTypeData.length - 1))
          ],
        fieldName: 'Тип должности',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    errors: [],
  },
  additional_info: ls.get('additional_info') || {
    sms_code: {
      result: {
        value: null,
        fieldName: 'Введите код подтверждения',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    education: {
      result: {
        value: null,
        fieldName: 'Ваше образование',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    family_status: {
      result: {
        value: null,
        fieldName: 'Семейное положение',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    children: {
      result: {
        value: null,
        fieldName: 'Дети до 18 лет',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    having_car: {
      result: {
        value: null,
        fieldName: 'Наличие автомобиля',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    having_real_estate: {
      result: {
        value: null,
        fieldName: 'Наличие недвижимости',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    show_confirm: false,
    errors: [],
  },
  passport_info: ls.get('passport_info') || {
    equalAddr: true,
    date_birthday: {
      result: {
        value: null,
        fieldName: 'Дата рождения',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    born_city: {
      result: {
        value: null,
        fieldName: 'Место рождения',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    series_and_number: {
      result: {
        value: null,
        fieldName: 'Серия и номер паспорта',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    issued_date: {
      result: {
        value: null,
        fieldName: 'Дата выдачи паспорта',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    department_code: {
      result: {
        value: null,
        fieldName: 'Код подразделения',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    issued_by: {
      result: {
        value: null,
        fieldName: 'Кем выдан паспорт',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    registration_address: {
      full_address: {
        result: {
          value: null,
          fieldName: 'Укажите полный адрес регистрации',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      region: {
        result: {
          value: null,
          fieldName: 'Выберите регион',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      area: {
        result: {
          value: null,
          fieldName: 'Укажите район региона',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      city: {
        result: {
          value: null,
          fieldName: 'Выберите город или населен. пункт',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      settlement: {
        result: {
          value: null,
          fieldName: 'Выберите населенный пункт',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      street: {
        result: {
          value: null,
          fieldName: 'Выберите улицу (если есть)',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      house: {
        result: {
          value: null,
          fieldName: 'Выберите дом',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      flat: {
        result: {
          value: null,
          fieldName: 'Укажите квартиру (если есть)',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
    },
    fact_address: {
      full_address: {
        result: {
          value: null,
          fieldName: 'Укажите полный адрес фактического проживания',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      region: {
        result: {
          value: null,
          fieldName: 'Выберите регион',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      area: {
        result: {
          value: null,
          fieldName: 'Укажите район региона',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      city: {
        result: {
          value: null,
          fieldName: 'Выберите город или населен. пункт',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      settlement: {
        result: {
          value: null,
          fieldName: 'Выберите населенный пункт',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      street: {
        result: {
          value: null,
          fieldName: 'Выберите улицу (если есть)',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
      house: {
        result: {
          value: null,
          fieldName: 'Выберите дом',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: true,
        },
      },
      flat: {
        result: {
          value: null,
          fieldName: 'Укажите квартиру (если есть)',
          ...defaultStateResult,
        },
        config: {
          ...defaultStateConfig,
          required: false,
        },
      },
    },
    contact_name: {
      result: {
        value: null,
        fieldName: 'Имя контактного лица',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    contact_phone: {
      result: {
        value: null,
        fieldName: 'Номер контактного лица',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: false,
      },
    },
    errors: [],
  },
  hypothec_info: {
    region: {
      result: {
        value: null,
        fieldName: 'Регион приобретения',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    apartment_type: {
      result: {
        value: null,
        fieldName: 'Тип объекта',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    sum: {
      result: {
        value: null,
        fieldName: 'Запрашиваемая сумма кредита',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    credit_term: {
      result: {
        value: null,
        fieldName: 'Срок кредита в годах',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    deposit: {
      result: {
        value: null,
        fieldName: 'Первоначальный взнос',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    full_name: {
      result: {
        value: null,
        fieldName: 'Фамилия Имя Отчество',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    phone_number: {
      result: {
        value: null,
        fieldName: 'Мобильный телефон',
        ...defaultStateResult,
      },
      config: {
        ...defaultStateConfig,
        required: true,
      },
    },
    errors: [],
  },
};

const DataValidationReducer = createSlice({
  name: 'DataValidationReducer',
  initialState: initialValidatorState,
  reducers: {
    setCurrentStep(state, data: { payload: VCurrentStepProps }) {
      state.current_step = data.payload;
    },
    setHypothecRegion(state, data: PayloadMain<Nullable<string>>) {
      state.hypothec_info.region = VActions.hypothec_info.checkRegion(
        state.hypothec_info,
        data.payload,
      );
    },
    setHypothecApartmentType(state, data: PayloadMain<Nullable<string>>) {
      state.hypothec_info.apartment_type = VActions.hypothec_info.checkApartmentType(
        state.hypothec_info,
        data.payload,
      );
    },
    setHypothecSum(state, data: PayloadMain<Nullable<number>>) {
      state.hypothec_info.sum = VActions.hypothec_info.checkSum(
        state.hypothec_info,
        data.payload,
      );
    },
    setHypothecCreditTerm(state, data: PayloadMain<Nullable<number>>) {
      state.hypothec_info.credit_term = VActions.hypothec_info.checkCreditTerm(
        state.hypothec_info,
        data.payload,
      );
    },
    setHypothecDeposit(state, data: PayloadMain<Nullable<number>>) {
      state.hypothec_info.deposit = VActions.hypothec_info.checkDeposit(
        state.hypothec_info,
        data.payload,
      );
    },
    setHypothecFullName(state, data: PayloadMain<Nullable<string>>) {
      state.hypothec_info.full_name = VActions.hypothec_info.checkFullName(
        state.hypothec_info,
        data.payload,
      );
    },
    setHypothecPhoneNumber(state, data: PayloadMain<Nullable<string>>) {
      state.hypothec_info.phone_number = VActions.hypothec_info.checkPhoneNumber(
        state.hypothec_info,
        data.payload,
      );
    },
    buildHypothecInfo(state, data: PayloadAction<VHypothec>) {
      state.hypothec_info = data.payload;
    },
    setValidatorMode(state, data: PayloadAction<VDataValidationReducer['mode']>) {
      state.mode = data.payload;
    },
    updateCreditParametersFullState(
      state,
      data: PayloadAction<VDataValidationReducer['credit_parameters_info']>,
    ) {
      state.credit_parameters_info = data.payload;
    },
    clearValidator(_, data: PayloadAction<VDataValidationReducer>) {
      return { ...data.payload };
    },
    updateFetchCreditParameters(state, data: PayloadAction<boolean>) {
      state.fetchingFromChildren = data.payload;
    },
    updateWorkInfoState(state, data: PayloadAction<VWorkInfo>) {
      state.work_info = data.payload;
    },
    updateAdditionalInfoState(state, data: PayloadAction<VAdditionalInfo>) {
      state.additional_info = data.payload;
    },
    updatePassportInfoState(state, data: PayloadAction<VPassportInfo>) {
      state.passport_info = data.payload;
    },
    setApplicationStep(state, data: PayloadAction<VCurrentStepProps>) {
      state.current_step = data.payload;
      state.modified = VActions.helpers.setLastModifiedFields('current_step');
    },
    setValidatorState(_, data: PayloadAction<VDataValidationReducer>) {
      return {
        ...data.payload,
      };
    },
    setCreditParametersError(state) {
      state.credit_parameters_info.errors =
        VActions.helpers.getErrorList<VCreditParameters>(state.credit_parameters_info);
      state.modified = VActions.helpers.setLastModifiedFields('errors');
    },
    updateCreditProduct(
      state,
      data: PayloadMain<Nullable<DataElement<App.CreditProduct>>>,
    ) {
      const product = VActions.credit_parameters_info.checkCreditTarget(
        state.credit_parameters_info,
        data.payload,
      );
      state.credit_parameters_info.credit_target = product;
      state.modified = VActions.helpers.setLastModifiedFields('credit_target');

      // Если пользователь дотронулся до суммы кредита, то при изменении кредитного продукта, сумма тоже проверяется.
      const sum = state.credit_parameters_info.credit_sum;
      if (sum?.result.touched) {
        state.credit_parameters_info.credit_sum =
          VActions.credit_parameters_info.checkCreditSum(
            state.credit_parameters_info,
            {
              value: sum.result.value,
              touched: true,
            },
            product.result.value,
          );
      }
    },
    updateUserInitials(
      state,
      data: PayloadMain<Nullable<string>, 'name' | 'surname' | 'patronymic'>,
    ) {
      if (data.payload.field) {
        state.credit_parameters_info[data.payload.field] =
          VActions.credit_parameters_info.checkUserInitials(
            state.credit_parameters_info[data.payload.field],
            data.payload,
          );
        state.modified = VActions.helpers.setLastModifiedFields(data.payload.field);
      } else {
        throw Error(
          'При изменении полей - ФИО, не указан параметр field, являющийся обязательным для использования checkUserInitials',
        );
      }
    },
    updateUserPhone(state, data: PayloadMain<Nullable<string>>) {
      state.credit_parameters_info.phone_number =
        VActions.credit_parameters_info.checkUserPhone(
          state.credit_parameters_info.phone_number,
          data.payload,
          'credit_parameters_info',
          'phone_number',
          '',
        );
      state.modified = VActions.helpers.setLastModifiedFields('phone_number');
    },
    updateOwnFundsBuyingCar(state, data: PayloadMain<Nullable<string>>) {
      state.credit_parameters_info.deposit_car =
        VActions.credit_parameters_info.checkDepositCar(
          state.credit_parameters_info,
          data.payload,
        );
      state.modified = VActions.helpers.setLastModifiedFields('deposit_car');
    },
    updateCreditProductSum(state, data: PayloadMain<Nullable<string>>) {
      const creditProduct = state.credit_parameters_info.credit_target.result.value;
      state.credit_parameters_info.credit_sum =
        VActions.credit_parameters_info.checkCreditSum(
          state.credit_parameters_info,
          {
            value: data.payload.value,
            touched: !!data.payload.value,
          },
          creditProduct,
        );
      state.modified = VActions.helpers.setLastModifiedFields('credit_sum');
    },
    updateAgreement(state, data: PayloadMain<VCreditParamsAgreement>) {
      state.credit_parameters_info.agreement =
        VActions.credit_parameters_info.checkAgreement(
          state.credit_parameters_info,
          data.payload,
        );
      state.modified = VActions.helpers.setLastModifiedFields('agreement');
    },
    updateGender(state, data: PayloadMain<Nullable<DataElement<Dadata.GenderType>>>) {
      state.credit_parameters_info.gender = VActions.credit_parameters_info.checkGender(
        state.credit_parameters_info,
        data.payload,
      );
      state.modified = VActions.helpers.setLastModifiedFields('gender');
    },
    updateCreditSum(state, data: PayloadMain<Nullable<string>>) {
      state.credit_parameters_info.credit_sum =
        VActions.credit_parameters_info.checkCreditSum(
          state.credit_parameters_info,
          data.payload,
          state.credit_parameters_info.credit_target.result.value,
        );
      state.modified = VActions.helpers.setLastModifiedFields('credit_sum');
    },
    updateEmail(state, data: PayloadMain<Nullable<string>>) {
      state.credit_parameters_info.email =
        VActions.credit_parameters_info.checkEmailState(
          state.credit_parameters_info,
          data.payload,
        );
      state.modified = VActions.helpers.setLastModifiedFields('email');
    },
    checkCreditParams(state) {
      const form: { [n: string]: unknown } = state.credit_parameters_info;
      const keys: Array<string> = Object.keys(form);
      const errors: Array<VItem<unknown>> = [];
      keys.forEach((key: string) => {
        if (key !== 'errors') {
          const item = form[key] as VItem<unknown>;
          if (item.result && item.config.required && item.result.status !== 'correct') {
            errors.push(item);
          }
        }
      });

      state.credit_parameters_info.errors = errors;
    },
    buildCreditParameters(
      state,
      data: PayloadAction<VBuilder<App.CreditParametersInfo>>,
    ) {
      state.credit_parameters_info = VActions.credit_parameters_info.build(
        state.credit_parameters_info,
        data.payload,
      );
      state.modified = VActions.helpers.setLastModifiedFields('credit_parameters_info');
    },
    clearAddrState(
      /* eslint-disable */
      state: { [n: string]: any },
      data: PayloadAction<VWorkAddressFieldList & { clearCurrent?: boolean }>,
    ) {
      const config = data.payload;
      if (config?.key && config?.step && config?.field) {
        const object = state[config.step][config.field];

        state[config.step][config.field] = VActions.address.checkAddress(object, {
          value: VActions.address.clearAddress(object, config.key, config.clearCurrent),
          touched: true,
        });
      } else {
        throw Error(
          'В функцию очистки состояния адреса не переданы параметры field, step, key',
        );
      }
    },
    updateAddrState(
      state: { [n: string]: any },
      data: PayloadMain<Address.Full, VWorkAddressFieldList>,
    ) {
      const { field } = data.payload;
      const key = data.payload.field?.key;
      if (field && key) {
        const func = VActions.address.checkAddress;
        const prevState = state[field.step][field.field];
        const result = func(prevState, {
          value: data.payload.value,
          touched: data.payload.touched,
          field: key,
        });

        state[field.step][field.field] = result || prevState;
      } else {
        throw Error(
          `При обновлении состояния адреса не передан параметр field. Пожалуйста, передайте этот параметр, чтобы избежать данной ошибки.`,
        );
      }
    },
    updateWorkStatus(state, data: PayloadMain<VWorkInfo['work']>) {
      state.work_info.work = data.payload.value;
      state.modified = {
        lastModified: 'work',
        lastTimeStamp: Date.now(),
      };
    },
    updateEmployment(
      state,
      data: PayloadMain<
        Nullable<DataElement<App.EmploymentValues>>,
        'work' | 'dont_work' | null
      >,
    ) {
      const result = VActions.universalActions.checkDropdownValue<App.EmploymentValues>(
        state.work_info.employment_type,
        {
          value: data.payload.value,
          touched: data.payload.touched,
        },
        employmentType,
      );

      if (data.payload.field !== undefined) {
        const work: VWorkInfo['work'] = data.payload.field;

        state.work_info.employment_type = result;
        state.work_info.work = work;

        state.modified = {
          lastModified: 'employment_type',
          lastTimeStamp: Date.now(),
        };
      }
    },
    updateStartWorkState(
      state,
      data: PayloadMain<Nullable<DataElement>, 'month' | 'year'>,
    ) {
      if (data.payload.field) {
        state.work_info.start_work[data.payload.field] =
          VActions.universalActions.checkDropdownValue<string>(
            state.work_info.start_work[data.payload.field],
            {
              value: data.payload.value,
              touched: true,
            },
            data.payload.field === 'month'
              ? monthList
              : generatedYears(new Date(0).getFullYear()),
          );
      } else {
        throw Error('Не передан параметр field в обновление состояния начала работы');
      }
    },
    updateJobTitleState(state, data: PayloadMain<Nullable<string>>) {
      state.work_info.job_title = VActions.work_info.checkJobTitle(
        state.work_info.job_title,
        data.payload,
      );
      state.modified = {
        lastModified: 'job_title',
        lastTimeStamp: Date.now(),
      };
    },
    updateMonthlyIncomeState(state, data: PayloadMain<Nullable<string>>) {
      state.work_info.monthly_income = VActions.work_info.checkMonthlyIncome(
        state.work_info.monthly_income,
        data.payload,
      );
      state.modified = {
        lastModified: 'monthly_income',
        lastTimeStamp: Date.now(),
      };
    },
    updatePhoneWork(state, data: PayloadMain<Nullable<string>>) {
      const disabledValues = [
        state.credit_parameters_info.phone_number?.result?.value || '',
      ];
      state.work_info.phone_work = VActions.universalActions.checkContactPhone(
        state.work_info.phone_work,
        data.payload,
        disabledValues,
      );
      state.modified = {
        lastModified: 'phone_work',
        lastTimeStamp: Date.now(),
      };
    },
    updateAdditionalInfoDropdowns(
      state,
      data: PayloadMain<
        Nullable<DataElement<string>>,
        keyof Omit<VAdditionalInfo, 'errors' | 'show_confirm' | 'sms_code'>
      >,
    ) {
      const checkArrays: {
        [key in keyof Omit<
          VAdditionalInfo,
          'errors' | 'show_confirm' | 'sms_code'
        >]: TypeOfInputData<string>;
      } = {
        education: EducationData,
        family_status: familyStatusData,
        children: childrenData,
        having_car: havingCarData,
        having_real_estate: havingRealEstateData,
      };

      const { field } = data.payload;
      if (field) {
        state.additional_info[field] = VActions.universalActions.checkDropdownValue(
          state.additional_info[field],
          {
            value: data.payload.value,
            touched: data.payload.touched,
          },
          checkArrays[field],
        );
      } else {
        throw Error(
          'Не передан параметр field при обновлении выпадающих список на этапа "Дополнительная информация"',
        );
      }
    },
    updateShowConfirm(state, data: PayloadAction<boolean>) {
      state.additional_info.show_confirm = data.payload;
    },
    updateSmsCode(state, data: PayloadMain<string>) {
      state.additional_info.sms_code = VActions.helpers.checkConfirmCode(
        state.additional_info.sms_code,
        data.payload,
      );
      state.modified = {
        lastModified: 'sms_code',
        lastTimeStamp: Date.now(),
      };
    },
    setSmsCodeState(state, data: PayloadAction<VAdditionalInfo['sms_code']>) {
      state.additional_info.sms_code = data.payload;
    },
    updateOrganizationState(state, data: PayloadMain<App.OrganizationData | null>) {
      state.work_info.organization_info = VActions.work_info.checkOrganization(
        state.work_info.organization_info,
        data.payload,
      );
      state.modified = {
        lastModified: 'organization_info',
        lastTimeStamp: Date.now(),
      };
    },
    buildWorkInfo(
      state,
      data: PayloadAction<{ value: App.WorkInfo; type: 'api' | 'check' }>,
    ) {
      state.work_info = VActions.work_info.build(state, {
        value:
          data.payload.value === null
            ? VActions.packageData.work_info(state.work_info, false)
            : data.payload.value,
        type: data.payload.type,
      });
    },
    updateDateBirthday(state, data: PayloadMain<Nullable<string>>) {
      state.passport_info.date_birthday = VActions.passport_info.checkDateBirthday(
        state.passport_info.date_birthday,
        data.payload,
      );
      if (state.passport_info.issued_date.result.touched) {
        state.passport_info.issued_date = VActions.passport_info.checkIssuedDate(
          state.passport_info.issued_date,
          {
            value: state.passport_info.issued_date.result.value,
            touched: state.passport_info.issued_date.result.touched,
          },
          data.payload.value,
        );
      }
      state.modified = {
        lastModified: 'date_birthday',
        lastTimeStamp: Date.now(),
      };
    },
    updateIssuedDate(state, data: PayloadMain<Nullable<string>>) {
      state.passport_info.issued_date = VActions.passport_info.checkIssuedDate(
        state.passport_info.issued_date,
        data.payload,
        state.passport_info.date_birthday.result.value,
      );
      state.modified = {
        lastModified: 'issued_date',
        lastTimeStamp: Date.now(),
      };
    },
    updateBornCityState(state, data: PayloadMain<Nullable<string>>) {
      state.passport_info.born_city = VActions.passport_info.checkBornCity(
        state.passport_info.born_city,
        data.payload,
      );
      state.modified = {
        lastModified: 'born_city',
        lastTimeStamp: Date.now(),
      };
    },
    updateSeriesAndNumberState(state, data: PayloadMain<Nullable<string>>) {
      state.passport_info.series_and_number = VActions.passport_info.checkSeriesAndNumber(
        state.passport_info.series_and_number,
        data.payload,
      );
      state.modified = {
        lastModified: 'series_and_number',
        lastTimeStamp: Date.now(),
      };
    },
    updateDepartmentCodeState(state, data: PayloadMain<VDepartmentCodeProps | null>) {
      state.passport_info.department_code = VActions.passport_info.checkDepartmentCode(
        state.passport_info.department_code,
        {
          value: data.payload.value?.code || '',
          touched: data.payload.touched,
        },
      );
      state.passport_info.issued_by = VActions.passport_info.checkIssuedBy(
        state.passport_info.issued_by,
        {
          value: data.payload.value?.name || '',
          touched: data.payload.touched,
        },
      );
      state.modified = {
        lastModified: 'department_code',
        lastTimeStamp: Date.now(),
      };
    },
    updateIssuedByState(state, data: PayloadMain<Nullable<string>>) {
      state.passport_info.issued_by = VActions.passport_info.checkIssuedBy(
        state.passport_info.issued_by,
        data.payload,
      );
      state.modified = {
        lastModified: 'issued_by',
        lastTimeStamp: Date.now(),
      };
    },
    updateEqualAddress(state, data: PayloadAction<boolean>) {
      state.passport_info.equalAddr = data.payload;
      state.modified = {
        lastModified: 'equalAddr',
        lastTimeStamp: Date.now(),
      };
    },
    updateContactInfo(
      state,
      data: PayloadMain<Nullable<string>, keyof VPassportInfoContacts>,
    ) {
      const { field } = data.payload;
      if (field) {
        if (field === 'contact_name') {
          state.passport_info.contact_name =
            VActions.credit_parameters_info.checkUserInitials(
              state.passport_info.contact_name,
              data.payload,
            );
        } else if (field === 'contact_phone') {
          const disabledValues: Array<Nullable<string>> = [
            state.credit_parameters_info.phone_number.result.value,
            state.work_info.phone_work.result.value,
          ].filter(item => !!item);

          state.passport_info.contact_phone = VActions.universalActions.checkContactPhone(
            state.passport_info.contact_phone,
            {
              value: data.payload.value,
              touched: data.payload.touched,
            },
            disabledValues,
          );
        }
      } else {
        throw Error(
          'В обработчик информации контактного лица не передан параметр field для корректной обработки информации. Подробнее: ValidationReducer -> updateContactInfo',
        );
      }
    },
    packageValidator(state, data: PayloadAction<PayloadDataType<App.ApplicationForm>>) {
      const current = data.payload.value;
      let step: VDataValidationReducer['current_step'] = state.current_step;
      const prevMode = state.mode;

      if (!current.passport_info) {
        state.mode = 'credit';
      }

      if (prevMode === 'change_anketa') {
        current.credit_parameters_info.credit_target =
          state.credit_parameters_info.credit_target.result.value;
      }

      const { mode } = state;
      if (mode === 'credit') {
        switch (current.step) {
          case 1: {
            step = 'credit_parameters_info';
            break;
          }
          case 2: {
            step = 'work_info';
            break;
          }
          case 3: {
            step = 'additional_info';
            break;
          }
          case 4: {
            step = 'passport_info';
            break;
          }
          case 5: {
            step = 'decisions';
            break;
          }
          default: {
            step = 'credit_parameters_info';
          }
        }
      }

      // if (state.fetchingFromChildren && current.passport_info === null && current.additional_info === null && current.work_info === null) {
      //   step = 'work_info'
      // }

      state.current_step = step;
      state.credit_parameters_info = VActions.credit_parameters_info.build(
        state.credit_parameters_info,
        {
          value:
            data.payload.value.credit_parameters_info === null
              ? VActions.packageData.credit_parameters_info(
                  state.credit_parameters_info,
                  false,
                )
              : data.payload.value.credit_parameters_info,
          type: 'api',
        },
      );
      state.work_info = VActions.work_info.build(state, {
        value:
          data.payload.value.work_info === null
            ? VActions.packageData.work_info(state.work_info, false)
            : data.payload.value.work_info,
        type: 'api',
      });
      state.additional_info = VActions.additional_info.build(state, {
        value:
          data.payload.value.additional_info === null
            ? VActions.packageData.additional_info(state.additional_info, false)
            : data.payload.value.additional_info,
        type: 'api',
      });
      state.passport_info = VActions.passport_info.build(state, {
        value:
          data.payload.value.passport_info === null
            ? VActions.packageData.passport_info(state.passport_info, false)
            : data.payload.value.passport_info,
        type: 'api',
      });
      // }
    },
    clearHypothecForm(state, data: PayloadAction<VHypothec>) {
      state.hypothec_info = data.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(ValidatorThunk.sendCreditParams.fulfilled, state => {
        state.fetchingFromChildren = true;
      })
      .addCase(clearState, () => ({
        ...initialValidatorState,
      }));
  },
});

export const AppFormActions = DataValidationReducer.actions;
export const ValidatorReducer = DataValidationReducer.reducer;
