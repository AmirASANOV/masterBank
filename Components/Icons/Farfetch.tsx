import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Farfetch: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 68 68"
      fill="none"
    >
      <path
        d="M68 29.036V19.1222H38.4937C29.818 19.1222 25.0722 24.327 25.0722 31.8382V38.1593H12.2428V24.3638C12.2428 14.6597 13.1835 9.9875 24.1768 9.9875H68V0H17.7338C6.61867 0 0 7.3355 0 18.0937V68H12.2428V48.0732H25.0693V68H37.3632V48.0732H68V38.1593H37.366V34.8868C37.366 30.7473 38.0233 29.0388 43.7608 29.0388H68V29.036Z"
        fill="black"
      />
    </svg>
  </div>
);
