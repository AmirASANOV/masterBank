"use client";

import Cookies from "js-cookie";

import { HistoryType } from "./useHistoryWithUTM";

import { AppThunkType } from "@/ReduxStore";
import {
  addUser,
  getAutologinData,
  setToken,
} from "@/ReduxStore/reducer/userReducer/userReducer";

export const useAutoLogin =
  (isAuth: boolean, history: HistoryType): AppThunkType =>
  (dispatch) => {
    const location = window.location.search;

    if (!location.includes("token=")) return undefined;
    if (isAuth) return undefined;

    if (location.includes("auth_token")) {
      const tokenStr = location.substring(
        location.lastIndexOf("auth_token="),
        location.length
      );

      const token = tokenStr.substring(11);

      Cookies.set("Bearer", token);
      dispatch(addUser());

      history.push("/user/credit/credit_card/work_info");
      return window.location.search.replace(
        window.location.search,
        location.replace(tokenStr, "")
      );
    }
    let token;
    if (location.includes("?token=")) {
      const index = location.lastIndexOf("?token=");
      token = location.substring(index + 1, index + 22);
    } else {
      const index = location.lastIndexOf("&token=");
      token = location.substring(index + 1, index + 22);
    }
    token = token.replace("token=", "");

    dispatch(setToken(token));

    localStorage.removeItem("waiting-sms");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("phoneNumberFromState");

    return dispatch(getAutologinData(token));
  };
