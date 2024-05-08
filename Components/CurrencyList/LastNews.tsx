import React, { memo } from 'react';

import styles from './LastNews.module.sass';

const LastNewsItem = ({ text, title }: { text: string; title: string }) => (
  <div className={styles.item}>
    <p className={styles.titleMini}>{title}</p>
    <p className={styles.text}>{text}</p>
  </div>
);

const LastNews = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Последние новости</h3>
    <LastNewsItem
      text="Газпромбанк разместил выпуск инвестоблигаций на 500 млн"
      title="Сегодня"
    />
    <LastNewsItem
      text="Банк России 16 августа купил валюту на 14,3 млрд руб."
      title="Сегодня"
    />
    <LastNewsItem
      text="Cредний курс доллара в банках Москвы составил 72,14/74,6 руб."
      title="Сегодня"
    />
    <LastNewsItem
      text="Доллар стабилен на фоне снижения аппетита к риску"
      title="Сегодня"
    />
  </div>
);

export default memo(LastNews);
