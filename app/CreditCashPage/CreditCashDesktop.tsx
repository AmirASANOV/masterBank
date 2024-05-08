import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsCash } from '@/Components/Banner/data';
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
import { tabsCreditCash } from '@/Components/HelpInformation/Content';
import { Current, currentDomain } from '@/GlobalConfig';

const CreditCashDesktop = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsCash} title="Кредит наличными" />

    <Layout marginBottom style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout marginBottom background="gray">
      <SecondaryAdvantages
        array={Current.secondaryAdvantages[currentDomain].credit_cash}
      />
    </Layout>

    <Layout marginBottom style={{ padding: '24px 0px', marginBottom: '44px' }}>
      <Wrapper useWrapper={false}>
        <CustomList.HorizontalList
          title="Кредит наличными"
          list={[
            'до 50 дней до первого платежа',
            'Удобное погашение:в мобильном приложении, интернет банке,банкоматах или в отделениях банка',
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

    <Layout>
      <HelpInformation tabs={tabsCreditCash} />
    </Layout>

    <Layout background="grayLayout" marginBottom>
      <QuestionsList variant="CreditCashPage" />
    </Layout>

    {/* <Layout marginBottom>
      <Wrapper style={{ padding: '40px 0px' }}>
        <Unsubscribe />
      </Wrapper>
    </Layout> */}

    <Layout>
      <ActionInfoBlock />
    </Layout>
  </>
);

export default CreditCashDesktop;
