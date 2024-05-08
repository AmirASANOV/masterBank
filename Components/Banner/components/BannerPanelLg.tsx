import React from 'react';

import { currentDomain } from '@/GlobalConfig';

type BannerPanelLgPropsType = {
  active: boolean;
  intervalId: ReturnType<typeof setTimeout>;
  currentUrl: string;
  location: string;
  render: React.ReactNode;
  setActiveBlock: (value: { location: string; url: string }) => void;
};

export const BannerPanelLg: React.FC<BannerPanelLgPropsType> = ({
  location,
  currentUrl,
  active,
  intervalId,
  render,
  setActiveBlock,
}) => (
  <div
    className={`banner-panel__item ${active ? 'banner-panel__active' : ''}`}
    style={active ? { bottom: '3%' } : { background: 'rgba(241, 241, 241, 0.9)' }}
    onClick={() => {
      clearTimeout(intervalId);
      setActiveBlock({
        location,
        url: currentUrl,
      });
    }}
    aria-hidden
  >
    {render}
    {active ? (
      <span className={`banner-panel__band-border-bottom__${currentDomain}`} />
    ) : null}
  </div>
);
