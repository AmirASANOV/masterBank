import React, { FC } from 'react';

import './styles/OnlyPassport.sass';
import ListItem from '../ListItem/ListItem';

import { ListItemType } from '@/Pages/CreditCardPage/deliveryData';

interface OnlyPassportProps {
  title: string;
  data: ListItemType[];
}

const NeedsOnlyPassportMobile: FC<OnlyPassportProps> = ({ data, title }) => (
  <div className="onlypassport-container">
    <div className="onlypassport-title">{title}</div>
    <div className="onlypassport-content">
      {data.map((el, index) => (
        <ListItem img={el.img} text={el.text} key={`${el}_${index + 1}`} />
      ))}
    </div>
  </div>
);

export default NeedsOnlyPassportMobile;
