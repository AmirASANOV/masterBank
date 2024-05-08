import moment from 'moment';

import {
  VAddrTouchedStatuses,
  VCheckActions,
  VCreditParameters,
  VDataValidationReducer,
  VHypothec,
  VItem,
  VPassportInfo,
  VStatus,
  VWorkAddrStatuses,
  VWorkInfo,
} from './Types';

import { ClearAddrState } from '@/ApiConfig/DadataApi/DadataTest';
import {
  checkPhone,
  checkText,
  resetMask,
} from '@/Common/AppFormController/ControllersFunc';
import {
  BornCityRegularExpression,
  ConfirmCodeRegularExpression,
  DepartmentCodeRegularExpression,
  JobTitleRegularExpression,
  MobilePhoneRegularExpression,
  NameRegularExpression,
  OnlyIntegerRegularExpression,
  SeriesAndNumberPassportRegularExpression,
} from '@/Common/AppFormController/RegExp';
import {
  childrenData,
  creditTarget,
  EducationData,
  employmentType,
  expList,
  familyStatusData,
  havingCarData,
  havingRealEstateData,
  apartmentHypothecType,
  regionHypothecData,
  workActivityTypeData,
} from '@/Common/AppFormHelpers/DropdownLists';
import {
  getMaxSum,
  getMinSum,
  nameArr,
  phoneGenerator,
  setSpaceOfNumber,
} from '@/Common/AppFormHelpers/Helpers';
import { secretKeyArray } from '@/Common/AppFormHelpers/Symbols';
import { defaultWhiteListPatronymic } from '@/Components/Inputs/DadataInputs';
import { generatedYears, monthList } from '@/Components/Inputs/OtherInputs';
import { DataElement } from '@/Components/Inputs/Types/InputPropsType';
import { App } from '@/ProjectTypes/AppTypes';

