import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppThunkType } from '../../index';
import { clearState } from '../AppDecisions/AppDecisionsReducer';
import { addNotification, setSpinner } from '../ConfigReducer/ConfigReducer';
import { localLogOut } from '../userReducer/userReducer';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { FormApi } from '@/ApiConfig/Endpoints/FormApi';
import ServiceApi from '@/ApiConfig/Endpoints/ServiceApi';
import { DataElement } from '@/Components/Inputs/Types/InputPropsType';

const initialState = {
  homepage: true,
  change_anketa_message: null,
  resendRequestAnketa: false,
};

const feedbackSlice = createSlice({
  name: 'feedbackReducer',
  initialState,
  reducers: {
    updateHomepageFeedbackStatus(state, data: PayloadAction<boolean>) {
      state.homepage = data.payload;
    },
    updateChangeAnketaMessage(state, data) {
      state.change_anketa_message = data.payload;
    },
    updateResendRequest(state, data) {
      state.resendRequestAnketa = data.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(clearState, () => ({
      ...initialState,
    }));
  },
});

export const sendFeedbackHomepage =
  (value: { message: string; phone: string }): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setSpinner({ loaderStatus: true, message: null }));
      await ServiceApi.sendFeedback(value);
      dispatch(feedbackSlice.actions.updateHomepageFeedbackStatus(false));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      }
    } finally {
      dispatch(setSpinner({ loaderStatus: false, message: null }));
    }
  };

export const ResendRequest =
  (target: Nullable<DataElement>, sum: string): AppThunkType =>
  async dispatch => {
    try {
      await FormApi.resendForm({ credit_target: target, credit_sum: sum });
      dispatch(feedbackSlice.actions.updateResendRequest(true));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 401) {
        dispatch(localLogOut());
        dispatch(addNotification('Пожалуйста, авторизуйтесь снова'));
      }
    }
  };

export const { updateHomepageFeedbackStatus } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
