import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Mobile: React.FC<IconProps> = ({
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
      viewBox="0 0 48 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.6667 2.3335H9.33333C5.28325 2.3335 2 5.61674 2 9.66683V68.3335C2 72.3836 5.28325 75.6668 9.33333 75.6668H38.6667C42.7168 75.6668 46 72.3836 46 68.3335V9.66683C46 5.61674 42.7168 2.3335 38.6667 2.3335Z"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8164 61H24.1831"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
