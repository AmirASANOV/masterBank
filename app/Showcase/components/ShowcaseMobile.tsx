import React from 'react';

import s from '../style/Showcase.module.sass';
import { ShowcaseDataType } from '../type';

import { ShowcaseMobileItem } from './ShowcaseMobileItem';

import { GridItem } from '@/Components/Grid/Grid';
import Wrapper from '@/Components/Layouts/Wrapper';

type ShowcaseMobilePropsType = {
  showcaseArray: ShowcaseDataType;
  onclickHandler: (product: string) => void;
};

export const ShowcaseMobile: React.FC<ShowcaseMobilePropsType> = ({
  showcaseArray,
  onclickHandler,
}) => (
  <>
    {showcaseArray.map((item, index) => (
      <GridItem key={`showcase__item_${index + 1}`} colDesktop={12} direction="column">
        <h2 className={s.showcase__subtitle}>{item.title}</h2>
        {item.offers.map(el => (
          <Wrapper
            wrapperClassName={s.showcase__items}
            key={`showcase-mobile__offer_${index + Math.random()}`}
          >
            {el.link ? (
              <a
                href={el.link}
                className={s.horizontalPaddings}
                style={{ color: 'inherit' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShowcaseMobileItem
                  subtitle={el.subtitle}
                  image={el.image}
                  props={el.props}
                  product={item.product}
                  onclickHandler={onclickHandler}
                />
              </a>
            ) : (
              <div className={s.horizontalPaddings}>
                <ShowcaseMobileItem
                  subtitle={el.subtitle}
                  image={el.image}
                  props={el.props}
                  product={item.product}
                  onclickHandler={onclickHandler}
                />
              </div>
            )}
          </Wrapper>
        ))}
      </GridItem>
    ))}
  </>
);
