import React from 'react';

import { useLocation } from 'react-router';

import NewHomeBanner from './Components/Banner/NewHomeBanner';
import NewGetCard from './Components/GetCard/NewGetCard';
import WannaKnow from './Components/WannaKnow/WannaKnow';

import { useAppSelector } from '@/CustomHooks/useAppSelector';

const NewHomePage = () => {
  const { search } = useLocation();

  const { viewport } = useAppSelector(state => state.config);

  return (
    <>
      <NewHomeBanner search={search} viewport={viewport} />
      <NewGetCard search={search} viewport={viewport} />
      <WannaKnow search={search} viewport={viewport} />
    </>
  );
};

export default NewHomePage;
