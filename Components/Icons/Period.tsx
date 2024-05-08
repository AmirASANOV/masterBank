import React, { FC } from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Period: FC<IconProps> = ({ size, containerStyle, containerClassName }) => (
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
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0625 2.03125H16.4688V0.28125C16.4688 0.160937 16.3703 0.0625 16.25 0.0625H14.7188C14.5984 0.0625 14.5 0.160937 14.5 0.28125V2.03125H7.5V0.28125C7.5 0.160937 7.40156 0.0625 7.28125 0.0625H5.75C5.62969 0.0625 5.53125 0.160937 5.53125 0.28125V2.03125H0.9375C0.453516 2.03125 0.0625 2.42227 0.0625 2.90625V21.0625C0.0625 21.5465 0.453516 21.9375 0.9375 21.9375H21.0625C21.5465 21.9375 21.9375 21.5465 21.9375 21.0625V2.90625C21.9375 2.42227 21.5465 2.03125 21.0625 2.03125ZM19.9688 19.9688H2.03125V9.57812H19.9688V19.9688ZM2.03125 7.71875V4H5.53125V5.3125C5.53125 5.43281 5.62969 5.53125 5.75 5.53125H7.28125C7.40156 5.53125 7.5 5.43281 7.5 5.3125V4H14.5V5.3125C14.5 5.43281 14.5984 5.53125 14.7188 5.53125H16.25C16.3703 5.53125 16.4688 5.43281 16.4688 5.3125V4H19.9688V7.71875H2.03125Z"
        fill="#1C1C1E"
      />
    </svg>
  </div>
);
