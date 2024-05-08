"use client";
import React, { FormEvent, memo, useEffect } from "react";

import { useDispatch } from "react-redux";

import { initialStateValid } from "../ApplicationFormComponents/ResendForm";
import PressButton from "../Buttons/PressButton";
import { FormInput } from "../Inputs/OtherInputs";

import styles from "./FeedBack.module.sass";
import FeedBackResult from "./FeedBackResult";

import {
  checkPhone,
  resetMask,
} from "@/Common/AppFormController/ControllersFunc";
import { setInputFocus } from "@/Common/AppFormHelpers/Focusable";
import { setInputStatus } from "@/Common/AppFormHelpers/Helpers";
import useAppDispatch from "@/CustomHooks/useAppDispatch";
import { useAppSelector } from "@/CustomHooks/useAppSelector";
import { useHistoryWithUTM } from "@/CustomHooks/useHistoryWithUTM";
import { useValid } from "@/CustomHooks/useValid";
import { showModal } from "@/ReduxStore/reducer/ConfigReducer/ConfigReducer";
import { sendFeedbackHomepage } from "@/ReduxStore/reducer/feedbackReducer/feedbackReducer";
import {
  clearStorageTimeStart,
  setPhoneNumber,
} from "@/ReduxStore/reducer/userReducer/userReducer";
import { onPhoneInput } from "@/Utils/utils";

interface FeedbackProps {
  page?: "car-credit" | "default";
  useResultMessage?: boolean;
  buttonText?: string;
  useErrorMessage?: boolean;
}

const FeedBack: React.FC<FeedbackProps> = memo(
  ({ useResultMessage = false, useErrorMessage = true, page = "default" }) => {
    const viewFeedback = useAppSelector((store) => store.feedback.homepage);
    const dispatch = useDispatch();
    const dispatchApp = useAppDispatch();
    const history = useHistoryWithUTM();
    const { isAuth, token, phoneNumber } = useAppSelector(
      (state) => state.session
    );

    const { valid, setValid } = useValid();

    useEffect(() => {
      if (token && phoneNumber)
        setValid(
          checkPhone(
            phoneNumber,
            true,
            "return_phone_without_mask",
            "+7-(___)-___-__-__",
            true,
            []
          )
        );
    }, [token, phoneNumber]);

    useEffect(() => {
      if (!isAuth && !valid.value && !token && !phoneNumber)
        setValid(initialStateValid);
    }, [isAuth, valid.value]);

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!valid.valid) return;

      if (isAuth) {
        history.push("/user/credit/credit_card/credit_parameters_info");
        return;
      }

      dispatchApp(clearStorageTimeStart());

      dispatch(setPhoneNumber(valid.value)); // сохраняем в стор, чтобы модалка правильно отработала

      dispatch(
        showModal(true, {
          href: "/user/credit/credit_card/credit_parameters_info",
          phone: valid.value,
        })
      );

      if (token) {
        dispatch(sendFeedbackHomepage({ message: "", phone: valid.value }));
        setInputFocus(".input-error");
      }
    };

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const unmaskedValue = resetMask(event.target.value);
      if (unmaskedValue.length > 1) {
        setValid(
          checkPhone(
            unmaskedValue,
            true,
            "return_phone_without_mask",
            "+7-(___)-___-__-__",
            true,
            []
          )
        );
      }
    };

    const isShowResult = !viewFeedback || useResultMessage;

    const getButtonText = () => {
      if (page === "car-credit") return "Оформить заявку";
      if (page === "default") return "Получить карту";
      return "Узнать";
    };

    return (
      <>
        {!isShowResult && (
          <div className={styles.container}>
            <form id="feedback" onSubmit={onSubmitHandler}>
              <h2 className={styles.title}>Решение по номеру телефона</h2>
              <p className={styles.description}>
                Укажите свой номер телефона, подтвердите его по смс и получите
                условия в эту же минуту
              </p>

              <div className={styles.inputWithButton}>
                <FormInput
                  id="feedback-form-input"
                  placeholder="+7-(___)-___-__-__"
                  mask="+7-(999)-999-99-99"
                  labelText="Мобильный телефон"
                  inputMode="tel"
                  defaultValue={valid.value || ""}
                  status={setInputStatus(valid)}
                  onInput={(e) => onInput(e)}
                  errorMessage={useErrorMessage ? valid.message : ""}
                  maskedHandler={onPhoneInput}
                />

                <PressButton
                  htmlType="submit"
                  type="mainBold"
                  text={getButtonText()}
                  id="auth_solution"
                />
              </div>
            </form>
          </div>
        )}
        {isShowResult && <FeedBackResult />}
      </>
    );
  }
);

export default FeedBack;
