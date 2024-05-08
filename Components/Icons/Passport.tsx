import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Passport: React.FC<IconProps> = ({
  size,
  containerClassName,
  containerStyle,
  color,
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
      viewBox="0 0 32 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8H30V42H2V8Z"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8L24 2V8"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 26C18.2091 26 20 24.2091 20 22C20 19.7909 18.2091 18 16 18C13.7909 18 12 19.7909 12 22C12 24.2091 13.7909 26 16 26Z"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 32H20"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
