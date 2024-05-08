import React, { memo, ReactNode } from 'react';

import ReactDOM from 'react-dom';

/* eslint-disable */
const Modal: React.FC<{ isShowing: boolean; hide?: any; children?: ReactNode }> = memo(
  ({ hide, isShowing, children }) => {
    const outputClickHandler = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target && target.className === 'modal') {
        hide();
      }
    };

    React.useEffect(() => {
      document.addEventListener('click', outputClickHandler);
      return () => {
        document.removeEventListener('click', outputClickHandler);
      };
    }, []);

    if (isShowing) {
      return ReactDOM.createPortal(
        <div className="modal">
          <div className="grid-root">
            <div className="modal__body">{children}</div>
          </div>
        </div>,
        document.body,
      );
    }
    return null;
  },
);

export default Modal;
