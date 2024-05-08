import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { margins } from '@/Components/Layouts/Layout';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const MFOPageDesktop: React.FC = () => {
  const resolution = useAppSelector(state => state.config.viewport);

  return (
    <div style={{ marginBottom: margins[resolution] }}>
      <BannerDesktop />
    </div>
  );
};

export default MFOPageDesktop;
