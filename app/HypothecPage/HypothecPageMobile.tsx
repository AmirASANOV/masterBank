import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsHypotec } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import { tabsHypotec } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
import CustomListNumbers from '@/Components/Lists/CustomListNumbers';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';

const HypothecPageMobile: React.FC = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsHypotec} title="Ипотека" isMobile />

    <Layout marginBottom style={{ padding: '16px 20px' }}>
      <CustomListNumbers
        button
        items={[
          'Заполните онлайн анкету',
          'Дождитесь звонка из банка и узнайте решение',
          'Посетите банк, оформите документы и получите ипотекуы',
        ]}
        title="Как получить Ипотеку?"
        buttonText="Оформить ипотеку"
        buttonId="auth_get_hypothec"
      />
    </Layout>

    <Layout style={{ padding: '24px 0px' }}>
      <Form hypothecPlace />
    </Layout>

    <Layout background="hz">
      <HelpInformation tabs={tabsHypotec} />
    </Layout>

    <Layout style={{ padding: '24px 20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#E7F9ED',
          padding: '12px',
          borderRadius: '12px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '14px', fontFamily: 'Geologica' }}>
            Лучшие процентные ставки
          </h1>
          <p style={{ fontSize: '12px', fontFamily: 'Geologica' }}>
            Минимальная процентная ставка от 3,9%
          </p>
        </div>

        <img src="/2.svg" alt="" />
      </div>
    </Layout>

    <Layout marginBottom style={{ padding: 20 }}>
      <QuestionsList variant="hypothec" />
    </Layout>
  </>
);

export default HypothecPageMobile;
