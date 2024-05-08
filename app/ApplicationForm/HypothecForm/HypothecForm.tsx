import React, { FormEvent, useState } from 'react';

import {
  apartmentHypothecType,
  regionHypothecData,
} from '@/Common/AppFormHelpers/DropdownLists';
import { Regular, setInputMask, setSpaceOfNumber } from '@/Common/AppFormHelpers/Helpers';
import PressButton from '@/Components/Buttons/PressButton';
import InfoFooter from '@/Components/Footers/InfoFooter';
import { ColumnCount, Grid, GridItem } from '@/Components/Grid/Grid';
import { FormInput } from '@/Components/Inputs/OtherInputs';
import { SelectedInput } from '@/Components/Inputs/SelectInputs';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
import { HypothecModal } from '@/Components/Modals/HypothecModal/HypothecModal';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import useFormHandler from '@/CustomHooks/useFormHandler';
import { VActions } from '@/ReduxStore/reducer/Validator/ValidatorActions';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import { ValidatorThunk } from '@/ReduxStore/reducer/Validator/ValidatorThunk';
import { onPhoneInput } from '@/Utils/utils';

type HypothecPropsType = {
  footer?: boolean;
};

const column = {
  desktop: 4 as ColumnCount,
  tablet: 6 as ColumnCount,
  mobile: 12 as ColumnCount,
};
export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const HypothecForm: React.FC<HypothecPropsType> = ({ footer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { viewport } = useAppSelector(state => state.config);
  const v = useAppSelector(state => state.validator.hypothec_info);
  const dispatch = useAppDispatch();
  const vStatus = VActions.helpers.getInputStatus;
  const reg = new Regular('gi');
  const form = useFormHandler();

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(ValidatorThunk.sendHypothecInfo());
    setIsLoading(false);
  };

  return (
    <div>
      <Layout style={{ width: '100%', padding: '0' }}>
        <form
          onSubmit={onSubmitHandler}
          autoComplete="off"
          autoSave="off"
          ref={form.form}
        >
          <Wrapper style={{ padding: '0 0 12px 0' }}>
            <Grid
              gridStyle={{ gap: '12px' }}
              container
              space={viewport === 'mobile' ? 0 : 30}
            >
              <GridItem colDesktop={column[viewport]} style={{ display: 'block' }}>
                <SelectedInput
                  style={{ width: '100%' }}
                  id="hypotec_region"
                  required={v.region.config.required}
                  status={vStatus(v.region.result.status)}
                  message={v.region.result.message || ''}
                  name={v.region.result.fieldName}
                  data={regionHypothecData}
                  defaultValue={v.region.result.value || ''}
                  onBlur={async e => {
                    await sleep(200);
                    dispatch(
                      AppFormActions.setHypothecRegion({
                        value: e.target.value,
                        touched: true,
                      }),
                    );
                  }}
                  setState={value =>
                    dispatch(
                      AppFormActions.setHypothecRegion({
                        value: value?.value,
                        touched: true,
                      }),
                    )
                  }
                  onChange={value => reg.onlyRusWordsMode(value, '')}
                  placeholder="Введите регион"
                  readOnly={false}
                />
              </GridItem>
              <GridItem colDesktop={column[viewport]} style={{ display: 'block' }}>
                <SelectedInput
                  id="hypotec_apartment_type"
                  style={{ width: '100%' }}
                  required={v.apartment_type.config.required}
                  status={vStatus(v.apartment_type.result.status)}
                  message={v.apartment_type.result.message || ''}
                  name={v.apartment_type.result.fieldName}
                  data={apartmentHypothecType}
                  defaultValue={v.apartment_type.result.value || ''}
                  setState={value =>
                    dispatch(
                      AppFormActions.setHypothecApartmentType({
                        value: value?.value,
                        touched: true,
                      }),
                    )
                  }
                  placeholder="Выберите тип объекта"
                />
              </GridItem>
              <GridItem colDesktop={column[viewport]} style={{ display: 'block' }}>
                <FormInput
                  id="hypotec_sum"
                  containerStyle={{
                    paddingTop:
                      viewport === 'desktop' ? 0 : viewport === 'tablet' ? 25 : 10,
                  }}
                  required={v.sum.config.required}
                  status={vStatus(v.sum.result.status)}
                  labelText={v.sum.result.fieldName}
                  errorMessage={v.sum.result.message || ''}
                  defaultValue={
                    v.sum.result.value
                      ? setSpaceOfNumber(String(v.sum.result.value).trim())
                      : ''
                  }
                  onBlur={e => {
                    const val = e.target.value;
                    dispatch(
                      AppFormActions.setHypothecSum({
                        value: +val.replace(/\s/gi, ''),
                        touched: true,
                      }),
                    );
                    return val;
                  }}
                  onInput={(e, mask, setMasked, setValue) => {
                    const value = setInputMask(
                      e.target.value.trim() || '',
                      setSpaceOfNumber(e.target.value.trim()),
                    );
                    setValue(value);
                  }}
                  maxLength={11}
                  inputType="text"
                  inputMode="numeric"
                  placeholder="Введите сумму"
                />
              </GridItem>
              <GridItem colDesktop={column[viewport]} style={{ display: 'block' }}>
                <FormInput
                  id="hypotec_credit_term"
                  containerStyle={{ paddingTop: viewport !== 'mobile' ? 25 : 10 }}
                  required={v.credit_term.config.required}
                  status={vStatus(v.credit_term.result.status)}
                  labelText={v.credit_term.result.fieldName}
                  errorMessage={v.credit_term.result.message || ''}
                  onBlur={async e => {
                    dispatch(
                      AppFormActions.setHypothecCreditTerm({
                        value: +e.target.value,
                        touched: true,
                      }),
                    );
                  }}
                  onInput={(e, mask, setMasked, setValue) => {
                    const value = setInputMask(
                      e.target.value.trim() || '',
                      setSpaceOfNumber(e.target.value.trim()),
                    );
                    setValue(value);
                  }}
                  maxLength={2}
                  inputMode="numeric"
                  inputType="text"
                  placeholder="Введите количество лет"
                />
              </GridItem>
              <GridItem colDesktop={column[viewport]} style={{ display: 'block' }}>
                <FormInput
                  id="hypotec_deposit"
                  containerStyle={{ paddingTop: viewport !== 'mobile' ? 25 : 10 }}
                  required={v.deposit.config.required}
                  status={vStatus(v.deposit.result.status)}
                  labelText={v.deposit.result.fieldName}
                  errorMessage={v.deposit.result.message || ''}
                  defaultValue={
                    v.deposit.result.value
                      ? setSpaceOfNumber(String(v.deposit.result.value).trim())
                      : ''
                  }
                  onBlur={e => {
                    const val = e.target.value;

                    dispatch(
                      AppFormActions.setHypothecDeposit({
                        value: +val.replace(/\s/gi, ''),
                        touched: true,
                      }),
                    );
                  }}
                  onInput={(e, mask, setMasked, setValue) => {
                    const value = setInputMask(
                      e.target.value.trim() || '',
                      setSpaceOfNumber(e.target.value.trim()),
                    );
                    setValue(value);
                  }}
                  maxLength={11}
                  inputMode="numeric"
                  inputType="text"
                  placeholder="Введите сумму"
                />
              </GridItem>
            </Grid>
          </Wrapper>
          <Wrapper style={{ padding: '0 0 24px 0' }}>
            <Grid
              gridStyle={{ gap: '12px' }}
              container
              space={viewport === 'mobile' ? 0 : 30}
            >
              <GridItem
                colDesktop={viewport === 'desktop' ? 8 : 12}
                style={{ display: 'block' }}
              >
                <FormInput
                  id="hypotec_full_name"
                  required={v.full_name.config.required}
                  status={vStatus(v.full_name.result.status)}
                  labelText={v.full_name.result.fieldName}
                  errorMessage={v.full_name.result.message || ''}
                  defaultValue={v.full_name.result.value || ''}
                  onBlur={async e =>
                    dispatch(
                      AppFormActions.setHypothecFullName({
                        value: e.target.value,
                        touched: true,
                      }),
                    )
                  }
                  onInput={(e, mask, setMasked, setValue) => {
                    setValue(reg.onlyRusWordsMode(e.target.value, ''));
                  }}
                  placeholder="Введите своё ФИО"
                />
              </GridItem>
              <GridItem colDesktop={column[viewport]} style={{ display: 'block' }}>
                <FormInput
                  id="hypotec_phone_number"
                  containerStyle={{
                    paddingTop:
                      viewport === 'desktop' ? 0 : viewport === 'tablet' ? 25 : 10,
                  }}
                  required={v.phone_number.config.required}
                  status={vStatus(v.phone_number.result.status)}
                  labelText={v.phone_number.result.fieldName}
                  errorMessage={v.phone_number.result.message || ''}
                  onBlur={async e =>
                    dispatch(
                      AppFormActions.setHypothecPhoneNumber({
                        value: e.target.value,
                        touched: true,
                      }),
                    )
                  }
                  defaultValue={v.phone_number.result.value || ''}
                  mask="+7-(999)-999-99-99"
                  placeholder="+7-(___)-___-__-__"
                  inputMode="tel"
                  maskedHandler={onPhoneInput}
                />
              </GridItem>
            </Grid>
          </Wrapper>
          <GridItem justify="flex-end">
            <PressButton
              id="hypotec_submit"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.8 : 1 }}
              type="mainBold"
              text="Получить условия"
              htmlType="submit"
            />
          </GridItem>
        </form>
      </Layout>
      <Layout>{footer && <InfoFooter />}</Layout>
      <HypothecModal />
    </div>
  );
};
