import React from 'react';

import PressButton from '../../Buttons/PressButton';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

import { subModalData } from './data';
import s from './styles/SubModal.module.sass';

import { ReactComponent as Logo } from '@/Assets/logo/newLogo.svg';
import { ReactComponent as ExitLogo } from '@/Assets/SVG/X.svg';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { setSubModal, showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const SubModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const subModal = useAppSelector(state => state.config.subModal);
  const setOpenModal = (value: boolean) => {
    dispatch(setSubModal(value));
  };
  const exitHandle = () => {
    setOpenModal(false);
  };
  const creditButtonHandler = () => {
    dispatch(showModal(true));
  };
  return (
    <div>
      {subModal && (
        <div className="modal-container" style={{ perspective: 2000 }}>
          <ModalWrapper
            className={s.modal}
            modalActive={subModal}
            setModalActive={setOpenModal}
            icon={false}
          >
            <div className={`modal-body ${s.modal__body}`}>
              <div className={s.modal__header}>
                <Logo />
                <button className={s.modal__exitButton} onClick={exitHandle}>
                  <ExitLogo />
                </button>
              </div>
              <div className={s.modal__content}>
                <div className={s.content__commonItem}>
                  <span className={s.modal__title}>
                    {'Вам одобрена\nкредитная карта от\nSobank'}
                  </span>
                  <span className={s.modal__subtitle}>Лимит до 1 000 000 ₽</span>
                  <span className={s.modal__subtitle}>Нет процентов 365 дней</span>
                  <span className={s.modal__subtitle}>Бесплатное обслуживание</span>
                  <span className={s.modal__subtitle}>дарим 2000 руб</span>
                  <span className={s.modal__subtitle}>Кэшбэк 30% от суммы покупок</span>
                  <span className={s.modal__subtitle}>возвращаем рублями</span>
                </div>
                <div className={`${s.content__commonItem} ${s.fw600}`}>
                  <span className={s.modal__subtitle}>
                    {
                      'Это бесплатный запасной\nкошелек. Не пользуетесь\nкартой - платить ничего\nне нужно!'
                    }
                  </span>
                </div>
                <PressButton
                  style={{ marginTop: '20px' }}
                  type="mainBold"
                  text="Оформить карту"
                  onClick={creditButtonHandler}
                />
                <div className={s.content__stepsItem}>
                  <span className={s.modal__title}>
                    {'Получите карту в\nнесколько шагов:'}
                  </span>
                </div>
                {subModalData.map((item, index) => (
                  <div key={item.text} className={s.step}>
                    <span className={s.step__number}>{`0${index + 1}`}</span>
                    <span className={s.step__text}>{item.text}</span>
                  </div>
                ))}
                <PressButton
                  style={{ marginTop: '20px' }}
                  type="mainBold"
                  text="Оформить карту"
                  onClick={creditButtonHandler}
                />
              </div>
            </div>
          </ModalWrapper>
        </div>
      )}
    </div>
  );
};

export default SubModal;
