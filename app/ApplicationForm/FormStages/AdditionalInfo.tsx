import React, { memo } from 'react';

import { useDispatch } from 'react-redux';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import {
  childrenData,
  EducationData,
  familyStatusData,
  havingCarData,
  havingRealEstateData,
} from '@/Common/AppFormHelpers/DropdownLists';
import { lsHandler } from '@/Common/LocalStorage/LSHandler';
import PressButton from '@/Components/Buttons/PressButton';
import { SelectedInput } from '@/Components/Inputs/SelectInputs';
import { DataElement } from '@/Components/Inputs/Types/InputPropsType';
import Wrapper from '@/Components/Layouts/Wrapper';
import { Prompt } from '@/Components/Messages/Prompt';
import Steps from '@/Components/Steps/Steps';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import useFormHandler from '@/CustomHooks/useFormHandler';
import { useNotInitialEffect } from '@/CustomHooks/useNotInitialEffect';
import { currentDomain } from '@/GlobalConfig';
import {
  VAdditionalInfo,
  VDataValidationReducer,
} from '@/ReduxStore/reducer/Validator/Types';
import { VActions } from '@/ReduxStore/reducer/Validator/ValidatorActions';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import { ValidatorThunk } from '@/ReduxStore/reducer/Validator/ValidatorThunk';
import { useSendNotFullData } from '@/Utils/useSendNotFullData';
import { checkInitialValue } from '@/Utils/utils';
import Timer from '@/Components/Timer/Timer';
import Protect from '@/Components/Protect/Protect';

