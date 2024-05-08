import { resetMask } from '../Common/AppFormController/ControllersFunc';
import { App } from '../ProjectTypes/AppTypes';
import {
  VAdditionalInfo,
  VCreditParameters,
  VDataValidationReducer,
  VPassportInfo,
  VWorkInfo,
} from '../ReduxStore/reducer/Validator/Types';

const pages = ['credit_card', 'credit_cash', 'installment_card', 'mfo'];
const checkInitialCreditParams = (value: VCreditParameters) =>
  !!value.credit_sum.result.value ||
  !!value.name.result.value ||
  !!value.surname.result.value ||
  !!value.patronymic.result.value ||
  !!value.gender.result.value;

const checkInitialWorkInfo = (value: VWorkInfo) => !!value.work;

const checkInitialAdditionalInfo = (value: VAdditionalInfo) =>
  !!value.children.result.value ||
  !!value.education.result.value ||
  !!value.family_status.result.value ||
  !!value.having_car.result.value ||
  !!value.having_real_estate.result.value;

const checkInitialPassportInfo = (value: VPassportInfo) =>
  !!value.date_birthday.result.value ||
  !!value.born_city.result.value ||
  !!value.series_and_number.result.value ||
  !!value.department_code.result.value ||
  !!value.registration_address.region.result.value ||
  !!value.registration_address.city.result.value ||
  !!value.registration_address.street.result.value ||
  !!value.registration_address.house.result.value ||
  !!value.registration_address.flat.result.value ||
  !!value.fact_address.region.result.value ||
  !!value.fact_address.city.result.value ||
  !!value.fact_address.street.result.value ||
  !!value.fact_address.house.result.value ||
  !!value.fact_address.flat.result.value;

export const checkInitialValue = (
  value: VPassportInfo | VCreditParameters | VAdditionalInfo | VWorkInfo,
  type: string,
): boolean => {
  if (type === 'credit_parameters_info')
    return checkInitialCreditParams(value as VCreditParameters);
  if (type === 'work_info') return checkInitialWorkInfo(value as VWorkInfo);
  if (type === 'additional_info')
    return checkInitialAdditionalInfo(value as VAdditionalInfo);
  if (type === 'passport_info') return checkInitialPassportInfo(value as VPassportInfo);
  return false;
};
export const getPage = (location: string) => {
  let result = 'credit_card';

  pages.forEach(item => {
    if (location.includes(item)) {
      result = item;

      return result;
    }

    return undefined;
  });

  return result;
};

export const onDateInput = (value: string) => {
  const getValue = () => {
    if (value === '') return '__-__-____';
    const arr = value.split('-');
    if (arr.length !== 3) {
      if (value[2] !== '-') {
        return value.substring(-1, 1);
      }
      if (value[5] !== '-') {
        return value.substring(-1, 4);
      }
    }
    if (arr[0].length === 3) {
      const result = arr[0].replace('_', '');
      return [result, arr[1], arr[2]].join('-');
    }
    if (arr[1].length === 3) {
      const result = arr[1].replace('_', '');
      return [arr[0], result, arr[2]].join('-');
    }
    if (arr[2].length === 5) {
      const result = arr[2].replace('_', '');

      return [arr[0], arr[1], result].join('-');
    }

    return value;
  };
  return resetMask(getValue());
};

export const onPassportInfo = (value: string) => {
  const getValue = () => {
    if (value === '') return '____ ______';
    const arr = value.split(' ');
    if (arr.length !== 2) {
      if (value[4] !== ' ') {
        return value.substring(-1, 3);
      }
    }
    if (arr[0].length === 5) {
      const result = arr[0].replace('_', '');
      return [result, arr[1]].join(' ');
    }
    return value;
  };
  return resetMask(getValue());
};

export const onPhoneInput = (value: string) => {
  const getValue = () => {
    if (value === '') return '+7-(___)-___-__-__';
    const arr = value.split('-');
    if (arr.length !== 5) {
      if (value[8] !== '-') {
        return value.substring(-1, 6);
      }
      if (value[12] !== '-') {
        return value.substring(-1, 11);
      }
      if (value[15] !== '-') {
        return value.substring(-1, 14);
      }
    }
    if (arr[1].length === 6) {
      const result = arr[1].replace('_', '');
      return [arr[0], result, arr[2], arr[3], arr[4]].join('-');
    }
    if (arr[2].length === 4) {
      const result = arr[2].replace('_', '');
      return [arr[0], arr[1], result, arr[3], arr[4]].join('-');
    }
    if (arr[3].length === 3) {
      const result = arr[3].replace('_', '');
      return [arr[0], arr[1], arr[2], result, arr[4]].join('-');
    }
    if (arr[4].length === 3) {
      const result = arr[4].replace('_', '');
      return [arr[0], arr[1], arr[2], arr[3], result].join('-');
    }
    return value;
  };
  return resetMask(getValue());
};

export const getNameFromUrl = () => {
  const url = window.location.search;
  if (!url.includes('name=')) return null;
  const index = url.indexOf('name=');
  const substr = url.substring(index);
  const lastIndex = substr.indexOf('&') === -1 ? undefined : substr.indexOf('&');
  const result = substr.slice(5, lastIndex);
  return `${decodeURI(result)},` || null;
};

export const getProductFromUrl = (): App.CreditProduct => {
  const { pathname } = window.location;
  const getSliceIndex = () => {
    if (pathname.includes('user/change_anketa')) return 20;
    if (pathname.includes('user/credit')) return 13;
    return 1;
  };

  const substr = window.location.pathname.substring(
    getSliceIndex(),
    window.location.pathname.length,
  );
  const slash = substr.indexOf('/');

  const result = (substr.substring(0, slash) as App.CreditProduct) || 'credit_card';

  return result;
};

export const getEditor = (): VDataValidationReducer['mode'] => {
  const { pathname } = window.location;

  if (pathname.includes('user/change_anketa')) return 'change_anketa';

  return 'credit';
};
