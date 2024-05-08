import React from 'react';

import PressButton from '../../Buttons/PressButton';
import { RingingPhone } from '../../Icons/RingingPhone';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

import s from './HypothecModal.module.sass';

import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Current, currentDomain } from '@/GlobalConfig';
import { setShowHypothecModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import {
  AppFormActions,
  initialValidatorState,
} from '@/ReduxStore/reducer/Validator/ValidatorReducer';

export const HypothecModal: React.FC = () => {
  const openModal = useAppSelector(
    state => state.config.modalWindow.actions.showHypothecModal,
  );
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();

  const setOpenModal = (value: boolean) => {
    dispatch(setShowHypothecModal(value));
  };

  const onClickHandler = () => {
    dispatch(AppFormActions.clearHypothecForm(initialValidatorState.hypothec_info));
    history.push('/credit_card/info');
    setOpenModal(false);
  };

  return (
    <ModalWrapper setModalActive={setOpenModal} modalActive={openModal}>
      <div className={s.modal}>
        <h1 className={s.modal__title}>Ваша заявка принята!</h1>
        <RingingPhone size={45} color={Current.pdfColor[currentDomain]} />
        <p>Ожидайте звонка из банка в ближайшее время</p>
        <PressButton
          type="mainBold"
          text="Вернуться на главную"
          onClick={onClickHandler}
        />
      </div>
    </ModalWrapper>
  );
};
