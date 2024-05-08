import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { AppThunkType } from '../../index';

import {
  LoaderProps,
  settingReducer,
  ShowModalOptions,
  Viewport,
  ZaimerConfig,
} from './ConfigTypes';

import { Address } from '@/ApiConfig/DadataApi/DadataTest';
import { checkPhone } from '@/Common/AppFormController/ControllersFunc';
import { getUrlSearchParams } from '@/Common/AppFormHelpers/Helpers';
import { resolution, tabletWidth } from '@/Common/Config/ConfigReducerCommon';

const initialState: settingReducer = {
  userPathExperience: [],
  loading: {
    loaderStatus: false,
    message: 'Загружаем данные с сервера. Пожалуйста, подождите...',
  },
  isDesktop: document.body.clientWidth >= tabletWidth,
  viewport: resolution(document.body.clientWidth),
  user: {
    user_agent: window.navigator.userAgent || '',
    screen_width: window.screen.width || null,
    screen_height: window.screen.height || null,
    type: 'BASIC_SMS',
    opener: null,
    vendor: window.navigator.vendor || null,
    vendor_version: window.navigator.vendorSub || null,
    language: window.navigator.language || null,
    do_not_track: window.navigator.doNotTrack || null,
    cookie_enabled: window.navigator.cookieEnabled || null,
    address: null,
    sms_code: null,
    phone_number: null,
    code_in_response: null,
  },
  modalWindow: {
    actions: {
      sendCreditParameters: false,
      showHypothecModal: false,
    },
    view: false,
    href: undefined,
    withSms: false,
    name: undefined,
    surname: undefined,
    phone: undefined,
    callBack: undefined,
  },
  subModal: false,
  subModalAvailable: true,
  isProduction: !window.location.origin.includes('http://localhost:9090'),
  notification: {
    disableRepeatShow: [],
    notification_list: [],
  },
  documentsData: {
    phone_number: '',
    date: null,
  },
  cookieAccept: Cookies.get('Consent') !== undefined,
  zaimer: {
    link: null,
    isShow: false,
  },
  provider_data: false,
};

const configSlice = createSlice({
  name: 'configReducer',
  initialState,
  reducers: {
    updateConfigActionState(state, data: PayloadAction<boolean>) {
      state.modalWindow.actions.sendCreditParameters = data.payload;
    },
    setSpinner(state, data: PayloadAction<LoaderProps>) {
      state.loading = data.payload;
    },
    updateIsDesktop(state, data) {
      state.isDesktop = data.payload;
    },
    updateNotificationList(state, data) {
      state.notification.notification_list = data.payload;
    },
    updateDisableNotification(state, data) {
      state.notification.disableRepeatShow = data.payload;
    },
    updateURLConfig(state, data) {
      state.user = data.payload;
    },
    updateDocumentsData(state, data) {
      state.documentsData = data.payload;
    },
    updateShowModal(state, data) {
      state.modalWindow = data.payload;
    },
    updateUserGeoLocation(state, data: PayloadAction<Address.Full>) {
      state.user.address = data.payload;
    },
    updateViewPort(state, data) {
      state.viewport = data.payload;
    },
    pushToUserPathExperience(state, data) {
      const prev = state.userPathExperience;
      prev.push(data.payload);
      state.userPathExperience = prev;
    },
    setAuthSmsCode(state, data) {
      state.user.sms_code = data.payload;
    },
    resetModalWindow(state) {
      state.modalWindow = initialState.modalWindow;
    },
    resetModalPhone(state) {
      state.modalWindow.phone = '';
    },
    setShowHypothecModal(state, data: PayloadAction<boolean>) {
      state.modalWindow.actions.showHypothecModal = data.payload;
    },
    setZaimerConfig(state, data: PayloadAction<ZaimerConfig>) {
      state.zaimer = data.payload;
    },
    setSubModal(state, data: PayloadAction<boolean>) {
      state.subModal = data.payload;
    },
    setSubModalAvailable(state, data: PayloadAction<boolean>) {
      state.subModalAvailable = data.payload;
    },
    setAuthType(state, { payload }: PayloadAction<'MTS_ID' | 'BASIC_SMS'>) {
      state.user.type = payload;
    },
    setProviderData(state, data: PayloadAction<boolean>) {
      state.provider_data = data.payload;
    },
    setCodeInResponse(state, { payload }: PayloadAction<boolean>) {
      state.user.code_in_response = payload;
    },
  },
});

