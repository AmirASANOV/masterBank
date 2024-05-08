import moment from 'moment';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { formApi } from '@/ApiConfig/FormApi/formApi';
import {
  BornCityRegularExpression,
  CreditSumRegularExpression,
  DepartmentCodeRegularExpression,
  incomeSumRegularExpression,
  JobTitleRegularExpression,
  NameRegularExpression,
  SeriesAndNumberPassportRegularExpression,
} from '@/Common/AppFormController/RegExp';
import { phoneGenerator } from '@/Common/AppFormHelpers/Helpers';
import { AppDispatch, AppStore } from '@/ReduxStore';
import { VActions } from '@/ReduxStore/reducer/Validator/ValidatorActions';

const validateNotFullData = (str: Nullable<string>, reg: RegExp) => {
  const string = str || '';

  return reg.test(string) ? str : null;
};

export const SendNotFullParamsInfo =
  (title: string) => (dispatch: AppDispatch, getState: AppStore['getState']) => {
    const { passport_info, work_info, additional_info, credit_parameters_info } =
      getState().validator;
    const getRequest = () => {
      let request: Record<'step' | 'step_data', unknown>;
      if (title === 'credit_parameters_info') {
        request = {
          step: 'CREDIT_PARAMETERS_STEP',
          step_data: {
            ...VActions.packageData.credit_parameters_info(credit_parameters_info, false),
            name: validateNotFullData(
              credit_parameters_info.name.result.value,
              NameRegularExpression,
            ),
            surname: validateNotFullData(
              credit_parameters_info.surname.result.value,
              NameRegularExpression,
            ),
            patronymic: validateNotFullData(
              credit_parameters_info.patronymic.result.value,
              NameRegularExpression,
            ),
            credit_sum: validateNotFullData(
              credit_parameters_info.credit_sum.result.value,
              CreditSumRegularExpression,
            ),
            phone_number: phoneGenerator(),
            email: `${phoneGenerator()}@mail.ru`,
            deposit_car: null,
          },
        };
        return request;
      }
      if (title === 'work_info') {
        request = {
          step: 'WORK_STEP',
          step_data: {
            ...VActions.packageData.work_info(work_info, false),
            job_title: validateNotFullData(
              work_info.job_title.result.value,
              JobTitleRegularExpression,
            ),
            phone_work: phoneGenerator(),
            monthly_income: validateNotFullData(
              work_info.monthly_income.result.value &&
                work_info.monthly_income.result.value.replace(/\s/g, ''),
              incomeSumRegularExpression,
            ),
          },
        };
        return request;
      }
      if (title === 'additional_info') {
        request = {
          step: 'ADDITIONAL_INFO_STEP',
          step_data: VActions.packageData.additional_info(additional_info, false),
        };
        return request;
      }
      request = {
        step: 'PASSPORT_STEP',
        step_data: {
          ...VActions.packageData.passport_info(passport_info, true),
          series_and_number: validateNotFullData(
            passport_info.series_and_number.result.value,
            SeriesAndNumberPassportRegularExpression,
          ),
          born_city: validateNotFullData(
            passport_info.born_city.result.value,
            BornCityRegularExpression,
          ),
          department_code: validateNotFullData(
            passport_info.department_code.result.value,
            DepartmentCodeRegularExpression,
          ),
          date_birthday: moment(
            passport_info.date_birthday.result.value,
            'DD-MM-YYYY',
          ).isValid()
            ? passport_info.date_birthday.result.value
            : null,
          issued_date: moment(
            passport_info.issued_date.result.value,
            'DD-MM-YYYY',
          ).isValid()
            ? passport_info.issued_date.result.value
            : null,
        },
      };
      return request;
    };

    const request = getRequest();

    if (window.location.pathname === '/') {
      return;
    }

    dispatch(formApi.endpoints.sendInfoPartialData.initiate(request)).unwrap();
  };
