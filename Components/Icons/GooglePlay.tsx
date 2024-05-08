import React, { CSSProperties, FC } from 'react';

import Subtitle from '../Text/Subtitle/Subtitle';

import { IconProps, iconsConfig } from './IconConfig';

const GooglePlay: React.FC<IconProps> = ({
  size,
  containerClassName,
  containerStyle,
}) => (
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
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9639 15.6684C19.8803 14.1072 22.091 12.9177 22.2816 12.8252C22.8912 12.5091 23.5207 11.6727 22.2816 11.0229C21.8815 10.8185 19.7275 9.66602 16.9639 8.17969L13.1328 11.9518L16.9639 15.6683V15.6684Z"
        fill="#FFD900"
      />
      <path
        d="M13.1323 11.9531L0.933594 23.9394C1.21993 23.9763 1.54318 23.9023 1.9243 23.6981C2.72445 23.2711 11.2068 18.7549 16.9634 15.6706L13.1323 11.9531Z"
        fill="#F43249"
      />
      <path
        d="M13.1317 11.9513L16.9629 8.19774C16.9629 8.19774 2.78173 0.652543 1.92373 0.207142C1.60047 0.0204849 1.23822 -0.0349604 0.914062 0.0204849L13.1317 11.9513Z"
        fill="#00EE76"
      />
      <path
        d="M13.1326 11.9503L0.914879 0.0195312C0.419031 0.131298 0 0.558393 0 1.43185V22.5243C0 23.3237 0.324246 23.8995 0.933836 23.9551L13.1326 11.9503Z"
        fill="#00D3FF"
      />
    </svg>
  </div>
);
export const DownloadAtGooglePlay: FC<{ style?: CSSProperties }> = ({ style }) => (
  <div
    style={{
      background: '#2D3034',
      padding: 7,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 4,
      width: '140px',
      ...style,
    }}
  >
    <GooglePlay size={20} containerStyle={{ marginRight: 6 }} />
    <Subtitle
      subtitleClassName="subtitle"
      subtitleStyle={{ color: 'white', fontSize: 9 }}
    >
      Доступно в<br />
      <Subtitle
        subtitleClassName="subtitle"
        subtitleStyle={{ color: 'white', fontSize: 15 }}
      >
        Google Play
      </Subtitle>
    </Subtitle>
  </div>
);
