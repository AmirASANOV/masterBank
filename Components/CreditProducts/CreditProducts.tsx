import React from 'react';

import Layout from '../Layouts/Layout';

import CalcSrc from './calc.png';
import CardProducts from './CardProducts';
import CashBackSrc from './cashback.png';
import CreditCardSrc from './credit-card.png';
import CreditSrc from './credit.png';
import styles from './CreditProducts.module.sass';
import HomeSrc from './home.png';
import KaskoSrc from './kasko.png';

const SliderData = [
  {
    image: <img src={CashBackSrc} alt="Карты с кэшбэком" />,
    title: 'Карты с\u00A0кэшбэком',
    description: 'До\u00A030% кэшбэка на\u00A0покупки',
    color: '#EEE7F6',
  },
  {
    image: <img src={CreditSrc} alt="Кредит наличными" />,
    title: 'Кредит наличными',
    description: 'Быстрое оформление',
    color: '#F4F4FC',
  },
  {
    image: <img src={CreditCardSrc} alt="Кредитные карты" />,
    title: 'Кредитные карты',
    description: 'До 365 дней без\u00A0%',
    color: '#FFEFEF',
  },
  {
    image: <img src={HomeSrc} alt="Ипотека" />,
    title: 'Ипотека',
    description: 'от 5% на новостройки',
    color: '#FBF4FC',
  },
  {
    image: <img src={CalcSrc} alt="Вклад с высоким процентом" />,
    title: 'Вклад с\u00A0высоким\u00A0%',
    description: 'Прибыльная ставка до 12%',
    color: '#E7F9ED',
  },
  {
    image: <img src={KaskoSrc} alt="Ипотека" />,
    title: 'КАСКО',
    description: 'По низкой цене',
    color: '#FFF8F0',
  },
];

const CreditProducts: React.FC = () => (
  <div className={styles.wrapper}>
    <Layout>
      <h2 className={styles.title}>Популярные продукты</h2>
    </Layout>
    <Layout className={styles.layout}>
      <section className={styles.section}>
        <div className={styles.cardsWrapper}>
          <div className={styles.cards}>
            {SliderData.map((item, index) => (
              <CardProducts
                key={`prod_${index + 1}`}
                image={item.image}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  </div>
);

export default CreditProducts;
