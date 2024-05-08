import React, { CSSProperties, Fragment, ReactNode } from 'react';

import { useAppSelector } from '@/CustomHooks/useAppSelector';

export interface LayoutProps {
  style?: CSSProperties;
  className?: string;
  config?: 'gray-layout' | 'blue-layout';
  id?: string;
  background?: keyof BackgroundLayout;
  layoutStyle?: CSSProperties;
  useLayout?: boolean;
  marginBottom?: boolean;
  children: ReactNode;
}

type BackgroundLayoutProps = typeof backgrounds;
export type BackgroundLayout = {
  [key in keyof BackgroundLayoutProps]: string;
};

const backgrounds = {
  lightBlue: 'linear-gradient(90deg, #E3EAFA -5.24%, #FFFFFF 88.86%)',
  lightBluePurple: 'linear-gradient(90deg, #F8F3FF 15.3%, #E3EAFA 104.34%)',
  lightBluePurpleReverse: 'linear-gradient(90deg, #E3EAFA -5.24%, #F8F3FF 84.93%)',
  lightBlueReverse: 'linear-gradient(90deg, #FFFFFF 5.6%, #E3EAFA 104.34%)',
  linearGray: 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 36.46%)',
  grayLayout: '#F8F8F8',
  blueLayout: 'linear-gradient(90deg, #E3EAFA -5.24%, rgba(245, 248, 255, 0.5) 88.86%)',
  sovbankLayout: 'linear-gradient(90deg, #E1F3FF -5.24%, #FFFFFF 84.93%)',
  firstCreditLayout: 'linear-gradient(90deg, #E4FAFF -5.24%, #FFFFFF 88.86%)',
  greenBackground: '#f6fdff',
  masterBankLayout: 'linear-gradient(90deg, #FFF5DB -5.24%, #EBE7DE 84.93%)',
  gray: '#e3eaf1',
  hz: '#EEEFEF',
};

export const margins = {
  desktop: 56,
  tablet: 40,
  mobile: 24,
};

const Layout: React.FC<LayoutProps> = ({
  style,
  children,
  className,
  config,
  id,
  background,
  layoutStyle,
  marginBottom,
  useLayout = true,
}) => {
  const resolution = useAppSelector(state => state.config.viewport);

  return (
    <>
      {!useLayout ? (
        <>{children}</>
      ) : (
        <div
          style={{
            width: '100%',
            background: background ? backgrounds[background] : '',
            ...layoutStyle,
          }}
        >
          <div
            className={`wrapper ${className || ''} ${config || ''}`}
            style={
              marginBottom
                ? { marginBottom: margins[resolution], ...style }
                : { ...style }
            }
            id={id}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
