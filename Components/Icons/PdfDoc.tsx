import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const PdfDoc: React.FC<IconProps> = ({
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
    {/* <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.625 9.125L15.875 0.375C15.625 0.125 15.375 0 15 0H2.5C1.125 0 0 1.125 0 2.5V32.5C0 33.875 1.125 35 2.5 35H22.5C23.875 35 25 33.875 25 32.5V10C25 9.625 24.875 9.375 24.625 9.125ZM15 3L22 10H15V3ZM22.5 32.5H2.5V2.5H12.5V10C12.5 11.375 13.625 12.5 15 12.5H22.5V32.5Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
      <path d="M5 25H20V27.5H5V25Z" fill={iconsConfig.colors[color || 'primaryColor']} />
      <path
        d="M5 17.5H20V20H5V17.5Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg> */}
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66797 13.3346C4.66797 8.30632 4.66797 5.79217 6.3277 4.23006C7.98742 2.66797 10.6587 2.66797 16.0013 2.66797H17.0316C21.3798 2.66797 23.554 2.66797 25.0638 3.73176C25.4965 4.03654 25.8805 4.398 26.2044 4.80516C27.3346 6.2262 27.3346 8.27245 27.3346 12.3649V15.7589C27.3346 19.7098 27.3346 21.6852 26.7094 23.2629C25.7042 25.7994 23.5785 27.8001 20.8834 28.7461C19.2072 29.3346 17.1082 29.3346 12.9104 29.3346C10.5116 29.3346 9.31226 29.3346 8.35434 28.9984C6.81436 28.4578 5.59964 27.3145 5.02525 25.8652C4.66797 24.9636 4.66797 23.8348 4.66797 21.577V13.3346Z"
        stroke="#7CC3D8"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M27.3333 16C27.3333 18.4545 25.3435 20.4444 22.8889 20.4444C22.0012 20.4444 20.9547 20.2889 20.0915 20.5201C19.3247 20.7256 18.7256 21.3247 18.5201 22.0915C18.2889 22.9547 18.4444 24.0012 18.4444 24.8889C18.4444 27.3435 16.4545 29.3333 14 29.3333"
        stroke="#7CC3D8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.668 9.33203H20.0013"
        stroke="#7CC3D8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.668 14.668H14.668"
        stroke="#7CC3D8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
