import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const Ssl: React.FC<IconProps> = ({
  size,
  containerClassName,
  containerStyle,
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
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 77 90"
      fill="none"
    >
      <path
        d="M74.7713 16.0909C68.5536 14.4415 62.4791 12.2982 56.6067 9.68182C50.8293 7.19077 45.252 4.26405 39.9238 0.927273L38.4146 0L36.9329 0.954545C31.6047 4.29132 26.0275 7.21804 20.25 9.70909C14.3679 12.3176 8.28424 14.4517 2.05793 16.0909L0 16.6091V39.3545C0 75.8727 37.125 89.5364 37.4817 89.6727L38.4146 90L39.3476 89.6727C39.7317 89.6727 76.8293 75.9 76.8293 39.3545V16.6091L74.7713 16.0909ZM71.3415 39.3545C71.3415 69.3545 43.9024 81.9273 38.4146 84.1636C32.9268 81.9273 5.4878 69.3273 5.4878 39.3545V20.8364C11.276 19.1824 16.942 17.1321 22.4451 14.7C27.9486 12.3354 33.2841 9.60187 38.4146 6.51818C43.5452 9.60187 48.8806 12.3354 54.3841 14.7C59.8873 17.1321 65.5533 19.1824 71.3415 20.8364V39.3545Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
      <path
        d="M29.0038 39.5898H25.1558C24.9998 37.7525 23.8298 36.8338 21.6458 36.8338C20.7098 36.8338 19.9731 37.0245 19.4358 37.4058C18.9158 37.7698 18.6558 38.2812 18.6558 38.9398C18.6558 39.1652 18.6905 39.3645 18.7598 39.5378C18.8291 39.7112 18.9591 39.8758 19.1498 40.0318C19.3405 40.1705 19.5311 40.2918 19.7218 40.3958C19.9125 40.4825 20.1898 40.5865 20.5538 40.7078C20.9351 40.8118 21.2731 40.9072 21.5678 40.9938C21.8798 41.0805 22.3131 41.1932 22.8678 41.3318C23.4225 41.4705 23.9078 41.6005 24.3238 41.7218C26.1438 42.2418 27.4958 42.8918 28.3798 43.6718C29.2811 44.4518 29.7318 45.5698 29.7318 47.0258C29.7318 48.0832 29.5151 49.0105 29.0818 49.8078C28.6485 50.5878 28.0591 51.2118 27.3138 51.6798C26.5858 52.1305 25.7798 52.4598 24.8958 52.6678C24.0291 52.8932 23.1018 53.0058 22.1138 53.0058C19.6005 53.0058 17.6331 52.4338 16.2118 51.2898C14.8078 50.1285 14.0971 48.4992 14.0798 46.4018H18.1098C18.1791 48.7245 19.5745 49.8858 22.2958 49.8858C23.3531 49.8858 24.1851 49.6692 24.7918 49.2358C25.4158 48.7852 25.7278 48.1785 25.7278 47.4158C25.7278 46.7745 25.4418 46.3065 24.8698 46.0118C24.3151 45.7172 23.1365 45.3098 21.3338 44.7898C21.0391 44.7205 20.8138 44.6598 20.6578 44.6078C20.0338 44.4345 19.6005 44.3132 19.3578 44.2438C19.1151 44.1572 18.7251 44.0185 18.1878 43.8278C17.6678 43.6372 17.2865 43.4638 17.0438 43.3078C16.8011 43.1518 16.4978 42.9352 16.1338 42.6578C15.7871 42.3805 15.5358 42.0945 15.3798 41.7998C15.2238 41.4878 15.0765 41.1152 14.9378 40.6818C14.8165 40.2312 14.7558 39.7458 14.7558 39.2258C14.7558 37.5445 15.4058 36.2012 16.7058 35.1958C18.0058 34.1905 19.7305 33.6878 21.8798 33.6878C23.9598 33.6878 25.6585 34.1818 26.9758 35.1698C28.2931 36.1405 28.9691 37.6138 29.0038 39.5898ZM45.8886 39.5898H42.0406C41.8846 37.7525 40.7146 36.8338 38.5306 36.8338C37.5946 36.8338 36.8579 37.0245 36.3206 37.4058C35.8006 37.7698 35.5406 38.2812 35.5406 38.9398C35.5406 39.1652 35.5752 39.3645 35.6446 39.5378C35.7139 39.7112 35.8439 39.8758 36.0346 40.0318C36.2252 40.1705 36.4159 40.2918 36.6066 40.3958C36.7972 40.4825 37.0746 40.5865 37.4386 40.7078C37.8199 40.8118 38.1579 40.9072 38.4526 40.9938C38.7646 41.0805 39.1979 41.1932 39.7526 41.3318C40.3072 41.4705 40.7926 41.6005 41.2086 41.7218C43.0286 42.2418 44.3806 42.8918 45.2646 43.6718C46.1659 44.4518 46.6166 45.5698 46.6166 47.0258C46.6166 48.0832 46.3999 49.0105 45.9666 49.8078C45.5332 50.5878 44.9439 51.2118 44.1986 51.6798C43.4706 52.1305 42.6646 52.4598 41.7806 52.6678C40.9139 52.8932 39.9866 53.0058 38.9986 53.0058C36.4852 53.0058 34.5179 52.4338 33.0966 51.2898C31.6926 50.1285 30.9819 48.4992 30.9646 46.4018H34.9946C35.0639 48.7245 36.4592 49.8858 39.1806 49.8858C40.2379 49.8858 41.0699 49.6692 41.6766 49.2358C42.3006 48.7852 42.6126 48.1785 42.6126 47.4158C42.6126 46.7745 42.3266 46.3065 41.7546 46.0118C41.1999 45.7172 40.0212 45.3098 38.2186 44.7898C37.9239 44.7205 37.6986 44.6598 37.5426 44.6078C36.9186 44.4345 36.4852 44.3132 36.2426 44.2438C35.9999 44.1572 35.6099 44.0185 35.0726 43.8278C34.5526 43.6372 34.1712 43.4638 33.9286 43.3078C33.6859 43.1518 33.3826 42.9352 33.0186 42.6578C32.6719 42.3805 32.4206 42.0945 32.2646 41.7998C32.1086 41.4878 31.9612 41.1152 31.8226 40.6818C31.7012 40.2312 31.6406 39.7458 31.6406 39.2258C31.6406 37.5445 32.2906 36.2012 33.5906 35.1958C34.8906 34.1905 36.6152 33.6878 38.7646 33.6878C40.8446 33.6878 42.5432 34.1818 43.8606 35.1698C45.1779 36.1405 45.8539 37.6138 45.8886 39.5898ZM62.1753 49.1058V52.5898H49.0713V34.0778H53.1273V49.1058H62.1753Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
