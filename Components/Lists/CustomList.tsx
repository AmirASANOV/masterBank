import React, { FC, Fragment, memo } from 'react';

import PressButton from '../Buttons/PressButton';
import { Grid, GridItem } from '../Grid/Grid';
import { iconsConfig } from '../Icons/IconConfig';
import Wrapper from '../Layouts/Wrapper';
import Subtitle from '../Text/Subtitle/Subtitle';
import Title from '../Text/Title/Title';

import {
  CustomListProps,
  GridListProps,
  HorizontalListProps,
  ListDescriptionItem,
} from './CustomListTypes';

import { Current, currentDomain } from '@/GlobalConfig';

export const GuttersObj = {
  8: 'mb-8',
  16: 'mb-16',
  24: 'mb-24',
  32: 'mb-32',
  40: 'mb-40',
  48: 'mb-48',
  56: 'mb-56',
};

const Item: React.FC<ListDescriptionItem> = memo(
  ({
    index,
    description,
    itemStyle,
    descriptionStyle,
    descriptionClassName,
    circleStyle,
    itemClassName,
    itemGutter,
  }) => (
    <li
      className={`${itemClassName || `description-item`}${
        itemGutter ? ` ${GuttersObj[itemGutter]}` : ''
      }`}
      style={itemStyle}
    >
      {typeof index === 'number' ? (
        <div
          className="circle-number"
          style={{
            ...circleStyle,
            borderColor: iconsConfig.colors[Current.circlesColor[currentDomain]],
          }}
        >
          <p className="circle-number__text title-text">{index}</p>
        </div>
      ) : (
        index
      )}
      {typeof description === 'string' ? (
        <p
          className={
            descriptionClassName || 'fs-22-17-15 color-black-main description-20'
          }
          style={descriptionStyle}
        >
          {description}
        </p>
      ) : (
        description
      )}
    </li>
  ),
);

const Description: React.FC<CustomListProps> = memo(
  ({
    title,
    subTitle,
    list,
    wrapperStyle,
    headerContainerStyle,
    titleStyle,
    subTitleStyle,
    itemStyle,
    listStyle,
    circleStyle,
    descriptionStyle,
    circleClassName,
    descriptionClassName,
    itemGutter,
    useWrapper,
    button,
    withLastMargin,
    titleClassName,
    subTitleClassName,
    itemClassName,
    wrapperClassName,
    classNameAdd,
    id,
    hidden,
  }) => {
    const random = Math.random();

    return (
      <Wrapper
        style={wrapperStyle}
        id={id}
        hidden={hidden}
        classNameAdd={classNameAdd}
        useWrapper={useWrapper}
        wrapperClassName={wrapperClassName}
      >
        {/* Отрисовка заголовков списка, если они были переданы */}
        {title || subTitle ? (
          <div style={headerContainerStyle || { marginBottom: 16, width: '100%' }}>
            {/* Если тип данных title === string, значит была передана строка, устанавливаю h2 со стилями по умолчанию */}
            {typeof title === 'string' ? (
              <h2 className={titleClassName || 'header-24'} style={titleStyle}>
                {title}
              </h2>
            ) : (
              title
            )}

            {/* Если тип данных subTitle === string, значит была передана строка, устанавливаю h3 со стилями по умолчанию */}
            {typeof subTitle === 'string' ? (
              <h3 className={subTitleClassName || 'subtitle'} style={subTitleStyle}>
                {subTitle}
              </h3>
            ) : (
              subTitle
            )}
          </div>
        ) : (
          ''
        )}

        {/* Отрисовка полученного списка, если он был передан */}
        {list && list.length > 0 ? (
          <ul className="description-list" style={listStyle}>
            {list.map((item, index) => (
              <Item
                index={index + 1}
                description={item}
                key={`list_item_${index * random}`}
                itemStyle={itemStyle}
                circleStyle={circleStyle}
                descriptionStyle={descriptionStyle}
                circleClassName={circleClassName}
                descriptionClassName={descriptionClassName}
                itemGutter={
                  list && list.length - 1 !== index
                    ? itemGutter
                    : withLastMargin
                      ? itemGutter
                      : undefined
                }
                itemClassName={itemClassName}
              />
            ))}
          </ul>
        ) : (
          ''
        )}

        {button ? <PressButton {...button} /> : ''}
      </Wrapper>
    );
  },
);

