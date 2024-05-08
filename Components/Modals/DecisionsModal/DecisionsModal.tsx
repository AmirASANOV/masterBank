import React, { FC } from 'react';

import PressButton from '../../Buttons/PressButton';
import { Accept } from '../../Icons/Accept';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

import s from './DecisionsModal.module.sass';

type DecisionsModalPropsType = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  redirectLink: string;
};

export const DecisionsModal: FC<DecisionsModalPropsType> = ({
  openModal,
  setOpenModal,
  redirectLink,
}) => (
  <ModalWrapper modalActive={openModal} setModalActive={setOpenModal} icon={false}>
    <div className={s.content}>
      <h3>Заявка одобрена</h3>
      <Accept color="greenColor" />
      <div className={s.content__btn}>
        <PressButton
          type="main"
          text="Получить кредит"
          fullWidth
          onClick={() => {
            setOpenModal(false);
            window.open(redirectLink, '_blank');
          }}
        />
      </div>
    </div>
  </ModalWrapper>
);
