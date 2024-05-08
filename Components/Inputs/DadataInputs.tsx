import React, { Fragment, useEffect, useRef, useState } from 'react';

import { Accept } from '../Icons/Accept';
import { EmptyMessage } from '../Messages/Empty';

import { RenderIcon } from './Icons/RenderIcons';
import { RenderInputMessage } from './Messages/InputMessages';
import { InputLabel } from './OtherInputs';
import { Nullable } from './Select/Type';
import {
  DadataInputCompanyInfoSuggestionsPropsType,
  FmsUnitInputSuggestions,
  InputAddressProps,
} from './Types/InputPropsType';

import { PRODUCTION_URL } from '@/ApiConfig/apiConfigs';
import {
  getAddressByPostalCode,
  getAddressSuggestions,
  getCompanyByInn,
  getCompanyInfoSuggestions,
  getIssuedByPasportSuggestions,
} from '@/ApiConfig/DadataApi/DadataApi';
import { Dadata } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { Address, SetAddrSuggestions } from '@/ApiConfig/DadataApi/DadataTest';
import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { setInputMask } from '@/Common/AppFormHelpers/Helpers';
import { highlightAddrMatch } from '@/Common/Highlights/HighlightAddr';
import useSelectedList from '@/CustomHooks/useSelectedList';
import { currentDomain } from '@/GlobalConfig';
import { App } from '@/ProjectTypes/AppTypes';

const defaultDelay = 400;
export const defaultWhiteListPatronymic = [
  'нет',
  'нету',
  'отсутствует',
  'нет отчества',
  'без отчества',
];

/**
 * @displayName DadataInputFIOSuggestions - Самостоятельный инпут для запроса к API Dadata для поиска ФИО
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param count - Количество элементов массива в ответе Dadata API
 * @param defaultValue - Значение по умолчанию
 * @param delay - Задержка перед отправкой запроса на сервер Dadata API после ввода последнего символа
 * @param extra_placeholder - Дополнительное описание поля
 * @param gender - Пол для гранулирования поиска ФИО
 * @param id - Идентификтор поля ввода
 * @param message - Сообщение об ошибке
 * @param minLength - Минимальная длина ввода для отправки запроса на сервер Dadata API
 * @param name - Название поля ввода
 * @param placeholder - Подсказка внутри поля ввода (дефолтный placeholder для input)
 * @param required - Параметр обязательности поля
 * @param setState - Функция изменения состояния поля ввода (используется для записи данных в state)
 * @param status - Состояние валидности поля ввода (на основе данного параметра выводится/не выводится) сообщение об ошибках/успехе
 * @param type - Массив из параметров ФИО для сужения поиска
 * */

/**
 * @displayName DadataInputAddressSuggestions - Самостоятельный инпут для запроса к API Dadata для поиска адресов
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param count - Количество элементов массива в ответе Dadata API
 * @param defaultValue - Значение по умолчанию
 * @param delay - Задержка перед отправкой запроса на сервер Dadata API после ввода последнего символа
 * @param extra_placeholder - Дополнительное описание поля
 * @param from_bound - Параметр сужения типа геолокации (от - регион, населенный пункт, город, улица, дом)
 * @param id - Идентификтор поля ввода
 * @param locations - Фильтр по локации по кладр, региону, городу, населенному пункту или улице
 * @param locations_boost - Приоритет поиска в рамках указанной геолокации (не исключает иных результатов)
 * @param message - Сообщение об ошибке
 * @param minLength - Минимальная длина ввода для отправки запроса на сервер Dadata API
 * @param name - Название поля ввода
 * @param placeholder - Подсказка внутри поля ввода (дефолтный placeholder для input)
 * @param required - Параметр обязательности поля
 * @param setState - Функция изменения состояния поля ввода (используется для записи данных в state)
 * @param status - Состояние валидности поля ввода (на основе данного параметра выводится/не выводится) сообщение об ошибках/успехе
 * @param to_bound - Параметр сужения типа геолокации (до - регион, населенный пункт, город, улица, дом)
 * @param type - Тип адреса
 * @param addrKey
 * @param clearFunc
 * @param animation
 * @param postal_code
 * @param style
 * @param className
 * @param inputType
 * @param fullGrid
 * @param requestAdditional
 * @param filter
 * @param addressState
 * @param flatHandler
 * @param listValue
 * */

