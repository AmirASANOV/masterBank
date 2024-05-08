import React, { FC } from 'react';

import styles from './Form.module.sass';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import CreditParameters from '@/Pages/ApplicationForm/FormStages/CreditParameters';
import { HypothecForm } from '@/Pages/ApplicationForm/HypothecForm/HypothecForm';
import { App } from '@/ProjectTypes/AppTypes';

type FormProps = {
  hypothecPlace?: boolean;
};

const FirstStageForm: FC<FormProps> = ({ hypothecPlace }) => {
  const credit = useAppSelector(state => state.validator.credit_parameters_info);
  const getTitle = (v: App.CreditProduct | null | undefined) => {
    if (!v) return 'карту';
    if (v === 'credit_cash') return 'кредит';
    if (v === 'mfo') return 'кредит';
    if (v === 'hypothec') return 'ипотеку';
    if (v === 'car_credit') return 'автокредит';
    return 'карту';
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Как получить {getTitle(credit.credit_target.result?.value?.value)}?
      </h3>
      <p className={styles.description}>Заполните заявку и узнайте условия за 2 минуты</p>

      {!hypothecPlace ? (
        <CreditParameters
          placement="children"
          lsKey="credit_parameters_info"
          placementHeader="Заполните анкету, чтобы узнать индивидуальные условия"
        />
      ) : (
        <HypothecForm />
      )}
    </div>
  );
};

export default FirstStageForm;
