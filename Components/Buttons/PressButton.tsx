import React, { CSSProperties, memo, MouseEventHandler } from 'react';

import { Link } from 'react-router-dom';

export interface BtnProps {
  type: BtnType;
  onClick?: MouseEventHandler;
  text?: string;
  size?: BtnSize;
  style?: CSSProperties;
  disabled?: boolean;
  htmlType?: 'submit' | 'button' | 'link';
  target?: '_blank';
  href?: string;
  fullWidth?: boolean;
  navLink?: boolean;
  to?: string;
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

const btnTypes = {
  main: `btn-main`,
  escape: `btn-escape`,
  small: 'btn-small',
  mainBold: `btn-main btn-bold`,
  escapeBold: `btn-escape btn-bold`,
  smallMainBold: `btn-main btn-small btn-bold`,
  tinkoff: 'btn-tinkoff',
};

export type BtnSelectors = typeof btnTypes;
export type BtnSize = 'small' | 'default';
export type BtnType = keyof BtnSelectors;

const PressButton: React.FC<BtnProps> = memo(
  ({
    text = '',
    type = 'mainBold',
    onClick,
    children,
    style = {},
    disabled = false,
    htmlType = 'button',
    target,
    href,
    fullWidth = false,
    navLink = false,
    to,
    id,
    className,
  }) => (
    <>
      {htmlType === 'link' ? (
        <a
          className={`btn ${btnTypes[type]} ${fullWidth ? 'btn-fullwidth' : ''} ${className}`}
          href={href}
          target={target}
          onClick={onClick}
          style={style || {}}
        >
          {text || children}
        </a>
      ) : navLink ? (
        <Link
          to={to || {}}
          className={`btn ${btnTypes[type]} ${fullWidth ? 'btn-fullwidth' : ''} ${className}`}
          target={target}
          onClick={onClick}
          style={style || {}}
        >
          {text || children}
        </Link>
      ) : (
        <button
          type={htmlType}
          className={`btn ${btnTypes[type]} ${fullWidth ? 'btn-fullwidth' : ''} ${className}`}
          onClick={onClick}
          style={style || {}}
          disabled={disabled}
          id={id}
        >
          {text || children}
        </button>
      )}
    </>
  ),
);

export default PressButton;
