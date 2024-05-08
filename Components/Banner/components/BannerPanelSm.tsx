import React from 'react';

type BannerPanelSmPropsType = {
  active: boolean;
  intervalId: ReturnType<typeof setTimeout>;
  currentUrl: string;
  location: string;
  render: React.ReactNode;
  setActiveBlock: (value: { location: string; url: string }) => void;
};

export const BannerPanelSm: React.FC<BannerPanelSmPropsType> = ({
  location,
  currentUrl,
  active,
  intervalId,
  render,
  setActiveBlock,
}) => (
  <div
    className="banner-sm__panel--item"
    onClick={() => {
      clearTimeout(intervalId);
      setActiveBlock({
        location,
        url: currentUrl,
      });
    }}
    aria-hidden
  >
    <div style={{ position: 'relative', zIndex: 10 }}>{render}</div>
    {active ? <div className="banner-sm__active" /> : null}
  </div>
);
