import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Reject: React.FC<IconProps> = ({
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
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2567 0.209363L19.8306 1.77959C19.9705 1.91916 19.9736 2.05564 19.8399 2.18901L2.19403 19.7941C2.06035 19.9275 1.92356 19.9244 1.78367 19.7848L0.209806 18.2146C0.0699074 18.075 0.0667986 17.9386 0.200479 17.8052L17.8464 0.200058C17.98 0.0666861 18.1168 0.0697878 18.2567 0.209363Z"
        fill={iconsConfig.colors[color || 'dangerColor']}
      />
      <path
        d="M2.17469 0.254285L19.8019 17.8408C19.9418 17.9804 19.9449 18.1168 19.8112 18.2502L18.3073 19.7507C18.1737 19.884 18.0369 19.8809 17.897 19.7413L0.269739 2.15484C0.12984 2.01526 0.126731 1.87879 0.260412 1.74542L1.76432 0.24498C1.898 0.111608 2.03479 0.11471 2.17469 0.254285Z"
        fill={iconsConfig.colors[color || 'dangerColor']}
      />
    </svg>
  </div>
);
