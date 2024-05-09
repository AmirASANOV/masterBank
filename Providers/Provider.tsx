"use client";
import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../ReduxStore";

import { PhoneModalProvider } from "./Context/PhoneModalProvider";
import { UtmContextProvider } from "./Context/UtmContextProvider";

interface ProviderWrapper {
  state: typeof store;
  children: React.ReactNode;
}

const ProviderWrapper: React.FC<ProviderWrapper> = ({ children, state }) => (
  <BrowserRouter>
    <Provider store={state}>
      <UtmContextProvider>
        <PhoneModalProvider>{children}</PhoneModalProvider>
      </UtmContextProvider>
    </Provider>
  </BrowserRouter>
);

export default ProviderWrapper;
