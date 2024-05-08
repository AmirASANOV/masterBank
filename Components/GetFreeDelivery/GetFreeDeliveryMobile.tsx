import React, { FC } from 'react';

import './styles/GetFreeDelivery.sass';
import ListItem from '../ListItem/ListItem';

import { ListItemType } from '@/Pages/CreditCardPage/deliveryData';

interface GetFreeDeliveryProps {
  title: string;
  data: ListItemType[];
}

const GetFreeDeliveryMobile: FC<GetFreeDeliveryProps> = ({ title, data }) => (
  <div className="get-free-delivery-container">
    <div className="get-free-delivery-container-header">{title}</div>
    <div className="get-free-delivery-container-content">
      {data.map((el, index) => (
        <ListItem img={el.img} text={el.text} key={`${el}_${index + 1}`} />
      ))}
    </div>
  </div>
);

export default GetFreeDeliveryMobile;
