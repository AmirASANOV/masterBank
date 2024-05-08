import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Building: React.FC<IconProps> = ({
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
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 65.5H41M58.5 65.5V9.5C58.5 7.64348 57.7625 5.86301 56.4497 4.55025C55.137 3.2375 53.3565 2.5 51.5 2.5H16.5C14.6435 2.5 12.863 3.2375 11.5503 4.55025C10.2375 5.86301 9.5 7.64348 9.5 9.5V65.5H58.5ZM58.5 65.5H65.5H58.5ZM58.5 65.5H41H58.5ZM9.5 65.5H2.5H9.5ZM9.5 65.5H27H9.5ZM23.5 16.5H27H23.5ZM23.5 30.5H27H23.5ZM41 16.5H44.5H41ZM41 30.5H44.5H41ZM27 65.5V48C27 47.0717 27.3687 46.1815 28.0251 45.5251C28.6815 44.8687 29.5717 44.5 30.5 44.5H37.5C38.4283 44.5 39.3185 44.8687 39.9749 45.5251C40.6313 46.1815 41 47.0717 41 48V65.5H27Z"
        stroke={iconsConfig.colors[color || 'primaryColor']}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
