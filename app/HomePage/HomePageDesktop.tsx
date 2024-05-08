import React from 'react';

import Banner from '@/Components/Banner/Banner';
import CreditProducts from '@/Components/CreditProducts/CreditProducts';
import CurrencyList from '@/Components/CurrencyList/CurrencyList';
import Form from '@/Components/FormChildren/Form';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import HowItWork from '@/Components/HowItWork/HowItWork';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
// import OnBankAdvantages from '@/Components/OnBankAdvantages/OnBankAdvantages';
import CustomList from '@/Components/Lists/CustomList';
import PersonalOffer from '@/Components/PersonalOffer/PersonalOffer';
import ActionInfoBlock from '@/Components/SharedBlocks/ActionInfoBlock/ActionInfoBlock';
import ProductPluses from '@/Components/SharedBlocks/ProductPluses/ProductPluses';

const HomePageDesktop = () => (
  <>
    <Banner />

    <CreditProducts />

    <Layout marginBottom>
      <PersonalOffer />
    </Layout>

    <Layout marginBottom>
      <ProductPluses type="hypotec" />
    </Layout>

    <Layout marginBottom style={{ padding: '24px 0px', marginBottom: '44px' }}>
      <Wrapper useWrapper={false}>
        <CustomList.HorizontalList
          title="Кредит наличными"
          list={[
            'до 50 дней до первого платежа',
            'Удобное погашение: в мобильном приложении, интернет-банке, банкоматах или в отделениях банка',
          ]}
          headerContainerStyle={{ textAlign: 'center', marginBottom: 44 }}
          useWrapper={false}
          itemStyle={{ maxWidth: 450 }}
          circleBold
        />
      </Wrapper>
    </Layout>

    <Layout marginBottom style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout marginBottom>
      <ProductPluses type="credit" />
    </Layout>

    {/* <Layout marginBottom>
      <Bonus
        items={[
          { imageUrl: '/bonus/first.png', nameItem: 'Покупок' },
          { imageUrl: '/bonus/second.png', nameItem: 'Скидок' },
          { imageUrl: '/bonus/third.png', nameItem: 'Кешбека' },
        ]}
        title="С кредитной картой Вы получаете больше"
        buttonText="Подбробнее"
      />
    </Layout> */}

    <Layout>
      <ActionInfoBlock />
    </Layout>

    <Layout layoutStyle={{ background: '#FFFAEF' }}>
      <HowItWork />
    </Layout>

    <Layout marginBottom layoutStyle={{ background: '#EEEFEF' }}>
      <HelpInformation />
    </Layout>

    <Layout marginBottom>
      <CurrencyList />
    </Layout>
  </>
);

export default HomePageDesktop;
