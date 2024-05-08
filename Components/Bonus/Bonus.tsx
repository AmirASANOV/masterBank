import React, { FC } from 'react';

import s from './Bonus.module.sass';

interface IPropsBonus {
  items: IBonus[];
  title: string;
  buttonText: string;
}

type IBonus = {
  nameItem: string;
  imageUrl: string;
};

const Bonus: FC<IPropsBonus> = ({ items, title, buttonText }) => (
  <div className={s.wrapper}>
    <h1 className={s.title}>{title}</h1>
    <div className={s.images}>
      {items.map(item => (
        <div className={s.container}>
          <img src={item.imageUrl} alt="png" />
          <p className={s.nameItem}>{item.nameItem}</p>
        </div>
      ))}
    </div>
    <button className={s.button}>{buttonText}</button>
  </div>
);

export default Bonus;
