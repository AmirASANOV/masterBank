import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const TelegramNoCircle: React.FC<IconProps> = ({
  color,
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
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3125 0.131505L1.16735 8.27737C-0.343973 8.85641 -0.33523 9.66062 0.890063 10.0192L6.57562 11.7111L19.7303 3.79398C20.3524 3.43298 20.9207 3.62718 20.4535 4.02274L9.7956 13.198H9.7931L9.7956 13.1992L9.40341 18.7894C9.97796 18.7894 10.2315 18.538 10.5538 18.2414L13.3154 15.6798L19.0596 19.7271C20.1188 20.2835 20.8794 19.9975 21.143 18.7918L24.9138 1.84003C25.2997 0.363835 24.323 -0.304562 23.3125 0.131505Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
