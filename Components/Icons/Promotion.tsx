import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Promotion: React.FC<IconProps> = ({
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
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M92.3571 928.571L348.714 714.357L634.214 783.572C649.896 787.433 666.42 785.924 681.143 779.286L928.571 663.571L898.286 598.857L651.286 714.179L365.786 644.964C355.072 642.3 343.886 642.152 333.105 644.531C322.324 646.91 312.24 651.752 303.643 658.679L71.4286 852.929V660.357L348.714 428.643L634.214 497.857C649.896 501.719 666.42 500.21 681.143 493.571L928.571 377.857L898.321 313.143L651.25 428.464L365.75 359.25C355.036 356.591 343.851 356.445 333.071 358.825C322.291 361.204 312.207 366.043 303.607 372.964L71.4286 567.214V374.643L348.714 142.929L634.214 212.143C649.896 216.005 666.42 214.496 681.143 207.857L928.571 92.3214L898.357 27.6071L651.286 142.75L365.786 73.5357C355.072 70.8713 343.886 70.7229 333.105 73.1021C322.324 75.4814 312.24 80.3237 303.643 87.25L71.4286 281.5V0H0V928.571C0 947.516 7.52549 965.684 20.9209 979.079C34.3164 992.475 52.4845 1000 71.4286 1000H1000V928.571H92.3571Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
