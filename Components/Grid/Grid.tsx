import React, { CSSProperties, ReactNode } from 'react';

import { useAppSelector } from '@/CustomHooks/useAppSelector';

type Disable = 'justifyContent' | 'alignItems' | 'flexDirection' | 'flexWrap';
type FlexStyle = Omit<CSSProperties, Disable>;

export interface GridProps {
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  space?: number;
  alignSpace?: number;
  container?: boolean;
  style?: FlexStyle;
  className?: string;
  gridStyle?: CSSProperties;
  children?: ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  justify = 'flex-start',
  align = 'flex-start',
  direction = 'row',
  wrap = 'wrap',
  space = 0,
  alignSpace = 0,
  container = false,
  style,
  children,
  className,
  gridStyle,
}) => {
  if (space && !container) {
    throw Error(
      'Для того, чтобы использовать space-аттрибут в компоненте Grid - передай container=true',
    );
  }

  return (
    <div
      className={className}
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        flexWrap: wrap,
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: `repeat(12, 1fr)`,
          gridRowGap: alignSpace,
          gridColumnGap: space,
          gridAutoRows: 'auto',
          width: container ? '100%' : '',
          height: 'fit-content',
          ...gridStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps
  extends Omit<GridProps, 'space' | 'alignSpace' | 'container'> {
  colDesktop?: ColumnCount;
  colTablet?: ColumnCount;
  colMobile?: ColumnCount;
  textAlign?: CSSProperties['textAlign'];
  useWrapperLayout?: boolean;
  className?: string;
  children?: ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  justify = '',
  align = '',
  direction = 'row',
  wrap = 'wrap',
  colDesktop,
  colMobile,
  colTablet,
  style,
  textAlign,
  children,
  useWrapperLayout,
  className,
}) => {
  const viewport = useAppSelector(state => state.config.viewport);
  const flex = {
    desktop: `span ${colDesktop || colTablet || colMobile} / auto`,
    tablet: `span ${colTablet || colDesktop || colMobile} / auto`,
    mobile: `span ${colMobile || colTablet || colDesktop} / auto`,
  };

  return (
    <div
      className={
        (useWrapperLayout ? 'wrapper-background' : '') +
        (className ? ` ${className}` : '')
      }
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        textAlign,
        fontSize: 0,
        flexDirection: direction,
        gridColumn: flex[viewport],
        height: 'inherit',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
