import { Dadata, Nullable } from '../ApiConfig/DadataApi/DadataPropsTypes';
import { Address } from '../ApiConfig/DadataApi/DadataTest';
import { CreditCityType, DataElement } from '../Components/Inputs/Types/InputPropsType';
import { UserConfigType } from '../ReduxStore/reducer/ConfigReducer/ConfigTypes';

export namespace App {
  export interface ApplicationForm {
    behaviour: App.FormBehaviour;
    step: App.StepType;
    credit_parameters_info: App.CreditParametersInfo;
    work_info: App.WorkInfo;
    additional_info: App.AdditionalInfo;
    passport_info: App.PassportInfo;
    auth_info: Nullable<App.AuthInfo>;
    sendForm: App.SendFormIndicator;
    timer: App.TimerType;
    provider_data: boolean;
  }

  export interface AuthInfo extends UserConfigType {
    utm: {
      cid: Nullable<string>;
      company: Nullable<string>;
      frm: Nullable<string>;
      mid: Nullable<string>;
      source: Nullable<string>;
    };
  }

  export type FormBehaviour = 'change' | 'create';
  export type StepType = number;
  export type SendFormIndicator = boolean;
  export type TimerType = number;
  export type CreditProduct =
    | 'credit_card'
    | 'credit_cash'
    | 'installment_card'
    | 'mfo'
    | 'hypothec'
    | 'car_credit';
  export type EmploymentValues =
    | 'WORKACTIVITY.1'
    | 'WORKACTIVITY.2'
    | 'WORKACTIVITY.3'
    | 'WORKACTIVITY.4'
    | 'WORKACTIVITY.7';
  export type WorkActivityValues =
    | 'CLIENT.ACTIVITY.SCOPE.1'
    | 'CLIENT.ACTIVITY.SCOPE.2'
    | 'CLIENT.ACTIVITY.SCOPE.3'
    | 'CLIENT.ACTIVITY.SCOPE.4'
    | 'CLIENT.ACTIVITY.SCOPE.5'
    | 'CLIENT.ACTIVITY.SCOPE.6'
    | 'CLIENT.ACTIVITY.SCOPE.7'
    | 'CLIENT.ACTIVITY.SCOPE.8'
    | 'CLIENT.ACTIVITY.SCOPE.9'
    | 'CLIENT.ACTIVITY.SCOPE.11'
    | 'CLIENT.ACTIVITY.SCOPE.12'
    | 'CLIENT.ACTIVITY.SCOPE.14';

  export interface HypothecParametersInfo {
    region: Nullable<string>;
    apartment_type: Nullable<string>;
    sum: Nullable<number>;
    credit_term: Nullable<number>;
    deposit: Nullable<number>;
    full_name: Nullable<string>;
    phone_number: Nullable<string>;
  }

  export interface CreditParametersInfo {
    credit_target: Nullable<DataElement<CreditProduct>>; // Выпадающий список - цель кредита
    credit_sum: Nullable<string>; // Сумма кредита - целое число
    credit_city: CreditCityType | null; // Город получения кредита
    name: Nullable<string>; // Имя
    surname: Nullable<string>; // Фамилия
    patronymic: Nullable<string>; // Отчество
    gender: Nullable<DataElement<Dadata.GenderType>>;
    email: Nullable<string>; // Email
    phone_number: Nullable<string>; // Номер телефона в формате (79991231212)
    deposit_car: Nullable<string>; // Первоначальный взнос
    checked: boolean;
    email_generated: boolean;
  }

  export interface WorkInfo {
    work: boolean | undefined;
    employment_type: Nullable<DataElement<EmploymentValues>>; // Выпадающий список - тип занятости
    organization_info: App.OrganizationData | null; // Название организации - null в случае, если не работает.
    start_work: {
      date: 1;
      month: Nullable<DataElement>;
      year: Nullable<DataElement>;
    } | null;
    company_type: Nullable<string>;
    activity: Nullable<DataElement>;
    work_address: Nullable<Address.Full>;
    expirience: Nullable<DataElement>;
    phone_work: Nullable<string>; // null в случае, если не работает.
    work_activity_type: Nullable<DataElement<WorkActivityValues>>;
    job_title: Nullable<string>; // Название должности - null в случае, если собственный бизнес или не работает.
    job_type: Nullable<DataElement>; // Выпадюащий список - тип должности - null в случае, если собственный бизнес или не работает.
    monthly_income: Nullable<string>; // Ежемесячный доход
    why_is_has_not_work: Nullable<DataElement>; // Выпадающий список - почему отсутствует занятость, по умолчанию null - появляется в случае если человек не трудоустроен.
  }

  export interface AdditionalInfo {
    education: Nullable<DataElement>; // Выпадающий список - образование
    family_status: Nullable<DataElement>; // Выпадающий список - семейное положение
    children: Nullable<DataElement>; // Выпадающий список - дети до 18 лет
    having_car: Nullable<DataElement>; // Наличие автомобиля - выпадающий список
    having_real_estate: Nullable<DataElement>; // Наличие недвижимости - выпадающий список
    sms_code: Nullable<string>;
  }

  export interface PassportInfo {
    checked: boolean;
    date_birthday: Nullable<string>; // Дата рождения
    born_city: Nullable<string>;
    series_and_number: Nullable<string>; // Формат - "7400 123456" - серия и номер
    issued_date: Nullable<string>; // Дата получения
    department_code: Nullable<string>; // Формат "743-347" - код подразделения
    issued_by: Nullable<string>; // Кем выдан паспорт
    registration_address: Address.Full;
    registration_date: Nullable<string>; // Дата регистрации
    fact_address: Address.Full;
    contact_phone: Nullable<string>;
    contact_name: Nullable<string>;
    second_contact_phone: Nullable<string>;
    second_contact_name: Nullable<string>;
    secret_key: Nullable<string>;
  }

  export interface UserProfile {
    birthdate: Nullable<string>;
    city: Nullable<string>;
    email: Nullable<string>;
    gender: Nullable<string>;
    id: Nullable<number>;
    lastname: Nullable<string>;
    middlename: Nullable<string>;
    name: Nullable<string>;
    phone: Nullable<string>;
  }

  export interface Controller<T> {
    valid: boolean;
    value: T;
    dirty: boolean;
    message: string;
    required: boolean;
  }

  export type URLWorkType = 'work' | 'dont_work' | null;
  export type URLEmploymentType =
    | 'unofficial_work'
    | 'entrepreneur'
    | 'employment'
    | 'standing'
    | 'individual_entrepreneur'
    | undefined;

  type ORG = Pick<
    Dadata.DadataCompanyInfoResponseData,
    Exclude<keyof Dadata.DadataCompanyInfoResponseData, 'address'>
  >;

  export interface OrganizationData extends ORG {
    address: Address.Full;
  }
}

type ValidatorKeys = Pick<
  App.ApplicationForm,
  'credit_parameters_info' | 'work_info' | 'passport_info' | 'additional_info'
>;

export type Validator = {
  [key in keyof ValidatorKeys]: {
    [subKey in keyof App.ApplicationForm[key]]: App.Controller<string>;
  };
};