const HorizontalList: React.FC<HorizontalListProps> = memo(
  ({
    title,
    subTitle,
    list,
    wrapperStyle,
    headerContainerStyle,
    subTitleStyle,
    itemStyle,
    listStyle,
    descriptionStyle,
    descriptionClassName,
    useWrapper,
    button,
    ballSize,
  }) => (
    <Wrapper style={wrapperStyle} useWrapper={useWrapper}>
      <>
        {typeof title === 'string' ? (
          <h2
            className="title-text fs-30-24-17 color-black-main"
            style={headerContainerStyle}
          >
            {title}
          </h2>
        ) : (
          title
        )}

        {typeof subTitle === 'string' ? (
          <h3 className="subtitle" style={subTitleStyle}>
            {subTitle}
          </h3>
        ) : (
          subTitle
        )}

        {list && list.length > 0 ? (
          <div
            className="step-container"
            style={{
              justifyContent: 'center',
              margin: 0,
              ...listStyle,
            }}
          >
            {list.map((item, index) => (
              <Fragment key={`HorizontalList_item_${index + 1}`}>
                <div
                  className="step-container__progress-item"
                  style={{ width: '100%', maxWidth: 'none', ...itemStyle }}
                  key={`horizontal_list_item_${index + 1}`}
                >
                  <div
                    className="circle-number"
                    style={{
                      width: ballSize || 50,
                      height: ballSize || 50,
                      margin: 0,
                      borderColor: `${
                        iconsConfig.colors[Current.circlesColor[currentDomain]]
                      }`,
                    }}
                  >
                    <p className="circle-number__text title-text">{index + 1}</p>
                  </div>
                  <div
                    className={
                      descriptionClassName ||
                      `step-container__description-text title-text fs-20-17-14`
                    }
                    style={{ ...descriptionStyle }}
                  >
                    {item}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        ) : (
          ''
        )}

        {button ? (
          <div className="flex-jc-center-ai-start-wrap">
            <PressButton {...button} />
          </div>
        ) : (
          ''
        )}
      </>
    </Wrapper>
  ),
);

const GridList: FC<GridListProps> = ({
  gridConfig = {
    container: true,
    alignSpace: 24,
    gridStyle: { height: 'fit-content' },
  },
  list,
  gridItemConfig = {
    colDesktop: 6,
    colTablet: 6,
    colMobile: 12,
    justify: 'flex-start',
  },
  circleStyle,
  descriptionStyle,
  descriptionClassName,
  circleClassName,
  itemClassName,
  itemGutter,
  itemStyle,
  wrapperConfig,
  button,
  withLastMargin,
  headerContainerStyle,
  titleConfig,
  subtitleConfig,
}) => (
  <Wrapper {...wrapperConfig}>
    {titleConfig || subtitleConfig ? (
      <div style={headerContainerStyle || { marginBottom: 16, width: '100%' }}>
        <Title {...titleConfig} />
        <Subtitle {...subtitleConfig} />
      </div>
    ) : (
      ''
    )}

    {/* Отрисовка полученного списка, если он был передан */}
    {list && list.length > 0 ? (
      <Grid {...gridConfig}>
        {list.map((item: string, index: number) => (
          <GridItem {...gridItemConfig} key={`list_item_${index * Math.random()}`}>
            <Item
              index={index + 1}
              description={item}
              itemStyle={itemStyle}
              circleStyle={circleStyle}
              descriptionStyle={descriptionStyle}
              circleClassName={circleClassName}
              descriptionClassName={descriptionClassName}
              itemGutter={
                list && list.length - 1 !== index
                  ? itemGutter
                  : withLastMargin
                    ? itemGutter
                    : undefined
              }
              itemClassName={itemClassName}
            />
          </GridItem>
        ))}
      </Grid>
    ) : (
      ''
    )}

    {button ? <PressButton {...button} /> : ''}
  </Wrapper>
);

const CustomList = {
  Description,
  HorizontalList,
  Item,
  GridList,
};

export default CustomList;
