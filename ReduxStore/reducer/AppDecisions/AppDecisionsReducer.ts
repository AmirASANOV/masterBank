import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppThunkType } from '../../index';
import { addNotification } from '../ConfigReducer/ConfigReducer';
import { localLogOut } from '../userReducer/userReducer';

import { initialStateDecisions } from './AppDecisionsBlanks';
import {
  AppCreditResponse,
  BackendDecisions,
  CreditCard,
  CreditCash,
  DecisionsResponseStatus,
  DepositOfferResponse,
  LocalDecisions,
  MFOInfo,
} from './AppDecisionsTypes';

import { ApplicationApi } from '@/ApiConfig/application/ApplicationApi';

const decisions = createSlice({
  name: 'anketaResponseReducer',
  initialState: initialStateDecisions,
  reducers: {
    updateReducer(state: { [n: string]: unknown }, data: PayloadAction<LocalDecisions>) {
      const keys = Object.keys(state) as Array<keyof LocalDecisions>;
      keys.forEach(key => {
        state[key] = data.payload[key];
      });
    },
    updateFinished(state, data) {
      state.finished = data.payload;
    },
    updateKey(
      state: { [n: string]: unknown },
      data: PayloadAction<{ key: keyof LocalDecisions; value: unknown }>,
    ) {
      state[data.payload.key] = data.payload.value;
    },
    updateDepositOfferItem(state, data: PayloadAction<{ item: DepositOfferResponse }>) {
      const newObj =
        data.payload.item.product_type === 'CAR_DEPOSIT'
          ? state.deposit_car_response?.slice()
          : data.payload.item.product_type === 'ESTATE_DEPOSIT'
            ? state.deposit_estate_response?.slice()
            : [];

      if (newObj) {
        newObj?.forEach((decision, index, arr) => {
          if (
            decision.name === data.payload.item.name &&
            decision.product_type === data.payload.item.product_type
          ) {
            arr[index] = data.payload.item;
          }
        });

        if (data.payload.item.product_type === 'CAR_DEPOSIT') {
          state.deposit_car_response = newObj;
        } else if (data.payload.item.product_type === 'ESTATE_DEPOSIT') {
          state.deposit_estate_response = newObj;
        }
      }
    },
    clearState() {
      return {
        ...initialStateDecisions,
      };
    },
    clearDecisionsWithoutValidator() {
      return {
        ...initialStateDecisions,
      };
    },
  },
});

export const { clearState, clearDecisionsWithoutValidator, updateKey, updateReducer } =
  decisions.actions;

export const parseDecision =
  (value: BackendDecisions, status: DecisionsResponseStatus): AppThunkType =>
  async dispatch => {
    const result: LocalDecisions = {
      restart: false,
      response_status: status,
      decision_type: value.decision_type,
      finished: value.finished,
      show_rejected: value.show_rejects,
      user_id: value.user_id,
      mfo_timestamp: value.mfo_timestamp,
      credit_card_response: [],
      credit_cash_response: [],
      installment_card_response: [],
      mfo_response: [],
      deposit_estate_response: [],
      deposit_car_response: [],
      created: status === 'error' ? Date.now() : value.created,
    };

    let dec: AppCreditResponse = [];
    if (value.decisions && value.decision_type !== 'MFO') {
      const APPROVED = value.decisions?.filter(item => item.status === 'APPROVED') || [];
      const WAITING = value.decisions?.filter(item => item.status === 'WAITING') || [];
      const CALL = value.decisions?.filter(item => item.status === 'CALL') || [];
      const REJECTED = value.decisions?.filter(item => item.status === 'REJECTED') || [];
      const SMS = value.decisions?.filter(item => item.status === 'SMS') || [];
      dec = APPROVED?.concat(SMS, CALL, WAITING, REJECTED) || [];
    } else {
      dec = value.decisions;
    }

    dec?.forEach(item => {
      if (item.product_type === 'CREDIT_CARD') {
        const obj = item as unknown as CreditCard;
        result.credit_card_response?.push(obj);
      } else if (item.product_type === 'INSTALLMENT_CARD') {
        const obj = item as unknown as CreditCard;
        result.installment_card_response?.push(obj);
      } else if (item.product_type === 'CREDIT_CASH') {
        const obj = item as unknown as CreditCash;
        result.credit_cash_response?.push(obj);
      } else if (item.product_type === 'MFO') {
        const obj = item as unknown as MFOInfo;
        result.mfo_response?.push(obj);
      } else if (item.product_type === 'CAR_DEPOSIT') {
        const obj = item as unknown as DepositOfferResponse;
        result.deposit_car_response?.push(obj);
      } else if (item.product_type === 'ESTATE_DEPOSIT') {
        const obj = item as unknown as DepositOfferResponse;
        result.deposit_estate_response?.push(obj);
      }
    });

    if (result.mfo_response) {
      result.mfo_response = result.mfo_response.filter(
        item => item.status !== 'REJECTED',
      );
    }

    dispatch(decisions.actions.updateReducer(result));
  };

