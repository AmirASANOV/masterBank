import React from 'react';

import s from '../style/Showcase.module.sass';
import { ShowcaseDataType } from '../type';

import { ShowcaseDesktopItem } from './ShowcaseDesktopItem';

import { GridItem } from '@/Components/Grid/Grid';
import Wrapper from '@/Components/Layouts/Wrapper';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

type ShowcaseDesktopPropsType = {
  showcaseArray: ShowcaseDataType;
  resolution: Viewport;
  onclickHandler: (product: string) => void;
};

export const ShowcaseDesktop: React.FC<ShowcaseDesktopPropsType> = ({
  showcaseArray,
  resolution,
  onclickHandler,
}) => (
  <>
    {showcaseArray.map((item, index) => (
      <GridItem key={`showcase__item_${index + 1}`} colDesktop={12}>
        <h2 className={s.showcase__subtitle}>{item.title}</h2>
        {item.offers.map(el => (
          <Wrapper
            wrapperClassName={s.showcase__items}
            key={`showcase-desktop__offer_${index + Math.random()}`}
          >
            {el.link ? (
              <a
                href={el.link}
                className={s.horizontalPaddings}
                target="_blank"
                style={{ width: '100%', color: 'inherit' }}
                rel="noopener noreferrer"
              >
                <ShowcaseDesktopItem
                  image={el.image}
                  props={el.props}
                  product={item.product}
                  resolution={resolution}
                  onclickHandler={onclickHandler}
                />
              </a>
            ) : (
              <div className={s.horizontalPaddings}>
                <ShowcaseDesktopItem
                  image={el.image}
                  props={el.props}
                  product={item.product}
                  resolution={resolution}
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
