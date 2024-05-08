import { useEffect } from 'react';

import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { Nullable } from '@/Components/Inputs/Select/Type';

const useChangeStorage = () => {
  const lsPhone: Nullable<string> = localStorage.getItem('phoneNumber');
  const lsStatePhone: Nullable<string> = localStorage.getItem('phoneNumberFromState');

  useEffect(() => {
    localStorage.removeItem('birthday');
    localStorage.removeItem('brithDateStatus');
  }, []);

  useEffect(() => {
    if (!lsPhone || !lsPhone.includes('+')) return;

    localStorage.setItem('phoneNumber', resetMask(lsPhone));
  }, [lsPhone]);

  useEffect(() => {
    if (!lsStatePhone || !lsStatePhone.includes('+')) return;

    localStorage.setItem('phoneNumberFromState', resetMask(lsStatePhone));
  }, [lsStatePhone]);
};

export { useChangeStorage };
