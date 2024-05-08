import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsInstallment } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
// import Wrapper from '@/Components/Layouts/Wrapper';
import CustomList from '@/Components/Lists/CustomList';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';
import PersonalOffer from '@/Components/PersonalOffer/PersonalOffer';
import SecondaryAdvantages from '@/Components/SecondaryAdvantages/SecondaryAdvantages';
import { masterBankInstallmentAdvantages } from '@/Components/SecondaryAdvantages/SecondaryAdvantagesLists';
import { tabsCardDebet } from '@/Components/HelpInformation/Content';
// import Unsubscribe from '@/Components/Unsubscribe/Unsubscribe';

const InstallmentCardDesktop = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsInstallment} title="Дебетовые карты" />

    <Layout marginBottom style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout style={{ padding: 0 }} marginBottom>
      <CustomList.HorizontalList
        circleBold
        title="Нужен только паспорт РФ"
        list={[
          'Совершайте покупки картой',
          'За каждую покупку получайте возврат рублями до 30%',
        ]}
        descriptionStyle={{ marginTop: 10 }}
        headerContainerStyle={{ textAlign: 'center', marginBottom: 32 }}
        useWrapper
        wrapperStyle={{ padding: '40px 0px' }}
        itemStyle={{ maxWidth: 450 }}
        id="auth_only_passport"
      />
    </Layout>

    <Layout marginBottom>
      <PersonalOffer />
    </Layout>

    <Layout background="gray">
      <SecondaryAdvantages array={masterBankInstallmentAdvantages} />
    </Layout>

    <Layout background="hz">
      <HelpInformation tabs={tabsCardDebet} />
    </Layout>

    <Layout background="grayLayout" style={{ padding: 0 }} marginBottom>
      <QuestionsList variant="InstallmentCardPage-plan" />
    </Layout>

    {/* <Layout>
      <Wrapper style={{ padding: '40px 0px' }}>
        <Unsubscribe />
      </Wrapper>
    </Layout> */}
  </>
);

export default InstallmentCardDesktop;