/* eslint-disable */
export const DadataInputAddressSuggestions: React.FC<InputAddressProps> = ({
  containerId,
  count,
  defaultValue,
  extra_placeholder,
  from_bound,
  id,
  locations,
  locations_boost,
  message,
  name,
  placeholder,
  required,
  setState,
  status,
  to_bound,
  addrKey,
  clearFunc,
  animation,
  postal_code,
  style,
  inputType = 'input',
  fullGrid,
  requestAdditional,
  filter,
  flatHandler,
  listValue,
}) => {
  const [storage, setStorage] = useState<Array<Address.Full>>([]);
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState(!!defaultValue);
  const item = useRef<Nullable<Address.Full>>(null);
  let intervalId: any;
  let blurInterval: any;
  let cleanerInterval: any;
  const list = useSelectedList(defaultValue);

  useEffect(() => {
    list.checkChangeDefaultValue(defaultValue?.trim() || '');
  }, [defaultValue]);

  const getStorage = async (value: string): Promise<Array<Address.Full>> => {
    let result: Array<Address.Full> = [];

    clearTimeout(intervalId);

    const request: Dadata.DadataAddrRequest = {
      query:
        addrKey === 'flat' && requestAdditional ? `${requestAdditional} ${value}` : value,
      from_bound: { value: from_bound ? '' : '' },
      to_bound: { value: to_bound ? '' : '' },
      locations: locations || [],
      locations_boost: locations_boost || [],
      count: count || 5,
    };

    setWaiting(true);

    if (postal_code) {
      const response: Dadata.DadataAddrData | null = await getAddressByPostalCode(value);
      if (response) {
        setState(SetAddrSuggestions([response])[0]);
        list.closeList();
        setWaiting(false);
        list.input.current?.blur();
      }
    } else {
      const response: Array<Dadata.DadataAddrData> | null =
        await getAddressSuggestions(request);

      if (response) {
        if (addrKey === 'flat') {
          result = SetAddrSuggestions(response).filter(
            el =>
              el.flat?.flat !== null &&
              el.flat?.value !== '' &&
              (filter ? el.house?.value === filter : true),
          );
        } else {
          result = SetAddrSuggestions(
            response.filter(el => !!el.data.settlement || !!el.data.city),
          );
        }
      }
      setWaiting(false);
    }
    return result;
  };

  const onChange = async (value: string) => {
    setData(false);
    clearTimeout(intervalId);
    if (
      !required &&
      (value.toLowerCase() === 'нет' ||
        value.toLowerCase() === 'отсутствует' ||
        value === ' ' ||
        value.toLowerCase() === 'нету' ||
        value === '-')
    ) {
    } else {
      intervalId = setTimeout(async () => {
        const store = await getStorage(value);
        // setStorage([])
        setStorage(store);
      }, 1500);
    }
  };

  const changeValueAfterClick = async (addr: Address.Full) => {
    setData(true);
    setStorage([]);
    list.setInputValue(addr[addrKey || 'full_address']?.value || '');
    setState(addr);
    list.closeList();
  };

  const value = (addr: Address.Full) => addr.full_address?.value || '';

  const ListItemRender: React.FC<{ addr: Address.Full; index: number }> = ({
    addr,
    index,
  }) => {
    const text = value(addr);
    const ref = useRef<HTMLDivElement>(null);
    const [select] = useState(text.toLowerCase() === listValue?.toLowerCase());
    useEffect(() => {
      highlightAddrMatch(list.input.current?.value || '', ref, text);
    }, []);

    if (text) {
      return (
        <Fragment key={`${addrKey}_address_${text}_${index}`}>
          <div
            className={`selected-item__${currentDomain} ${
              index === 0 ? `selected-item__${currentDomain}__preselect` : ''
            } ${select ? 'includes' : ''}`}
            key={`selected-item-${name}-${index}`}
            onClick={() => changeValueAfterClick(addr)}
            aria-hidden
          >
            <div ref={ref} />
            {select && <Accept size={20} />}
          </div>
        </Fragment>
      );
    }
    return null;
  };

  return (
    <div
      className={`input-component-container ${animation ? 'inputAnimation' : ''}`}
      id={containerId}
      data-full-grid={fullGrid ? 'true' : ''}
      ref={list.parent}
      style={style}
    >
      <InputLabel text={name || ''} required={required} id={id} />
      <div className="input-container">
        {inputType === 'input' ? (
          <input
            type="text"
            className={`input__select__${currentDomain} ${
              status === false ? `input-error` : ''
            } ${status === true ? 'input-done' : ''}`}
            id={id}
            ref={list.input as React.RefObject<HTMLInputElement>}
            onKeyDown={(e: React.KeyboardEvent) => list.keyClosersHandler(e)}
            placeholder={placeholder || ''}
            defaultValue={defaultValue || ''}
            autoComplete="{something}"
            name={name + Date.now()}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              clearTimeout(cleanerInterval);
              onChange(e.target.value).then(() => {
                cleanerInterval = setTimeout(() => {
                  const val = e.target.value;
                  if (defaultValue) {
                    if (
                      val?.toLowerCase().trim() !== defaultValue?.toLowerCase().trim()
                    ) {
                      clearFunc(addrKey || 'region', val.length === 0);
                    }
                  }
                }, 300);
              });
            }}
            onFocus={() => {
              list.openList();
              setData(false);
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              if (addrKey === 'flat') {
                clearTimeout(blurInterval);
                clearTimeout(intervalId);
                if (e.target.value.length > 0) {
                  blurInterval = setTimeout(() => {
                    list.closeList();
                    let previous = data;
                    setData(prev => {
                      if (!prev) {
                        previous = !prev;
                        return prev;
                      }
                      return prev;
                    });
                    setStorage([]);
                    if (previous && flatHandler) {
                      flatHandler(e.target.value);
                    }
                  }, 300);
                } else {
                  clearFunc(addrKey || 'flat', true);
                }
              } else if (defaultValue && e.target.value.length < 1) {
                clearFunc(addrKey || 'region', true);
              }
            }}
          />
        ) : inputType === 'textarea' ? (
          <textarea
            className={`input ${status === false ? 'input-error' : ''} ${
              status === true ? 'input-done' : ''
            }`}
            id={id}
            ref={list.input as React.RefObject<HTMLTextAreaElement>}
            onKeyDown={(e: React.KeyboardEvent) => list.keyClosersHandler(e)}
            placeholder={placeholder || ''}
            defaultValue={defaultValue || ''}
            autoComplete="{something}"
            name={name + Date.now()}
            rows={3}
            maxLength={200}
            style={{ resize: 'none', height: 70, lineHeight: 1.5 }}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onChange(e.target.value)
            }
            onFocus={() => list.openList()}
          />
        ) : (
          ''
        )}
        <RenderIcon status={status} field="text" waiting={waiting} ref={list.icon} />
        <div
          data-name={id}
          className={`selected-list ${storage && storage.length > 0 ? 'active' : ''}`}
          ref={list.list}
          onMouseOver={list.mouseOverHandler}
        >
          {storage.length > 0 ? (
            <>
              {storage.map((el: Address.Full, index: number) => (
                <ListItemRender addr={el} index={index} key={`${el.flat}_${index + 1}`} />
              ))}
            </>
          ) : storage.length === 0 && !waiting ? (
            <EmptyMessage
              message={[`Укажите "${name}" и выберите вариант из появившегося списка`]}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <RenderInputMessage message={message || extra_placeholder || ''} status={status} />
    </div>
  );
};

