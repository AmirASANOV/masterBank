import React, { CSSProperties, SetStateAction, FocusEvent } from 'react';

import { UniversalTypes } from './UniversalTypes';

import { Dadata, Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { Address } from '@/ApiConfig/DadataApi/DadataTest';
import { ListMethods } from '@/CustomHooks/useSelectedList';
import { App } from '@/ProjectTypes/AppTypes';

/* eslint-disable */
export interface SelectedInputPropsType {
  name?: string;
  containerId?: string;
  setStatus?: InputStatus;
  id?: string;
  data: TypeOfInputData;
  setState: (value: Nullable<DataElement<any>>) => void;
  defaultValue: Nullable<string>;
  status: boolean | undefined;
  required?: boolean;
  message: string;
  placeholder?: string;
  extra_placeholder?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onSelect?: () => any;
  style?: CSSProperties;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface CheckboxInputPropsType extends UniversalTypes {
  target?: HTMLLinkElement['target'];
  rel?: HTMLLinkElement['rel'];
  state: boolean;
  setState: (value: boolean) => any;
  path?: string;
  secondPath?: string;
  label?: string;
  containerId: string;
  id: string;
  message?: string;
  required: boolean;
  placeholder?: string;
  extra_placeholder?: string;
  containerStyle?: CSSProperties;
}

export interface InputLabelProps {
  text: Nullable<string>;
  id?: string;
  required: boolean;
  hintText?: string;
  containerId?: string;
  style?: CSSProperties;
  className?: string;
}

export type InputStatus = (
  value: string,
  required: boolean,
  dirty?: boolean,
  prevStatus?: boolean,
) => any;

export interface CustomInput extends UniversalTypes {
  // Animation
  animationEffect?: 'fade-up' | 'zoom-up' | 'fade-right' | 'fade-left' | 'zoom-down';

  // Styles
  inputStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  extraPlaceholderStyle?: CSSProperties;
  inputMessagesStyle?: CSSProperties;

  // Classes
  inputClassNames?: Array<string>;
  containerClassNames?: Array<string>;
  labelClassNames?: string;
  extraPlaceholderClassNames?: Array<string>;

  // ID
  containerId?: string;
  id?: string;
  labelId?: string;

  // Text
  labelText?: string;
  defaultValue?: Nullable<string>;
  placeholder?: string;
  extraPlaceholder?: string;
  errorMessage?: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;

  // Options
  mask?: string;
  maskChar?: string;
  required?: boolean;
  name?: string;
  minLength?: number;
  maxLength?: number;
  alwaysShowMask?: boolean;
  inputType?: 'text' | 'tel' | 'email' | 'one-time-code';
  autoComplete?: HTMLInputElement['autocomplete'];
  autoFocus?: boolean;

  // Validation
  status?: boolean;
  setStatus?: InputStatus;
  readOnly?: boolean;
  resetValue?: string;

  // Func
  onInput?: (
    event: React.ChangeEvent<HTMLInputElement>,
    masked: Nullable<string>,
    setMasked: React.Dispatch<SetStateAction<Nullable<string>>>,
    setValue: (value: string) => void,
    actions?: ListMethods,
  ) => any;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    masked: Nullable<string>,
    setMasked: React.Dispatch<SetStateAction<Nullable<string>>>,
    setValue: (value: string) => void,
    actions?: ListMethods,
  ) => any;
  onPaste?: (
    event: React.ClipboardEvent<HTMLInputElement>,
    masked: Nullable<string>,
    setMasked: React.Dispatch<SetStateAction<Nullable<string>>>,
    setValue: (value: string) => void,
    actions?: ListMethods,
  ) => any;
  onPasteCapture?: (
    event: React.ClipboardEvent<HTMLInputElement>,
    masked: Nullable<string>,
    setMasked: React.Dispatch<SetStateAction<Nullable<string>>>,
    setValue: (value: string) => void,
    actions?: ListMethods,
  ) => any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>, actions?: ListMethods) => any;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>, actions?: ListMethods) => any;
  onKeyDown?: (event: React.KeyboardEvent, actions?: ListMethods) => any;
  onKeyPress?: (event: React.KeyboardEvent, actions?: ListMethods) => any;
  maskedHandler?: (value: string) => any;
}

export type EmploymentTypeValue =
  | 'WORKACTIVITY.1'
  | 'WORKACTIVITY.2'
  | 'WORKACTIVITY.3'
  | 'WORKACTIVITY.4'
  | 'WORKACTIVITY.7';

export type DataElement<T = string> = { value: Nullable<T>; title: string, id?: string };
export type TypeOfInputData<T = string> = Array<DataElement<T>>;

export interface CreditCityType {
  id: string;
  name: string;
  subway: boolean;
  time_zone_offset: number;
}

export interface InputFIOProps extends UniversalTypes {
  id?: string;
  containerId?: string;
  required: boolean;
  defaultValue?: Nullable<string>;
  setState: (value: Nullable<string>) => void;
  delay?: number;
  count?: number;
  type: 'NAME' | 'SURNAME' | 'PATRONYMIC';
  name: string;
  minLength?: number;
  status?: boolean | undefined;
  message?: string;
  gender?: Dadata.GenderType;
  placeholder?: string;
  extra_placeholder?: string;
}

export interface InputAddressProps extends UniversalTypes {
  listValue?: string;
  flatHandler?: (value: Nullable<string>) => void;
  addressState?: Address.Full;
  id?: string;
  containerId?: string;
  required: boolean;
  defaultValue: Nullable<string>;
  setState: (value: Address.Full) => void;
  clearFunc: (key: keyof Address.Full, clearCurrent?: boolean) => void;
  delay?: number;
  count?: number;
  locations?: Array<Dadata.AddrLocationsType>;
  locations_boost?: Array<Dadata.AddrLocationsBoostType>;
  from_bound?: Dadata.AddrBoundsType;
  to_bound?: Dadata.AddrBoundsType;
  type?: Dadata.AddrBoundsType | 'all';
  minLength: number;
  name: string;
  status: boolean | undefined;
  message: string;
  placeholder: string;
  extra_placeholder?: string;
  addrKey?: keyof Address.Full;
  postal_code?: boolean;
  animation?: boolean;
  style?: CSSProperties;
  className?: string;
  inputType: 'textarea' | 'input';
  requestAdditional?: string;
  filter?: string;
}

export interface DadataInputCompanyInfoSuggestionsPropsType extends UniversalTypes {
  inn: Nullable<string>;
  geo_lat?: string;
  geo_lon?: string;
  required: boolean;
  containerId?: string;
  id?: string;
  name: string;
  count?: number;
  delay?: number;
  minLength: number;
  status: boolean | undefined;
  message: string;
  defaultValue: Nullable<string>;
  setState: (value: App.OrganizationData | null) => void;
  locations_boost?: Array<Dadata.AddrLocationsBoostType>;
  placeholder: string;
  extra_placeholder?: string;
  setAction?: React.Dispatch<React.SetStateAction<'update' | 'check'>>;
}

export interface FmsUnitInputSuggestions extends UniversalTypes {
  defaultValue: string;
  required: boolean;
  setState: (value: Dadata.DadataIssuedByPasportResponseData | null) => void;
  status: boolean | undefined;
  message: string;
  id?: string;
  name: string;
  minLength: number;
  count: number;
  delay: number;
  containerId?: string;
  placeholder: string;
  extra_placeholder?: string;
  issuedBy?: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;
}
