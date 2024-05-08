import React from 'react';

import s from './InstallmentCardMobile.module.sass';

import BannerDesktop from '@/Components/Banner/BannerDesktop';
import { bannerCardsInstallment } from '@/Components/Banner/data';
import Delivery from '@/Components/Footers/delivery/Delivery';
import Form from '@/Components/FormChildren/Form';
import { tabsCardDebet } from '@/Components/HelpInformation/Content';
import HelpInformation from '@/Components/HelpInformation/HelpInformation';
import Layout from '@/Components/Layouts/Layout';
import QuestionsList from '@/Components/Lists/QuestionsList/QuestionsList';

const InstallmentCardMobile: React.FC = () => (
  <>
    <BannerDesktop bannerCards={bannerCardsInstallment} title="Дебетовые карты" />

    <Layout marginBottom style={{ padding: '24px 0px' }}>
      <Delivery />
    </Layout>

    {/* <Layout marginBottom>
      <GetCreditCard
        url="/user/credit/installment_card/"
        buttonText="Получить карту"
        descriptionList={[
          'Заполните онлайн анкету',
          'Дождитесь одобренные условия в СМС',
          'Оператор свяжется с Вами, чтобы уточнить, куда доставить карту',
        ]}
      />
    </Layout> */}

    <Layout style={{ padding: '24px 0px' }}>
      <Form />
    </Layout>

    <Layout background="hz">
      <HelpInformation tabs={tabsCardDebet} />
    </Layout>

    {/* 
    <Layout marginBottom>
      <CustomListNumbers
        title="Нужен только паспорт РФ"
        items={[
          'Совершайте покупки картой',
          'За каждую покупку получайте возврат рублями до 30%',
        ]}
        button
        buttonText="Получить карту"
        id="auth_only_passport"
      />
    </Layout> */}

    <div className={s.wrapper}>
      <h1 className={s.title}>Нужен только паспорт РФ</h1>
      <div className={s.step}>
        <img src="/oneStep.png" alt="" />
        <p>Совершайте покупки картой</p>
      </div>
      <div className={s.step}>
        <img src="/twoStep.png" alt="" />
        <p>За каждую покупку получайте возврат рублями до 30%</p>
      </div>
      <button className={s.button}>Получить карту</button>
    </div>

    <Layout marginBottom background="grayLayout" style={{ padding: 20 }}>
      <QuestionsList variant="InstallmentCardPage-plan" />
    </Layout>
  </>
);

export default InstallmentCardMobile;