export const getDecisionStatus =
  (clearInterval?: () => void): AppThunkType =>
  async dispatch => {
    try {
      const response = await ApplicationApi.getStatus();
      dispatch(parseDecision(response.data, 'success'));
    } catch (err) {
      const error = err as AxiosError;

      if (clearInterval) clearInterval();

      if (!error.response?.status) return;

      if (error.response.status === 404) {
        if (/myApplication/gi.test(window.location.pathname)) {
          dispatch(parseDecision(error.response.data as BackendDecisions, 'empty'));
        } else {
          dispatch(parseDecision(error.response.data as BackendDecisions, 'error'));
        }
      } else if (error.response.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      } else {
        dispatch(parseDecision(error.response.data as BackendDecisions, 'error'));
      }
    }
  };

export const addStatusToDepositOffer =
  (item: DepositOfferResponse): AppThunkType =>
  async dispatch => {
    try {
      const response = await ApplicationApi.getDepositDecision(item.name);

      dispatch(addNotification([`Ваша заявка успешно отправлена в ${item.name}`]));
      dispatch(decisions.actions.updateDepositOfferItem({ item: response.data }));
    } catch (error) {
      const err = error as AxiosError;

      dispatch(decisions.actions.updateDepositOfferItem({ item }));
      dispatch(addNotification([`Ошибка при отправке заявки в ${item.name}`]));
      if (err.response?.status === 429) {
        dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
      } else if (err.response?.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      }
    }
  };

export const sendMFORequest = (): AppThunkType => async dispatch => {
  try {
    const response = await ApplicationApi.getMfoRequest();
    dispatch(parseDecision(response.data, 'success'));
  } catch (err) {
    const error = err as AxiosError;

    if (!error.response || !error.response.status) return;

    if (error.response.status === 404) {
      if (/myApplication/gi.test(window.location.pathname)) {
        dispatch(parseDecision(error.response.data as BackendDecisions, null));
      } else {
        dispatch(parseDecision(error.response.data as BackendDecisions, 'error'));
      }
    } else if (error.response.status === 429) {
      dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
    } else if (error.response.status === 401) {
      dispatch(localLogOut());
      dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
    } else {
      dispatch(parseDecision(error.response.data as BackendDecisions, 'error'));
    }
  }
};

export const sendDepositRequest = (): AppThunkType => async dispatch => {
  try {
    const response = await ApplicationApi.getDepositRequest();
    dispatch(parseDecision(response.data, 'success'));
  } catch (err) {
    const error = err as AxiosError;

    if (!error.response?.status) return;

    if (error.response.status === 404) {
      if (/myApplication/gi.test(window.location.pathname)) {
        dispatch(parseDecision(error.response.data as BackendDecisions, null));
      } else {
        dispatch(parseDecision(error.response.data as BackendDecisions, 'error'));
      }
    } else if (error.response.status === 429) {
      dispatch(addNotification('🐶🐱🐹🐭🐰🙈🦆🦀'));
    } else if (error.response.status === 401) {
      dispatch(localLogOut());
      dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
    } else {
      dispatch(parseDecision(error.response.data as BackendDecisions, 'error'));
    }
  }
};

export const decisionsReducer = decisions.reducer;
