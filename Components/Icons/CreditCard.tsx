import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const CreditCard: React.FC<IconProps> = ({
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
      viewBox="0 0 1000 772"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M125 514.288C125 496.688 132.024 479.809 144.526 467.364C157.029 454.92 173.986 447.928 191.667 447.928H258.333C276.014 447.928 292.971 454.92 305.474 467.364C317.976 479.809 325 496.688 325 514.288V580.647C325 598.247 317.976 615.126 305.474 627.57C292.971 640.015 276.014 647.007 258.333 647.007H191.667C173.986 647.007 157.029 640.015 144.526 627.57C132.024 615.126 125 598.247 125 580.647V514.288Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
      <path
        d="M0 128.571C0 94.4722 13.1696 61.7695 36.6117 37.6577C60.0537 13.5459 91.8479 0 125 0H875C908.152 0 939.946 13.5459 963.388 37.6577C986.83 61.7695 1000 94.4722 1000 128.571V642.857C1000 676.956 986.83 709.659 963.388 733.771C939.946 757.883 908.152 771.429 875 771.429H125C91.8479 771.429 60.0537 757.883 36.6117 733.771C13.1696 709.659 0 676.956 0 642.857V128.571ZM125 64.2857C108.424 64.2857 92.5268 71.0587 80.8058 83.1146C69.0848 95.1705 62.5 111.522 62.5 128.571V192.857H937.5V128.571C937.5 111.522 930.915 95.1705 919.194 83.1146C907.473 71.0587 891.576 64.2857 875 64.2857H125ZM937.5 321.429H62.5V642.857C62.5 659.907 69.0848 676.258 80.8058 688.314C92.5268 700.37 108.424 707.143 125 707.143H875C891.576 707.143 907.473 700.37 919.194 688.314C930.915 676.258 937.5 659.907 937.5 642.857V321.429Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);