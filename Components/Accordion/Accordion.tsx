import React, { useState, FC } from 'react';

import s from './style/Accordion.module.sass';
import { AccordionPropsType } from './type';

import arrow from '@/Assets/SVG/Arrow.svg';

export const Accordion: FC<AccordionPropsType> = ({ title, children, className }) => {
  const [isActive, setIsActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('');

  function toggleAccordion() {
    setIsActive(isActive === '' ? s.active : '');
    setHeight(isActive === s.active ? '0px' : `10000px`);
    setRotate(isActive === s.active ? '' : s.rotate);
  }

  return (
    <article className={s.accordion}>
      <button
        id="not-open-window"
        type="button"
        className={className || s.accordion__button}
        onClick={toggleAccordion}
      >
        <p className={s.accordion__title}>{title}</p>
        <img
          src={arrow}
          className={
            className ? `${s.accordion_icon} ${rotate}` : `${s.accordion__icon} ${rotate}`
          }
          alt="arrow btn"
        />
      </button>
      <div style={{ maxHeight: `${height}` }} className={s.accordion__content}>
        {children}
      </div>
    </article>
  );
};
