import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';

import { SERVER_URL } from '../apiConfigs';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/form`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
    },
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${Cookies.get('Bearer')}`);
      headers.set('frm', window.location.search || `${null}`);
      headers.set('fronturl', window.location.origin);

      return headers;
    },
  }),
  tagTypes: ['FormApi'],

  endpoints: build => ({
    sendPassportInfoByTimer: build.mutation({
      query: data => ({
        method: 'POST',
        url: 'create/passport_info_partial',
        body: {
          ...data,
        },
      }),
    }),
    sendInfoPartialData: build.mutation({
      query: data => ({
        method: 'POST',
        url: 'create/full_info_partial',
        body: {
          ...data,
        },
      }),
    }),
  }),
});
