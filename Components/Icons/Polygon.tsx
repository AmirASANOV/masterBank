import React from 'react';

import { iconsConfig, PolygonConfig } from './IconConfig';

export const Polygon: React.FC<PolygonConfig> = ({
  size,
  config,
  containerStyle,
  containerClassName,
}) => (
  <div
    style={{
      width: size || 15,
      height: size || 15,
      transformOrigin: 'center',
      flexShrink: 0,
      ...containerStyle,
    }}
    className={containerClassName}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 8L12.1292 0.5H0.870835L6.5 8Z"
        fill={iconsConfig.colors[config?.color || 'primaryColor']}
      />
    </svg>
  </div>
);
