import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Apple: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 69 81"
      fill="none"
    >
      <path
        d="M56.8925 42.8057C56.8536 36.1663 59.8617 31.1624 65.9365 27.4727C62.5389 22.6051 57.3987 19.928 50.623 19.412C44.2075 18.9058 37.1885 23.1503 34.6184 23.1503C31.9022 23.1503 25.6912 19.5872 20.8041 19.5872C10.7185 19.743 0 27.6285 0 43.6721C0 48.4131 0.866433 53.3099 2.5993 58.3528C4.91628 64.9922 13.2691 81.2597 21.9821 80.9968C26.5381 80.8898 29.7605 77.7648 35.6892 77.7648C41.4427 77.7648 44.4217 80.9968 49.5035 80.9968C58.2944 80.8703 65.8489 66.0825 68.049 59.4237C56.2597 53.8649 56.8925 43.1464 56.8925 42.8057ZM46.6608 13.1133C51.5965 7.25272 51.1487 1.91783 51.0027 0C46.6413 0.253115 41.5985 2.96924 38.7266 6.30841C35.5627 9.89096 33.7033 14.3205 34.1024 19.3146C38.8142 19.6748 43.1172 17.2508 46.6608 13.1133Z"
        fill="black"
      />
    </svg>
  </div>
);
