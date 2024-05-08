import React, { CSSProperties } from 'react';

export const Divider: React.FC<{ style?: CSSProperties }> = ({ style }) => (
  <div
    style={{ borderBottom: '1px solid rgba(216,216,216,1)', width: '100%', ...style }}
  />
);
