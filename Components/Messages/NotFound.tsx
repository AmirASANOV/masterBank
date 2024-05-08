import React, { memo } from 'react';

import Title from '../Text/Title/Title';

import { useAppSelector } from '@/CustomHooks/useAppSelector';

const margins = {
  desktop: '80px 0',
  tablet: '80px 0',
  mobile: '40px 0',
};

const NotFound: React.FC = memo(() => {
  const resolution = useAppSelector(state => state.config.viewport);
  return (
    <section
      className="container-flex-center-column"
      style={{ margin: margins[resolution] }}
    >
      <Title
        titleStyle={{ color: '#2196F3' }}
        titleMargins={{
          desktop: { bottom: 24 },
          tablet: { bottom: 24 },
          mobile: { bottom: 16 },
        }}
      >
        404
      </Title>
      <Title titleStyle={{ color: '#2196F3' }}>Страница не найдена</Title>
    </section>
  );
});

export default NotFound;
