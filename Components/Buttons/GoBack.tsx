import React, { memo } from 'react';

import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';

interface GoBack {
  show?: boolean;
}

const GoBack: React.FC<GoBack> = memo(({ show = true }) => {
  const history = useHistoryWithUTM();
  return (
    <>
      {show && (
        <div className="button-back" onClick={history.returnToBack} aria-hidden>
          <span className="arrow" />
          <p className="document-important-text button-back__text">Вернуться назад</p>
        </div>
      )}
    </>
  );
});

export default GoBack;
