import React, { FC } from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const PrevSlide: FC<IconProps> = ({
  size,
  containerStyle,
  containerClassName,
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
      viewBox="0 0 22 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346018 18.1184 0.346019 17.1421 1.32233L1.23223 17.2322ZM5 16.5L3 16.5L3 21.5L5 21.5L5 16.5Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
