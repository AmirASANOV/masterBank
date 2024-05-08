import React from 'react';

import styles from './Content.module.sass';

import linkIcon from '@/Assets/icons/link-icon.svg';

type ContentInfoBlockProps = {
  text: string;
  title: string;
  children?: React.ReactNode;
};

const ContentInfoBlock: React.FC<ContentInfoBlockProps> = ({ text, title, children }) => (
  <div>
    <p className={styles.blockTitleMini}>{title}</p>
    <p className={styles.blockText}>{text}</p>
    {children}
  </div>
);

const ContentUnorederedList = ({ list }: { list: string[] }) => (
  <ul className={styles.unorderedList}>
    {list.map(item => (
      <li className={styles.listItem} key={item}>
        {item}
      </li>
    ))}
  </ul>
);

const content = {
  cash: (
    <div className={styles.wrapper}>
      <div className={`${styles.block} ${styles.blockSingle}`}>
        <p className={styles.blockTitle}>Информация по тарифу</p>
        <div className={styles.contentWrapper}>
          <ContentInfoBlock text="В удобную дату" title="Оплата" />
          <ContentInfoBlock text="До 84 месяцев" title="Срок кредита" />
          <ContentInfoBlock text="Ставка от 14,4% до 35,0%" title="Процентная ставка" />
          <ContentInfoBlock text="Без комиссии" title="Досрочное погашение" />
        </div>
      </div>
    </div>
  ),
  cashDescription: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>
          Через «Masterbank» Вы можете оформить кредитную карту с беспроцентным периодом
          до 365 дней
        </p>
        <ContentInfoBlock
          title=""
          text="В Онлайн Банке вы можете оформить кредитную карту с беспроцентным периодом до 365 дней. Оплачивайте услуги, делайте покупки в магазинах и не платите проценты банку. В течение льготного периода вы возвращаете только потраченную сумму, без переплаты."
        />
      </div>

      <div className={styles.block}>
        <p className={styles.blockTitle}>
          Кредитная карта без процентов через «Masterbank»
        </p>
        <ContentInfoBlock text="Как быстро и просто оформить кредитный договор" title="">
          <ContentUnorederedList
            list={[
              'Заполните заявку на сайте.',
              'Получите одобрение онлайн.',
              'Заберите деньги в любом отделении или закажите бесплатную доставку.',
            ]}
          />
        </ContentInfoBlock>
        <ContentInfoBlock
          text="4 причины взять кредит наличными через «Мастербанк»"
          title=""
        >
          <ContentUnorederedList
            list={[
              'Сумма - до 5 000 000 ₽ на срок до 84 месяцев, ставка от 14,4% - годовых при оформлении финансовой защиты.',
              'Быстро. Заявка - 5 минут, решение - 2 минуты.',
              'Комфортно. Выдача денег в любом офисе банка-партнера, удобное погашение.',
              'Дистанционно. Получите средства доставкой и погашайте онлайн.',
            ]}
          />
        </ContentInfoBlock>
      </div>
    </div>
  ),
  card: (
    <>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>Стоимость выпуска и обслуживания</p>
          <ContentInfoBlock text="Бесплатно" title="Выпуск карты" />
          <ContentInfoBlock text="Бесплатно" title="Стоимость обслуживания" />
          <ContentInfoBlock text="МИР / Visa / Mastercard" title="Платежная система" />
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>Информация по тарифу</p>
          <ContentInfoBlock
            text="До 100 000 ₽ в мес. (см. Тарифы банка)"
            title="Снятие наличных без комиссии"
          />
          <ContentInfoBlock text="1 000 000 ₽" title="Максимальный кредитный лимит" />
          <ContentInfoBlock
            text="Без комиссий (см. Тарифы банка)"
            title="Пополнение с карт других банков"
          />
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="#">
          Памятка о беспроцентном периоде по кредитной карте
          <img src={linkIcon} alt="иконка" />
        </a>
        <a className={styles.link} href="#">
          Кредитная карта до 365 дней без % Тарифы
          <img src={linkIcon} alt="иконка" />
        </a>
      </div>
    </>
  ),
  cardDescription: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>
          Через «Masterbank» Вы можете оформить кредитную карту с беспроцентным периодом
          до 365 дней
        </p>
        <ContentInfoBlock
          title=""
          text="В Онлайн Банке вы можете оформить кредитную карту с беспроцентным периодом до 365 дней. Оплачивайте услуги, делайте покупки в магазинах и не платите проценты банку. В течение льготного периода вы возвращаете только потраченную сумму, без переплаты."
        />
      </div>

      <div className={styles.block}>
        <p className={styles.blockTitle}>
          Кредитная карта без процентов через «Masterbank»
        </p>
        <ContentInfoBlock
          text="Беспроцентный период распространяется на покупки, переводы и снятие наличных (см. Тарифы банка)."
          title=""
        />
        <ContentInfoBlock
          text="Всё это время вам нужно лишь вносить минимальные платежи в размере 3–10% от суммы задолженности."
          title=""
        />
        <ContentInfoBlock text="Оформите кредитную карту на выгодных условиях:" title="">
          <ContentUnorederedList
            list={[
              'до 365 дней без процентов',
              'бесплатное снятие наличных — до 100 000 рублей в месяц (см. Тарифный план)',
              'пополнение с карт других банков без комиссии (см. Тарифный план)',
            ]}
          />
        </ContentInfoBlock>

        <ContentInfoBlock
          text="Есть невыгодный кредит в другом банке? Просто закройте его моментальным переводом с карты.
          Пополняйте кредитку через банкомат, мобильное приложение или интернет-банк."
          title=""
        />
      </div>
    </div>
  ),
  debet: (
    <>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>Стоимость выпуска и обслуживания</p>
          <ContentInfoBlock text="Бесплатно" title="Выпуск карты" />
          <ContentInfoBlock text="Бесплатно" title="Стоимость обслуживания" />
          <ContentInfoBlock text="МИР / Visa / Mastercard" title="Платежная система" />
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>Информация по тарифу</p>
          <ContentInfoBlock
            text="До 1 000 000 ₽ в месяц"
            title="Снятие наличных без комиссии"
          />
          <ContentInfoBlock
            text="Без комиссий (см. Тарифы банка)"
            title="Пополнение с карт других банков"
          />
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="#">
          Тарифы “Дебетовая карта”
          <img src={linkIcon} alt="иконка" />
        </a>
      </div>
    </>
  ),
  debetDescription: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>Ваши деньги на карте застрахованы</p>
        <p className={styles.blockText}>
          Собственные средства, размещенные на карте, застрахованы в рамках Федерального
          закона от 23.12.2003 г. № 177-ФЗ «О страховании вкладов физических лиц в банках
          Российской Федерации».
        </p>
      </div>

      <div className={styles.block}>
        <p className={styles.blockTitle}>Насколько безопасна карта?</p>
        <p className={styles.blockText}>
          Пользоваться картой гораздо безопаснее, чем можно себе представить. Вы сведёте к
          минимуму все возможные риски, соблюдая простые условия:
        </p>
        <p className={styles.blockText}>
          Никому не сообщайте конфиденциальную информация о Вашей карте, Для связи с
          банком используйте достоверную контактную информацию, Помните правила
          безопасности при совершении операций в интернете
        </p>
      </div>
    </div>
  ),
  hypotec: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>Информация по тарифу</p>
        <ContentInfoBlock text="В удобную дату" title="Оплата" />
        <ContentInfoBlock text="От 2,1% до 21,2 %" title="Процентная ставка" />
        <ContentInfoBlock text="До 30 лет" title="Срок кредита" />
        <ContentInfoBlock text="Без комиссии" title="Досрочное погашение" />
      </div>
    </div>
  ),
  hypotecDescription: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>Как это работает?</p>
        <ContentInfoBlock
          title=""
          text="Ипотека — простой и надежный инструмент, который позволит Вам быстро купить собственное жилье в Москве или другом городе России. Благодаря узкому направлению деятельности и многолетнему опыту работы мы готовы предложить экспертные решения в сфере ипотечного кредитования для индивидуальных потребностей каждого клиента. Ознакомьтесь с банковскими продуктами или воспользуйтесь помощью менеджеров «Мастербанка», чтобы подобрать подходящее решение с учетом своих финансовых возможностей и различных вариантов использования льгот."
        />
      </div>

      <div className={styles.block}>
        <p className={styles.blockTitle}>Преимущества</p>
        <ContentInfoBlock text="" title="">
          <ContentUnorederedList
            list={[
              'Лояльные требования к стажу заемщика: 3 месяца на текущем месте работы, общий трудовой стаж –1 год; для собственников бизнеса и индивидуальных предпринимателей срок ведения бизнеса – от 12 месяцев',
              'Рассмотрение клиентов в возрасте от 20 до 85*',
              'Лояльное рассмотрение собственников бизнеса и ИП',
              'Бесплатная система расчетов (аккредитив, переводы в сторонние Банки)',
              'Широкая линейка кредитуемых объектов недвижимости: квартиры, квартиры в таунхаусах, апартаменты, коммерческая недвижимость, дома с земельными участками, земельные участки',
              'Лояльное отношение к перепланировкам',
            ]}
          />
        </ContentInfoBlock>
      </div>
    </div>
  ),
  carCredit: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>Информация по тарифу</p>
        <ContentInfoBlock text="В удобную дату" title="Оплата" />
        <ContentInfoBlock text="От 3,9% в год" title="Процентная ставка" />
        <ContentInfoBlock text="До 84 месяцев " title="Срок кредита система" />
        <ContentInfoBlock text="Без комиссии " title="Досрочное погашение" />
      </div>
    </div>
  ),
  carCreditDescription: (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.blockTitle}>Как это работает?</p>
        <ContentInfoBlock text="" title="">
          <ContentUnorederedList
            list={[
              'Получите кредит, не выходя из дома: деньги зачислятся на Умную карту с кэшбэком, которую вам привезет представитель банка вместе с договором',
              'Выбирайте то, что нравится: кредит предоставляется и на новые, и на подержанные автомобили',
              'Воспользуйтесь льготными условиями: сниженная ставка по кредиту при оформлении автомобиля в залог',
            ]}
          />
        </ContentInfoBlock>
      </div>
      <div className={styles.block}>
        <p className={styles.blockTitle}>Страхование</p>
        <ContentInfoBlock
          title=""
          text="При наличии личного страхования у вас будет льготная ставка. Данную услугу можно оформить на сайте, в мобильном приложении или в офисе Банка, а в случае наступления страхового случая страховая компания выплачивает вам всю сумму задолженности, что позволит вам погасить обязательства перед банком и поддержать привычный уровень жизни в непростой ситуации. Страхование является добровольным, действует весь срок кредита и не влияет на принятие решения об его одобрении."
        />
      </div>
    </div>
  ),
};