/**
 * @displayName DadataInputCompanyInfoSuggestions - Самостоятельный инпут для запросов к API Dadata для поиска компаний
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param count - Количество элементов массива в ответе Dadata API
 * @param defaultValue - Значение по умолчанию
 * @param delay - Задержка перед отправкой запроса на сервер Dadata API после ввода последнего символа
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификтор поля ввода
 * @param message - Сообщение об ошибке
 * @param minLength - Минимальная длина ввода для отправки запроса на сервер Dadata API
 * @param name - Название поля ввода
 * @param placeholder - Подсказка внутри поля ввода (дефолтный placeholder для input)
 * @param required - Параметр обязательности поля
 * @param setState - Функция изменения состояния поля ввода (используется для записи данных в state)
 * @param status - Состояние валидности поля ввода (на основе данного параметра выводится/не выводится) сообщение об ошибках/успехе
 * */

export const DadataInputCompanyInfoSuggestions: React.FC<
  DadataInputCompanyInfoSuggestionsPropsType
> = ({
  containerId,
  count,
  defaultValue,
  delay,
  extra_placeholder,
  id,
  message,
  minLength,
  name,
  placeholder,
  required,
  setState,
  status,
  locations_boost,
  fullGrid,
  setAction,
  geo_lat,
  geo_lon,
  inn,
}) => {
  const [waiting, setWaiting] = useState(false);
  const [storage, setStorage] = useState<Array<Dadata.DadataCompanyInfoResponse>>([]);
  const [selectedCompany, setSelectedCompany] = useState<boolean>(!!defaultValue);
  const list = useSelectedList();

  let interval: any;
  let blurInterval: any;

  const changeValueAfterClick = async (item: Dadata.DadataCompanyInfoResponse) => {
    setSelectedCompany(true);
    clearTimeout(blurInterval);
    clearTimeout(interval);
    list.closeList();
    list.setInputValue(
      item.data.name.short_with_opf || item.data.name.full_with_opf || '',
    );

    const company = await getCompanyByInn({
      query: item.data.inn || item.data.ogrn || '',
      kpp: item.data.kpp || undefined,
      type: item.data.type || undefined,
    });

    let result: App.OrganizationData | null = null;
    if (company) {
      result = {
        ...company[0].data,
        address: SetAddrSuggestions([company[0].data.address])[0],
      };
    } else {
      result = {
        ...item.data,
        address: SetAddrSuggestions([item.data.address])[0],
      };
    }

    setState(result);
  };
  const forceSelect = async (value: string): Promise<App.OrganizationData | null> => {
    const v = value.trim().replace(/\w/gi, '');
    if (v.length >= 1 && !waiting) {
      const response = await getStorage(v, true, 1, true);
      if (response) {
        const company = {
          ...response[0].data,
          address: SetAddrSuggestions([response[0].data.address])[0],
        };
        setState(company);
        return company;
      }
      setState(null);
      return null;
    }
    setState(null);
    return null;
  };

  const getStorage = async (
    value: string,
    withInn?: boolean,
    doubleCount?: number,
    withForce?: boolean,
  ) => {
    if (!waiting) setWaiting(true);

    const request: Dadata.DadataCompanyInfoRequest = {
      query: value,
      count: doubleCount || count || 20,
      status: ['ACTIVE'],
      locations_boost,
    };

    let response: Array<Dadata.DadataCompanyInfoResponse> | null =
      await getCompanyInfoSuggestions(request, withInn, withForce);
    let result: Array<Dadata.DadataCompanyInfoResponse> = [];

    response = response?.filter(item => !!item.data.inn && item.data.okved) || null;

    if (locations_boost && locations_boost[0].kladr_id) {
      const kladrLength = 19;

      const getNulls = (length: number) => {
        let str = '';
        for (let i = 0; i < length; i++) {
          str += '0';
        }
        return str;
      };
      const setKladr = (v: string): string => {
        let r = v;
        r.substr(0, kladrLength);
        if (r.length < kladrLength) {
          r += getNulls(kladrLength - r.length);
        }

        return r;
      };

      const kladr = Number(setKladr(locations_boost[0].kladr_id));
      result =
        response?.sort((a, b) => {
          const itemKladrA: string = setKladr(a.data.address.data.kladr_id || '');
          const itemKladrB: string = setKladr(b.data.address.data.kladr_id || '');

          const rA = Math.abs(kladr - Number(itemKladrA));
          const rB = Math.abs(kladr - Number(itemKladrB));

          if (rA === 0) {
            return -1;
          }
          if (rB === 0) {
            return 1;
          }
          if (rA < rB) {
            return -1;
          }
          if (rA > rB) {
            return 1;
          }
          return 0;
        }) || [];
    }

    setWaiting(false);

    return result || null;
  };
  const onInput = (value: string) => {
    clearTimeout(interval);
    clearTimeout(blurInterval);
    interval = setTimeout(() => {
      getStorage(value).then(result => {
        if (result) {
          list.openList();
          setStorage(result);
        }
      });
    }, 750);
  };

  return (
    <div
      className="input-component-container"
      id={containerId}
      ref={list.parent}
      data-full-grid={fullGrid ? 'true' : ''}
    >
      <InputLabel text={name || ''} required={required} id={id} />
      <div className="input-container">
        <input
          placeholder={placeholder || ''}
          type="text"
          data-full-grid
          onKeyDown={(e: React.KeyboardEvent) => list.keyClosersHandler(e)}
          className={`${
            storage.length > 0
              ? `input__select__${currentDomain}`
              : `input__${currentDomain}`
          } ${status === false ? 'input-error' : ''} ${
            status === true ? 'input-done' : ''
          }`}
          id={id}
          ref={list.input as React.RefObject<HTMLInputElement>}
          defaultValue={defaultValue || ''}
          autoComplete="{something}"
          name={name + Date.now()}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            clearTimeout(blurInterval);
          }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            list.setInputValue(value);
            if (value.length >= 1) {
              onInput(value);
            }
            selectedCompany ? setSelectedCompany(false) : '';
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            clearTimeout(blurInterval);
            clearTimeout(interval);
            if (e.target.value.length > 0) {
              blurInterval = setTimeout(() => {
                list.closeList();
                setSelectedCompany(prev => {
                  if (!prev) {
                    let company: boolean = prev;
                    forceSelect(e.target.value)
                      .then(result => {
                        company = !!result;
                      })
                      .catch(r => {
                        company = false;
                      })
                      .finally(() => {
                        company = false;
                      });

                    return company;
                  }
                  return prev;
                });
              }, 700);
            } else {
              setState(null);
            }
          }}
        />
        <RenderIcon status={status} field="text" waiting={waiting} ref={list.icon} />
        <div
          data-name={id}
          className={`selected-list ${storage.length > 0 ? 'active' : ''}`}
          ref={list.list}
          onMouseOver={list.mouseOverHandler}
        >
          {!PRODUCTION_URL ? (
            <div
              className="selected-item"
              style={{ display: 'flex', flexWrap: 'nowrap' }}
            >
              <h5>
                Заполнить самостоятельно
                <br />
                (пока не работает)
              </h5>
            </div>
          ) : (
            ''
          )}
          {storage.length > 0 ? (
            <>
              {storage.map((item: Dadata.DadataCompanyInfoResponse, index: number) => {
                const select = item.data.inn === inn;
                return (
                  <div
                    className={`selected-item__${currentDomain} ${
                      index === 0 ? `selected-item__${currentDomain}__preselect` : ''
                    } ${select ? 'includes' : ''}`}
                    key={`selected-item-${name}-${index}`}
                    onClick={() => changeValueAfterClick(item)}
                  >
                    <div style={{ marginRight: 10 }}>
                      <h5
                        style={{
                          width: '100%',
                          marginBottom: 5,
                          marginTop: 5,
                          textAlign: 'left',
                          fontSize: '16px',
                        }}
                      >
                        {item.unrestricted_value}
                      </h5>
                      <span className="selected-item-extra-content">
                        {`${
                          item.data.address.unrestricted_value
                            ? `${item.data.address.unrestricted_value}, `
                            : ''
                        }ИНН ${item.data.inn}`}
                      </span>
                    </div>
                    {select ? <Accept size={20} color="greenColor" /> : ''}
                  </div>
                );
              })}
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      {message || extra_placeholder ? (
        <RenderInputMessage
          message={message || extra_placeholder || ''}
          status={status}
        />
      ) : (
        ''
      )}
    </div>
  );
};

