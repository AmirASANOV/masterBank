import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsAuto } from '@/Components/Banner/data';
// import FeedBack from '@/Components/FeedBack/FeedBack';
import Form from '@/Components/FormChildren/Form';
import { tabsCarCredit, tabsCreditCard } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
import CustomList from '@/Components/Lists/CustomList';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';
import PersonalOffer from '@/Components/PersonalOffer/PersonalOffer';
import SecondaryAdvantages from '@/Components/SecondaryAdvantages/SecondaryAdvantages';
import ActionInfoBlock from '@/Components/SharedBlocks/ActionInfoBlock/ActionInfoBlock';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';

const CarCreditPageDesktop: React.FC = () => {
  const resolution = useAppSelector(state => state.config.viewport);

  return (
    <>
      <BannerDesktop bannerCards={bannerCardsAuto} title="Автокредит" />

      <Layout marginBottom style={{ padding: '24px 0px' }}>
        <Form />
      </Layout>

      <Layout marginBottom background="gray">
        <SecondaryAdvantages
          array={Current.secondaryAdvantages[currentDomain].car_credit}
        />
      </Layout>

      <Layout marginBottom style={{ padding: '24px 0px', marginBottom: '44px' }}>
        <Wrapper useWrapper={false}>
          <CustomList.HorizontalList
            title="Как получить автокредит?"
            list={[
              'Заполните онлайн-заявку — вам не нужно посещать банк',
              'Узнайте решение банка сразу после заполнения заявки',
              'Получите автокредит на карту или наличными не выходя из дома',
            ]}
            headerContainerStyle={{ textAlign: 'center', marginBottom: 44 }}
            useWrapper={false}
            itemStyle={{ maxWidth: 450 }}
            circleBold
          />
        </Wrapper>
      </Layout>

      <Layout marginBottom>
        <PersonalOffer />
      </Layout>

      <Layout background="hz">
        <HelpInformation tabs={tabsCarCredit} />
      </Layout>

      <Layout background="grayLayout" marginBottom>
        <QuestionsList variant="car_credit" />
      </Layout>

      {/* <Layout marginBottom>
        <Wrapper style={{ padding: '24px 0px' }}>
          <FeedBack page="car-credit" buttonText="Оформить заявку" />
        </Wrapper>
      </Layout> */}

      <Layout>
        <ActionInfoBlock />
      </Layout>
    </>
  );
};

export default CarCreditPageDesktop;
