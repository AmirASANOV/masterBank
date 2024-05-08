import { resetMask } from '../AppFormController/ControllersFunc';

import { creditTarget } from './DropdownLists';
import { rusAlphabet } from './Symbols';

import { Dadata, Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { App } from '@/ProjectTypes/AppTypes';
import {
  IconStatus,
  PartnerStatus,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

export class Regular {
  flags: string;

  constructor(flags: string) {
    this.flags = flags;
  }

  onlyRusWordsMode(value: string, replaceValue: string) {
    const reg = new RegExp(
      /(\))|(\()|(\*)|(;)|(<)|(>)|(\?)|(])|(\[)|({)|(})|(=)|(\+)|(&)|(\^)|(#)|(!)|(§)|(±)|(~)|(:)|(\.)|(,)|(@)|(№)|(\$)|(%)|(_)|[a-zA-Z0-9]/,
      this.flags,
    );
    return value.replace(reg, replaceValue);
  }
}
export const capitalizeFirstLetter = (value: string) => {
  const separators = ['-', ' '];
  let values;
  let resultValue = value;
  separators.forEach(separator => {
    values = resultValue.split(separator);
    values.forEach((v, index) => {
      values[index] = v.charAt(0).toUpperCase() + v.slice(1);
    });
    resultValue = values.join(separator);
  });

  return resultValue;
};

export const setInputMask = (v: string, mask: string | null) => {
  let value = v;
  if (mask) {
    let i = 0;
    const def = resetMask(mask);
    let val = resetMask(v);

    if (def.length >= val.length) val = def;

    value = String(mask).replace(/./g, a =>
      /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a,
    );
  }

  return value;
};

export const setSpaceOfNumber = (value: string) => {
  if (value.length > 3) {
    let mask = '___';
    const v = value.split(' ').join('');
    if (v.length === 4) mask = '_ ___';
    if (v.length === 5) mask = '__ ___';
    if (v.length === 6) mask = '___ ___';

    if (v.length === 4) mask = '_ ___';
    if (v.length === 5) mask = '__ ___';
    if (v.length === 6) mask = '___ ___';
    if (v.length === 7) mask = '_ ___ ___';
    if (v.length === 8) mask = '__ ___ ___';
    if (v.length === 9) mask = '___ ___ ___';
    if (v.length === 10) mask = '_ ___ ___ ___';

    return setInputMask(v, mask);
  }
  return value;
};

export const setTextTimer = (timer: number) => {
  if (timer <= 0) return '';

  const minutes = Math.floor(timer / 60);
  const seconds = Math.floor(timer % 60);

  return `0${minutes} ${
    seconds > 0 ? (seconds < 10 ? `: 0${seconds}` : `: ${seconds}`) : ': 00'
  }`;
};

export const nameArr = [
  'Валентина',
  'Иван',
  'Петр',
  'Данил',
  'Валерий',
  'Андрей',
  'Евгений',
  'Валерия',
  'Екатерина',
  'Богдан',
  'Александр',
];
export const phoneGenerator = () => {
  let result = '79';
  for (let i = 0; i < 9; i++) {
    result += Math.round(Math.random() * 9);
  }

  return result;
};

export const secretKeyGenerator = () => {
  const arr = [7, 8, 9, 10];
  const count = arr[Math.round(Math.random() * arr.length - 1)];
  let secretKey = '';
  for (let i = 0; i < count; i++) {
    secretKey += rusAlphabet[Math.round(Math.random() * rusAlphabet.length - 1)];
  }

  return secretKey.toUpperCase();
};

export const setTextTimerWithWords = (timer: number, text?: boolean) => {
  if (timer <= 0) return '';
  const minutes = Math.floor(timer / 60);
  const seconds = Math.floor(timer % 60);

  let str = '';
  if (minutes === 1 || (minutes > 20 && minutes % 10 === 1)) {
    if (text) {
      str += `${minutes} минута `;
    } else {
      str += `${minutes} : `;
    }
  } else if (minutes >= 2 && minutes <= 4) {
    if (text) {
      str += `${minutes} минуты `;
    } else {
      str += `${minutes} : `;
    }
  } else if (minutes >= 5 && minutes <= 20) {
    if (text) {
      str += `${minutes} минут `;
    } else {
      str += `${minutes} : `;
    }
  } else if (minutes > 20 && minutes % 10 >= 2 && minutes % 10 <= 4) {
    if (text) {
      str += `${minutes} минуты `;
    } else {
      str += `${minutes} : `;
    }
  } else if (minutes > 20 && minutes % 10 >= 5 && minutes % 10 <= 9) {
    if (text) {
      str += `${minutes} минут `;
    } else {
      str += `${minutes} : `;
    }
  } else if (minutes > 20 && minutes % 10 === 0) {
    if (text) {
      str += `${minutes} минут `;
    } else {
      str += `${minutes} : `;
    }
  }

  if (seconds === 1 || (seconds > 20 && seconds % 10 === 1)) {
    if (text) {
      str += `${seconds} секунда `;
    } else {
      str += `${seconds}`;
    }
  } else if (seconds >= 2 && seconds <= 4) {
    if (text) {
      str += `${seconds} секунды `;
    } else {
      str += `${seconds}`;
    }
  } else if (seconds >= 5 && seconds <= 20) {
    if (text) {
      str += `${seconds} секунд `;
    } else {
      str += `${seconds}`;
    }
  } else if (seconds > 20 && seconds % 10 >= 2 && seconds % 10 <= 4) {
    if (text) {
      str += `${seconds} секунды `;
    } else {
      str += `${seconds}`;
    }
  } else if (seconds > 20 && seconds % 10 >= 5 && seconds % 10 <= 9) {
    if (text) {
      str += `${seconds} секунд `;
    } else {
      str += `${seconds}`;
    }
    if (text) {
      str += `${seconds} секунд `;
    } else {
      str += `${seconds}`;
    }
  }

  return str;
};

export const analyzeCreditTarget = (
  target: Nullable<App.CreditProduct> | 'hypothec',
  output: 'title' | 'url' | 'title_parental_case' | 'titles_parental_case',
) => {
  if (output === 'title') {
    return target
      ? creditTarget.filter(item => item.value === target)[0].title
      : 'кредит';
  }

  if (output === 'title_parental_case') {
    switch (target) {
      case 'credit_cash':
        return 'кредит наличными';
      case 'credit_card':
        return 'кредитную карту';
      case 'installment_card':
        return 'дебетовую карту';
      case 'mfo':
        return 'кредит под 0%';
      case 'car_credit':
        return 'автокредит';
      default:
        return 'кредит';
    }
  }

  if (output === 'titles_parental_case') {
    switch (target) {
      case 'credit_cash':
        return 'кредита наличными';
      case 'credit_card':
        return 'кредитной карты';
      case 'installment_card':
        return 'дебетовые карты';
      case 'mfo':
        return 'кредита под 0%';
      case 'car_credit':
        return 'автокредита';
      case 'hypothec':
        return 'ипотеки';
      default:
        return 'кредитной карты';
    }
  }

  return 'кредит';
};

export const maxSum: Array<{ credit_target: App.CreditProduct; value: number }> = [
  {
    credit_target: 'credit_cash',
    value: 5000000,
  },
  {
    credit_target: 'credit_card',
    value: 1000000,
  },
  {
    credit_target: 'installment_card',
    value: 1000000,
  },
  {
    credit_target: 'mfo',
    value: 30000,
  },
];

export const minSum: Array<{ credit_target: App.CreditProduct; value: number }> = [
  {
    credit_target: 'credit_cash',
    value: 50000,
  },
  {
    credit_target: 'credit_card',
    value: 10000,
  },
  {
    credit_target: 'installment_card',
    value: 10000,
  },
  {
    credit_target: 'mfo',
    value: 1000,
  },
];

export const getMinSum = (target: Nullable<string>) =>
  minSum.filter(item => item.credit_target === target)[0]?.value || 10000;

export const getMaxSum = (target: Nullable<App.CreditProduct>) =>
  maxSum.filter(item => item.credit_target === target)[0]?.value || 5000000;

export const getHouseName = (value: Dadata.DadataAddrData) => {
  const result: Array<string> = [];

  if (value.data.settlement_with_type) {
    result.push(value.data.settlement_with_type);
  }

  if (value.data.street_with_type) {
    result.push(value.data.street_with_type);
  }

  if (value.data.house_type && value.data.house) {
    result.push(`${value.data.house_type} ${value.data.house}`);
  }

  if (value.data.block_type && value.data.block) {
    result.push(`${value.data.block_type} ${value.data.block}`);
  }

  return result.length > 0 ? result.join(', ') : '';
};

export const translateResponseStatus = (status: PartnerStatus): IconStatus => {
  if (status === 'APPROVED') return true;
  if (status === 'REJECTED') return false;
  if (status === 'SMS') return 'waiting';
  if (status === 'WAITING') return 'waiting';
  if (status === 'CALL') return 'waiting';
  return false;
};

export const getTextFromStatus = (status: PartnerStatus): string => {
  if (status === 'APPROVED') return 'Одобрено';
  if (status === 'REJECTED') return 'Отказ';
  if (status === 'SMS') return 'Решение поступит в смс';
  if (status === 'WAITING') return 'Рассмотрение';
  if (status === 'CALL') return 'Ожидайте звонка';
  return 'Решение поступит в смс';
};

export const creditCardProcentage = [
  { name: 'МТС', value: 'До 111 дней' },
  { name: 'Совком Банк', value: 'До 111 дней' },
  { name: 'Открытие', value: 'До 111 дней' },
  { name: 'УБРиР', value: 'До 111 дней' },
  { name: 'Локо-Банк', value: 'До 111 дней' },
];

export const creditCashProcentage = [
  { name: 'МТС', value: 'От 6,0%' },
  { name: 'Совком Банк', value: 'От 6,1%' },
  { name: 'Открытие', value: 'От 5,6%' },
  { name: 'УБРиР', value: 'От 5,9%' },
  { name: 'Локо-Банк', value: 'От 5,9%' },
];

/**
 * @displayName setInputStatus - функция для установки статуса инпута
 * @param item
 */

/* eslint-disable */
export const setInputStatus = (item: App.Controller<any>) =>
  item.valid
    ? true
    : (item.value && String(item.value).length > 0) || item.message.length > 0
      ? false
      : undefined;

export function getUrlSearchParams(p: string) {
  const match = RegExp(`[?&]${p}=([^&]*)`).exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export const setInputLabelTextForSum = (
  target: Nullable<App.CreditProduct> | undefined,
) => {
  switch (target) {
    case 'credit_card':
    case 'installment_card':
      return 'Желаемый кредитный лимит, руб.';
    case 'credit_cash':
      return 'Сумма кредита, руб.';
    case 'mfo':
      return 'Сумма кредита, руб.';
    case 'car_credit':
      return 'Сумма автокредита, руб.';
    default:
      return 'Сумма кредита, руб.';
  }
};
export const setInputPlaceholderTextForSum = (
  target: Nullable<App.CreditProduct | undefined>,
) => {
  switch (target) {
    case 'mfo':
      return 'Например: 100 000';
    default:
      return 'Например: 700 000';
  }
};
