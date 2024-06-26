import React, { FC } from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Eye: FC<IconProps> = ({
  size,
  containerStyle,
  containerClassName,
  color,
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
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 5.5C16 5.5 13 0 8 0C3 0 0 5.5 0 5.5C0 5.5 3 11 8 11C13 11 16 5.5 16 5.5ZM1.173 5.5C1.65651 4.76512 2.21264 4.08069 2.833 3.457C4.12 2.168 5.88 1 8 1C10.12 1 11.879 2.168 13.168 3.457C13.7884 4.08069 14.3445 4.76512 14.828 5.5C14.77 5.587 14.706 5.683 14.633 5.788C14.298 6.268 13.803 6.908 13.168 7.543C11.879 8.832 10.119 10 8 10C5.88 10 4.121 8.832 2.832 7.543C2.21165 6.91931 1.65552 6.23487 1.172 5.5H1.173Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
      <path
        d="M8 3C7.33696 3 6.70107 3.26339 6.23223 3.73223C5.76339 4.20107 5.5 4.83696 5.5 5.5C5.5 6.16304 5.76339 6.79893 6.23223 7.26777C6.70107 7.73661 7.33696 8 8 8C8.66304 8 9.29893 7.73661 9.76777 7.26777C10.2366 6.79893 10.5 6.16304 10.5 5.5C10.5 4.83696 10.2366 4.20107 9.76777 3.73223C9.29893 3.26339 8.66304 3 8 3ZM4.5 5.5C4.5 4.57174 4.86875 3.6815 5.52513 3.02513C6.1815 2.36875 7.07174 2 8 2C8.92826 2 9.8185 2.36875 10.4749 3.02513C11.1313 3.6815 11.5 4.57174 11.5 5.5C11.5 6.42826 11.1313 7.3185 10.4749 7.97487C9.8185 8.63125 8.92826 9 8 9C7.07174 9 6.1815 8.63125 5.52513 7.97487C4.86875 7.3185 4.5 6.42826 4.5 5.5Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
