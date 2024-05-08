"use client";
/* eslint-disable react/self-closing-comp */
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { useLocation } from "react-router";

import styles from "./CreditParameters.module.sass";

import { Dadata, Nullable } from "@/ApiConfig/DadataApi/DadataPropsTypes";
import { FormApi } from "@/ApiConfig/Endpoints/FormApi";
import { resetMask } from "@/Common/AppFormController/ControllersFunc";
import {
  creditTarget,
  genderList,
} from "@/Common/AppFormHelpers/DropdownLists";
import {
  Regular,
  capitalizeFirstLetter,
  setInputLabelTextForSum,
  setInputMask,
  setInputPlaceholderTextForSum,
  setSpaceOfNumber,
} from "@/Common/AppFormHelpers/Helpers";
import { lsHandler } from "@/Common/LocalStorage/LSHandler";
import PressButton from "@/Components/Buttons/PressButton";
import FreeService from "@/Components/FreeService/FreeService";
import { FormInput } from "@/Components/Inputs/OtherInputs";
import { SelectedInput } from "@/Components/Inputs/SelectInputs";
import { DataElement } from "@/Components/Inputs/Types/InputPropsType";
import Protect from "@/Components/Protect/Protect";
import Timer from "@/Components/Timer/Timer";
import useAppDispatch from "@/CustomHooks/useAppDispatch";
import { useAppSelector } from "@/CustomHooks/useAppSelector";
import useFormHandler from "@/CustomHooks/useFormHandler";
import { useHistoryWithUTM } from "@/CustomHooks/useHistoryWithUTM";
import { useNotInitialEffect } from "@/CustomHooks/useNotInitialEffect";
import { App } from "@/ProjectTypes/AppTypes";
import {
  showModal,
  updateConfigActionState,
} from "@/ReduxStore/reducer/ConfigReducer/ConfigReducer";
import { localLogOut } from "@/ReduxStore/reducer/userReducer/userReducer";
import {
  VCreditParameters,
  VFormPlacement,
} from "@/ReduxStore/reducer/Validator/Types";
import { VActions } from "@/ReduxStore/reducer/Validator/ValidatorActions";
import {
  AppFormActions,
  initialValidatorState,
} from "@/ReduxStore/reducer/Validator/ValidatorReducer";
import { ValidatorThunk } from "@/ReduxStore/reducer/Validator/ValidatorThunk";
import { useSendNotFullData } from "@/Utils/useSendNotFullData";
import { checkInitialValue, getEditor, getProductFromUrl } from "@/Utils/utils";

interface CreditFormProps {
  lsKey: string;
  placement: VFormPlacement;
  placementHeader?: string;
}