export const VActions: VCheckActions = {
  hypothec_info: {
    checkRegion(state, data) {
      const params = state.region;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = regionHypothecData.some(el => el.value === value);
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message: status === 'incorrect' ? 'Выберите регион из выпадающего списка' : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkApartmentType(state, data) {
      const params = state.apartment_type;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value && apartmentHypothecType.some(el => el.value === value);
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message:
            status === 'incorrect' ? 'Выберите тип объекта из выпадающего списка' : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkSum(state, data) {
      const params = state.sum;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value && value >= 300000 && value <= 200000000;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message:
            status === 'incorrect' && !value
              ? 'Введите cумму кредита'
              : value && value < 300000
                ? 'Сумма должна быть от 300000 и до 200 000 000'
                : value && value > 200000000
                  ? 'Сумма не должна превышать 200 000 000'
                  : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkCreditTerm(state, data) {
      const params = state.credit_term;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value && value <= 25;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message:
            status === 'incorrect' && !value
              ? 'Введите срок кредита'
              : !!value && value > 25
                ? 'Срок кредита не должен превышать 25 лет'
                : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkDeposit(state, data) {
      const params = state.deposit;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message: status === 'incorrect' ? 'Введите первоначальный взнос' : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkFullName(state, data) {
      const params = state.full_name;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value && value.trim().split(' ').length === 3;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message: status === 'incorrect' ? 'Введите кореектное ФИО' : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkPhoneNumber(state, data) {
      const params = state.phone_number;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = checkPhone(
        data.value,
        params.config.required,
        'return_phone_without_mask',
        '+7-(___)-___-__-__',
        data.touched,
        (params.config.disableValues as string[]) || [],
      );
      const status: VStatus = VActions.helpers.getValidatorStatus(result.valid, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value: resetMask(value),
          message: status === 'incorrect' ? 'Введите корректный номер телефона' : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    build(state, data) {
      const { type } = data;

      const newState: VHypothec = {
        region: VActions.hypothec_info.checkRegion(state, {
          value: data.value.region,
          touched: type === 'check' ? true : !!data.value.region,
        }),
        apartment_type: VActions.hypothec_info.checkApartmentType(state, {
          value: data.value.apartment_type,
          touched: type === 'check' ? true : !!data.value.apartment_type,
        }),
        sum: VActions.hypothec_info.checkSum(state, {
          value: data.value.sum,
          touched: type === 'check' ? true : !!data.value.sum,
        }),
        credit_term: VActions.hypothec_info.checkCreditTerm(state, {
          value: data.value.credit_term,
          touched: type === 'check' ? true : !!data.value.credit_term,
        }),
        deposit: VActions.hypothec_info.checkDeposit(state, {
          value: data.value.deposit,
          touched: type === 'check' ? true : !!data.value.deposit,
        }),
        full_name: VActions.hypothec_info.checkFullName(state, {
          value: data.value.full_name,
          touched: type === 'check' ? true : !!data.value.full_name,
        }),
        phone_number: VActions.hypothec_info.checkPhoneNumber(state, {
          value: data.value.phone_number,
          touched: type === 'check' ? true : !!data.value.phone_number,
        }),
        errors: [],
      };
      newState.errors = VActions.helpers.getErrorList<VHypothec>(newState);
      return newState;
    },
  },
  credit_parameters_info: {
    checkGender(state, data) {
      const params = state.gender;
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value && value?.value !== 'UNKNOWN';
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value,
          message: status === 'incorrect' ? 'Выберите пол из выпадающего списка' : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkAgreement(state, data) {
      const params = state.agreement;
      const value = data.value?.state;
      const strict = VActions.helpers.askStrict(data, params);
      const result = !!value;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value: data.value,
          message:
            status === 'incorrect'
              ? 'Чтобы продолжить заполнение анкеты, вам нужно согласиться с правилами обработки информации'
              : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkDepositCar(state, data) {
      const params = state.deposit_car;
      const strict = VActions.helpers.askStrict(data, params);
      const value = Number(resetMask(data.value));
      const minSum = 10000;
      const maxSum = 7000000;
      const result = !!value && value <= maxSum && value >= minSum;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: params.result.fieldName,
          value: String(value === 0 ? '' : value),
          message:
            status === 'incorrect' && value > maxSum
              ? `Максимальная сумма ${maxSum} руб.`
              : status === 'incorrect' && value < minSum
                ? `Минимальная сумма ${minSum} руб.`
                : '',
          modified: Date.now(),
          status,
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkCreditSum(state, data, product) {
      const params = state.credit_sum;
      const strict = VActions.helpers.askStrict(data, params);
      const value = Number(resetMask(data.value));
      const minSum = getMinSum(product?.value || 'credit_cash') || 10000;
      const maxCarCreditSum = 7000000;
      const result =
        product?.value === 'car_credit'
          ? !!(value && value <= maxCarCreditSum && value >= 10000)
          : !!(value && value >= minSum);
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          fieldName: VActions.helpers.getCreditSumFieldName(product),
          value: String(value === 0 ? '' : value),
          status,
          message:
            status === 'incorrect' && value < minSum
              ? `Укажите сумму более ${minSum} руб.`
              : status === 'incorrect' &&
                  product?.value === 'car_credit' &&
                  value > maxCarCreditSum
                ? `Максимальная сумма ${maxCarCreditSum} руб.`
                : '',
          modified: Date.now(),
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkEmailState(state, data) {
      const params = state.email;
      const strict = VActions.helpers.askStrict(data, params);
      const value = data.value || '';
      const result = !!data.value;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...data,
          value,
          status,
          fieldName: params.result.fieldName,
          message: status === 'incorrect' ? 'Укажите правильный email' : '',
          modified: Date.now(),
        },
        config: {
          ...params.config,
          strict,
        },
      };
    },
    checkUserPhone(state, data, step, field, message) {
      const params: VItem<string> = state;
      const strict = VActions.helpers.askStrict(data, params);
      const result = checkPhone(
        data.value,
        params?.config.required,
        'return_phone_without_mask',
        '+7-(___)-___-__-__',
        data.touched,
        (params?.config.disableValues as string[]) || [],
      );
      const status: VStatus = VActions.helpers.getValidatorStatus(result.valid, strict);
      return {
        result: {
          fieldName: params?.result.fieldName,
          modified: Date.now(),
          status,
          message:
            status === 'incorrect' ? message || 'Указан невалидный номер телефона.' : '',
          ...data,
        },
        config: {
          ...params?.config,
          strict,
        },
      };
    },
    checkCreditTarget(state, data) {
      const params: VItem<DataElement<App.CreditProduct>> = state.credit_target;
      const strict: boolean = VActions.helpers.askStrict(data, params);
      const values: Array<string> = creditTarget.map(item => String(item.value));
      const result: boolean = data.value
        ? values.includes(String(data.value.value))
        : false;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          fieldName: params?.result.fieldName,
          modified: Date.now(),
          status,
          message: status === 'incorrect' ? 'Выберите кредитный продукт из списка' : '',
          ...data,
        },
        config: {
          ...params?.config,
          strict,
        },
      };
    },
    checkUserInitials(state, data) {
      if (data.field) {
        const pattern = NameRegularExpression;
        const params = state;
        const strict = VActions.helpers.askStrict(data, params);
        const result = data.value ? pattern.test(data.value?.trim() || '') : false;
        const status = VActions.helpers.getValidatorStatus(result, strict);
        const { fieldName } = params.result;
        const resultFieldName =
          fieldName === 'Ваша фамилия' ? 'вашу фамилию' : fieldName.toLowerCase();
        const resultMessage =
          status === 'incorrect'
            ? `Укажите ${resultFieldName}. Допускаются: кириллица, пробел, дефис, тире`
            : '';

        return {
          result: {
            fieldName: params.result.fieldName,
            modified: Date.now(),
            status,
            message: resultMessage,
            touched: data.touched,
            value: data.value?.trim() || data.value,
          },
          config: {
            ...state.config,
            strict,
            required: state.config.required,
            pattern: String(pattern),
            field: data.field,
          },
        };
      }
      throw Error(
        'При изменении полей - ФИО, не указан параметр field, являющийся обязательным для использования checkUserInitials',
      );
    },
    build(state, data) {
      const { type } = data;

      const newState: VCreditParameters = {
        credit_target: VActions.credit_parameters_info.checkCreditTarget(state, {
          value: data.value.credit_target || {
            value: 'credit_card',
            title: 'Кредитная карта',
          },
          touched: type === 'check' ? true : !!data.value?.credit_target,
        }),
        name: VActions.credit_parameters_info.checkUserInitials(state.name, {
          value: data.value.name,
          touched: type === 'check' ? true : !!data.value.name,
          field: 'name',
        }),
        surname: VActions.credit_parameters_info.checkUserInitials(state.surname, {
          value: data.value.surname,
          touched: type === 'check' ? true : !!data.value.surname,
          field: 'surname',
        }),
        patronymic: VActions.credit_parameters_info.checkUserInitials(state.patronymic, {
          value: data.value.patronymic,
          touched: type === 'check' ? true : !!data.value.patronymic,
          field: 'patronymic',
        }),
        phone_number: VActions.credit_parameters_info.checkUserPhone(
          state.phone_number,
          {
            value: data.value.phone_number,
            touched: type === 'check' ? true : !!data.value.phone_number,
          },
          'credit_parameters_info',
          'phone_number',
          'Указан некорректный номер',
        ),
        credit_sum: VActions.credit_parameters_info.checkCreditSum(
          state,
          {
            value: data.value.credit_sum,
            touched: type === 'check' ? true : !!data.value.credit_sum,
          },
          data.value.credit_target,
        ),
        agreement: VActions.credit_parameters_info.checkAgreement(state, {
          value: {
            state: data.value.checked,
            pathName: state.agreement.result.value?.pathName || '/',
            description: state.agreement.result.value?.description || '',
          },
          touched: true,
        }),
        gender: VActions.credit_parameters_info.checkGender(state, {
          value: data.value.gender,
          touched: type === 'check' ? true : !!data.value.gender,
        }),
        email: VActions.credit_parameters_info.checkEmailState(state, {
          value: data.value.email,
          touched: type === 'check' ? true : !!data.value.email,
        }),
        deposit_car: VActions.credit_parameters_info.checkDepositCar(state, {
          value: data.value.deposit_car,
          touched: type === 'check' ? true : !!data.value.deposit_car,
        }),
        email_generated:
          state.email.result.value === `${state.phone_number.result.value}@mail.ru`,
        errors: [],
      };
      newState.errors = VActions.helpers.getErrorList<VCreditParameters>(newState);
      return newState;
    },
  },
  work_info: {
    checkOrganization(state, data) {
      const func = VActions.helpers;
      const strict: boolean = func.askStrict(data, state);
      const checkField: Array<keyof App.OrganizationData> = ['inn', 'okved'];
      const notApprovedFields: Array<keyof App.OrganizationData> = [];
      const resultLength: Array<keyof App.OrganizationData | undefined> = checkField
        .map(item => {
          if (data.value && data.value[item]) {
            return item;
          }
          notApprovedFields.push(item);

          return undefined;
        })
        .filter(item => !!item);
      const result: boolean = data.value
        ? resultLength.length === checkField.length
        : false;
      const status: VStatus = func.getValidatorStatus(result, strict);
      const message: { [n: string]: string } = {
        inn: 'У компании отсутствует ИНН',
        okved: 'У компании отсутствует основной вид деятельности',
        none: 'Укажите корректное название организации, в которой вы работаете',
      };

      const getCustomError = () => {
        if (notApprovedFields.length > 0 && !!data.value) {
          let error = '';
          notApprovedFields.forEach(item => {
            error += `${message[item]}. `;
          });
          return error;
        }
        return message.none;
      };

      return {
        result: {
          fieldName: state.result.fieldName,
          modified: Date.now(),
          status,
          message: status === 'incorrect' ? getCustomError() : '',
          ...data,
        },
        config: {
          ...state.config,
          strict,
        },
      };
    },
    checkJobTitle(state, data) {
      const pattern = JobTitleRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const result = data.value ? pattern.test(data.value || '') : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          fieldName: state.result.fieldName,
          modified: Date.now(),
          status,
          message:
            status === 'incorrect'
              ? `Поле ${state.result.fieldName.toLowerCase()} заполнено не корректно. Допускаются: цифры, кириллица, латиница, пробел, дефис, апостроф.`
              : '',
          touched: data.touched,
          value: data.value,
        },
        config: {
          ...state.config,
          strict,
          required: state.config.required,
          pattern: String(pattern),
          field: data.field,
        },
      };
    },
    checkMonthlyIncome(state, data) {
      const pattern = OnlyIntegerRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const value = resetMask(data.value);
      const minSum: number = 10000;
      const maxSum: number = 1000000;
      const result = data.value
        ? pattern.test(value) && Number(value) >= minSum && Number(value) <= maxSum
        : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          fieldName: state.result.fieldName,
          modified: Date.now(),
          status,
          message:
            status === 'incorrect'
              ? `Поле ${state.result.fieldName.toLowerCase()} заполнено не корректно.
            Допускаются значения от ${setSpaceOfNumber(
              String(minSum),
            )}р. до ${setSpaceOfNumber(String(maxSum))}р.`
              : '',
          touched: data.touched,
          value: data.value,
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };
    },
    build(mainState, data) {
      const state = mainState.work_info;
      const emp = data.value.employment_type?.value;
      const work = emp ? (emp !== 'WORKACTIVITY.7' ? 'work' : 'dont_work') : null;
      const check = data.type === 'check';
      const result: VWorkInfo = {
        work_address: VActions.address.checkAddress(
          state.work_address,
          {
            value: data.value.work_address,
            touched: check,
          },
          check,
        ),
        work,
        organization_info: VActions.work_info.checkOrganization(state.organization_info, {
          value: data.value.organization_info,
          touched: check,
        }),
        start_work: {
          month: VActions.universalActions.checkDropdownValue(
            state.start_work.month,
            {
              value: data.value.start_work?.month || null,
              touched: check,
            },
            monthList,
          ),
          year: VActions.universalActions.checkDropdownValue(
            state.start_work.year,
            {
              value: data.value.start_work?.year || null,
              touched: check,
            },
            generatedYears(new Date(0).getFullYear()),
          ),
        },
        employment_type: VActions.universalActions.checkDropdownValue(
          state.employment_type,
          {
            value: data.value.employment_type || null,
            touched: check,
          },
          employmentType,
        ),
        expirience: VActions.universalActions.checkDropdownValue(
          state.expirience,
          {
            value: data.value.expirience || null,
            touched: check,
          },
          expList,
        ),
        phone_work: VActions.universalActions.checkContactPhone(
          state.phone_work,
          {
            value: data.value.phone_work || null,
            touched: check,
          },
          [mainState.credit_parameters_info.phone_number.result.value || ''],
        ),
        job_title: VActions.work_info.checkJobTitle(state.job_title, {
          value: data.value.job_title || null,
          touched: check,
        }),
        monthly_income: VActions.work_info.checkMonthlyIncome(state.monthly_income, {
          value: data.value.monthly_income || null,
          touched: check,
        }),
        work_activity_type: VActions.universalActions.checkDropdownValue(
          state.work_activity_type,
          {
            value: data.value.work_activity_type || null,
            touched: check,
          },
          workActivityTypeData,
        ),
        errors: [],
      };

      result.errors = VActions.helpers.getErrorList<VWorkInfo>(result);

      return result;
    },
  },
  additional_info: {
    build(state, data) {
      const touched = data.type === 'check';
      const info = data.value;
      const current = state.additional_info;

      const newState: VDataValidationReducer['additional_info'] = {
        education: VActions.universalActions.checkDropdownValue(
          current.education,
          {
            value: info.education,
            touched,
          },
          EducationData,
        ),
        family_status: VActions.universalActions.checkDropdownValue(
          current.family_status,
          {
            value: info.family_status,
            touched,
          },
          familyStatusData,
        ),
        children: VActions.universalActions.checkDropdownValue(
          current.children,
          {
            value: info.children,
            touched,
          },
          childrenData,
        ),
        having_car: VActions.universalActions.checkDropdownValue(
          current.having_car,
          {
            value: info.having_car,
            touched,
          },
          havingCarData,
        ),
        having_real_estate: VActions.universalActions.checkDropdownValue(
          current.having_real_estate,
          {
            value: info.having_real_estate,
            touched,
          },
          havingRealEstateData,
        ),
        show_confirm: state.additional_info.show_confirm,
        sms_code: VActions.helpers.checkConfirmCode(current.sms_code, {
          value: info.sms_code,
          touched,
        }),
        errors: [],
      };

      newState.errors = VActions.helpers.getErrorList(newState);

      return newState;
    },
  },
  passport_info: {
    checkDateBirthday(state, data) {
      const { value } = data;
      const strict = VActions.helpers.askStrict(data, state);
      const maxDate = moment().add(-18, 'years').format('x');
      const minDate = moment().add(-100, 'years').format('x');
      const isValid = moment(value, 'DD-MM-YYYY').isValid();
      const tsDate = moment(value, 'DD-MM-YYYY').format('x');
      const result = isValid
        ? Number(tsDate) <= Number(maxDate) && Number(tsDate) >= Number(minDate)
        : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      const messageMax = moment().add(-18, 'years').locale('ru').format('DD-MM-YYYY');
      const messageMin = moment().add(-100, 'years').locale('ru').format('DD-MM-YYYY');
      return {
        result: {
          ...state.result,
          value: moment(data.value, 'DD-MM-YYYY').format('DD-MM-YYYY'),
          status,
          message:
            status === 'incorrect'
              ? `Укажите дату рождения от ${messageMax}г. до ${messageMin}г.`
              : '',
          modified: Date.now(),
          touched: data.touched,
        },
        config: {
          ...state.config,
          strict,
          pattern: 'DD-MM-YYYY',
        },
      };
    },
    checkIssuedDate(state, data, dateBirthday) {
      const dateBirthdayIsValid = moment(dateBirthday, 'DD-MM-YYYY').isValid();
      const issuedDateValid = moment(data.value, 'DD-MM-YYYY').isValid();

      if ((!dateBirthdayIsValid || !issuedDateValid) && data.touched) {
        return {
          result: {
            ...state.result,
            value: data.value,
            touched: data.touched,
            status: 'incorrect',
            message: !dateBirthdayIsValid
              ? 'Пожалуйста, укажите дату рождения, а затем вернитесь к этому полю.'
              : !issuedDateValid
                ? `Пожалуйста укажите корректную дату выдачи паспорта в формате ДД-ММ-ГГГГ`
                : '',
            modified: Date.now(),
          },
          config: {
            ...state.config,
            strict: true,
            pattern: 'DD-MM-YYYY',
          },
        };
      }
      const dB = moment(dateBirthday, 'DD-MM-YYYY');
      const howOld = Math.floor(moment().diff(dB.format('YYYY-MM-DD'), 'years', true));
      const timeFrames = {
        min: howOld >= 14 && howOld < 20 ? 14 : howOld >= 20 && howOld < 45 ? 20 : 45,
        max: howOld >= 14 && howOld < 20 ? 20 : howOld >= 20 && howOld < 45 ? 45 : 100,
      };

      const timeFramesWithDB = {
        minX: moment(dateBirthday, 'DD-MM-YYYY')
          .add(timeFrames.min, 'years')
          .add(1, 'days')
          .format('x'),
        maxDate: moment().format('DD-MM-YYYY'),
        minDate: moment(dateBirthday, 'DD-MM-YYYY')
          .add(timeFrames.min, 'years')
          .add(1, 'days')
          .format('DD-MM-YYYY'),
        maxX: moment().format('x'),
      };

      const issuedDate = moment(data.value, 'DD-MM-YYYY').format('x');
      const strict = VActions.helpers.askStrict(data, state);
      const result =
        Number(issuedDate) >= Number(timeFramesWithDB.minX) &&
        Number(issuedDate) < Number(timeFramesWithDB.maxX);
      const status = VActions.helpers.getValidatorStatus(result, strict);

      const res = {
        result: {
          ...state.result,
          value: data.value
            ? moment(data.value, 'DD-MM-YYYY').format('DD-MM-YYYY')
            : null,
          modified: Date.now(),
          status,
          touched: data.touched,
          message:
            status === 'incorrect'
              ? `Дата выдачи паспорта должна быть от ${timeFramesWithDB.minDate}г. до ${timeFramesWithDB.maxDate}г.`
              : '',
        },
        config: {
          ...state.config,
          strict,
        },
      };

      return res;
    },
    checkBornCity(state, data) {
      const pattern = BornCityRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const result = data.value ? pattern.test(data.value?.trim()) : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...state.result,
          modified: Date.now(),
          value:
            data.value &&
            data.value
              .replace(/^\s+/, '')
              .replace(/\s+$/, '')
              .replace(/(\.)+$/, '.'),
          status,
          message:
            status === 'incorrect'
              ? 'Укажите место рождения как в паспорте. Допускается: кириллица, точка, пробел, дефис.'
              : '',
          touched: data.touched,
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };
    },
    checkSeriesAndNumber(state, data) {
      const pattern = SeriesAndNumberPassportRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const result = data.value ? pattern.test(data.value) : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...state.result,
          modified: Date.now(),
          value: data.value,
          status,
          message:
            status === 'incorrect'
              ? `Укажите корректную серию и номер паспорта. Допускаются только цифры.`
              : '',
          touched: data.touched,
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };
    },
    checkDepartmentCode(state, data) {
      const pattern = DepartmentCodeRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const result = data.value ? pattern.test(data.value) : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          ...state.result,
          modified: Date.now(),
          value: data.value,
          status,
          message:
            status === 'incorrect'
              ? `Укажите корректный код подразделения, как в паспорте.`
              : '',
          touched: data.touched,
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };
    },
    checkIssuedBy(state, data) {
      const pattern = DepartmentCodeRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const result = checkText(
        data.value || '',
        state.config.required,
        'rus+num',
        2,
        256,
        data.touched,
        'text',
      );
      const status = VActions.helpers.getValidatorStatus(result.valid, strict);
      return {
        result: {
          ...state.result,
          modified: Date.now(),
          value: data.value,
          status,
          message:
            status === 'incorrect'
              ? result.message || `Укажите кем выдан паспорт, как в паспорте.`
              : '',
          touched: data.touched,
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };
    },
    build(state, data) {
      const current = state.passport_info;
      const touched = data.type === 'check';
      const result: VPassportInfo = {
        equalAddr: data.value.checked,
        errors: [],
        date_birthday: this.checkDateBirthday(current.date_birthday, {
          value: data.value.date_birthday,
          touched,
        }),
        born_city: this.checkBornCity(current.born_city, {
          value: data.value.born_city,
          touched,
        }),
        series_and_number: this.checkSeriesAndNumber(current.series_and_number, {
          value: data.value.series_and_number,
          touched,
        }),
        issued_date: this.checkIssuedDate(
          current.issued_date,
          {
            value: data.value.issued_date,
            touched,
          },
          data.value.date_birthday || '',
        ),
        department_code: this.checkDepartmentCode(current.department_code, {
          value: data.value.department_code,
          touched,
        }),
        issued_by: this.checkIssuedBy(current.issued_by, {
          value: data.value.issued_by,
          touched,
        }),
        registration_address: VActions.address.checkAddress(
          current.registration_address,
          {
            value: data.value.registration_address,
            touched,
          },
          touched,
        ),
        fact_address: VActions.address.checkAddress(
          current.fact_address,
          {
            value: data.value.fact_address,
            touched,
          },
          touched,
        ),
        contact_name: VActions.credit_parameters_info.checkUserInitials(
          current.contact_name,
          {
            value: data.value?.contact_name || null,
            touched,
            field: 'contact_name',
          },
        ),
        contact_phone: VActions.universalActions.checkContactPhone(
          current.contact_phone,
          {
            value: data.value?.contact_phone || null,
            touched,
          },
          [
            state.credit_parameters_info.phone_number.result.value || '',
            state.work_info.phone_work.result.value || '',
          ].filter(item => !!item),
        ),
      };

      result.errors = VActions.helpers.getErrorList(result);

      return result;
    },
  },
  helpers: {
    translateEmployment(data) {
      if (data === 'WORKACTIVITY.1') {
        return 'employment';
      }
      if (data === 'WORKACTIVITY.2') {
        return 'individual_entrepreneur';
      }
      if (data === 'WORKACTIVITY.3') {
        return 'unofficial_work';
      }
      if (data === 'WORKACTIVITY.4') {
        return 'entrepreneur';
      }
      if (data === 'WORKACTIVITY.7') {
        return 'standing';
      }

      return 'employment';
    },
    checkConfirmCode(state, data) {
      const pattern = ConfirmCodeRegularExpression;
      const strict = VActions.helpers.askStrict(data, state);
      const value = resetMask(data.value);
      const result = data.value
        ? pattern.test(value) && data.touched
          ? !!data.value
          : true
        : false;
      const status = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          fieldName: state.result.fieldName,
          modified: Date.now(),
          status,
          message:
            status === 'incorrect' && data.touched
              ? `Некорректный код подтверждения`
              : '',
          touched: data.touched,
          value: data.value,
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };
    },
    askCreditProduct(): DataElement<App.CreditProduct> {
      const path = window.location.pathname;
      const product = path.split('/').filter(item => item !== '')[2] || 'credit_card';
      return creditTarget.filter(item => item.value === product)[0];
    },
    packageNotification(stateErrors) {
      const messages = stateErrors.map(item => `${item.result.fieldName}`);

      return `Допущены ошибки в следующих полях: ${messages.join(
        ', ',
      )}. Исправьте ошибки и продолжите заполнение анкеты.`;
    },
    askStrict(data, params) {
      return data.touched && (params?.config.required || !!data.value);
    },
    getValidatorStatus(result, strict) {
      if (result) {
        return 'correct';
      }
      if (!result && !strict) {
        return 'insipid';
      }
      if (!result && strict) {
        return 'incorrect';
      }
      return 'insipid';
    },
    getErrorList(state) {
      const errors: Array<VItem<string>> = [];
      for (const key in state) {
        const k = key as keyof typeof state;
        /* eslint-disable */
        const item: any = state[k];
        if (
          typeof item === 'object' &&
          item?.result &&
          item?.result?.status === 'incorrect'
        ) {
          errors.push(item);
        } else {
          for (const subKey in item) {
            const subItem = item[subKey];
            if (
              typeof subItem === 'object' &&
              subItem?.result &&
              subItem?.result?.status === 'incorrect'
            ) {
              errors.push(subItem);
            }
          }
        }
      }

      return errors;
    },
    getCreditSumFieldName(data) {
      if (data?.value === 'credit_card' || data?.value === 'installment_card') {
        return 'Желаемый кредитный лимит, руб.';
      }
      return 'Сумма кредита, руб.';
    },
    setLastModifiedFields(field) {
      return {
        lastModified: field,
        lastTimeStamp: Date.now(),
      };
    },
    getInputStatus(status) {
      if (status === 'correct') return true;
      if (status === 'incorrect') return false;
      if (status === 'insipid') return undefined;
    },
  },
  universalActions: {
    checkDropdownValue(state, data, checkArray) {
      const strict: boolean = VActions.helpers.askStrict(data, state);
      const values: Array<string> = checkArray.map(item => String(item.value));
      const result: boolean = data.value
        ? values.includes(String(data.value.value))
        : false;
      const status: VStatus = VActions.helpers.getValidatorStatus(result, strict);
      return {
        result: {
          fieldName: state.result.fieldName,
          modified: Date.now(),
          status,
          message:
            status === 'incorrect' ? `Выберите ${state.result.fieldName} из списка` : '',
          ...data,
        },
        config: {
          ...state.config,
          strict,
        },
      };
    },
    checkContactPhone(state, data, disabledValues) {
      const pattern = MobilePhoneRegularExpression;
      const strict = VActions.helpers.askStrict(
        {
          value: resetMask(data.value) === '7' ? null : resetMask(data.value),
          touched: data.touched,
        },
        state,
      );

      const value = resetMask(data.value);
      const result = value
        ? pattern.test(value) && disabledValues.every(item => resetMask(item) !== value)
        : false;
      const status: VStatus = 'correct';
      const result2 = {
        result: {
          fieldName: state.result.fieldName,
          modified: Date.now(),
          status,
          message: '',
          touched: data.touched,
          value: resetMask(data.value) === '7' ? null : resetMask(data.value),
        },
        config: {
          ...state.config,
          strict,
          pattern: String(pattern),
        },
      };

      return result2;
    },
  },
  address: {
    checkAddress(state, data, checkAll) {
      const { value } = data;
      const func = VActions.helpers;
      const touchedStatuses: VAddrTouchedStatuses = {
        full_address:
          checkAll ||
          state.full_address.result.touched ||
          data.field === 'full_address' ||
          !!value?.full_address?.value,
        region:
          checkAll ||
          state.region.result.touched ||
          data.field === 'region' ||
          !!value?.region?.value,
        area:
          checkAll ||
          state.area.result.touched ||
          data.field === 'area' ||
          !!value?.area?.value,
        city:
          checkAll ||
          state.city.result.touched ||
          data.field === 'city' ||
          !!value?.city?.value,
        settlement:
          checkAll ||
          state.settlement.result.touched ||
          data.field === 'settlement' ||
          !!value?.settlement?.value,
        street:
          checkAll ||
          state.street.result.touched ||
          data.field === 'street' ||
          !!value?.street?.value,
        house:
          checkAll ||
          state.house.result.touched ||
          data.field === 'house' ||
          !!value?.house?.value,
        flat:
          checkAll ||
          state.flat.result.touched ||
          data.field === 'flat' ||
          !!value?.flat?.value,
      };

      const statuses: VWorkAddrStatuses = {
        full_address: func.getValidatorStatus(
          !!value?.full_address?.value,
          func.askStrict(
            {
              value: value?.full_address?.value,
              touched: touchedStatuses.full_address,
            },
            state.full_address,
          ),
        ),
        region: func.getValidatorStatus(
          !!value?.region?.value,
          func.askStrict(
            {
              value: value?.region?.value,
              touched: touchedStatuses.region,
            },
            state.region,
          ),
        ),
        area: func.getValidatorStatus(
          !!value?.area?.value,
          func.askStrict(
            {
              value: value?.area?.value,
              touched: touchedStatuses.area,
            },
            state.area,
          ),
        ),
        city: func.getValidatorStatus(
          !!value?.city?.value,
          func.askStrict(
            {
              value: value?.city?.value,
              touched: touchedStatuses.city,
            },
            state.city,
          ),
        ),
        settlement: func.getValidatorStatus(
          !!value?.settlement?.value,
          func.askStrict(
            {
              value: value?.settlement?.value,
              touched: touchedStatuses.settlement,
            },
            state.settlement,
          ),
        ),
        street: func.getValidatorStatus(
          !!value?.street?.value,
          func.askStrict(
            {
              value: value?.street?.value,
              touched: touchedStatuses.street,
            },
            state.street,
          ),
        ),
        house: func.getValidatorStatus(
          !!value?.house?.value,
          func.askStrict(
            {
              value: value?.house?.value,
              touched: touchedStatuses.house,
            },
            state.house,
          ),
        ),
        flat: func.getValidatorStatus(
          !!value?.flat?.value,
          func.askStrict(
            {
              value: value?.flat?.value,
              touched: touchedStatuses.flat,
            },
            state.flat,
          ),
        ),
      };

      return {
        ...state,
        full_address: {
          result: {
            ...state.full_address.result,
            modified: Date.now(),
            value: !value?.city && !value?.region ? null : value?.full_address || null,
            status: statuses.full_address,
            touched: touchedStatuses.full_address,
            message: '',
          },
          config: {
            ...state.full_address.config,
          },
        },
        region: {
          result: {
            ...state.region.result,
            modified: Date.now(),
            value: value?.region || null,
            status: func.getValidatorStatus(
              !!value?.region?.value,
              func.askStrict(data, state.region),
            ),
            touched: state.region.result.touched || !!data.value?.region?.value,
            message: '',
          },
          config: {
            ...state.region.config,
          },
        },
        city: {
          result: {
            ...state.city.result,
            modified: Date.now(),
            value: value?.city || null,
            status: statuses.city,
            touched: touchedStatuses.city,
            message:
              statuses.city === 'incorrect'
                ? 'Укажите город и выберите его из выпадающего списка'
                : '',
          },
          config: {
            ...state.city.config,
          },
        },
        settlement: {
          result: {
            ...state.settlement.result,
            modified: Date.now(),
            value: value?.settlement || null,
            status: statuses.settlement,
            touched: touchedStatuses.settlement,
            message:
              statuses.settlement === 'incorrect'
                ? 'Укажите населенный пункт и выберите его из выпадающего списка'
                : '',
          },
          config: {
            ...state.settlement.config,
          },
        },
        street: {
          result: {
            ...state.street.result,
            modified: Date.now(),
            value: value?.street || null,
            status: statuses.street,
            touched: touchedStatuses.street,
            message:
              statuses.street === 'incorrect'
                ? 'Укажите улицу и выберите её из выпадающего списка'
                : '',
          },
          config: {
            ...state.street.config,
          },
        },
        house: {
          result: {
            ...state.house.result,
            modified: Date.now(),
            value: value?.house || null,
            status: statuses.house,
            touched: touchedStatuses.house,
            message:
              statuses.house === 'incorrect'
                ? 'Укажите дом и выберите его из выпадающего списка'
                : '',
          },
          config: {
            ...state.house.config,
          },
        },
        flat: {
          result: {
            ...state.flat.result,
            modified: Date.now(),
            value: value?.flat || null,
            status: statuses.flat,
            touched: touchedStatuses.flat,
            message:
              statuses.flat === 'incorrect'
                ? 'Выберите значение из выпадающего списка'
                : '',
          },
          config: {
            ...state.flat.config,
          },
        },
      };
    },
    clearAddress(state, data, clearCurrent?: boolean) {
      const addr = this.buildAddress(state);
      return ClearAddrState(data, addr, clearCurrent);
    },
    buildAddress(state) {
      return {
        full_address: state.full_address.result.value,
        region: state.region.result.value,
        area: state.area.result.value,
        city: state.city.result.value,
        settlement: state.settlement.result.value,
        street: state.street.result.value,
        house: state.house.result.value,
        flat: state.flat.result.value,
      };
    },
    getAddrRequestAdditional(addr) {
      const s = addr.full_address?.result?.value?.value || '';
      const result = s.substring(0, s?.indexOf('квартира'));
      return result;
    },
  },
  packageDataHypothec: {
    hypothec_info(state) {
      return {
        region: state.region.result.value,
        apartment_type: state.apartment_type.result.value,
        sum: state.sum.result.value,
        credit_term: state.credit_term.result.value,
        deposit: state.deposit.result.value,
        full_name: state.full_name.result.value,
        phone_number: state.phone_number.result.value,
      };
    },
  },
  packageData: {
    credit_parameters_info(state, autoComplete) {
      const product = state.credit_target.result.value?.value;
      const maxSum = getMaxSum(product || 'credit_cash') || 5000000;
      const email = !!state?.email?.result?.value?.includes('@');

      return {
        credit_target: state.credit_target.result.value,
        credit_sum: autoComplete
          ? Number(resetMask(state.credit_sum.result.value)) >= maxSum
            ? String(maxSum)
            : state.credit_sum.result.value
              ? state.credit_sum.result.value
              : '500000'
          : state.credit_sum.result.value,
        surname: state.surname.result.value,
        name: state.name.result.value,
        patronymic: autoComplete
          ? defaultWhiteListPatronymic.includes(state.patronymic.result.value || '')
            ? null
            : state.patronymic.result.value
          : state.patronymic.result.value,
        email: autoComplete
          ? email
            ? state.email.result.value
            : `${state.phone_number?.result?.value}@mail.ru`
          : null,
        gender: state.gender.result.value,
        checked: !!state.agreement.result.value?.state,
        phone_number: state.phone_number.result.value,
        deposit_car: state.deposit_car.result.value,
        email_generated: !email,
        credit_city: null,
      };
    },
    work_info(state, autoComplete) {
      return {
        work: !!state.work,
        employment_type: state.employment_type.result.value,
        organization_info: state.organization_info.result.value,
        start_work: {
          date: 1,
          month:
            state.start_work.month.result.value ||
            (autoComplete ? { value: '1', title: 'Январь' } : null),
          year: state.start_work.year.result.value,
        },
        company_type: null,
        activity: null,
        work_address: {
          full_address: state.work_address.full_address.result.value,
          region: state.work_address.region.result.value,
          area: state.work_address.area.result.value,
          city: state.work_address.city.result.value,
          settlement: state.work_address.settlement.result.value,
          street: state.work_address.street.result.value,
          house: state.work_address.house.result.value,
          flat: state.work_address.flat.result.value,
        },
        expirience: state.expirience.result.value,
        phone_work:
          state.phone_work.result.value || (autoComplete ? phoneGenerator() : null),
        work_activity_type: state.work_activity_type.result.value,
        job_title: state.job_title.result.value,
        job_type: null,
        monthly_income: state.monthly_income.result.value,
        why_is_has_not_work: null,
      };
    },
    additional_info(state, autoComplete) {
      return {
        education: state.education.result.value,
        family_status: state.family_status.result.value,
        children: autoComplete
          ? state.children.result.value || {
              value: '0',
              title: 'Нет детей',
            }
          : state.children.result.value,
        having_car: autoComplete
          ? state.having_car.result.value || {
              value: '0',
              title: 'Нет',
            }
          : state.having_car.result.value,
        having_real_estate: autoComplete
          ? state.having_real_estate.result.value || {
              value: '0',
              title: 'Нет',
            }
          : state.having_real_estate.result.value,
        sms_code: state.sms_code.result.value,
      };
    },
    passport_info(state, autoComplete) {
      const test: App.PassportInfo = {
        checked: !!state.equalAddr,
        date_birthday: state.date_birthday.result.value || null,
        born_city: state.born_city.result.value || null,
        series_and_number: state.series_and_number.result.value || null,
        issued_date: state.issued_date.result.value || null,
        department_code: state.department_code.result.value || null,
        issued_by: state.issued_by.result.value || null,
        registration_date: null,
        registration_address: VActions.address.buildAddress(state.registration_address),
        fact_address: VActions.address.buildAddress(
          state.equalAddr ? state.registration_address : state.fact_address,
        ),
        contact_name:
          state.contact_name.result.value ||
          (autoComplete
            ? nameArr[Math.round(Math.random() * (nameArr.length - 1))]
            : null),
        contact_phone:
          state.contact_phone.result.value || (autoComplete ? phoneGenerator() : null),
        second_contact_name: autoComplete
          ? nameArr[Math.round(Math.random() * (nameArr.length - 1))]
          : null,
        second_contact_phone: autoComplete ? phoneGenerator() : null,
        secret_key: autoComplete
          ? secretKeyArray[
              Math.round(Math.random() * (secretKeyArray.length - 1))
            ].toUpperCase()
          : null,
      };
      return test;
    },
  },
};
