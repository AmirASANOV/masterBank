import { PayloadAction } from '@reduxjs/toolkit';

import { Dadata, Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { Address } from '@/ApiConfig/DadataApi/DadataTest';
import { DataElement, TypeOfInputData } from '@/Components/Inputs/Types/InputPropsType';
import { App } from '@/ProjectTypes/AppTypes';

export type VLastModifiedType =
  | keyof VCreditParameters
  | keyof VDataValidationReducer
  | keyof VDataValidationReducer['credit_parameters_info']
  | 'create initial state'
  | keyof VDataValidationReducer['work_info']
  | keyof VDataValidationReducer['additional_info']
  | keyof VDataValidationReducer['passport_info'];

export interface VDataValidationReducer
  extends VStepsConfig,
    VCurrentStep,
    VHypothecConfig {
  fetchingFromChildren: boolean;
  mode: 'credit' | 'change_anketa';
  fetchStatus: Nullable<string>;
  modified: VLastModifiedConfig;
}

export interface VLastModifiedConfig {
  lastModified: VLastModifiedType;
  lastTimeStamp: number;
}

/**
 * @interface VItem - Interface which contains the result of validation reducer
 * @property status - This property indicates the result of the validation reducer
 * If property value is 'correct' then value is absolutely correct and match with validation schema
 * If property value is 'incorrect' then you can show warning for user
 * If property value is 'insipid' - then you can ignore the result of the validation reducer
 * @property touched - This property setup strict or basic validation mode.
 * If property value is true then validation reducer has been strict validation mode.
 * @property message - This property indicates the warning message of the result validation reducer
 * @property modified - This property indicates a timestamp has been completed validation reducer action
 * @property name - This property is a field name
 * @property value - This property can be a dynamic Generic type of data and that is field value
 */

export interface VItem<T> {
  result: VResult<T>;
  config: VConfigs;
}

export interface VResult<T> {
  fieldName: string;
  value: Nullable<T>;
  status: VStatus;
  touched: boolean;
  message: Nullable<string>;
  modified: number;
  focusTime?: number;
}

export interface VConfigs {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required: boolean;
  disableValues?: Array<unknown>;
  strict: boolean;
  field?: unknown;
}

export type VStatus = 'correct' | 'incorrect' | 'insipid';

export interface VMetaConfigs {
  errors: Array<VItem<unknown>>;
}

export interface VStepsConfig {
  credit_parameters_info: VCreditParameters;
  work_info: VWorkInfo;
  additional_info: VAdditionalInfo;
  passport_info: VPassportInfo;
}

export interface VHypothecConfig {
  hypothec_info: VHypothec;
}

export type VFormPlacement = 'children' | 'application_form';

export type PayloadMain<T, D = undefined> = PayloadAction<PayloadDataType<T, D>>;

export type VCurrentStepProps =
  | keyof VStepsConfig
  | 'loading'
  | 'additional_info'
  | 'passport_info'
  | 'decisions';

export interface VCurrentStep {
  current_step: VCurrentStepProps;
}

export interface VPassportInfo extends VMetaConfigs, VPassportInfoContacts {
  date_birthday: VItem<string>;
  born_city: VItem<string>;
  series_and_number: VItem<string>;
  issued_date: VItem<string>;
  department_code: VItem<string>;
  issued_by: VItem<string>;
  equalAddr: boolean | undefined;
  registration_address: VAddress;
  fact_address: VAddress;
}

export interface VPassportInfoContacts {
  contact_name: VItem<string>;
  contact_phone: VItem<string>;
}

export interface VWorkInfo extends VMetaConfigs {
  work: App.URLWorkType;
  work_address: VAddress;
  organization_info: VItem<App.OrganizationData>;
  start_work: {
    month: VItem<DataElement>;
    year: VItem<DataElement>;
  };
  employment_type: VItem<DataElement<App.EmploymentValues>>;
  expirience: VItem<DataElement>;
  phone_work: VItem<string>;
  job_title: VItem<string>;
  monthly_income: VItem<Nullable<string>>;
  work_activity_type: VItem<DataElement<App.WorkActivityValues>>;
}

export interface VAdditionalInfo extends VMetaConfigs {
  education: VItem<DataElement>; // Выпадающий список - образование
  family_status: VItem<DataElement>; // Выпадающий список - семейное положение
  children: VItem<DataElement>; // Выпадающий список - дети до 18 лет
  having_car: VItem<DataElement>; // Наличие автомобиля - выпадающий список
  having_real_estate: VItem<DataElement>; // Наличие недвижимости - выпадающий список
  show_confirm: boolean;
  sms_code: VItem<string>;
}

export interface VHypothec extends VMetaConfigs {
  region: VItem<string>;
  apartment_type: VItem<string>;
  sum: VItem<number>;
  credit_term: VItem<number>;
  deposit: VItem<number>;
  full_name: VItem<string>;
  phone_number: VItem<string>;
}

export type VAddress = { [key in keyof Address.Full]: VItem<Address.Full[key]> };
export type VWorkAddrStatuses = { [key in keyof Address.Full]: VStatus };
export type VWorkAddressFieldList = {
  step: 'work_info' | 'passport_info';
  field: 'work_address' | 'registration_address' | 'fact_address';
  key?: keyof Address.Full;
};

export interface VCreditParameters extends VMetaConfigs {
  credit_target: VItem<DataElement<App.CreditProduct>>;
  name: VItem<string>;
  surname: VItem<string>;
  patronymic: VItem<string>;
  credit_sum: VItem<string>;
  email: VItem<string>;
  gender: VItem<DataElement<Dadata.GenderType>>;
  agreement: VItem<VCreditParamsAgreement>;
  phone_number: VItem<string>;
  email_generated: boolean;
  deposit_car: VItem<string>;
}

export type VAddrTouchedStatuses = {
  [key in keyof Address.Full]: boolean;
};

export interface PayloadDataType<T, D = undefined> {
  value: T;
  touched: boolean;
  field?: D;
}

export interface VCreditParamsAgreement {
  state: boolean;
  description: string;
  pathName: string;
}

export interface VBuilder<T> {
  value: T;
  type: VBuilderType;
}

export type VBuilderType = 'api' | 'check';

export interface VDepartmentCodeProps {
  code: Nullable<string>;
  name: Nullable<string>;
}

export interface VCheckActions {
  hypothec_info: {
    checkRegion: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkApartmentType: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkSum: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<number>>,
    ) => VItem<number>;
    checkCreditTerm: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<number>>,
    ) => VItem<number>;
    checkDeposit: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<number>>,
    ) => VItem<number>;
    checkFullName: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkPhoneNumber: (
      state: VDataValidationReducer['hypothec_info'],
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    build: (
      state: VDataValidationReducer['hypothec_info'],
      data: VBuilder<App.HypothecParametersInfo>,
    ) => VDataValidationReducer['hypothec_info'];
  };
  credit_parameters_info: {
    checkGender: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: PayloadDataType<Nullable<DataElement<Dadata.GenderType>>>,
    ) => VItem<DataElement<Dadata.GenderType>>;
    checkAgreement: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: PayloadDataType<Nullable<VCreditParamsAgreement>>,
    ) => VItem<VCreditParamsAgreement>;
    checkCreditSum: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: PayloadDataType<Nullable<string>>,
      product: Nullable<DataElement<App.CreditProduct>>,
    ) => VItem<string>;
    checkDepositCar: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkEmailState: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkUserPhone: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
      step: 'credit_parameters_info',
      field: 'phone_number',
      message: string,
    ) => VItem<string>;
    checkCreditTarget: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: PayloadDataType<Nullable<DataElement<App.CreditProduct>>>,
    ) => VItem<DataElement<App.CreditProduct>>;
    checkUserInitials: (
      state: VItem<string>,
      data: PayloadDataType<
        Nullable<string>,
        'name' | 'surname' | 'patronymic' | keyof VPassportInfoContacts
      >,
    ) => VItem<string>;
    build: (
      state: VDataValidationReducer['credit_parameters_info'],
      data: VBuilder<App.CreditParametersInfo>,
    ) => VDataValidationReducer['credit_parameters_info'];
  };
  work_info: {
    checkOrganization: (
      state: VWorkInfo['organization_info'],
      data: PayloadDataType<Nullable<App.OrganizationData>>,
    ) => VWorkInfo['organization_info'];
    checkJobTitle: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkMonthlyIncome: (
      state: VItem<Nullable<string>>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    build: (
      state: VDataValidationReducer,
      data: VBuilder<App.WorkInfo>,
    ) => VDataValidationReducer['work_info'];
  };
  additional_info: {
    build: (
      state: VDataValidationReducer,
      data: VBuilder<App.AdditionalInfo>,
    ) => VDataValidationReducer['additional_info'];
  };
  passport_info: {
    checkDateBirthday: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkIssuedDate: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
      dateBirthday: Nullable<string>,
    ) => VItem<string>;
    checkBornCity: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkSeriesAndNumber: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkDepartmentCode: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    checkIssuedBy: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
    ) => VItem<string>;
    build: (
      state: VDataValidationReducer,
      data: VBuilder<App.PassportInfo>,
    ) => VDataValidationReducer['passport_info'];
  };
  address: {
    checkAddress: (
      state: VAddress,
      data: PayloadDataType<Nullable<Address.Full>, keyof Address.Full>,
      checkAll?: boolean,
    ) => VAddress;
    clearAddress: (
      state: VAddress,
      data: keyof Address.Full,
      clearCurrent?: boolean,
    ) => Address.Full;
    buildAddress: (state: VAddress) => Address.Full;
    getAddrRequestAdditional: (addr: VAddress) => string;
  };
  helpers: VCheckHelperActions;
  universalActions: {
    checkDropdownValue: <T>(
      state: VItem<DataElement<T>>,
      data: PayloadDataType<Nullable<DataElement<T>>>,
      checkArray: TypeOfInputData<T>,
    ) => VItem<DataElement<T>>;
    checkContactPhone: (
      state: VItem<string>,
      data: PayloadDataType<Nullable<string>>,
      disabledValues: Array<Nullable<string>>,
    ) => VItem<string>;
  };
  packageData: {
    [key in keyof VStepsConfig]: (
      state: VDataValidationReducer[key],
      autoComplete: boolean,
    ) => App.ApplicationForm[key];
  };
  packageDataHypothec: {
    hypothec_info: (
      state: VDataValidationReducer['hypothec_info'],
    ) => App.HypothecParametersInfo;
  };
}

export interface VCheckHelperActions {
  askCreditProduct: () => DataElement<App.CreditProduct>;
  askStrict: (data: PayloadDataType<unknown, unknown>, params: VItem<unknown>) => boolean;
  getValidatorStatus: (result: boolean, strict: boolean) => VStatus;
  getErrorList: <T>(state: T) => Array<VItem<unknown>>;
  getCreditSumFieldName: (data: Nullable<DataElement<App.CreditProduct>>) => string;
  setLastModifiedFields: (field: VLastModifiedType) => VLastModifiedConfig;
  getInputStatus: (status: VStatus) => boolean | undefined;
  packageNotification: (stateError: Array<VItem<unknown>>) => string;
  translateEmployment: (value: App.EmploymentValues) => App.URLEmploymentType;
  checkConfirmCode: (
    state: VItem<string>,
    data: PayloadDataType<Nullable<string>>,
  ) => VItem<string>;
}
