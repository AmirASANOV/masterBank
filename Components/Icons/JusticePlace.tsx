import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const JusticePlace: React.FC<IconProps> = ({
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
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.4555 16.5206C39.9483 16.5206 40.5716 14.6026 39.3589 13.7185L20.9082 0.297124C20.6447 0.104075 20.3265 0 19.9999 0C19.6732 0 19.3551 0.104075 19.0916 0.297124L0.64085 13.7185C-0.571807 14.5978 0.0514308 16.5206 1.54913 16.5206H4.53971V34.5897H1.06117C0.848596 34.5897 0.674669 34.7636 0.674669 34.9762V37.4885C0.674669 37.7011 0.848596 37.875 1.06117 37.875H38.9386C39.1512 37.875 39.3251 37.7011 39.3251 37.4885V34.9762C39.3251 34.7636 39.1512 34.5897 38.9386 34.5897H35.4601V16.5206H38.4555ZM19.9999 3.70319L33.0975 13.2305H6.90222L19.9999 3.70319ZM8.01825 16.5206H13.6709V34.5897H8.01825V16.5206ZM17.1494 16.5206H22.802V34.5897H17.1494V16.5206ZM31.9815 34.5897H26.2806V16.5206H31.9815V34.5897Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
