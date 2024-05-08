import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { decisionsReducer } from './reducer/AppDecisions/AppDecisionsReducer';
import { configReducer } from './reducer/ConfigReducer/ConfigReducer';
import { documentReducer } from './reducer/documentReducer/documentSlice';
import { feedbackReducer } from './reducer/feedbackReducer/feedbackReducer';
import { userReducer } from './reducer/userReducer/userReducer';
import { ValidatorReducer } from './reducer/Validator/ValidatorReducer';

import { formApi } from '@/ApiConfig/FormApi/formApi';

const reducer = combineReducers({
  [formApi.reducerPath]: formApi.reducer,
  session: userReducer,
  anketaResponse: decisionsReducer,
  config: configReducer,
  feedback: feedbackReducer,
  validator: ValidatorReducer,
  document: documentReducer,
});

const devToolsEnable = process.env.NODE_ENV !== 'production';

const setupStore = () =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(formApi.middleware),
    devTools: devToolsEnable,
  });

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppThunkType = ThunkAction<void, RootState, unknown, Action<string>>;
