import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Calendar: React.FC<IconProps> = ({
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
        d="M960 90H750V10C750 4.5 745.5 0 740 0H670C664.5 0 660 4.5 660 10V90H340V10C340 4.5 335.5 0 330 0H260C254.5 0 250 4.5 250 10V90H40C17.875 90 0 107.875 0 130V960C0 982.125 17.875 1000 40 1000H960C982.125 1000 1000 982.125 1000 960V130C1000 107.875 982.125 90 960 90ZM910 910H90V435H910V910ZM910 350H90V180H250V240C250 245.5 254.5 250 260 250H330C335.5 250 340 245.5 340 240V180H660V240C660 245.5 664.5 250 670 250H740C745.5 250 750 245.5 750 240V180H910V350Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
