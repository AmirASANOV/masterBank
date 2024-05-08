import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const SportMaster: React.FC<IconProps> = ({
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
      viewBox="0 0 127 36"
      fill="none"
    >
      <path
        d="M79.3274 15.2143C93.8953 9.32143 102.965 5.93572 127 0C113.945 0.873214 85.0794 2.87679 65.1827 6.80893L79.3274 15.2196V15.2143ZM34.0307 34.7786H53.0807C56.8537 28.9929 60.6055 26.175 64.9764 23.0411C61.6567 21.7416 58.3191 20.4897 54.9645 19.2857C42.8096 24.7179 36.0468 32.0089 34.0466 34.7786H34.0307ZM37.7984 13.7357C20.8121 19.8804 11.3718 26.5554 4.99533 34.7786H26.0297C28.0776 31.8911 35.8828 23.5661 50.546 17.775C46.325 16.3336 42.073 14.9868 37.7931 13.7357H37.7984ZM46.5137 0.792856H0C46.8948 9.36429 69.4955 20.4 105.833 36C102.727 33.6482 52.6468 3.7875 46.519 0.792856"
        fill="black"
      />
    </svg>
  </div>
);
