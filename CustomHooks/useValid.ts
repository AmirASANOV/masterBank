"use client";

import { useEffect, useState } from "react";

import useAppDispatch from "./useAppDispatch";

import { checkPhone } from "@/Common/AppFormController/ControllersFunc";
import { initialStateValid } from "@/Components/ApplicationFormComponents/ResendForm";
import { App } from "@/ProjectTypes/AppTypes";
import { addNotification } from "@/ReduxStore/reducer/ConfigReducer/ConfigReducer";

export const useValid = () => {
  const dispatch = useAppDispatch();
  const [valid, setValid] = useState<App.Controller<string>>(initialStateValid);

  useEffect(() => {
    if (valid.value.length === 11) {
      setValid(
        checkPhone(
          valid.value,
          true,
          "return_phone_without_mask",
          "+7-(___)-___-__-__",
          true,
          []
        )
      );
    } else if (valid.value.length > 11) {
      setValid({
        ...initialStateValid,
        value: valid.value.slice(0, -1),
        valid: true,
      });
      dispatch(addNotification(`Пожалуйста, убедитесь в правильности номера`));
    } else {
      setValid(initialStateValid);
    }
  }, [valid.value]);

  return {
    valid,
    setValid,
  };
};
