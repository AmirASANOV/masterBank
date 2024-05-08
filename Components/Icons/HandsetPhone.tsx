import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const HandsetPhone: React.FC<IconProps> = ({
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
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.55419 5.24075L6.1712 1.33599C5.78121 0.886013 5.06621 0.888013 4.61321 1.34199L1.83123 4.12882C1.00323 4.95777 0.766233 6.1887 1.24523 7.17564C4.10683 13.1002 8.88524 17.8851 14.8062 20.7548C15.7922 21.2338 17.0221 20.9968 17.8501 20.1679L20.6581 17.355C21.1131 16.9001 21.1141 16.1811 20.6601 15.7911L16.7401 12.4263C16.3301 12.0743 15.6932 12.1203 15.2822 12.5323L13.9182 13.8982C13.8483 13.9714 13.7564 14.0197 13.6565 14.0356C13.5566 14.0514 13.4543 14.0341 13.3652 13.9862C11.1356 12.7024 9.28618 10.8506 8.00519 8.61955C7.95722 8.53031 7.93985 8.42779 7.95575 8.32772C7.97164 8.22766 8.01993 8.13557 8.09319 8.06558L9.45319 6.70466C9.86518 6.29069 9.91018 5.65073 9.55419 5.23975V5.24075Z"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
