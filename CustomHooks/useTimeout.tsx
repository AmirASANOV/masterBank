"use client";

import { useEffect, useState } from "react";

export interface AsyncActionType {
  key: string;
  intervalID?: ReturnType<typeof setTimeout>;
  timeout?: number;
  useNow?: boolean;
}

const useTimeout = () => {
  const [state, setState] = useState<Array<AsyncActionType>>([]);

  const pushToState = (data: AsyncActionType) => {
    setState((prev) => {
      if (prev.filter((item) => item.key === data.key).length > 0) return prev;
      const newState = prev.slice();
      newState.push(data);
      return newState;
    });
  };
  const deleteFromState = (id: string) => {
    setState((prev) => {
      const newState = prev.slice();
      const element = newState.find((item) => item.key === id);
      if (element) {
        const index = newState.indexOf(element);
        if (element.intervalID) {
          clearTimeout(element.intervalID);
          clearInterval(element.intervalID);
        }
        newState.splice(index, 1);
        return newState;
      }
      return prev;
    });
  };

  const methods = {
    getTimeouts: state,
    /* eslint-disable */
    setInterval(
      id: string,
      callback: () => any,
      timeout: number,
      useNow?: boolean
    ) {
      if (useNow) callback();

      const intervalID = setInterval(
        () => {
          callback();
        },
        timeout * 1000 || 30 * 1000
      );
      const data: AsyncActionType = {
        key: `${id}interval`,
        useNow,
        timeout,
        intervalID,
      };

      pushToState(data);
    },

    deleteInterval(id: any) {
      deleteFromState(`${id}interval`);
    },

    setTimeout(
      id: any,
      callback: () => any,
      timeout: number,
      useNow?: boolean
    ) {
      if (useNow) callback();

      const timeoutId = setTimeout(
        () => {
          callback();
        },
        timeout * 1000 || 30 * 1000
      );
      const data: AsyncActionType = {
        key: `${id}timeout`,
        useNow,
        timeout,
        intervalID: timeoutId,
      };
      pushToState(data);
    },

    clearAll() {
      state.forEach((item) => {
        if (item.intervalID) {
          clearInterval(item.intervalID);
          clearTimeout(item.intervalID);
        }
      });

      for (let i = setInterval(""); i >= 0; i--) {
        clearInterval(i);
      }

      for (let i = setTimeout(""); i >= 0; i--) {
        clearTimeout(i);
      }
    },
  };

  useEffect(() => () => methods.clearAll(), []);

  return methods;
};

export default useTimeout;
