"use client";

import { useEffect } from "react";

import { ValidatorThunk } from "../ReduxStore/reducer/Validator/ValidatorThunk";

import useAppDispatch from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useGetInfoOnAuth = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector((state) => state.session);

  useEffect(() => {
    if (!isAuth) return;

    dispatch(ValidatorThunk.getAnketa());
  }, []);
};

export default useGetInfoOnAuth;
