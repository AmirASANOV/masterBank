import React, { useEffect, useState } from 'react';

import ReactInputMask from 'react-input-mask';

import { RenderIcon } from './Icons/RenderIcons';
import { RenderInputMessage } from './Messages/InputMessages';
import {
  CheckboxInputPropsType,
  CustomInput,
  InputLabelProps,
} from './Types/InputPropsType';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import useSelectedList from '@/CustomHooks/useSelectedList';
import DocumentModel from '@/models/DocumentModel/DocumentModel';

/**
 * @displayName DateInput
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param defaultValue - Значение по умолчанию
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификтор поля ввода
 * @param message - Сообщение об ошибке
 * @param name - Название поля ввода
 * @param placeholder - Подсказка внутри поля ввода (дефолтный placeholder для input)
 * @param required - Параметр обязательности поля
 * @param setState - Функция изменения состояния поля ввода (используется для записи данных в state)
 * @param status - Состояние валидности поля ввода (на основе данного параметра выводится/не выводится) сообщение об ошибках/успехе
 * @param mask
 * */

export const monthList = [
  { value: '1', title: 'Январь' },
  { value: '2', title: 'Февраль' },
  { value: '3', title: 'Март' },
  { value: '4', title: 'Апрель' },
  { value: '5', title: 'Май' },
  { value: '6', title: 'Июнь' },
  { value: '7', title: 'Июль' },
  { value: '8', title: 'Август' },
  { value: '9', title: 'Сентябрь' },
  { value: '10', title: 'Октябрь' },
  { value: '11', title: 'Ноябрь' },
  { value: '12', title: 'Декабрь' },
];

export const generatedYears = (min: number) => {
  const years = [];
  const max = new Date(Date.now()).getFullYear();
  for (let i = max; i > min; i--) {
    years.push({ value: `${i}`, title: `${i}` });
  }

  return years;
};

/**
 * @displayName DockInput
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param extra_placeholder - Дополнительное описание поля
 * @param message - Сообщение об ошибке
 * @param path - Путь для указанаия ссылки
 * @param required - Параметр обязательности поля
 * @param state - Состояние включенности чекбокса
 * @param setState - Функция изменения состояния чекбокса
 * @public
 * */

export const CheckboxInput: React.FC<CheckboxInputPropsType> = ({
  state,
  setState,
  containerId,
  message,
  required,
  fullGrid,
  containerStyle,
}) => {
  const { openPdf } = DocumentModel();

  return (
    <div
      className="input-container"
      id={containerId}
      style={containerStyle}
      data-full-grid={fullGrid ? 'true' : ''}
    >
      <div className="checkbox-container">
        <div
          className={`checkbox ${state ? `checked` : ''}`}
          onClick={() => setState(!state)}
          aria-hidden
        />

        <span className="agreement-text">
          Я даю{' '}
          <button
            className="agreement-text-decoration"
            onClick={() => openPdf('processing')}
          >
            согласие
          </button>
          <span>
            {' '}
            на обработку моих персональных данных, получение информационных и рекламных
            сообщений, а&nbsp;также соглашаюсь с условиями{' '}
          </span>
          <button className="agreement-text-decoration" onClick={() => openPdf('offer')}>
            оферты
          </button>
        </span>
      </div>
      {!state && required && message ? <span className="span-error">{message}</span> : ''}
    </div>
  );
};
export const CheckboxInputForForm: React.FC<CheckboxInputPropsType> = ({
  state,
  setState,
  label,
  containerId,
  message,
  required,
  fullGrid,
  containerStyle,
}) => (
  <div
    className="input-container"
    id={containerId}
    style={containerStyle}
    data-full-grid={fullGrid ? 'true' : ''}
  >
    <div className="checkbox-container">
      <div
        className={`checkbox ${state ? `checked` : ''}`}
        onClick={() => setState(!state)}
        aria-hidden
      />

      <span className="agreement-text">
        <span className="agreement-text">{label}</span>
      </span>
    </div>
    {!state && required && message ? <span className="span-error">{message}</span> : ''}
  </div>
);
/**
 * @displayName DockInput
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param defaultValue - Значение по умолчанию
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификатор поля ввода
 * @param maxLength - Максимальная длина поля ввода (с учетом пробелов)
 * @param message - Сообщение об ошибке
 * @param minLength - Минимальная длина поля ввода (с учетом пробелов)
 * @param name - Название поля ввода
 * @param placeholder - Дефолтный placeholder для input
 * @param required - Параметр обязательности поля
 * @param setState - dispatch-функция для обновления состояния инпута
 * @param status - Статус валидации поля ввода по событию onBlur
 * @param type - Тип документаё
 * @public
 * */

/**
 * @displayName PhoneInput
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param defaultValue - Значение по умолчанию
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификатор поля ввода
 * @param message - Сообщение об ошибке
 * @param name - Название поля ввода
 * @param placeholder - Дефолтный placeholder для input
 * @param required - Параметр обязательности поля
 * @param setState - dispatch-функция для обновления состояния инпута
 * @param status - Статус валидации поля ввода по событию onBlur
 * @public
 * */

