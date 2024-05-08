import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Document: React.FC<IconProps> = ({
  size,
  color,
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
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8H0V36C0 38.2 1.8 40 4 40H32V36H4V8ZM36 0H12C9.8 0 8 1.8 8 4V28C8 30.2 9.8 32 12 32H36C38.2 32 40 30.2 40 28V4C40 1.8 38.2 0 36 0ZM36 28H12V4H36V28ZM16 14H32V18H16V14ZM16 20H24V24H16V20ZM16 8H32V12H16V8Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
