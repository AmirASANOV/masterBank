import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Ruble: React.FC<IconProps> = ({
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
      viewBox="0 0 853 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M176.471 999C176.471 999.552 176.918 1000 177.471 1000H293.118C293.67 1000 294.118 999.552 294.118 999V823.529H646.059C646.611 823.529 647.059 823.082 647.059 822.529V706.882C647.059 706.33 646.611 705.882 646.059 705.882H294.118V588.235H558.824C721 588.235 852.941 456.294 852.941 294.118C852.941 131.941 721 0 558.824 0H235.294C219.693 0 204.731 6.19747 193.7 17.229C182.668 28.2606 176.471 43.2226 176.471 58.8235V470.588H1C0.447716 470.588 0 471.036 0 471.588V587.235C0 587.788 0.447715 588.235 1 588.235H176.471V705.882H1C0.447716 705.882 0 706.33 0 706.882V822.529C0 823.082 0.447715 823.529 1 823.529H176.471V999ZM294.118 117.647H558.824C656.118 117.647 735.294 196.824 735.294 294.118C735.294 391.412 656.118 470.588 558.824 470.588H294.118V117.647Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
