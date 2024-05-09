"use client";

import { useEffect, useState } from "react";

import { getHour, getMinutes, getSeconds } from "@/Components/Timer/helpers";

export const useHelpTimer = (initValue: number) => {
  const [timer, setTimer] = useState<number>(initValue);

  const INTERVAL = 60 * 1 * 1000; // 60 sec * 1 min * 1000ms

  useEffect(() => {
    const handler = setInterval(() => {
      if (timer > 0) {
        setTimer((prevState) => prevState - 60); // 1 min
      }
    }, INTERVAL);

    return () => {
      clearInterval(handler);
    };
  }, [timer]);

  return timer;
};

export default function useTimer() {
  const timer = localStorage.getItem("timer");
  const [value, setValue] = useState<number>(Number(timer) || 3960);
  const [hours, setHours] = useState<string>("01");
  const [minutes, setMinutes] = useState<string>("06");
  const [seconds, setSeconds] = useState<string>("00");
  useEffect(() => {
    if (value >= 0) {
      const handler = setTimeout(() => {
        setValue((prev) => prev - 1);
        setHours(getHour(value));
        setMinutes(getMinutes(value));
        setSeconds(getSeconds(value));
      }, 1000);

      return () => {
        clearTimeout(handler);
        localStorage.setItem("timer", value.toString());
      };
    }

    return undefined;
  }, [value, minutes, hours, seconds]);
  return { hours, minutes, seconds };
}
