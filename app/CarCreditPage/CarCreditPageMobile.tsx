import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsAuto } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import { tabsCarCredit } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
import CustomListNumbers from '@/Components/Lists/CustomListNumbers';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';

const CarCreditPageMobile: React.FC = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsAuto} title="Автокредит" isMobile />

    <Layout
      style={{
        padding: '16px 20px',
        color: '#1c1c1e',
        lineHeight: '20.8px',
      }}
    >
      <CustomListNumbers
        button
        buttonId="auth_get_autocredit"
        items={[
          'Заполните онлайн анкету',
          'Дождитесь одобренные условия в СМС',
          'Получите автокредит на карту или наличными не выходя из дома',
        ]}
        title="Как получить автокредит?"
        buttonText="Оформить автокредит"
      />
    </Layout>

    <Layout style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout background="hz">
      <HelpInformation tabs={tabsCarCredit} />
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

    <Layout style={{ padding: '24px 20px' }}>
      <QuestionsList variant="car_credit" />
    </Layout>

    {/* <Layout marginBottom>
      <PersonalOffer />
    </Layout> */}
  </>
);

export default CarCreditPageMobile;
