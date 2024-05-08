import React, { memo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { ChangeVisibilityHandler } from '@/Common/AppFormHelpers/EventHandlers';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { DecisionType } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import { VDataValidationReducer } from '@/ReduxStore/reducer/Validator/Types';
import { VActions } from '@/ReduxStore/reducer/Validator/ValidatorActions';
import { ValidatorThunk } from '@/ReduxStore/reducer/Validator/ValidatorThunk';
import { getProductFromUrl } from '@/Utils/utils';

const ApplicationForm: React.FC = memo(() => {
  const dispatch = useDispatch();
  const history = useHistoryWithUTM();
  const isAuth = useAppSelector(state => state.session);
  const validator = useAppSelector(state => state.validator);
  const decision = useAppSelector(state => state.anketaResponse.decision_type);
  const isLocalHost = window.location.origin.includes('localhost');

  const { pathname } = history.location;
  const IdleHandler = () => {
    ChangeVisibilityHandler();
  };

  const redirect = (
    step: VDataValidationReducer['current_step'],
    decision_status?: DecisionType,
  ) => {
    if (pathname.includes(step)) return;

    const product = getProductFromUrl();

    if (step === 'work_info') {
      let path = `/user/${validator.mode}/${product}/${step}/`;
      if (validator.work_info.work) {
        path += `${validator.work_info.work}/`;
        const emp = validator.work_info.employment_type.result.value?.value;
        if (!!emp && !!emp !== null) {
          path += `${VActions.helpers.translateEmployment(emp)}`;
        }
      }
      history.push(path);
    } else {
      history.push(`/user/${validator.mode}/${product}/${step}`);
    }
    if (step === 'decisions') {
      history.push(
        `/user/credit/${product}/${step}/${decision_status?.toLowerCase() || ''}`,
      );
    }
  };

  useEffect(() => {
    if (validator.current_step !== 'decisions' && !isLocalHost) {
      window.onbeforeunload = function () {
        return false;
      };
    } else {
      window.onbeforeunload = null;
    }
  }, [validator.current_step]);

  useEffect(
    () => () => {
      window.onbeforeunload = null;
      document.title =
        'Онлайн банк - источник лучших онлайн предложений Российский банков в одной анкете.';
    },
    [],
  );

  useEffect(() => {
    if (validator.current_step !== 'decisions') {
      document.addEventListener('visibilitychange', IdleHandler);
    } else {
      document.removeEventListener('visibilitychange', IdleHandler);
    }
    return () => document.removeEventListener('visibilitychange', IdleHandler);
  }, [validator.current_step]);

  useEffect(() => {
    redirect(validator.current_step, decision);
  }, [
    validator.current_step,
    validator.mode,
    validator.work_info.work,
    validator.work_info.employment_type.result.value,
    decision,
  ]);

  useEffect(() => {
    if (!isAuth) return;

    dispatch(ValidatorThunk.getAnketa());
  }, []);

  return null;
});

export default ApplicationForm;
