import React, { CSSProperties, FC } from 'react';

import Subtitle from '../Text/Subtitle/Subtitle';

import { IconProps, iconsConfig } from './IconConfig';

const AppleLogo: React.FC<IconProps> = ({ size, containerClassName, containerStyle }) => (
  <div
    style={{
      width: size || iconsConfig.sizes.width,
      height: size || iconsConfig.sizes.height,
      flexShrink: 0,
      ...containerStyle,
    }}
    className={containerClassName}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.1012 19.007C4.4724 18.9729 3.88068 18.6987 3.4482 18.241C2.9308 17.7432 2.46908 17.1906 2.0712 16.593C1.44968 15.703 0.958394 14.7288 0.612204 13.7C0.220408 12.5931 0.0142954 11.4291 0.00220416 10.255C-0.0282334 9.10296 0.257064 7.96453 0.827204 6.963C1.24478 6.2411 1.84039 5.63825 2.5572 5.212C3.26609 4.78756 4.07502 4.5591 4.9012 4.55C5.52402 4.58685 6.13606 4.7292 6.7112 4.971C7.1702 5.173 7.6522 5.315 8.1472 5.393C8.69322 5.27862 9.22676 5.11115 9.7402 4.893C10.3479 4.65573 10.9913 4.52286 11.6432 4.5C11.7302 4.5 11.8162 4.5 11.8992 4.51C13.3292 4.551 14.6592 5.253 15.4992 6.41C14.8436 6.76063 14.2981 7.28619 13.9233 7.92826C13.5486 8.57032 13.3592 9.30375 13.3762 10.047C13.3697 10.6153 13.4837 11.1786 13.7107 11.6997C13.9377 12.2207 14.2725 12.6878 14.6932 13.07C15.0762 13.435 15.5222 13.727 16.0092 13.933C15.9092 14.233 15.7942 14.523 15.6722 14.815C15.3952 15.4603 15.0535 16.0757 14.6522 16.652C14.2728 17.2293 13.8311 17.7631 13.3352 18.244C12.8828 18.6929 12.2798 18.9577 11.6432 18.987C11.1036 18.9631 10.5734 18.8365 10.0812 18.614C9.55041 18.3828 8.97998 18.2561 8.4012 18.241C7.8061 18.2527 7.21879 18.3787 6.6712 18.612C6.19825 18.8254 5.69295 18.9582 5.1762 19.005L5.1012 19.007ZM8.2512 4.5C8.1762 4.5 8.1012 4.5 8.0262 4.491C8.01043 4.37197 8.00208 4.25207 8.0012 4.132C8.03391 3.13313 8.42427 2.17924 9.1012 1.444C9.47983 1.02145 9.93874 0.678463 10.4512 0.435C10.9288 0.189154 11.4507 0.0412566 11.9862 0C12.0012 0.131 12.0012 0.259 12.0012 0.381C11.9871 1.36417 11.6177 2.30902 10.9612 3.041C10.6433 3.46722 10.236 3.8187 9.76785 4.07074C9.29968 4.32279 8.78202 4.46931 8.2512 4.5Z"
        fill="white"
      />
    </svg>
  </div>
);
export const DownloadAtAppStore: FC<{ style?: CSSProperties }> = ({ style }) => (
  <div
    style={{
      background: '#2D3034',
      padding: 7,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 4,
      width: '115px',
      ...style,
    }}
  >
    <AppleLogo size={20} containerStyle={{ marginRight: 6 }} />
    <Subtitle
      subtitleClassName="subtitle"
      subtitleStyle={{ color: 'white', fontSize: 9 }}
    >
      Загрузите в<br />
      <Subtitle
        subtitleClassName="subtitle"
        subtitleStyle={{ color: 'white', fontSize: 15 }}
      >
        AppStore
      </Subtitle>
    </Subtitle>
  </div>
);
