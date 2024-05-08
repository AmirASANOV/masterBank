import React, { memo } from 'react';

import Title from '../Text/Title/Title';

import { useAppSelector } from '@/CustomHooks/useAppSelector';

const MinPercent: React.FC = memo(() => {
  const resolution = useAppSelector(state => state.config.viewport);

  return (
    <section
      className="container-root"
      style={resolution !== 'mobile' ? { padding: '0' } : {}}
    >
      <div className="container-flex-center" style={{ maxWidth: 440, margin: '0 auto' }}>
        <div className="container-flex-center-column">
          <Title
            titleMargins={{ mobile: { bottom: 8 } }}
            titleStyle={{ textAlign: 'left' }}
          >
            Лучшие процентные ставки
          </Title>
          <p
            className="description-text fs-22-17-15 color-black-main"
            style={{ fontWeight: 'normal', whiteSpace: 'pre-wrap', textAlign: 'left' }}
          >
            Минимальная процентная ставка в год от 5,5%
          </p>
        </div>
      </div>
    </section>
  );
});

export default MinPercent;
