import { Dadata, Nullable } from './DadataPropsTypes';

import { getValueFromAddr } from '@/Common/AppFormHelpers/AppFormInitial';

export namespace Address {
  export interface Full {
    full_address: Nullable<{ value: string }>;
    region: Nullable<Address.Region>;
    area: Nullable<Address.Area>;
    city: Nullable<Address.City>;
    settlement: Nullable<Address.Settlement>;
    street: Nullable<Address.Street>;
    house: Nullable<Address.House>;
    flat: Nullable<Address.Flat>;
  }

  export type Keys = Array<
    keyof Address.Region &
      keyof Address.Area &
      keyof Address.City &
      keyof Address.Settlement &
      keyof Address.Street &
      keyof Address.House &
      keyof Address.AddrRequiredFields
  >;

  export interface AddrRequiredFields {
    postal_code: Nullable<string>;
    fias_code: Nullable<string>;
    fias_level: string;
    geo_lat: Nullable<string>;
    geo_lon: Nullable<string>;
    geoname_id: Nullable<string>;
    qc_geo: '0' | '1' | '2' | '3' | '4' | '5' | null;
    okato: Nullable<string>;
    oktmo: Nullable<string>;
    value: string;
    list_value: string;
  }

  export interface Region extends Address.AddrRequiredFields {
    region: Nullable<string>;
    region_fias_id: Nullable<string>;
    region_kladr_id: Nullable<string>;
    region_type: Nullable<string>;
    region_type_full: Nullable<string>;
    region_with_type: Nullable<string>;
    region_iso_code: Nullable<string>;
  }

  export interface Area extends Address.AddrRequiredFields {
    area: Nullable<string>;
    area_fias_id: Nullable<string>;
    area_kladr_id: Nullable<string>;
    area_type: Nullable<string>;
    area_type_full: Nullable<string>;
    area_with_type: Nullable<string>;
  }

  export interface City extends Address.AddrRequiredFields {
    city: Nullable<string>;
    city_area: Nullable<string>;
    city_district: Nullable<string>;
    city_district_fias_id: Nullable<string>;
    city_district_kladr_id: Nullable<string>;
    city_district_type: Nullable<string>;
    city_district_type_full: Nullable<string>;
    city_district_with_type: Nullable<string>;
    city_fias_id: Nullable<string>;
    city_kladr_id: Nullable<string>;
    city_type: Nullable<string>;
    city_type_full: Nullable<string>;
    city_with_type: Nullable<string>;
  }

  export interface Settlement extends Address.AddrRequiredFields {
    settlement: Nullable<string>;
    settlement_fias_id: Nullable<string>;
    settlement_kladr_id: Nullable<string>;
    settlement_type: Nullable<string>;
    settlement_type_full: Nullable<string>;
    settlement_with_type: Nullable<string>;
  }

  export interface Street extends Address.AddrRequiredFields {
    street: Nullable<string>;
    street_fias_id: Nullable<string>;
    street_kladr_id: Nullable<string>;
    street_type: Nullable<string>;
    street_type_full: Nullable<string>;
    street_with_type: Nullable<string>;
  }

  export interface House extends Address.AddrRequiredFields {
    house: Nullable<string>;
    house_fias_id: Nullable<string>;
    house_kladr_id: Nullable<string>;
    house_type: Nullable<string>;
    house_type_full: Nullable<string>;
    block: Nullable<string>;
    block_type: Nullable<string>;
    block_type_full: Nullable<string>;
  }

  export interface Flat extends Address.AddrRequiredFields {
    flat: Nullable<string>;
    flat_area: null;
    flat_price: null;
    flat_type: Nullable<string>;
    flat_type_full: Nullable<string>;
  }
}

export const flatInitialState: Address.Flat = {
  flat: null,
  flat_area: null,
  flat_price: null,
  flat_type: null,
  flat_type_full: null,
  postal_code: null,
  fias_code: null,
  fias_level: '',
  geo_lat: null,
  geo_lon: null,
  geoname_id: null,
  qc_geo: null,
  okato: null,
  oktmo: null,
  value: '',
  list_value: '',
};