/**
 * @displayName DadataFMSUnitInputSuggestions - Самостоятельный инпут для запросов к API Dadata для поиска Кодов подразделений и Органа выдавшего паспорта
 * @param containerId - Id для родительского блока для кастомной стилизации и/или позиционирования в сетках
 * @param count - Количество элементов массива в ответе Dadata API
 * @param defaultValue - Значение по умолчанию
 * @param delay - Задержка перед отправкой запроса на сервер Dadata API после ввода последнего символа
 * @param extra_placeholder - Дополнительное описание поля
 * @param id - Идентификтор поля ввода
 * @param message - Сообщение об ошибке
 * @param name - Название поля ввода
 * @param placeholder - Подсказка внутри поля ввода (дефолтный placeholder для input)
 * @param required - Параметр обязательности поля
 * @param setState - Функция изменения состояния поля ввода (используется для записи данных в state)
 * @param status - Состояние валидности поля ввода (на основе данного параметра выводится/не выводится) сообщение об ошибках/успехе
 * */

export const DadataFMSUnitInputSuggestions: React.FC<FmsUnitInputSuggestions> = ({
  containerId,
  count,
  defaultValue,
  delay,
  extra_placeholder,
  id,
  message,
  name,
  placeholder,
  required,
  setState,
  status,
  fullGrid,
  issuedBy,
}) => {
  const [waiting, setWaiting] = useState(false);
  const [array, setArray] = useState<Array<Dadata.DadataIssuedByPasportResponse>>([]);
  const [item, setItem] = useState<Dadata.DadataIssuedByPasportResponseData>();
  const list = useSelectedList();
  let intervalId: any;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(intervalId);
    const value = setInputMask(e.target.value, '___-___');
    list.setInputValue(value);

    if (resetMask(e.target.value).length >= 4) {
      const request: Dadata.DadataCompanyInfoRequest = {
        query: value,
        count: count || 5,
      };

      intervalId = setTimeout(async () => {
        setWaiting(true);
        const response: Array<Dadata.DadataIssuedByPasportResponse> | null =
          await getIssuedByPasportSuggestions(request);

        if (response) {
          await setArray(response);
        }
        setWaiting(false);
      }, delay || defaultDelay);
    }
  };
  const setDepartmentCode = (value: string) => {
    setState({
      code: value,
      name: null,
      region_code: null,
      type: null,
    });
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (waiting) setWaiting(false);
    const target = e.target as Element;
    if (target === list.input.current) {
      if (e.target.value !== defaultValue) {
        if (e.target.value.length === 7 && !array.length) {
          setDepartmentCode(e.target.value);
        } else {
          setState(null);
        }
      }
    }
  };

  const changeValueAfterClick = (item: Dadata.DadataIssuedByPasportResponseData) => {
    list.setInputValue(item.code || '');
    list.closeList();
    setItem(item);
    setState(item);
  };

  return (
    <div
      className="input-component-container"
      id={containerId}
      ref={list.parent}
      data-full-grid={fullGrid ? 'true' : ''}
    >
      <InputLabel text={name || ''} required={required} id={id} />
      <div className="input-container">
        <input
          placeholder={placeholder || ''}
          className={`input__select__${currentDomain} ${
            status === false ? 'input-error' : ''
          } ${status === true ? 'input-done' : ''}`}
          defaultValue={defaultValue || ''}
          autoComplete="{something}"
          onKeyDown={(e: React.KeyboardEvent) => list.keyClosersHandler(e)}
          name={name + Date.now()}
          onBlur={blurHandler}
          onInput={onChange}
          ref={list.input as React.RefObject<HTMLInputElement>}
          onFocus={() => list.openList()}
          id={id}
          inputMode="numeric"
        />
        <RenderIcon status={status} field="text" waiting={waiting} ref={list.icon} />
        <div
          data-name={id}
          className={`selected-list ${array && array.length > 0 ? 'active' : ''}`}
          ref={list.list}
          onMouseOver={list.mouseOverHandler}
        >
          {array.length > 0 ? (
            <>
              {array.map((item: Dadata.DadataIssuedByPasportResponse, index: number) => {
                const select =
                  item.data.code === defaultValue && item.data.name === issuedBy;
                return (
                  <div
                    className={`selected-item__${currentDomain} ${
                      index === 0 ? `selected-item__${currentDomain}__preselect` : ''
                    } ${select ? 'includes' : ''}`}
                    key={`selected-item-${name}-${index}`}
                    onClick={() => changeValueAfterClick(item.data)}
                  >
                    <div>
                      <h5
                        style={{
                          width: '100%',
                          marginBottom: 5,
                          marginTop: 5,
                          textAlign: 'left',
                          fontSize: '16px',
                        }}
                      >
                        {item.data.code}
                      </h5>
                      <span className="selected-item-extra-content">
                        {item.data.name}
                      </span>
                    </div>
                    {select ? <Accept size={20} color="greenColor" /> : ''}
                  </div>
                );
              })}
            </>
          ) : array.length === 0 && !waiting ? (
            <EmptyMessage
              message={[
                'Укажите корректный ввод и выберите варианты из появившегося списка',
              ]}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <RenderInputMessage message={message || extra_placeholder || ''} status={status} />
    </div>
  );
};