/**
 * @displayName TextInput
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param defaultValue - Значение по умолчанию
 * @param extra_placeholder - Дополнительное описание поля
 * @param format - Подтип поля ввода
 * @param id - Идентификатор поля ввода
 * @param maxLength - Максимальная длина поля ввода (с учетом пробелов)
 * @param message - Сообщение об ошибке
 * @param name - Название поля ввода
 * @param placeholder - Дефолтный placeholder для input
 * @param required - Параметр обязательности поля
 * @param readOnly - Режим "только для чтения"
 * @param setState - dispatch-функция для обновления состояния инпута
 * @param status - Статус валидации поля ввода по событию onBlur
 * @param type - Тип текстового поля
 * @public
 * */

/**
 * @displayName InputLabel
 * @param hintText - Текст подсказки
 * @param id - Идентификатор для ссылки на инпут
 * @param required - Сообщает пользователю о обязательности поля
 * @param text - Название label
 * @param containerId
 * @param style
 * @param className
 * @public
 * */

export const InputLabel: React.FC<InputLabelProps> = ({
  text,
  id,
  required,
  hintText,
  containerId,
  style,
  className,
}) => (
  <label htmlFor={id} className={`${className} label`} id={containerId} style={style}>
    {text} <span>{required ? ' *' : ''}</span>
    {hintText ? <span>{hintText}</span> : ''}
  </label>
);

export const FormInput: React.FC<CustomInput> = ({
  inputMode,
  inputStyle,
  labelStyle,
  inputClassNames,
  id,
  labelText,
  defaultValue,
  placeholder,
  extraPlaceholder,
  errorMessage,
  mask,
  required,
  name,
  minLength,
  maxLength,
  onInput,
  onBlur,
  onFocus,
  readOnly,
  alwaysShowMask,
  inputType,
  status,
  onKeyDown,
  inputMessagesStyle,
  onPaste,
  onPasteCapture,
  onChange,
  autoComplete,
  maskedHandler,
  resetValue,
}) => {
  const list = useSelectedList();
  const [masked, setMasked] = useState<Nullable<string>>(mask || null);
  const [maskedValue, setMaskedValue] = useState<Nullable<string>>(null);

  const maskedChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!maskedHandler) return;
    setMaskedValue(maskedHandler(e.target.value));
  };

  useEffect(() => {
    if (defaultValue) return list.setInputValue(defaultValue);

    if (maskedValue) return list.setInputValue(maskedValue);

    return list.setInputValue('');
  }, [defaultValue, maskedValue]);

  useEffect(() => {
    if (defaultValue === resetValue) {
      setMaskedValue(null);
      list.setInputValue('');
    }
  }, [defaultValue, resetValue]);

  const statusText = status === undefined ? '' : status ? 'input-done' : 'input-error';

  const classNames = `main-input ${statusText} ${inputClassNames?.join(' ')}`;

  return (
    <div style={{ position: 'relative' }}>
      {labelText && (
        <InputLabel text={labelText} required={!!required} id={id} style={labelStyle} />
      )}

      <div className="input-container">
        {masked ? (
          <ReactInputMask
            id={id}
            mask={masked}
            type={inputType}
            style={inputStyle}
            readOnly={readOnly}
            inputMode={inputMode}
            className={classNames}
            minLength={masked.length}
            value={defaultValue || maskedValue || ''}
            placeholder={placeholder || ''}
            alwaysShowMask={alwaysShowMask}
            autoComplete={autoComplete || 'something'}
            name={(name || '') + Date.now()}
            onKeyDown={e => onKeyDown?.(e, list)}
            onPaste={event =>
              onPaste ? onPaste(event, masked, setMasked, list.setInputValue) : ''
            }
            onPasteCapture={event =>
              onPasteCapture
                ? onPasteCapture(event, masked, setMasked, list.setInputValue)
                : ''
            }
            onChange={event => {
              onChange?.(event, masked, setMasked, list.setInputValue);
              if (maskedHandler) maskedChangeHandler(event);
            }}
            onBlur={e => onBlur?.(e)}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              onInput?.(e, masked, setMasked, list.setInputValue);
              maskedChangeHandler?.(e);
            }}
            onFocus={e => onFocus?.(e)}
          />
        ) : (
          <input
            id={id}
            type={inputType}
            inputMode={inputMode}
            placeholder={placeholder}
            className={classNames}
            style={inputStyle}
            maxLength={maxLength}
            minLength={minLength}
            defaultValue={defaultValue || ''}
            autoComplete={autoComplete || 'something'}
            name={(name || '') + Date.now()}
            readOnly={readOnly}
            onKeyDown={e => onKeyDown?.(e, list)}
            ref={list.input as React.RefObject<HTMLInputElement>}
            onPaste={e => onPaste?.(e, masked, setMasked, list.setInputValue)}
            onBlur={e => onBlur?.(e)}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              onInput?.(e, masked, setMasked, list.setInputValue)
            }
            onFocus={e => onFocus?.(e)}
            onClick={e => e.currentTarget.focus()}
          />
        )}
        <RenderIcon status={status} field="text" />
      </div>

      <RenderInputMessage
        message={errorMessage || extraPlaceholder || ''}
        inputMessagesStyle={inputMessagesStyle}
        status={status}
      />
    </div>
  );
};
