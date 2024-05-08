import React, { CSSProperties, memo, ReactNode } from 'react';

import PressButton, { BtnSize, BtnType } from '../Buttons/PressButton';

interface ResultProps {
  type: 'success' | 'error';
  message?: string;
  btnText?: string;
  onClick?: () => void;
  btnSize?: BtnSize;
  btnType?: BtnType;
  btnStyle?: CSSProperties;
  animationEffect?: 'fade-right' | 'zoom-up' | 'none';
  animationDuration?: number;
  containerStyle?: CSSProperties;
  children: ReactNode;
}

const Result: React.FC<ResultProps> = memo(
  ({ type, children, btnText, onClick, btnSize, btnType, btnStyle, containerStyle }) => (
    <div className="wrapper" style={containerStyle || { justifyContent: 'center' }}>
      <div className="result-image-container">
        <div className={`result-image result_${type}`} />
      </div>
      <div className="result-description">{children}</div>
      {btnText ? (
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <PressButton
            onClick={onClick}
            text={btnText || ''}
            size={btnSize}
            type={btnType || 'main'}
            style={btnStyle}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  ),
);

export default Result;
