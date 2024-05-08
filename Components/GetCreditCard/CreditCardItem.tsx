import React, { FC } from 'react';
import './styles/GetCreditCard.sass';

interface CreditCardItemProps {
  id: number | string;
  title: string;
  subtitle: string;
}

const CreditCardItem: FC<CreditCardItemProps> = ({ id, title, subtitle }) => (
  <div className="credit-card-item">
    <div className="credit-card-item__header">{`0${id}`}</div>
    <div className="credit-card-item__text">
      <div className="credit-card-item__text-title">{title}</div>
      <div className="credit-card-item__text-subtitle">{subtitle}</div>
    </div>
  </div>
);

export default CreditCardItem;
