import React from 'react';

import NavigationPersonalArea from './NavigationPersonalArea';

import { Divider } from '@/Components/Divider/Divider';
import Layout from '@/Components/Layouts/Layout';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const PersonalAreaMain: React.FC = () => {
  const resolution = useAppSelector(state => state.config.viewport);

  return (
    <>
      {resolution !== 'mobile' ? (
        <Layout style={{ marginTop: 56 }}>
          <h1 className="header-30 mb-16 ta-center">Личный кабинет</h1>
          <Divider />
          <NavigationPersonalArea />
        </Layout>
      ) : (
        <div className="container-root">
          <h1 className="header-30 ta-center" style={{ marginTop: 16 }}>
            Личный кабинет
          </h1>
          <NavigationPersonalArea />
          <Divider style={{ marginBottom: 20 }} />
        </div>
      )}
    </>
  );
};

export default PersonalAreaMain;
