import React, { FC } from 'react';

import { ListItemType } from '@/Pages/CreditCardPage/deliveryData';
import '../GetFreeDelivery/styles/GetFreeDelivery.sass';

const ListItem: FC<ListItemType> = ({ img, text }) => (
  <div className="delivery-item">
    <div className="delivery-item-image-container">
      <img className="delivery-item-image" src={img} alt="" />
    </div>
    <div className="delivery-item-text">{text}</div>
  </div>
);

export default ListItem;