/* eslint-disable */
export const AddrKeys = {
  /* НЕ МЕНЯТЬ ПОРЯДОК СВОЙСТВ В МАССИВЕ MAIN!!!!!!!! */
  main: [
    'region',
    'area',
    'city',
    'settlement',
    'street',
    'house',
    'flat',
  ] as unknown as Array<keyof Address.Full>,
  required: [
    'postal_code',
    'fias_code',
    'fias_level',
    'geo_lat',
    'geo_lon',
    'geoname_id',
    'qc_geo',
    'okato',
    'oktmo',
    'value',
    'list_value',
  ] as unknown as Array<keyof Address.AddrRequiredFields>,
  region() {
    return [
      'region',
      'region_fias_id',
      'region_kladr_id',
      'region_type',
      'region_type_full',
      'region_with_type',
      'region_iso_code',
    ].concat(this.required) as unknown as Array<
      keyof Address.Region & keyof Address.AddrRequiredFields
    >;
  },
  area() {
    return [
      'area',
      'area_fias_id',
      'area_kladr_id',
      'area_type',
      'area_type_full',
      'area_with_type',
    ].concat(this.required) as unknown as Array<
      keyof Address.Area & keyof Address.AddrRequiredFields
    >;
  },
  city() {
    return [
      'city',
      'city_area',
      'city_district',
      'city_district_fias_id',
      'city_district_kladr_id',
      'city_district_type',
      'city_district_type_full',
      'city_district_with_type',
      'city_fias_id',
      'city_kladr_id',
      'city_type',
      'city_type_full',
      'city_with_type',
    ].concat(this.required) as unknown as Array<
      keyof Address.City & keyof Address.AddrRequiredFields
    >;
  },
  settlement() {
    return [
      'settlement',
      'settlement_fias_id',
      'settlement_kladr_id',
      'settlement_type',
      'settlement_type_full',
      'settlement_with_type',
    ].concat(this.required) as unknown as Array<
      keyof Address.Settlement & keyof Address.AddrRequiredFields
    >;
  },
  street() {
    return [
      'street',
      'street_fias_id',
      'street_kladr_id',
      'street_type',
      'street_type_full',
      'street_with_type',
    ].concat(this.required) as unknown as Array<
      keyof Address.Street & keyof Address.AddrRequiredFields
    >;
  },
  house() {
    return [
      'house',
      'house_fias_id',
      'house_kladr_id',
      'house_type',
      'house_type_full',
      'block',
      'block_type',
      'block_type_full',
    ].concat(this.required) as unknown as Array<
      keyof Address.House & keyof Address.AddrRequiredFields
    >;
  },
  flat() {
    return ['flat', 'flat_area', 'flat_price', 'flat_type', 'flat_type_full'].concat(
      this.required,
    ) as unknown as Array<keyof Address.Flat & keyof Address.AddrRequiredFields>;
  },
};

export const setAddrValue = (state: any) => {
  const methods = {
    region() {
      return this.for(['region&&region_type_full']);
    },
    area() {
      return this.for(['area&&area_type_full']);
    },
    city(list?: boolean) {
      if (list) {
        return this.for([
          'region&&region_type_full',
          'city_type_full&&city',
          'city_district_type_full&&city_district',
          'city_area',
          'settlement_type_full&&settlement',
          'street_type_full&&street',
          'house_type_full&&house',
          'block_type_full&&block',
          'flat_type_full&&flat',
        ]);
      }
      return this.for([
        'city_type_full&&city',
        'city_district_type_full&&city_district',
        'city_area',
        'settlement_type_full&&settlement',
      ]);
    },
    settlement() {
      return this.for([
        'city_type_full&&city',
        'city_district_type_full&&city_district',
        'city_area',
        'settlement_type_full&&settlement',
      ]);
    },
    street(list?: boolean) {
      if (list) {
        return `${this.city()}, ${this.for(['street_type_full&&street'])}`;
      }
      return this.for(['street_type_full&&street']);
    },
    house(list?: boolean) {
      if (list) {
        return this.for([
          'city_type_full&&city',
          'settlement_type_full&&settlement',
          'street_type_full&&street',
          'house_type_full&&house',
          'block_type_full&&block',
        ]);
      }
      return this.for(['house_type_full&&house', 'block_type_full&&block']);
    },
    flat(list?: boolean) {
      if (list) {
        return this.for([
          'street_type_full&&street',
          'house_type_full&&house',
          'block_type_full&&block',
          'flat_type_full&&flat',
        ]);
      }
      return this.for(['flat_type_full&&flat']);
    },
    for(keys: Array<string>): string {
      let result: Array<string> = [];
      keys.forEach(key => {
        const keySplitterAmpersand = key.split('&&');
        if (keySplitterAmpersand.length > 1) {
          const status = keySplitterAmpersand.every(value => state[value]);
          const str: Array<string> = [];

          if (status) {
            keySplitterAmpersand.forEach(value => {
              if (value in state) {
                str.push(state[value]);
              }
            });
          }

          result.push(str.join(' '));
        } else if (key in state) {
          result.push(state[key]);
        }
      });

      // Слой логики для отображения бывших названий из массива history_values
      // if(list && !!state.history_values && state.history_values.length > 0){
      //   state.history_values.forEach((item: string) => {
      //     result.push(`(бывш. ${item})`)
      //   })
      // }

      result = result.filter(item => item);
      return result.length > 0 ? (result.length > 1 ? result.join(', ') : result[0]) : '';
    },
  };

  return methods;
};

