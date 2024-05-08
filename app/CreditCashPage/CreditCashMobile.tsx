import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsCash } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import GetCreditCard from '@/Components/GetCreditCard/GetCreditCard';
import { tabsCreditCash } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
import CustomListNumbers from '@/Components/Lists/CustomListNumbers';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';
import MinPercent from '@/Components/Messages/MinPercent';
import Unsubscribe from '@/Components/Unsubscribe/Unsubscribe';

const CreditCashMobile: React.FC = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsCash} title="Кредит наличными" isMobile />

    <Layout style={{ padding: '16px 20px' }}>
      <CustomListNumbers
        title="Кредит за 2 минуты"
        items={[
          'Заполните онлайн-заявку — вам не нужно посещать банк',
          'Узнайте решение банка сразу после заполнения заявки',
          'Оператор свяжется с Вами, чтобы назначить встречу для подписания договора',
        ]}
        button
        buttonId="auth_credit_for_2_minutes"
      />
    </Layout>

    <Layout style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout>
      <HelpInformation tabs={tabsCreditCash} />
    </Layout>

    <Layout marginBottom style={{ padding: '16px 20px' }}>
      <CustomListNumbers
        title="Кредит наличными"
        items={[
          'до 50 дней до первого платежа',
          'Удобное погашение: в мобильном приложении, интернет банке, банкоматах или в отделениях банка',
        ]}
      />
    </Layout>

    {/* <Layout marginBottom>
      <Wrapper style={{ margin: 0 }}>
        <MinPercent />
      </Wrapper>
    </Layout> */}

    <Layout marginBottom background="grayLayout" style={{ padding: 20 }}>
      <QuestionsList variant="CreditCashPage" />
    </Layout>

    {/* <Layout style={{ marginBottom: 40 }}>
      <Unsubscribe />
    </Layout> */}
  </>
);

export default CreditCashMobile;