export const {
  updateConfigActionState,
  setSpinner,
  updateUserGeoLocation,
  updateNotificationList,
  updateDisableNotification,
  resetModalWindow,
  resetModalPhone,
  setShowHypothecModal,
  setZaimerConfig,
  setSubModal,
  setSubModalAvailable,
  setAuthType,
  setProviderData,
  setCodeInResponse,
} = configSlice.actions;

export const showModal =
  (status: boolean, options?: ShowModalOptions): AppThunkType =>
  async (dispatch, getState) => {
    const state = getState().config.modalWindow;
    dispatch(
      configSlice.actions.updateShowModal({
        ...state,
        view: status,
        href: options?.href,
        withSms: options?.withSms || true,
        name: options?.name,
        surname: options?.surname,
        phone: options?.phone,
        callBack: options?.callBack,
      }),
    );
  };

export const updateIsDesktop =
  (status: Viewport): AppThunkType =>
  async (dispatch, getState) => {
    const prev = getState().config.viewport;
    if (prev !== status) {
      dispatch(configSlice.actions.updateViewPort(status));
    }
  };

export const openAuthWindowFromUrlValue = (): AppThunkType => async dispatch => {
  const phone = getUrlSearchParams('modalph');
  if (phone) {
    localStorage.setItem('phoneNumber', phone);
    const vPhone = checkPhone(
      phone,
      true,
      'return_phone_without_mask',
      '+7-(___)-___-__-__',
      true,
      [],
    );
    return dispatch(
      showModal(true, {
        phone: vPhone.valid ? vPhone.value : '',
        href: '/user/credit/credit_card/',
      }),
    );
  }
  return false;
};

export const addNotification =
  (data: Array<string> | string, duration?: number, statusCode?: string): AppThunkType =>
  (dispatch, getState) => {
    const disable = getState().config.notification.disableRepeatShow;
    if (statusCode && disable.includes(statusCode)) return;
    const list = getState().config.notification.notification_list.slice();
    const count = list.length;

    if (typeof data !== 'string' && data.forEach) {
      data.forEach(item => {
        const errorItem =
          getState().config.notification.notification_list.filter(
            el => el.message.toLowerCase() === item.toLowerCase(),
          ).length > 0;

        if (!errorItem) {
          list.unshift({
            statusCode: statusCode || null,
            duration: duration || 10,
            id: `${btoa((Math.random() * 10000).toString())}`,
            message:
              item.toLowerCase() === 'not found'
                ? 'Произошла ошибка в запросе, пожалуйста повторите действие позже'
                : item,
          });
        }
      });
    } else if (typeof data === 'string') {
      if (data.toLowerCase() === 'not found') return;
      const errorItem =
        getState().config.notification.notification_list.filter(
          el => el.message.toLowerCase() === data.toLowerCase(),
        ).length > 0;

      if (!errorItem) {
        list.unshift({
          statusCode: statusCode || null,
          duration: duration || 10,
          id: `${btoa((Math.random() * 10000).toString())}`,
          message:
            data.toLowerCase() === 'not found'
              ? 'Произошла ошибка в запросе, пожалуйста повторите действие позже'
              : data,
        });
      }
    }

    const second_count = list.length;
    if (second_count !== count) {
      dispatch(updateNotificationList(list));
    }
  };

export const configReducer = configSlice.reducer;
