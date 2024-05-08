import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';
import s from './styles/ClockTimer.module.sass';

interface ClockProps extends IconProps {
  arrowDepth?: number;
  minutesArrowDuration?: number;
  hoursArrowWidth?: number | string;
  minutesArrowWidth?: number | string;
  borderWidth?: number;
}

export const ClockTimer: React.FC<ClockProps> = ({
  size,
  color,
  arrowDepth,
  minutesArrowDuration,
  minutesArrowWidth,
  hoursArrowWidth,
  borderWidth,
  containerClassName,
}) => {
  const arrow = [
    {
      className: s['hours-arrow'],
      duration: `${(minutesArrowDuration || 3) * 12}s`,
      width: hoursArrowWidth || '30%',
    },
    {
      className: s['minutes-arrow'],
      duration: `${minutesArrowDuration || 3}s`,
      width: minutesArrowWidth || '40%',
    },
  ];

  const lineHeight = arrowDepth || 2;
  return (
    <div
      className={containerClassName || s.clock}
      style={{
        width: size || iconsConfig.sizes.width,
        height: size || iconsConfig.sizes.height,
        borderWidth,
        borderColor: iconsConfig.colors[color || 'primaryColor'],
      }}
    >
      <div
        className={s['clock-ball']}
        style={{
          width: lineHeight * 2 + 1,
          height: lineHeight * 2 + 1,
          background: iconsConfig.colors[color || 'primaryColor'],
        }}
      />
      {arrow.map((arr, index) => (
        <div
          className={`${s['clock-arrow']} ${arr.className}`}
          key={`clock_timer_item_${index + 1}`}
          style={{
            height: lineHeight,
            animationDuration: arr.duration,
            width: arr.width,
            background: iconsConfig.colors[color || 'primaryColor'],
            marginTop: -lineHeight / 2,
            marginLeft: `${lineHeight}`,
            transformOrigin: `-${lineHeight}px 50%`,
          }}
        />
      ))}
    </div>
  );
};
