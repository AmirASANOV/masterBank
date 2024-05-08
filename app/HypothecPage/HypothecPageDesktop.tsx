import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsHypotec } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
import CustomList from '@/Components/Lists/CustomList';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';
import PersonalOffer from '@/Components/PersonalOffer/PersonalOffer';
import SecondaryAdvantages from '@/Components/SecondaryAdvantages/SecondaryAdvantages';
import ActionInfoBlock from '@/Components/SharedBlocks/ActionInfoBlock/ActionInfoBlock';
// import Unsubscribe from '@/Components/Unsubscribe/Unsubscribe';
import { tabsHypotec } from '@/Components/HelpInformation/Content';
import { Current, currentDomain } from '@/GlobalConfig';

const HypothecPageDesktop = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsHypotec} title="Ипотека" />

    <Layout marginBottom style={{ padding: '24px 0px' }}>
      <Form hypothecPlace />
    </Layout>

    <Layout marginBottom background="gray">
      <SecondaryAdvantages array={Current.secondaryAdvantages[currentDomain].hypothec} />
    </Layout>

    <Layout marginBottom style={{ padding: '24px 0px', marginBottom: '44px' }}>
      <Wrapper useWrapper={false}>
        <CustomList.HorizontalList
          title="Как получить ипотеку?"
          list={[
            'Заполните онлайн-заявку — вам не нужно посещать банк',
            'Узнайте решение банка сразу после заполнения заявки',
            'Посетите банк, оформите документы и получите ипотеку',
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
      <HelpInformation tabs={tabsHypotec} />
    </Layout>

    <Layout background="grayLayout" marginBottom>
      <QuestionsList variant="hypothec" />
    </Layout>

    {/* <Layout marginBottom>
      <Wrapper style={{ padding: '24px 0px' }}>
        <Unsubscribe />
      </Wrapper>
    </Layout> */}

    <Layout>
      <ActionInfoBlock />
    </Layout>
  </>
);

export default HypothecPageDesktop;
