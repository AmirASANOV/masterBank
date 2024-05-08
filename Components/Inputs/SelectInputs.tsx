import React, { useEffect, useState } from 'react';

import { Accept } from '../Icons/Accept';

import { RenderIcon } from './Icons/RenderIcons';
import { RenderInputMessage } from './Messages/InputMessages';
import { InputLabel } from './OtherInputs';
import {
  DataElement,
  SelectedInputPropsType,
  TypeOfInputData,
} from './Types/InputPropsType';

import useSelectedList from '@/CustomHooks/useSelectedList';

/**
 * @displayName SelectedInput
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param data - Список типа {value: string, title: string} - пользователь видит только title
 * @param defaultValue - Значение по умолчанию
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификатор поля ввода
 * @param message - Сообщение об ошибке
 * @param name - Название поля ввода
 * @param placeholder - Дефолтный placeholder для input
 * @param required - Параметр обязательности поля
 * @param setState - dispatch-функция для обновления состояния инпута
 * @param status - Статус валидации поля ввода по событию onBlur
 * @param readOnly
 * @param onChange
 * @param onSelect
 * @param setStatus
 * @param style
 * @param onBlur
 * @param disabled
 * @public
 * */

/* eslint-disable */
export const SelectedInput: React.FC<SelectedInputPropsType> = ({
  containerId,
  data,
  defaultValue,
  extra_placeholder,
  id,
  message,
  name,
  placeholder,
  required,
  setState,
  status,
  readOnly = true,
  onChange,
  setStatus,
  style,
  onBlur,
  disabled = false,
}) => {
  const list = useSelectedList();
  const [options, setOptions] = useState<TypeOfInputData>(data);

  useEffect(() => {
    setOptions(data);
  }, [data]);

  useEffect(() => {
    list.setInputValue(defaultValue || '');
  }, [defaultValue]);

  const changeValueAfterClick = (item: DataElement) => {
    list.setInputValue(item.title);
    setState(item);
    list.closeList();
  };

  const SelectedItem: React.FC<{ i: number; item: DataElement<string>; id?: string }> = ({
    i,
    item,
    id,
  }) => {
    const [select] = useState(item.title === defaultValue);

    return (
      <div
        id={id}
        className={`selected-item  ${select ? 'includes' : ''}`}
        key={`selected-item-${name}-${i}`}
        onClick={() => {
          changeValueAfterClick(item);
          if (setStatus) {
            list.setCalm(setStatus(item.title, required || false, list.dirty, status));
          }
        }}
        aria-hidden
      >
        {item.title}
        {select && <Accept />}
      </div>
    );
  };

  useEffect(() => {
    if (
      document.hasFocus() &&
      list.input.current &&
      list.input.current.contains(document.activeElement)
    ) {
      list.openList(true);
      list.setDirty(true);
    }
  }, [document.activeElement]);

  return (
    <div className="input-container" id={containerId} ref={list.parent} style={style}>
      {name ? (
        <InputLabel
          className="label-select"
          text={name}
          required={required || false}
          id={id}
        />
      ) : (
        ''
      )}
      <div className="input-container">
        <input
          placeholder={placeholder || ''}
          className={`main-input ${status === true ? 'input-done' : ''
            } ${status === false ? 'input-error' : ''}`}
          id={id}
          onBlur={e => onBlur && onBlur(e)}
          onFocus={() => {
            list.openList(true);
            list.setDirty(true);
          }}
          onChange={e => {
            setOptions(
              data.filter(el =>
                el.title
                  .toLocaleLowerCase()
                  .includes(e.currentTarget.value.toLocaleLowerCase()),
              ),
            );
          }}
          onKeyDown={(e: React.KeyboardEvent) => list.keyClosersHandler(e)}
          ref={list.input as React.RefObject<HTMLInputElement>}
          // required={required || false}
          autoComplete="{something}"
          name={name ? name + Date.now() : Date.now().toString()}
          readOnly={readOnly}
          defaultValue={defaultValue?.trim() || ''}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange ? onChange(e.target.value) : e.preventDefault()
          }
          disabled={disabled}
        />
        <RenderIcon status={list.calm} field="dropdown" ref={list.icon} />
        <div
          className="selected-list"
          ref={list.list}
          onMouseOver={list.mouseOverHandler}
        >
          {options.map((item: DataElement, index: number) => (
            <SelectedItem
              id={item.id}
              i={index}
              item={item}
              key={`${item.title}${index + 1}`}
            />))}
        </div>
      </div>
      <RenderInputMessage message={message || extra_placeholder || ''} status={status} />
    </div>
  );
};
