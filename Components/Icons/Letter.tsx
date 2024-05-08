import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Letter: React.FC<IconProps> = ({
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
      viewBox="0 0 40 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.1429 0H2.85714C2.09938 0 1.37266 0.305535 0.836838 0.84939C0.301019 1.39325 0 2.13087 0 2.9V26.1C0 26.8691 0.301019 27.6068 0.836838 28.1506C1.37266 28.6945 2.09938 29 2.85714 29H37.1429C37.9006 29 38.6273 28.6945 39.1632 28.1506C39.699 27.6068 40 26.8691 40 26.1V2.9C40 2.13087 39.699 1.39325 39.1632 0.84939C38.6273 0.305535 37.9006 0 37.1429 0ZM34 2.9L20 12.731L6 2.9H34ZM2.85714 26.1V4.2195L19.1857 15.689C19.4249 15.8574 19.709 15.9476 20 15.9476C20.291 15.9476 20.5751 15.8574 20.8143 15.689L37.1429 4.2195V26.1H2.85714Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