interface AdditionalInfoProps {
  lsKey: VDataValidationReducer['current_step'];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = memo(({ lsKey }) => {
  const viewport = useAppSelector(state => state.config.viewport);
  const dispatch = useDispatch();
  const form = useFormHandler();
  const v = useAppSelector(state => state.validator.additional_info);
  const reducer = useAppSelector(state => state.validator);
  const vStatus = VActions.helpers.getInputStatus;
  const { type } = useAppSelector(state => state.config.user);
  const ls = lsHandler();
  const vLs: VAdditionalInfo = ls.get(lsKey);

  useSendNotFullData(type, 'additional_info');

  const checker = () => {
    dispatch(ValidatorThunk.sendAdditionalInfoState());
    ls.remove(lsKey);
  };

  useNotInitialEffect(() => {
    if (!checkInitialValue(v, 'additional_info') && !!vLs) {
      dispatch(
        AppFormActions.updateAdditionalInfoState(
          VActions.additional_info.build(reducer, {
            value: VActions.packageData.additional_info(vLs, false),
            type: 'check',
          }),
        ),
      );
      return;
    }
    ls.set(lsKey, v);
  }, [v]);

  return (
    <div className="wrapper">
      <Steps number={3} bonus={10} />
      <form
        style={{ width: '100%' }}
        onSubmit={(e: React.FormEvent) => form.submitHandler(e, checker)}
        onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>) =>
          form.enterHandler(e, checker)
        }
        ref={form.form}
        autoComplete="off"
        autoSave="off"
        aria-hidden
      >
        <Wrapper id="extra-info" style={{ marginBottom: 20 }}>
          <Prompt
            titleStyle={{ textAlign: 'center' }}
            title="Дополнительная информация"
            containerId="header"
            fullGrid
          />

          <SelectedInput
            defaultValue={
              v.education.result.value?.title?.trim() ||
              vLs?.education.result.value?.title?.trim() ||
              ''
            }
            required={v.education.config.required}
            setState={(value: Nullable<DataElement>) =>
              dispatch(
                AppFormActions.updateAdditionalInfoDropdowns({
                  value,
                  touched: true,
                  field: 'education',
                }),
              )
            }
            data={EducationData}
            status={vStatus(v.education.result.status)}
            message={v.education.result.message || ''}
            name={v.education.result.fieldName}
            placeholder="например: Среднее полное"
          />

          <SelectedInput
            defaultValue={
              v.family_status.result.value?.title?.trim() ||
              vLs?.family_status.result.value?.title?.trim() ||
              ''
            }
            required={v.family_status.config.required}
            setState={(value: Nullable<DataElement>) =>
              dispatch(
                AppFormActions.updateAdditionalInfoDropdowns({
                  value,
                  touched: true,
                  field: 'family_status',
                }),
              )
            }
            data={familyStatusData}
            status={vStatus(v.family_status.result.status)}
            message={v.family_status.result.message || ''}
            name={v.family_status.result.fieldName}
            placeholder="например: Замужем/Женат"
          />
          <SelectedInput
            defaultValue={
              v.children.result.value?.title?.trim() ||
              vLs?.children.result.value?.title?.trim() ||
              ''
            }
            required={v.children.config.required}
            setState={(value: Nullable<DataElement>) =>
              dispatch(
                AppFormActions.updateAdditionalInfoDropdowns({
                  value,
                  touched: true,
                  field: 'children',
                }),
              )
            }
            data={childrenData}
            status={vStatus(v.children.result.status)}
            message={v.children.result.message || ''}
            name={v.children.result.fieldName}
            placeholder="например: 2"
          />
          <SelectedInput
            defaultValue={
              v.having_car.result.value?.title?.trim() ||
              vLs?.having_car.result.value?.title?.trim() ||
              ''
            }
            required={v.having_car.config.required}
            setState={(value: Nullable<DataElement>) =>
              dispatch(
                AppFormActions.updateAdditionalInfoDropdowns({
                  value,
                  touched: true,
                  field: 'having_car',
                }),
              )
            }
            data={havingCarData}
            status={vStatus(v.having_car.result.status)}
            message={v.having_car.result.message || ''}
            name={v.having_car.result.fieldName}
            placeholder="например: Иномарка"
          />
          <SelectedInput
            defaultValue={
              v.having_real_estate.result.value?.title?.trim() ||
              vLs?.having_real_estate.result.value?.title?.trim() ||
              ''
            }
            required={v.having_real_estate.config.required}
            setState={(value: Nullable<DataElement>) =>
              dispatch(
                AppFormActions.updateAdditionalInfoDropdowns({
                  value,
                  touched: true,
                  field: 'having_real_estate',
                }),
              )
            }
            data={havingRealEstateData}
            status={vStatus(v.having_real_estate.result.status)}
            message={v.having_real_estate.result.message || ''}
            name={v.having_real_estate.result.fieldName}
            placeholder="например: Квартира"
          />
        </Wrapper>
        {/* {v.show_confirm && userPhone.result.value ? ( */}
        {/*  <div style={{ */}
        {/*    margin: '0 auto', */}
        {/*    maxWidth: 500, */}
        {/*    display: 'flex', */}
        {/*    justifyContent: 'center', */}
        {/*    flexWrap: 'wrap', */}
        {/*    marginBottom: 20 */}
        {/*  }}> */}
        {/*    <Wrapper> */}
        {/*      <Prompt */}
        {/*        containerStyle={{width: '100%', marginBottom: 20}} */}
        {/*        fullGrid={true} */}
        {/*        titleTextAlign={{desktop: 'center', tablet: "center", mobile: 'center'}} */}
        {/*        titleMargins={{desktop: {bottom: 24}, tablet: {bottom: 16}, mobile: {bottom: 16}}} */}
        {/*        title={'Подтвердите номер телефона'} */}
        {/*        suggestionContent={[`Для подтверждения Вашего номера телефона \nна ${setInputMask(resetMask(userPhone.result.value), '+7-(___)-___-__-__')} отправлено смс с кодом подтверждения.\nВведите его в поле ниже.`]} */}
        {/*        suggestionItemStyle={{textAlign: "center", whiteSpace: 'pre-wrap'}} */}
        {/*      /> */}
        {/*      <FormInput */}
        {/*        id={'code__confirm'} */}
        {/*        fullGrid={false} */}
        {/*        inputClassNames={['input__code']} */}
        {/*        inputType={'tel'} */}
        {/*        maxLength={4} */}
        {/*        labelStyle={{textAlign: 'center'}} */}
        {/*        containerStyle={v.sms_code.result.status === 'incorrect' || showRepeatConfirm ? {marginBottom: 16} : {}} */}
        {/*        inputMessagesStyle={{width: '100%', textAlign: 'center'}} */}
        {/*        errorMessage={v.sms_code.result.message || ''} */}
        {/*        inputStyle={{textAlign: 'center', padding: 10}} */}
        {/*        labelText={v.sms_code.result.fieldName} */}
        {/*        defaultValue={v.sms_code.result.value || ''} */}
        {/*        required={v.sms_code.config.required} */}
        {/*        onInput={(event, masked, setMasked, setValue, actions) => { */}
        {/*          // if (resetMask(event.target.value).length === 4) { */}
        {/*          //   dispatch(ValidatorThunk.codeConfirmResult(resetMask(event.target.value))) */}
        {/*          // } */}
        {/*          if (resetMask(event.target.value).length === 4) { */}
        {/*            dispatch(ValidatorThunk.codeConfirmResult(resetMask(event.target.value))) */}
        {/*          } */}
        {/*        }} */}
        {/*        onPaste={(event) => { */}
        {/*          const target = event.target as HTMLInputElement */}
        {/*          setEv(target.value) */}
        {/*          if (resetMask(target.value).length === 4) { */}
        {/*            dispatch(ValidatorThunk.codeConfirmResult(resetMask(target.value))) */}
        {/*          } */}
        {/*        }} */}
        {/*        status={vStatus(v.sms_code.result.status)} */}
        {/*        placeholder={'____'} */}
        {/*        alwaysShowMask={true} */}
        {/*      /> */}
        {/*      {ev || ''} */}
        {/*      {(v.sms_code.result.message && v.sms_code.result.message.length > 0) || showRepeatConfirm ? ( */}
        {/*        <PressButton */}
        {/*          type={'smallMainBold'} */}
        {/*          text={'Отправить код повторно'} */}
        {/*          onClick={() => dispatch(ValidatorThunk.codeConfirmStart())} */}
        {/*        /> */}
        {/*      ) : ''} */}
        {/*    </Wrapper> */}
        {/*  </div> */}
        {/* ) : ""} */}
        {/* {!v.show_confirm ? ( */}
        <div
          style={{
            marginBottom: '40px',
          }}
          className={`btn-group ${viewport !== 'mobile' ? 'reverse-row mr0' : 'mr0'}`}
          id="btnGroupCredit"
        >
          {(currentDomain === 'cc_sobank' ||
            (currentDomain === 'sovbank' && viewport === 'mobile')) &&
            (window.location.pathname.includes('user/credit/credit_card') ||
              window.location.pathname.includes('user/change_anketa/credit_card')) && (
              <div className="btn-group__title">Остался последний шаг</div>
            )}
          <PressButton type="mainBold" text="Продолжить" htmlType="submit" />
          <PressButton
            type="escape"
            onClick={() => dispatch(AppFormActions.setApplicationStep('work_info'))}
            text="Назад"
            htmlType="button"
          />
        </div>
        {/* ) : ''} */}
      </form>
      <Timer />
      <br />
      <Protect />
    </div>
  );
});

export default AdditionalInfo;
