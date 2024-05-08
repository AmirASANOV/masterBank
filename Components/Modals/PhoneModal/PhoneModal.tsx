import React from 'react';

import { initialStateValid } from '../../ApplicationFormComponents/ResendForm';
import PressButton from '../../Buttons/PressButton';
import { FormInput } from '../../Inputs/OtherInputs';
import { Prompt } from '../../Messages/Prompt';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

import { checkPhone, resetMask } from '@/Common/AppFormController/ControllersFunc';
import { setInputStatus } from '@/Common/AppFormHelpers/Helpers';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { usePhoneRemoving } from '@/CustomHooks/usePhoneRemoving';
import { setRemovePhoneModal } from '@/ReduxStore/reducer/userReducer/userReducer';
import { onPhoneInput } from '@/Utils/utils';

const PhoneModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { phoneRemoveHandler, valid, setValid } = usePhoneRemoving();
  const openModal = useAppSelector(state => state.session.removePhoneModal);

  const setOpenModal = (v: boolean) => {
    dispatch(setRemovePhoneModal(v));
    setValid(initialStateValid);
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const unmaskedValue = resetMask(event.target.value);
    if (unmaskedValue.length > 1) {
      setValid(
        checkPhone(
          unmaskedValue,
          true,
          'return_phone_without_mask',
          '+7-(___)-___-__-__',
          true,
          [],
        ),
      );
    }
  };

  return (
    <div>
      {openModal && (
        <div className="modal-container" style={{ perspective: 2000 }}>
          <ModalWrapper
            modalActive={openModal}
            setModalActive={setOpenModal}
            icon={false}
          >
            <div className="modal-body">
              <Prompt
                title="Укажите ваш номер телефона"
                titleStyle={{ textAlign: 'center' }}
              />
              <FormInput
                inputStyle={{ background: 'rgba(3, 49, 140, 0.12)', padding: 10 }}
                inputMode="tel"
                animationEffect="fade-up"
                mask="+7-(999)-999-99-99"
                alwaysShowMask
                containerStyle={{ marginTop: 20 }}
                labelStyle={{ textAlign: 'center' }}
                defaultValue={valid.value || ''}
                errorMessage={valid.value.length === 11 ? valid.message : ''}
                status={setInputStatus(valid)}
                required={valid.required}
                onInput={e => onInput(e)}
                maskedHandler={onPhoneInput}
              />
              <PressButton
                style={{ marginTop: '20px' }}
                type="mainBold"
                text="Отписаться"
                onClick={phoneRemoveHandler}
              />
            </div>
          </ModalWrapper>
        </div>
      )}
    </div>
  );
};

export default PhoneModal;