export type Tab = { title: string; active: string; content: React.ReactNode };

const tabsHome: Tab[] = [
  {
    title: 'Кредитные карты',
    active: 'cards',
    content: content.card,
  },
  {
    title: 'Кредит наличными',
    active: 'cash',
    content: content.cash,
  },
  {
    title: 'Дебетовые карты',
    active: 'debet',
    content: content.debet,
  },
];

const tabsCreditCard: Tab[] = [
  {
    title: 'Тарифы',
    active: 'tariff',
    content: content.card,
  },
  {
    title: 'Описание',
    active: 'description',
    content: content.cardDescription,
  },
];

const tabsCreditCash: Tab[] = [
  {
    title: 'Тарифы',
    active: 'tariff',
    content: content.cash,
  },
  {
    title: 'Описание',
    active: 'description',
    content: content.cashDescription,
  },
];

const tabsHypotec: Tab[] = [
  {
    title: 'Тарифы',
    active: 'tariff',
    content: content.hypotec,
  },
  {
    title: 'Описание',
    active: 'description',
    content: content.hypotecDescription,
  },
];

const tabsCarCredit: Tab[] = [
  {
    title: 'Тарифы',
    active: 'tariff',
    content: content.carCredit,
  },
  {
    title: 'Описание',
    active: 'description',
    content: content.carCreditDescription,
  },
];

const tabsCardDebet: Tab[] = [
  {
    title: 'Тарифы',
    active: 'tariff',
    content: content.debet,
  },
  {
    title: 'Описание',
    active: 'description',
    content: content.debetDescription,
  },
];

export {
  tabsCarCredit,
  tabsCardDebet,
  tabsCreditCard,
  tabsCreditCash,
  tabsHome,
  tabsHypotec,
};
