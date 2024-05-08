import React, { memo, useState } from 'react';

import { RenderIcon } from './Icons/RenderIcons';
import { RenderInputMessage } from './Messages/InputMessages';
import { InputLabel } from './OtherInputs';

import { currentDomain } from '@/GlobalConfig';

/**
 * @displayName HhInputPositionSuggestions
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param defaultValue - Значение по умолчанию
 * @param delay - Задержка перед отправкой запроса на сервер hh.ru после ввода последнего символа
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификатор поля ввода
 * @param message - Сообщение об ошибке
 * @param minLength - Минимальная длина ввода для отправки запроса на сервер hh.ru
 * @param name - Название поля ввода
 * @param placeholder - Подсказка внутри поля ввода (дефолтный placeholder для input)
 * @param required - Параметр обязательности поля
 * @param setState - Функция изменения состояния поля ввода (используется для записи данных в state)
 * @param status - Состояние валидности поля ввода (на основе данного параметра выводится/не выводится) сообщение об ошибках/успехе
 * */

/* eslint-disable */
export const HhInputPositionSuggestions: React.FC<any> = memo(
  ({
    containerId,
    defaultValue,
    extra_placeholder,
    id,
    message,
    minLength,
    name,
    placeholder,
    required,
    setState,
    status,
  }) => {
    const [waiting, setWaiting] = useState(false);

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      if (waiting) setWaiting(false);

      if (e.target.value.trim().length < minLength) {
        setState(null);
      }
      setState(e.target.value);
    };

    return (
      <div className="input-component-container" id={containerId}>
        <InputLabel text={name || ''} required={required} id={id} />
        <div className="input-container">
          <input
            type="text"
            className={`input__${currentDomain} ${
              status === false ? 'input-error' : ''
            } ${status === true ? 'input-done' : ''}`}
            id={id}
            defaultValue={defaultValue || ''}
            autoComplete="{something}"
            name={name + Date.now()}
            placeholder={placeholder}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
          />
          <RenderIcon status={status} field="text" waiting={waiting} />
        </div>
        <RenderInputMessage
          message={message || extra_placeholder || ''}
          status={status}
        />
      </div>
    );
  },
);
