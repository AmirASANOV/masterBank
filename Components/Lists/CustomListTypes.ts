import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react';

import { BtnProps } from '../Buttons/PressButton';
import { GridItemProps, GridProps } from '../Grid/Grid';
import { WrapperProps } from '../Layouts/Wrapper';
import { SubTitleProps, TitleProps } from '../Text/Types/Types';

import { GuttersObj } from './CustomList';

export interface CustomListProps extends ListItem, Omit<WrapperProps, 'style'> {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  list?: Array<string>;
  wrapperStyle?: CSSProperties;
  headerContainerStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  subTitleStyle?: CSSProperties;
  listStyle?: CSSProperties;
  useWrapper?: boolean;
  button?: BtnProps;
  withLastMargin?: boolean;
  titleClassName?: string;
  subTitleClassName?: string;
}

export interface HorizontalListProps extends CustomListProps {
  ballSize?: number;
  lineClassName?: string;
  lineStyle?: CSSProperties;
  circleBold?: boolean;
}

export interface ListDescriptionItem extends ListItem {
  index: ReactNode | number;
  description: ReactNode | string;
  descriptionType?: 'text' | 'link';
}

export interface ListItem {
  itemStyle?: CSSProperties;
  circleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  circleClassName?: string;
  descriptionClassName?: string;
  itemClassName?: string;
  itemGutter?: keyof ListItemGutter;
}

export type MinimizeCustomListProps = Omit<
  CustomListProps,
  | 'title'
  | 'titleStyle'
  | 'titleClassName'
  | 'subTitleClassName'
  | 'subTitle'
  | 'subTitleStyle'
  | 'wrapperClassName'
  | 'wrapperStyle'
  | 'useWrapper'
  | 'classNameAdd'
  | 'id'
  | 'hidden'
  | 'onClick'
  | 'listStyle'
>;

export interface GridListProps extends MinimizeCustomListProps {
  gridConfig?: GridProps;
  gridItemConfig?: GridItemProps;
  titleConfig?: PropsWithChildren<TitleProps<HTMLHeadingElement>>;
  subtitleConfig?: PropsWithChildren<SubTitleProps<HTMLSpanElement>>;
  wrapperConfig?: WrapperProps;
}

export type ListItemGutter = typeof GuttersObj;
