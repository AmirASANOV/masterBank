import React from 'react';

import s from '../style/Showcase.module.sass';
import { ShowcaseUniversalItemPropsType } from '../type';

import { PropItem } from './PropItem';

import PressButton from '@/Components/Buttons/PressButton';
import { Grid, GridItem } from '@/Components/Grid/Grid';

export const ShowcaseMobileItem: React.FC<ShowcaseUniversalItemPropsType> = ({
  link,
  subtitle,
  image,
  props,
  product,
  onclickHandler,
}) => (
  <Grid container align="center" alignSpace={10}>
    <GridItem colMobile={12} justify="space-between">
      <div>
        {subtitle && <p className={s.showcase__image_subtitle}>{subtitle}</p>}
        <img src={image} alt="bank icon" className={s.showcase__image} />
      </div>
      {link ? (
        <PressButton
          htmlType="link"
          href={link}
          target="_blank"
          type="mainBold"
          text="Получить"
          style={{
            maxWidth: 110,
            maxHeight: 26,
            fontSize: 10,
            display: 'flex',
            padding: '0 10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ) : (
        <PressButton
          onClick={() => onclickHandler(product)}
          type="mainBold"
          text="Получить"
          style={{
            maxWidth: 110,
            maxHeight: 26,
            fontSize: 10,
            display: 'flex',
            padding: '0 10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    </GridItem>
    <GridItem colMobile={12} justify="space-between">
      {props.map((prop, index) => (
        <PropItem
          key={`${prop.title}_${index + 1}`}
          icon={prop.icon}
          title={prop.title}
          value={prop.value}
        />
      ))}
    </GridItem>
  </Grid>
);
