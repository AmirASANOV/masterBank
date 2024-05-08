import React, { useContext } from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsCredit } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import { tabsCreditCard } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import HowItWork from '@/Components/HowItWork/HowItWork';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
// import AdvantagesList from '@/Components/Lists/AdvantagesList';
import CustomList from '@/Components/Lists/CustomList';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';
// import OnBankAdvantages from '@/Components/OnBankAdvantages/OnBankAdvantages';
import PersonalOffer from '@/Components/PersonalOffer/PersonalOffer';
import SecondaryAdvantages from '@/Components/SecondaryAdvantages/SecondaryAdvantages';
import { CreditCardSecondaryAdvantages } from '@/Components/SecondaryAdvantages/SecondaryAdvantagesLists';
import ActionInfoBlock from '@/Components/SharedBlocks/ActionInfoBlock/ActionInfoBlock';
// import Unsubscribe from '@/Components/Unsubscribe/Unsubscribe';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { UtmContext } from '@/Providers/Context/UtmContextProvider';

const CreditCardDesktop: React.FC = () => {
  const resolution = useAppSelector(state => state.config.viewport);

  const { free_period } = useContext(UtmContext);
  return (
    <>
      <BannerDesktop
        bannerCards={bannerCardsCredit}
        title="Кредитная карта 365 дней без %"
      />

      <Layout marginBottom style={{ padding: '24px 0px' }}>
        <Form />
      </Layout>

      <Layout marginBottom style={{ padding: '24px 0px', marginBottom: '44px' }}>
        <Wrapper useWrapper={false}>
          <CustomList.HorizontalList
            title="Нужен только паспорт РФ"
            list={[
              'Совершайте покупки картой',
              'За каждую покупку получайте возврат рублями до 30%',
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

      <Layout marginBottom background="gray">
        <SecondaryAdvantages array={CreditCardSecondaryAdvantages(free_period)} />
      </Layout>

      <Layout>
        <ActionInfoBlock />
      </Layout>

      <Layout background={resolution === 'desktop' ? 'grayLayout' : undefined}>
        <HelpInformation tabs={tabsCreditCard} />
      </Layout>

      {/* <Layout marginBottom>
        <OnBankAdvantages product="credit_card" />
      </Layout> */}

      <Layout layoutStyle={{ background: '#FFFAEF' }}>
        <HowItWork />
      </Layout>

      <Layout marginBottom background="grayLayout" style={{ padding: 0 }}>
        <QuestionsList variant="CreditCardPage" />
      </Layout>

      {/* <Layout marginBottom>  
        <Wrapper style={{ padding: '24px 0px' }}>
          <Unsubscribe />
        </Wrapper>
      </Layout> */}
    </>
  );
};

export default CreditCardDesktop;
