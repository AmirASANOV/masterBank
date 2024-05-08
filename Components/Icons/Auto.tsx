import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Auto: React.FC<IconProps> = ({
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
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5596:3678)">
        <path
          d="M37.544 12.312L34.808 4.102C34.4111 2.90697 33.6477 1.8674 32.6262 1.13102C31.6048 0.394632 30.3772 -0.00111641 29.118 2.36555e-06H10.882C9.62278 -0.00111641 8.39523 0.394632 7.37377 1.13102C6.35231 1.8674 5.5889 2.90697 5.192 4.102L2.456 12.312C1.72923 12.617 1.10855 13.1295 0.67169 13.7855C0.234825 14.4415 0.00117818 15.2118 0 16V26C0 27.506 0.846 28.804 2.078 29.486C2.052 29.618 2 29.738 2 29.876V34C2 34.5304 2.21071 35.0391 2.58579 35.4142C2.96086 35.7893 3.46957 36 4 36H6C6.53043 36 7.03914 35.7893 7.41421 35.4142C7.78929 35.0391 8 34.5304 8 34V30H32V34C32 34.5304 32.2107 35.0391 32.5858 35.4142C32.9609 35.7893 33.4696 36 34 36H36C36.5304 36 37.0391 35.7893 37.4142 35.4142C37.7893 35.0391 38 34.5304 38 34V29.876C38 29.738 37.948 29.616 37.922 29.486C38.5488 29.1443 39.0723 28.6405 39.4379 28.0273C39.8034 27.414 39.9975 26.7139 40 26V16C40 14.342 38.984 12.918 37.544 12.312ZM4 26V16H36L36.004 26H4ZM10.882 4H29.116C29.978 4 30.742 4.548 31.014 5.368L33.226 12H6.774L8.984 5.368C9.1167 4.96959 9.37143 4.62305 9.7121 4.37752C10.0528 4.13198 10.4621 3.9999 10.882 4Z"
          fill={iconsConfig.colors[color || 'primaryColor']}
        />
        <path
          d="M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z"
          fill={iconsConfig.colors[color || 'primaryColor']}
        />
        <path
          d="M31 24C32.6569 24 34 22.6569 34 21C34 19.3431 32.6569 18 31 18C29.3431 18 28 19.3431 28 21C28 22.6569 29.3431 24 31 24Z"
          fill={iconsConfig.colors[color || 'primaryColor']}
        />
      </g>
      <defs>
        <clipPath id="clip0_5596:3678">
          <rect width="40" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);
