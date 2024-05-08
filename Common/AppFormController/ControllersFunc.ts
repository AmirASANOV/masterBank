import { setInputMask, setSpaceOfNumber } from '../AppFormHelpers/Helpers';
import {
  emailSymbols,
  NumberSymbols,
  rusNumSymbols,
  russianLanguageSymbols,
} from '../AppFormHelpers/Symbols';

import { DisableSymRegExp, NameRegularExpression } from './RegExp';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { DataElement } from '@/Components/Inputs/Types/InputPropsType';
import { App } from '@/ProjectTypes/AppTypes';

type OutputControllerType =
  | 'return_date_number'
  | 'return_date_dd_mm_yyyy'
  | 'return_date_yyyy_mm_dd'
  | 'return_phone_without_mask'
  | 'return_phone_with_mask';

type InputActionType = 'dropdown' | 'text' | 'dropdown+text';

export const resetMask = (value: Nullable<string>) =>
  value && String(value).length ? String(value).replace(/\D/g, '') : '';

/* eslint-disable */
const error = (
  message: string,
  required: boolean,
  value: any,
  type?: InputActionType,
) => ({
  valid: false,
  required,
  value: value as typeof value,
  dirty: true,
  message:
    type === 'dropdown' || type === 'dropdown+text'
      ? `Выберите вариант из списка ${
          type === 'dropdown+text' ? 'или введите корректное значение' : ''
        }`
      : message,
});

const dontTouch = (
  message: string,
  required: boolean,
  value: any,
  dirty: boolean,
  type?: InputActionType,
) => ({
  valid: false,
  required,
  value: value as typeof value,
  dirty,
  message:
    dirty && required
      ? type === 'dropdown'
        ? 'Выберите вариант из списка'
        : message
      : '',
});

const success = (value: any, required: boolean) => ({
  valid: true,
  required,
  value: value as typeof value,
  dirty: true,
  message: '',
});

export const checkPhone = (
  v: string | null,
  required: boolean,
  output: OutputControllerType,
  mask: Nullable<string>,
  dirty: boolean,
  disabledValue: Array<string>,
) => {
  if (v !== null) {
    if (mask === null) {
      mask = '___________'; // 11 символов
    }

    const re = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{10}$/;
    if (!re.test(setInputMask(v, '+7-(___)-___-__-__'))) {
      return error(
        'Укажите корректный для России номер телефона',
        required,
        output === 'return_phone_without_mask' ? resetMask(v) : setInputMask(v, mask),
      );
    }

    const value = resetMask(v);
    let valid = {
      valid: false,
      value:
        output === 'return_phone_without_mask'
          ? resetMask(value)
          : setInputMask(value, mask),
      message: '',
      dirty: false,
      required,
    };

    const notUniqueResult =
      disabledValue.length > 0
        ? disabledValue.filter(item => resetMask(item) === resetMask(value)).length > 0
        : false;

    if (notUniqueResult) {
      return error(
        'Укажите номер телефона, отличающийся от указанных ранее.',
        required,
        output === 'return_phone_without_mask'
          ? resetMask(value)
          : setInputMask(value, mask),
      );
    }

    if (value.length > 0) {
      if (value.length === 11) {
        valid = success(
          output === 'return_phone_without_mask'
            ? resetMask(value)
            : setInputMask(value, mask),
          required,
        );
      } else {
        valid = error(
          'Введенный номер телефона указан не корректно',
          required,
          output === 'return_phone_without_mask'
            ? resetMask(value)
            : setInputMask(value, mask),
        );
      }
    } else if (required) {
      if (dirty) {
        valid = error(
          'Это поле обязательно для заполнения',
          required,
          output === 'return_phone_without_mask'
            ? resetMask(value)
            : setInputMask(value, mask),
        );
      } else {
        valid = error(
          '',
          required,
          output === 'return_phone_without_mask'
            ? resetMask(value)
            : setInputMask(value, mask),
        );
      }
    } else {
      valid = error(
        '',
        required,
        output === 'return_phone_without_mask'
          ? resetMask(value)
          : setInputMask(value, mask),
      );
    }

    return valid;
  }
  return dontTouch('Это поле обязательно для заполнения', required, v, dirty);
};

