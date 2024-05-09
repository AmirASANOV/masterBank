"use client";

import React, { useRef } from "react";

/* eslint-disable */
export interface FormHandler {
  form: React.MutableRefObject<HTMLFormElement | null>;
  // blurInputs: () => void,
  enterHandler: (
    e: React.KeyboardEvent<HTMLFormElement> | KeyboardEvent,
    callback: () => any
  ) => void;
  submitHandler: (e: React.FormEvent, callback: () => any) => void;
  blurInputs: () => void;
}

const useFormHandler = (): FormHandler => {
  const form = useRef<HTMLFormElement>(null);

  const methods: FormHandler = {
    form,
    blurInputs() {
      if (this.form.current) {
        this.form.current
          ?.querySelectorAll("input")
          ?.forEach((inp) => inp.blur());
      }
    },
    async enterHandler(e, callback: () => any) {
      if (e.code === "Enter" || e.key === "Enter") {
        e.preventDefault();
        this.blurInputs();
        await callback();
      }
    },
    submitHandler(e, callback) {
      e.preventDefault();
      if (e.type === "submit") {
        // this.blurInputs()
        callback();
      }
    },
  };
  return methods;
};

export default useFormHandler;
