"use client";

import { useDispatch } from "react-redux";

import { AppDispatch } from "@/ReduxStore";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
