"use client";

import { useEffect, useRef, useState } from "react";

import { batch } from "react-redux";

export const useTimerForDate = () => {
  const [timer, setTimer] = useState({
    seconds: "00",
    minute: "00",
  });
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState<number>(0);
  const intervalId = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isActive) {
      intervalId.current = setInterval(() => {
        const secondCounter = Math.floor(counter % 60);
        const minuteCounter = Math.floor(counter / 60);

        batch(() => {
          setTimer({
            seconds: String(secondCounter).padStart(2, "0"),
            minute: String(minuteCounter).padStart(2, "0"),
          });
          setCounter((c) => c + 1);
        });
      }, 1000);
    }

    return () =>
      clearInterval(intervalId.current as ReturnType<typeof setInterval>);
  }, [isActive, counter]);

  const stopTimer = () => {
    batch(() => {
      setIsActive(false);
      setCounter(0);
      setTimer({
        seconds: "00",
        minute: "00",
      });
    });
    clearInterval(intervalId.current as ReturnType<typeof setInterval>);
  };

  const setDate = (data: number) => {
    setCounter(
      Math.abs(Math.round(Date.now() - Math.round(+data.toFixed())) / 1000)
    );
  };

  return {
    timer,
    isActive,
    stopTimer,
    runTimer: setIsActive,
    setDate,
  };
};