export const GetAddrValue = (
  state: Dadata.DadataAddrData,
  field: keyof Address.Full,
  list?: boolean,
): string => {
  let result = '';
  const setter = setAddrValue(state.data);
  switch (field) {
    case 'area':
      result = setter.area();
      break;
    case 'city':
      result = setter.city(list);
      break;
    case 'house':
      result = setter.house(list);
      break;
    case 'region':
      result = setter.region();
      break;
    case 'settlement':
      result = setter.settlement();
      break;
    case 'street':
      result = setter.street(list);
      break;
    case 'flat':
      result = setter.flat(list);
      break;

    default:
      result = setter.region();
  }

  return result;
};

export const AddrParser = (
  keys: Array<string>,
  state: any,
  field: keyof Address.Full,
) => {
  const object: { [n: string]: Nullable<string> } = {};
  keys.forEach(key => {
    if (key in state.data) {
      object[key] = state.data[key];
    } else if (key === 'value') {
      object[key] = GetAddrValue(state, field);
    } else if (key === 'list_value') {
      object[key] = GetAddrValue(state, field, true);
    }
  });
  return object;
};

export const translateAddrToNew = (addr: Dadata.DadataAddrData) => {
  const methods = {
    region() {
      return AddrParser(AddrKeys.region(), addr, 'region') as unknown as Address.Region;
    },
    area() {
      return AddrParser(AddrKeys.area(), addr, 'area') as unknown as Address.Area;
    },
    city() {
      return AddrParser(AddrKeys.city(), addr, 'city') as unknown as Address.City;
    },
    settlement() {
      return AddrParser(
        AddrKeys.settlement(),
        addr,
        'settlement',
      ) as unknown as Address.Settlement;
    },
    street() {
      return AddrParser(AddrKeys.street(), addr, 'street') as unknown as Address.Street;
    },
    house() {
      return AddrParser(AddrKeys.house(), addr, 'house') as unknown as Address.House;
    },
    flat() {
      return AddrParser(AddrKeys.flat(), addr, 'flat') as unknown as Address.Flat;
    },
  };

  return methods;
};

export const SetAddrSuggestions = (
  state: Array<Dadata.DadataAddrData>,
): Array<Address.Full> => {
  const array: Array<Address.Full> = [];

  state.forEach(item => {
    const t = translateAddrToNew(item);
    const addr = {
      full_address: { value: '' },
      region: t.region() as Address.Region,
      area: t.area() as Address.Area,
      city: t.city() as Address.City,
      settlement: t.settlement() as Address.Settlement,
      street: t.street() as Address.Street,
      house: t.house() as Address.House,
      flat: t.flat() as Address.Flat,
    };
    addr.full_address.value = getValueFromAddr(addr, ['postal_code']);
    array.push(addr);
  });

  return array;
};

export const ClearAddrState = (
  key: keyof Address.Full,
  state: Address.Full,
  clearCurrent?: boolean,
): Address.Full => {
  const indexTo = AddrKeys.main.length;
  let indexFrom = AddrKeys.main.indexOf(key);
  const currentIndex = indexFrom;

  if (indexFrom === -1) return state;

  while (indexFrom < indexTo) {
    const field = AddrKeys.main[indexFrom];
    if (field in state) {
      if (indexFrom === currentIndex) {
        if (clearCurrent) {
          state[field] = null;
        }
      } else {
        state[field] = null;
      }
    }
    indexFrom++;
  }

  return state;
};
