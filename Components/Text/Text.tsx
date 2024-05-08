import React, { CSSProperties } from 'react';

interface TextProps {
  text: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ text, style, className, children }) => (
  <span style={style} className={className || 'text-component'}>
    {children || text}
  </span>
);