export const checkText = (
  value: string,
  req: boolean,
  format:
    | 'rus'
    | 'engl'
    | 'any_without_disable_symbols'
    | 'rus+num'
    | 'engl+num'
    | 'email'
    | 'num'
    | 'department_code'
    | 'serias_number'
    | 'rus_eng'
    | 'names'
    | 'any',
  minLength: number,
  maxLength: number,
  dirty: boolean,
  type: InputActionType,
) => {
  let err = 0;
  const prohibited: Array<string> = [];

  if (value.length > 0) {
    if (value.length > maxLength) {
      return error(`Максимальная длина этого поля: ${maxLength} символов`, req, value);
    }

    if (value.length < minLength) {
      return error(`Минимальная длина этого поля: ${minLength} символов`, req, value);
    }

    switch (format) {
      case 'any':
        value.split('').forEach(symbol => {
          if (
            !(
              russianLanguageSymbols.includes(symbol.toLowerCase()) ||
              NumberSymbols.includes(symbol.toLowerCase()) ||
              emailSymbols.includes(symbol.toLowerCase())
            )
          ) {
            err++;
            prohibited.push(symbol);
          }
        });
        break;
      case 'names':
        if (!NameRegularExpression.test(value.trim())) {
          err++;
        }
        break;
      case 'rus':
        value.split('').forEach(symbol => {
          if (!russianLanguageSymbols.includes(symbol.toLowerCase())) {
            err++;
            prohibited.push(symbol);
          }
        });
        break;
      case 'engl': // Дописать
        break;
      case 'any_without_disable_symbols': // Дописать
        value.split('').forEach(symbol => {
          if (DisableSymRegExp.test(symbol.toLowerCase())) {
            err++;
            prohibited.push(symbol);
          }
        });
        break;
      case 'num':
        resetMask(value)
          .split('')
          .forEach(symbol => {
            if (!NumberSymbols.includes(symbol.toLowerCase())) {
              err++;
              prohibited.push(symbol);
            }
          });
        break;
      case 'department_code':
        value.split('').forEach(symbol => {
          if (symbol !== '-') {
            if (!NumberSymbols.includes(symbol.toLowerCase())) {
              err++;
              prohibited.push(symbol);
            }
          }
        });
        break;
      case 'serias_number':
        value.split('').forEach(symbol => {
          if (symbol !== ' ') {
            if (!NumberSymbols.includes(symbol.toLowerCase())) {
              err++;
              prohibited.push(symbol);
            }
          }
        });
        break;
      case 'rus+num':
        value.split('').forEach(symbol => {
          if (!rusNumSymbols.includes(symbol.toLowerCase())) {
            err++;
            prohibited.push(symbol);
          }
        });
        break;
      case 'engl+num':
        value.split('').forEach(symbol => {
          if (
            russianLanguageSymbols.includes(symbol.toLowerCase()) ||
            DisableSymRegExp.test(symbol.toLowerCase())
          ) {
            err++;
            prohibited.push(symbol);
          }
        });
        break;
      case 'rus_eng':
        value.split('').forEach(symbol => {
          if (
            DisableSymRegExp.test(symbol.toLowerCase()) ||
            NumberSymbols.includes(symbol.toLowerCase())
          ) {
            err++;
            prohibited.push(symbol);
          }
        });
        break;

      default:
        value.split('').forEach(symbol => {
          if (
            !(
              russianLanguageSymbols.includes(symbol.toLowerCase()) ||
              NumberSymbols.includes(symbol.toLowerCase()) ||
              emailSymbols.includes(symbol.toLowerCase())
            )
          ) {
            err++;
            prohibited.push(symbol);
          }
        });
    }
  } else {
    if (req) {
      return dontTouch('Это поле обязательно для заполнения', req, value, dirty, type);
    }
    return dontTouch('', req, value, dirty, type);
  }

  return err > 0
    ? error(
        format === 'names'
          ? 'Допускается только кириллица, апостроф, пробел и тире'
          : `В этом поле содержатся недопустимые символы ${prohibited
              .filter(item => !!item)
              .join(',')}`,
        req,
        value,
        type,
      )
    : success(value, req);
};

export const checkNumber = (
  val: string,
  req: boolean,
  minValue: number,
  maxValue: number,
  dirty: boolean,
  type?: 'currency',
) => {
  let err = 0;
  const prohibited: Array<string> = [];
  const value = val.split('-').join('').split('_').join('').split(' ').join('');
  if (value.length > 0) {
    if (Number.isNaN(Number(value))) {
      return {
        valid: false,
        value,
        dirty: true,
        message: 'Указанные данные не являются числом',
        required: req,
      };
    }

    if (Number(value) > maxValue) {
      return error(
        `Максимальное значение: ${setSpaceOfNumber(maxValue.toString())} ${
          type === 'currency' ? 'руб.' : ''
        }`,
        req,
        value,
      );
    }

    if (Number(value) < minValue) {
      return error(
        `Минимальное значение: ${setSpaceOfNumber(minValue.toString())} ${
          type === 'currency' ? 'руб.' : ''
        }`,
        req,
        value,
      );
    }

    value.split('').forEach((item: string) => {
      if (!NumberSymbols.includes(item)) {
        err++;
        prohibited.push(item);
      }
    });
  } else {
    if (req) {
      return dontTouch('Это поле обязательно для заполнения', req, value, dirty);
    }
    return { valid: false, value: '', dirty: true, message: '', required: req };
  }

  return err > 0
    ? error(
        `В этом поле должны быть только цифры, вы указали: ${prohibited.join(',')}`,
        req,
        value,
      )
    : success(value, req);
};

export const checkGender = (
  val: string,
  req: boolean,
  dirty: boolean,
): App.Controller<Nullable<DataElement>> => {
  if (val === 'MALE') {
    return success(val, req);
  }
  if (val === 'FEMALE') {
    return success(val, req);
  }
  return dontTouch('Выберите пол, это поле обязательно для заполнения', req, val, dirty);
};
