import React, { memo, useState } from 'react';

import Layout from '../Layouts/Layout';

import styles from './FooterMain.module.sass';

import DocumentModel from '@/models/DocumentModel/DocumentModel';
import Delivery from './delivery/Delivery';

const FooterMain = () => {
  const { openPdf } = DocumentModel();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <h2 className={styles.phoneNumber}>+7(495)-133-75-84</h2>
      <p className={styles.text}>info@masterbank.pro</p>

      <div className={styles.linkDescription}>
        <div className={styles.linkTitle} onClick={() => setIsOpen(!isOpen)}>
          <h2 className={styles.link}>Частным клиентам</h2>
          <img className={styles.arrow} src="/arrowDown.svg" alt="" />
        </div>

        <div className={isOpen ? styles.linkWrapper : styles.hidden}>
          <a className={styles.link} href="www.youtube.com">
            Кредитные карты
          </a>
          <a className={styles.link} href="www.youtube.com">
            Кредит наличными
          </a>
          <a className={styles.link} href="www.youtube.com">
            Ипотека
          </a>
          <a className={styles.link} href="www.youtube.com">
            Автокредит
          </a>
          <a className={styles.link} href="www.youtube.com">
            Дебетовые карты
          </a>
        </div>
      </div>

      <h2 className={styles.title}>Информация</h2>
      <p className={styles.text}>
        Мастербанк - это сервис подбора кредитных предложений банков России. Заполните
        одну заявку, выберите нужный продукт (кредит, кредитная карта, дебетовая карта,
        автокредит или ипотека). Алгоритм сервиса оценит в каких банках по Вашей заявке
        максимальная вероятность одобрения и отправит ее в эти банки (не больше 5). В
        течение двух минут вы получите окончательные решения. Останется выбрать наиболее
        подходящее и договориться со специалистом банка о встрече. Потребуется только
        оригинал паспорта. Условия по одобренному предложению будут такими же, как в
        случае самостоятельной отправки заявки в каждый банк отдельно.
        <br />
        <br />
        Заполняя заявку на masterbank.pro Вы подтверждаете свое согласие на обработку
        персональных данных, политику относительно обработки персональных данных и
        принимаете оферу.
        <br />
        <br />
        Оставаясь на сайте masterbank.pro и продолжая работу с ним Вы даете согласие на
        использование файлов cookie.
        <br />
        <br />
        Сайт masterbank.pro оказывает исключительно информационные услуги подбора
        кредитных предложений и не несет ответственности за правовые отношения между
        Банком (Партнером) и Пользователем сайта.
      </p>
      <p className={styles.text}>
        Copyright © 2001–2024 “Мастеркредитбанк”. Все права защищены. Возрастное
        ограничение 18+
      </p>

    </Layout>
  );
};

export default memo(FooterMain);
