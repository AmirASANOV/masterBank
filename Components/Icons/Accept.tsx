import React from 'react';

import { IconProps } from './IconConfig';

export const Accept: React.FC<IconProps & { strokeWidth?: number }> = ({
  size,
  strokeWidth,
  containerClassName,
  containerStyle,
}) => (
  <div
    style={{
      width: size || '14px',
      height: size || '14px',
      flexShrink: 0,
      ...containerStyle,
    }}
    className={containerClassName}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 41 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 15.5L15.875 29L39 2"
        stroke="#D70F27"
        strokeWidth={strokeWidth || 4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
