import React from 'react';

import s from '../style/Showcase.module.sass';
import { ShowcaseUniversalItemPropsType } from '../type';

import { PropItem } from './PropItem';

import PressButton from '@/Components/Buttons/PressButton';
import { Grid, GridItem } from '@/Components/Grid/Grid';

export const ShowcaseDesktopItem: React.FC<ShowcaseUniversalItemPropsType> = ({
  link,
  subtitle,
  image,
  props,
  product,
  resolution,
  onclickHandler,
}) => (
  <Grid container align="center" gridStyle={{ alignItems: 'center' }}>
    <GridItem colDesktop={2} style={{ alignSelf: 'center' }}>
      <img src={image} alt="bank icon" className={s.showcase__image} />
      {subtitle && <p className={s.showcase__image_subtitle}>{subtitle}</p>}
    </GridItem>
    <GridItem
      colDesktop={8}
      justify="space-around"
      className={product === 'credit_cash' && s.showcase__cash}
    >
      {props.map((prop, index) => (
        <PropItem
          key={`${prop.title}_${index + 1}`}
          icon={prop.icon}
          title={prop.title}
          value={prop.value}
        />
      ))}
    </GridItem>
    <GridItem colDesktop={2}>
      {link ? (
        <PressButton
          htmlType="link"
          href={link}
          target="_blank"
          type="mainBold"
          text="Получить"
          style={{
            maxWidth: resolution === 'desktop' ? 169 : 106,
            height: resolution === 'desktop' ? 50 : 36,
            fontSize: resolution === 'desktop' ? 18 : 12,
            display: 'flex',
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
            maxWidth: resolution === 'desktop' ? 169 : 106,
            height: resolution === 'desktop' ? 50 : 36,
            fontSize: resolution === 'desktop' ? 18 : 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    </GridItem>
  </Grid>
);
