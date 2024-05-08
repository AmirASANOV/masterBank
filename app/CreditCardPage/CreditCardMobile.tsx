import React from 'react';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsCredit } from '@/Components/Banner/data';
import Form from '@/Components/FormChildren/Form';
import GetCreditCard from '@/Components/GetCreditCard/GetCreditCard';
import { tabsCreditCard } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import HowItWork from '@/Components/HowItWork/HowItWork';
import InOtherBank from '@/Components/InOtherBank/InOtherBank';
import Layout from '@/Components/Layouts/Layout';
import CustomListNumbers from '@/Components/Lists/CustomListNumbers';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';
import PersonalOffer from '@/Components/PersonalOffer/PersonalOffer';
import ActionInfoBlock from '@/Components/SharedBlocks/ActionInfoBlock/ActionInfoBlock';
import Timer from '@/Components/Timer/Timer';
import Unsubscribe from '@/Components/Unsubscribe/Unsubscribe';
import Delivery from '@/Components/Footers/delivery/Delivery';

const CreditCardMobile: React.FC = () => (
  <>
    <BannerDesktop
      bannerCards={bannerCardsCredit}
      title="Кредитная карта 365 дней без %"
      isMobile
    />
    <>
      <div className="mb-32" />
      <Layout style={{ padding: '16px' }}>
        <Timer />
      </Layout>
    </>
    <div className="mb-32" />

    {/* 
    <Layout marginBottom>
      <GetCreditCard
        url="/user/credit/credit_card/credit_parameters_info/"
        buttonText="Получить карту"
        descriptionList={[
          'Заполните онлайн анкету',
          'Дождитесь одобренные условия в СМС',
          'Оператор свяжется с Вами, чтобы уточнить, куда доставить карту',
        ]}
      />
    </Layout> */}

    <Layout marginBottom>
      <PersonalOffer />
    </Layout>

    <Layout marginBottom style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout style={{ padding: '16px 20px' }}>
      <CustomListNumbers
        items={[
          'Заполните онлайн-заявку — вам не нужно посещать банк',
          'Узнайте решение банка сразу после заполнения заявки',
          'Банк бесплатно доставит карту, куда удобно. Прямо в руки',
        ]}
        title="Бесплатно доставим карту уже сегодня"
      />
    </Layout>

    <Layout>
      <HelpInformation tabs={tabsCreditCard} />
    </Layout>

    <Layout marginBottom style={{ padding: '0 31px' }}>
      <HowItWork />
    </Layout>

    <Layout marginBottom>
      <CustomListNumbers
        title="Нужен только паспорт РФ"
        items={[
          'Совершайте покупки картой',
          'За каждую покупку получайте возврат рублями до 30%',
        ]}
      />
    </Layout>

    <Layout>
      <ActionInfoBlock />
    </Layout>

    <Layout marginBottom background="grayLayout" style={{ padding: 20 }}>
      <QuestionsList variant="CreditCardPage" />
    </Layout>
  </>
);

export default CreditCardMobile;