const CreditParameters: React.FC<CreditFormProps> = memo(
  ({ lsKey, placement = "application_form" }) => {
    const history = useHistoryWithUTM();
    const dispatch = useAppDispatch();
    const form = useFormHandler();
    const location = useLocation();

    const editor = getEditor();
    const creditProduct = getProductFromUrl();

    const product = useAppSelector(
      (state) => state.validator.credit_parameters_info.credit_target
    );
    const v = useAppSelector((state) => state.validator.credit_parameters_info);
    const vStatus = VActions.helpers.getInputStatus;
    const fetching = useAppSelector(
      (state) => state.validator.fetchingFromChildren
    );
    const [creditProductState, setCreditProductState] =
      useState<App.CreditProduct>(creditProduct);
    const { type } = useAppSelector((state) => state.config.user);
    const { token, isAuth, phoneNumber } = useAppSelector(
      (state) => state.session
    );

    const reg = new Regular("gi");
    const ls = lsHandler();
    const vLs: VCreditParameters = ls.get(lsKey);

    const sendFromLanding = useCallback(
      (phone: string) => {
        const newData = VActions.packageData.credit_parameters_info(
          {
            ...v,
            phone_number: {
              ...v.phone_number,
              result: { ...v.phone_number.result, value: phone },
            },
          },
          true
        );

        FormApi.sendCreditParams(newData)
          .then(() => {
            history.push(
              `/user/credit/${product.result.value?.value}/credit_parameters_info`
            );

            dispatch(AppFormActions.setApplicationStep("work_info"));
          })
          .catch((err) => {
            if (err?.response?.status === 401) {
              dispatch(localLogOut());
              dispatch(
                showModal(true, {
                  href: `/user/credit/${product.result.value?.value}/credit_parameters_info`,
                })
              );
            }
          });
        history.push("/user/credit/credit_card/credit_parameters_info/");
      },
      [v, token]
    );

    const checker = () => {
      dispatch(ValidatorThunk.sendCreditParams());
    };

    const onSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      if (placement === "children") {
        dispatch(updateConfigActionState(true));
        const data = VActions.packageData.credit_parameters_info(v, false);
        const { errors } = VActions.credit_parameters_info.build(v, {
          value: data,
          type: "check",
        });

        const isNotError =
          errors.length === 0 ||
          (errors.length === 1 &&
            errors[0]?.result.fieldName ===
              initialValidatorState.credit_parameters_info.phone_number?.result
                .fieldName);

        if (isNotError) {
          ls.set(lsKey, v);

          dispatch(
            showModal(true, {
              href: `/user/credit/${product.result.value?.value}/credit_parameters_info`,
              callBack: sendFromLanding,
            })
          );
          if (isAuth) {
            sendFromLanding(phoneNumber!);
          }
        } else {
          dispatch(
            AppFormActions.buildCreditParameters({ value: data, type: "check" })
          );
        }
      } else {
        checker();
      }
    };

    useSendNotFullData(type, "credit_parameters_info");

    useEffect(() => {
      setCreditProductState(getProductFromUrl());
    }, [location.pathname]);

    useEffect(() => {
      if (fetching && placement === "children") {
        history.push(
          `/user/credit/${product.result.value?.value}/credit_parameters_info`
        );
      }
    }, [fetching]);

    useEffect(() => {
      if (vLs) {
        dispatch(
          AppFormActions.buildCreditParameters({
            value: VActions.packageData.credit_parameters_info(vLs, false),
            type: "check",
          })
        );
      }
    }, [isAuth]);

    useEffect(() => {
      const value = creditTarget.find((el) => el.value === creditProductState);

      if (!value) return;

      dispatch(AppFormActions.updateCreditProduct({ value, touched: true }));
    }, [creditProductState]);

    const deps = useMemo(() => v, []);
    useNotInitialEffect(() => {
      if (placement !== "application_form") return;
      if (!checkInitialValue(v, "credit_parameters_info") && !!vLs) {
        dispatch(
          AppFormActions.buildCreditParameters({
            value: VActions.packageData.credit_parameters_info(vLs, false),
            type: "check",
          })
        );
      }
    }, [deps]);

    const onSumInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      const unmaskedSum = resetMask(e.target.value);
      let value = "";

      if (unmaskedSum.length < 4 && unmaskedSum.length) {
        value = `${unmaskedSum} 000`;
      } else if (e.target.value) {
        value = e.target.value;
      }

      dispatch(
        AppFormActions.updateCreditSum({
          value,
          touched: true,
        })
      );
    };
    const sumInputValue = setInputMask(
      v.credit_sum.result.value || "",
      setSpaceOfNumber(v.credit_sum.result.value || "")
    );
    const sumInputPlaceholder = setInputPlaceholderTextForSum(
      v.credit_target.result.value?.value
    );

    const setStateTargetInput = (
      value: Nullable<DataElement<App.CreditProduct>>
    ) => {
      dispatch(AppFormActions.updateCreditProduct({ value, touched: true }));
      if (value !== null) {
        history.push(`/user/${editor}/${value?.value}/credit_parameters_info`);
      }
    };

    const onBlurInputUserSurname = (
      e: React.FocusEvent<HTMLInputElement, Element>
    ) =>
      dispatch(
        AppFormActions.updateUserInitials({
          value: e.target.value,
          touched: true,
          field: "surname",
        })
      );

    return (
      <form
        className={styles.form}
        ref={form.form}
        onSubmit={onSubmitHandler}
        onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>) => {
          form.enterHandler(e, checker);
        }}
        autoComplete="off"
        autoSave="off"
        id={lsKey}
        aria-hidden
      >
        {placement === "application_form" && (
          <>
            <h2 id="anketa-title"> Заявка </h2>
            <div id="anketa-info">
              <SelectedInput
                id="form_credit_target"
                defaultValue={v.credit_target.result.value?.title || ""}
                required={v.credit_target.config.required}
                setState={(value) => setStateTargetInput(value)}
                status={vStatus(v.credit_target.result.status)}
                message={v.credit_target.result.message || ""}
                data={creditTarget}
                name={v.credit_target.result.fieldName}
                placeholder="Например: Кредитная карта"
              />

              <FormInput
                defaultValue={sumInputValue}
                placeholder={sumInputPlaceholder}
                inputMode="numeric"
                id="form_credit_sum"
                maxLength={10}
                required
                onBlur={(e) => onSumInputBlur(e)}
                status={vStatus(v.credit_sum.result.status)}
                errorMessage={v.credit_sum.result.message || ""}
                labelText={setInputLabelTextForSum(
                  v.credit_target.result.value?.value
                )}
                onInput={(e, mask, setMasked, setValue) => {
                  const value = setInputMask(
                    e.target.value.trim() || "",
                    setSpaceOfNumber(e.target.value.trim())
                  );
                  setValue(value);
                }}
              />
            </div>
            <h2 id="anketa-title">Контактная информация</h2>
          </>
        )}
        <div id="contact-info" className={styles.contactInfo}>
          {placement === "children" && (
            <>
              <SelectedInput
                id="form_credit_target"
                defaultValue={v.credit_target.result.value?.title || ""}
                required={v.credit_target.config.required}
                setState={async (
                  value: Nullable<DataElement<App.CreditProduct>>
                ) => {
                  await dispatch(
                    AppFormActions.updateCreditProduct({ value, touched: true })
                  );
                }}
                status={vStatus(v.credit_target.result.status)}
                message={v.credit_target.result.message || ""}
                data={creditTarget}
                name={v.credit_target.result.fieldName}
                placeholder="Например: Кредитная карта"
              />
              <FormInput
                id="form_credit_sum"
                defaultValue={sumInputValue}
                placeholder={sumInputPlaceholder}
                required={v.credit_sum.config.required}
                inputMode="numeric"
                onBlur={(e) => onSumInputBlur(e)}
                inputStyle={{ background: "#EEEFEF" }}
                maxLength={10}
                status={vStatus(v.credit_sum.result.status)}
                errorMessage={v.credit_sum.result.message || ""}
                labelText={setInputLabelTextForSum(
                  v.credit_target.result.value?.value
                )}
                onInput={(e, mask, setMasked, setValue) => {
                  const value = setInputMask(
                    e.target.value.trim() || "",
                    setSpaceOfNumber(e.target.value.trim())
                  );
                  setValue(value);
                }}
              />
              {v.credit_target.result.value?.value === "car_credit" && (
                <FormInput
                  id="form_deposit_car"
                  status={vStatus(v.deposit_car.result.status)}
                  errorMessage={v.deposit_car.result.message || ""}
                  labelText={v.deposit_car.result.fieldName}
                  inputStyle={{ background: "#EEEFEF" }}
                  maxLength={9}
                  placeholder="Например 700 000"
                  inputMode="numeric"
                  defaultValue={setInputMask(
                    v.deposit_car.result.value || "",
                    setSpaceOfNumber(v.deposit_car.result.value || "")
                  )}
                  required={v.deposit_car.config.required}
                  onBlur={(e) => {
                    const unmaskedValue = resetMask(e.target.value);
                    let val = "";
                    if (unmaskedValue.length < 4 && unmaskedValue.length > 0) {
                      val = `${resetMask(e.target.value)} 000`;
                    } else {
                      val = e.target.value || "";
                    }
                    dispatch(
                      AppFormActions.updateOwnFundsBuyingCar({
                        value: val,
                        touched: true,
                      })
                    );
                  }}
                  onInput={(e, mask, setMasked, setValue) => {
                    const value = setInputMask(
                      e.target.value.trim() || "",
                      setSpaceOfNumber(e.target.value.trim())
                    );
                    setValue(value);
                  }}
                />
              )}
            </>
          )}

          <FormInput
            id="form_surname"
            defaultValue={v.surname.result.value || ""}
            required={v.surname.config.required}
            onBlur={(e) => onBlurInputUserSurname(e)}
            status={vStatus(v.surname.result.status)}
            errorMessage={v.surname.result.message || ""}
            placeholder="Например: Иванов"
            inputStyle={{ background: "#EEEFEF" }}
            labelText={v.surname.result.fieldName}
            onInput={(e, mask, setMasked, setValue) => {
              setValue(
                capitalizeFirstLetter(reg.onlyRusWordsMode(e.target.value, ""))
              );
            }}
          />
          <FormInput
            id="form_name"
            defaultValue={v.name.result.value || ""}
            required={v.name.config.required}
            inputStyle={{ background: "#EEEFEF" }}
            onBlur={(e) =>
              dispatch(
                AppFormActions.updateUserInitials({
                  value: e.target.value,
                  touched: true,
                  field: "name",
                })
              )
            }
            status={vStatus(v.name.result.status)}
            errorMessage={v.name.result.message || ""}
            labelText={v.name.result.fieldName}
            placeholder="Например: Иван"
            onInput={(e, mask, setMasked, setValue) => {
              setValue(
                capitalizeFirstLetter(reg.onlyRusWordsMode(e.target.value, ""))
              );
            }}
          />

          <FormInput
            id="form_patronymic"
            defaultValue={v.patronymic.result.value || ""}
            required={v.patronymic.config.required}
            status={vStatus(v.patronymic.result.status)}
            errorMessage={v.patronymic.result.message || ""}
            placeholder="Например: Иванович"
            inputStyle={{ background: "#EEEFEF" }}
            labelText={v.patronymic.result.fieldName}
            onInput={(e, mask, setMasked, setValue) => {
              setValue(
                capitalizeFirstLetter(reg.onlyRusWordsMode(e.target.value, ""))
              );
            }}
            onBlur={(e) =>
              dispatch(
                AppFormActions.updateUserInitials({
                  value: e.target.value,
                  touched: true,
                  field: "patronymic",
                })
              )
            }
          />

          <SelectedInput
            id="form_gender"
            defaultValue={v.gender.result.value?.title || ""}
            name="Пол"
            placeholder="Например: Мужской"
            data={genderList}
            status={vStatus(v.gender.result.status)}
            required={v.gender.config.required}
            message={v.gender.result.message || ""}
            setState={(value: Nullable<DataElement<Dadata.GenderType>>) =>
              dispatch(
                AppFormActions.updateGender({
                  value,
                  touched: true,
                })
              )
            }
          />
        </div>

        <div className={styles.buttonWrapper} id="btnGroupCredit">
          <PressButton
            id="form_submit"
            type="mainBold"
            text="Продолжить"
            htmlType="submit"
          />
        </div>

        {/* блок с вечным обслуживанием */}
        {placement === "application_form" && (
          <>
            <div className={styles.wrapper}>
              <Timer />
            </div>
            <Protect />
          </>
        )}
      </form>
    );
  }
);

export default CreditParameters;
