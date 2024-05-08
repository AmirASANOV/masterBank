import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

import { SERVER_URL } from '../apiConfigs';

import { Dadata } from './DadataPropsTypes';
import { SetAddrSuggestions } from './DadataTest';

import { updateUserGeoLocation } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

export const instanceDadata = axios.create({
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: `${SERVER_URL}/api/dadata/`,
});

/* eslint-disable */

export const DadataApi = {
  apiPost: <T, D>(url: string, data: D): Promise<AxiosResponse<T>> =>
    instanceDadata
      .post(url, data, {
        headers: { Authorization: `Bearer ${Cookies.get('Bearer')}` },
      })
      .then(res => res)
      .catch(err => err),
};

export const getAddressSuggestions = async (
  data: Dadata.DadataAddrRequest,
): Promise<Array<Dadata.DadataAddrData> | null> => {
  const response = await DadataApi.apiPost<Dadata.DadataAddrResponse, any>(
    'get_address_suggestions',
    data,
  );
  if (response.status === 200) {
    return response.data.suggestions;
  }
  return null;
};

export const getAddressByCoords =
  (f: number, s: number, radius: number) => async (dispatch: Dispatch<any>) => {
    const value = { lat: f, lon: s, radius_meters: radius };
    const response = await DadataApi.apiPost<Dadata.DadataAddrResponse, any>(
      'get_address_by_coords',
      value,
    );

    if (response.status === 200) {
      if (response.data.suggestions.length > 0) {
        const address = response.data.suggestions[0];
        dispatch(updateUserGeoLocation(SetAddrSuggestions([address])[0]));
      }
    } else if (radius < 1000) {
      dispatch(getAddressByCoords(f, s, radius + 50));
    }
  };

export const getAddressByPostalCode = async (value: string) => {
  const response = await DadataApi.apiPost<any, any>('get_address_by_postal_code', {
    query: value,
  });

  if (response.status === 200) {
    const str = response.data.suggestions[0].data.address_str
      .split(', ')
      .splice(0, 2)
      .join(', ');
    const secondResponse = await getAddressSuggestions({
      query: str,
      from_bound: { value: 'city' },
      to_bound: { value: 'settlement' },
    });

    if (secondResponse && secondResponse.length > 0) {
      return secondResponse[0];
    }
  }
  return null;
};

export const getFIOSuggestions = async (data: Dadata.DadataFIORequest) => {
  const response = await DadataApi.apiPost<
    Dadata.DadataFIOResponse,
    Dadata.DadataFIORequest
  >('get_fio_suggestions', data);
  return response.data.suggestions as Array<Dadata.DadataFIOResponseData>;
};

export const getIssuedByPasportSuggestions = async (
  data: Dadata.DadataIssuedByPassportRequest,
) => {
  const response = await DadataApi.apiPost<
    { suggestions: Array<Dadata.DadataIssuedByPasportResponse> },
    Dadata.DadataIssuedByPassportRequest
  >('get_issued_by_passport_suggestions', data);

  if (response.status === 200) {
    return response.data.suggestions;
  }
  return null;
};

export const getCompanyByInn = async (
  request: Dadata.CompanyByInn,
): Promise<Array<Dadata.DadataCompanyInfoResponse>> => {
  const response = await DadataApi.apiPost<
    { suggestions: Array<Dadata.DadataCompanyInfoResponse> },
    Dadata.CompanyByInn
  >('get_company_by_inn', request);

  return response.data.suggestions;
};

export const getCompany = async (
  data: Dadata.DadataCompanyInfoRequest,
): Promise<Array<Dadata.DadataCompanyInfoResponse>> => {
  const response = await DadataApi.apiPost<
    { suggestions: Array<Dadata.DadataCompanyInfoResponse> },
    Dadata.DadataCompanyInfoRequest
  >('get_company', data);

  return response.data.suggestions;
};

export const getCompanyInfoSuggestions = async (
  data: Dadata.DadataCompanyInfoRequest,
  withInn?: boolean,
  withForce?: boolean,
): Promise<Array<Dadata.DadataCompanyInfoResponse> | null> => {
  let response: Array<Dadata.DadataCompanyInfoResponse> = await getCompany(data);
  let value = data.query.trim();

  if (withForce) {
    if (response && response.length === 0) {
      const index = data.query.search(/[а-яА-Я0-9]/i);

      if (index >= 0) {
        value = data.query[index];
        response = await getCompany({
          ...data,
          query: value,
        });
      }
    }
  }

  if (withInn) {
    const company = response[0] || null;

    if (company && (company.data.inn || company.data.ogrn)) {
      response = await getCompanyByInn({
        query: company.data.inn || company.data.ogrn || '',
        kpp: company.data.kpp || undefined,
        type: company.data.type || undefined,
      });
    }
  }

  return response || null;
};
