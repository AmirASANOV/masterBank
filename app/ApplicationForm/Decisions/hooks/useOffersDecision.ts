import { useEffect, useState } from 'react';

import { ApplicationApi } from '@/ApiConfig/application/ApplicationApi';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { MFOResponse } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';

export const useOffersDecision = (): MFOResponse => {
  const dispatch = useAppDispatch();
  const [offers, setOffers] = useState<MFOResponse>([] as MFOResponse);

  useEffect(() => {
    ApplicationApi.getOffersRequest()
      .then(res => {
        setOffers(res.data);
      })
      .catch(() => {
        dispatch(AppFormActions.setCurrentStep('credit_parameters_info'));
      });
  }, []);

  return offers;
};
