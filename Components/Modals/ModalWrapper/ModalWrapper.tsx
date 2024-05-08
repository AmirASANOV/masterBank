import React, { ReactNode } from 'react';

import { Colors } from '../../Icons/IconConfig';
import { Reject } from '../../Icons/Reject';

import s from './ModalWrapper.module.sass';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { currentDomain } from '@/GlobalConfig';

type ModalPropsType = {
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
  icon?: boolean;
  className?: string;
  children?: ReactNode;
};

export const ModalWrapper: React.FC<ModalPropsType> = ({
  modalActive,
  setModalActive,
  icon = true,
  className,
  children,
}) => {
  const resolution = useAppSelector(state => state.config.viewport);

  const iconSize = {
    desktop: 20,
    tablet: 18,
    mobile: 16,
  };

  /* eslint-disable */
  const iconColor = {
    sovbank: 'sovbankColor' as keyof Colors,
    onbank: 'primaryColor' as keyof Colors,
    first_credit: 'firstCreditColor' as keyof Colors,
  } as any;

  return (
    <div
      className={modalActive ? `${s.modal} ${s.modal__active}` : s.modal}
      onClick={() => setModalActive(false)}
      aria-hidden
    >
      <div
        className={
          modalActive
            ? `${s.modal__content} ${s.modal__content_active} ${className}`
            : s.modal__content
        }
        onClick={e => e.stopPropagation()}
        aria-hidden
      >
        {icon && (
          <div className={s.close} onClick={() => setModalActive(false)} aria-hidden>
            <Reject
              size={iconSize[resolution]}
              containerStyle={{ cursor: 'pointer' }}
              color={resolution !== 'mobile' ? iconColor[currentDomain] : 'whiteColor'}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
