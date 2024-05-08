import React, { CSSProperties, ReactNode } from 'react';

import { RefType } from '@/CustomHooks/useSelectedList';
import { GutterBase, ViewportConstructor } from '@/ProjectTypes/ViewportTypes';

export type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type SubtitleType = 'span';
export type TextAlign =
  | 'center'
  | 'justify'
  | 'left'
  | 'right'
  | 'auto'
  | 'inherit'
  | 'start'
  | 'end';

export interface TitleProps<T = HTMLElement> {
  /**
   * @displayName TitleProps - свойства пропсов для компоненты Title, принимает Generic
   *
   * @property titleType - может принимать 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' -
   * если не передается, то по дефолту устанавливается 'h2'
   *
   * @property titleClassName - строка, которая устанавливается как класс для html - заголовка
   *
   * @property titleStyle - объект стилей, который будет применен для заголовка
   *
   * @property titleRef - React Ref Object, который будет установлен на заголовок
   *
   * @property titleMargins - объект внешних отступов с разбивкой по типам устройств -
   * desktop, tablet, mobile, принимающие необязательный объект с необязательными свойствами - top, right, bottom, left
   *
   * @property titlePaddings - объект внутренних отступов с разбивкой по типам устройств -
   * desktop, tablet, mobile, принимающие необязательный объект с необязательными свойствами - top, right, bottom, left
   *
   * @property titleTextAlign - объект для выравнивания текста внутри html-тега, принимает объект с разбивкой
   * по типам устройств, каждое из устройств может получить независимое значение -
   * 'center' | 'justify' | 'left' | 'right' | 'auto' | 'inherit' | 'start' | 'end', если не передается, то 'inherit'
   *
   */

  titleType?: HeadlineType;
  titleClassName?: string;
  titleStyle?: CSSProperties;
  titleRef?: RefType<T>;
  titleMargins?: ViewportConstructor<GutterBase>;
  titlePaddings?: ViewportConstructor<GutterBase>;
  titleTextAlign?: ViewportConstructor<TextAlign>;
  fullGrid?: boolean;
}

export interface SubTitleProps<T = HTMLElement> {
  /**
   * @displayName SubTitleProps - свойства пропсов для компоненты Subtitle, принимает Generic
   *
   * @param subtitleType - может принимать 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' -
   * если не передается, то по дефолту устанавливается 'h2'
   *
   * @param subtitleClassName - строка, которая устанавливается как класс для html - заголовка
   *
   * @param subtitleStyle - объект стилей, который будет применен для заголовка
   *
   * @param subtitleRef - React Ref Object, который будет установлен на заголовок
   *
   * @param subtitleMargins - объект внешних отступов с разбивкой по типам устройств -
   * desktop, tablet, mobile, принимающие необязательный объект с необязательными свойствами - top, right, bottom, left
   *
   * @param subtitlePaddings - объект внутренних отступов с разбивкой по типам устройств -
   * desktop, tablet, mobile, принимающие необязательный объект с необязательными свойствами - top, right, bottom, left
   *
   * @param subtitleTextAlign - объект для выравнивания текста внутри html-тега, принимает объект с разбивкой
   * по типам устройств, каждое из устройств может получить независимое значение -
   * 'center' | 'justify' | 'left' | 'right' | 'auto' | 'inherit' | 'start' | 'end', если не передается, то 'inherit'
   *
   */

  subtitleType?: SubtitleType;
  subtitleClassName?: string;
  subtitleStyle?: CSSProperties;
  subtitleRef?: RefType<T>;
  subtitleMargins?: ViewportConstructor<GutterBase>;
  subtitlePaddings?: ViewportConstructor<GutterBase>;
  subtitleTextAlign?: ViewportConstructor<TextAlign>;
  fullGrid?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  children?: ReactNode;
}
