import React, { FC } from 'react';

import s from '../style/Showcase.module.sass';

type PropItemPropsType = {
  icon: string;
  title: string;
  value: string;
};

export const PropItem: FC<PropItemPropsType> = ({ icon, title, value }) => (
  <div className={s.props}>
    <div className={s.props__title}>
      <img src={icon} alt="icon mfo" />
      <p>{title}</p>
    </div>
    <div className={s.props__value}>{value}</div>
  </div>
);
