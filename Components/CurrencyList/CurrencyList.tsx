import React, { memo } from 'react';

import styles from './CurrencyList.module.sass';
import LastNews from './LastNews';

interface TableProps {
  currency: string;
  sell: string;
  buy: string;
}

const dataRates: TableProps[] = [
  {
    currency: 'USD',
    sell: '92,36',
    buy: '91,51',
  },
  {
    currency: 'EUR',
    sell: '98,61',
    buy: '97,79',
  },
  {
    currency: 'KZT',
    sell: '21,19',
    buy: '22,43',
  },
  {
    currency: 'CNY',
    sell: '13,91',
    buy: '14,58',
  },
];

const CurrencyList = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Курсы валют</h3>

      <div className={styles.tableTitles}>
        <div />
        <span className={styles.titleMini}>Покупка</span>
        <span className={styles.titleMini}>Продажа</span>
      </div>
      {dataRates.map(currency => (
        <div className={styles.tableItem} key={currency.currency}>
          <div className={styles.tableItemText}>{currency.currency}</div>
          <div className={styles.tableItemText}>{currency.buy}</div>
          <div className={styles.tableItemText}>{currency.sell}</div>
        </div>
      ))}
    </div>

    <LastNews />
  </div>
);

export default memo(CurrencyList);
