"use client";
import React, { createContext, FC, useMemo, useState } from "react";

interface IModalContext {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const PhoneModalContext = createContext<Partial<IModalContext>>({});
interface PhoneModalProvider {
  children: React.ReactNode;
}
export const PhoneModalProvider: FC<PhoneModalProvider> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const result = useMemo(() => ({ openModal, setOpenModal }), [openModal]);

  return (
    <PhoneModalContext.Provider value={result}>
      {children}
    </PhoneModalContext.Provider>
  );
};
