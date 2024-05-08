import React from 'react';

import styles from './BannerDesktop.module.sass';
import IconBank from './components/IconBank';
import IconCalendar from './components/IconCalendar';
import IconCash from './components/IconCash';
import IconClock from './components/IconClock';
import IconPay from './components/IconPay';
import IconPercent from './components/IconPercent';
import IconPlus from './components/iconPlus';
import IconWallet from './components/IconsWallet';
import peopleImg1 from './people1.png';
import peopleImg2 from './people2.png';
import peopleImg3 from './people3.png';
import peopleImg4 from './people4.png';
import peopleImg5 from './people5.png';

export type BannerCardSchema = {
  icon: React.ReactNode;
  title: string;
  text: string;
  image?: React.ReactNode;
};

export const bannerCardsHome: BannerCardSchema[] = [
  {
    icon: <IconPay />,
    title: 'До 1 000 000 ₽',
    text: 'Кредитный лимит',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
  {
    icon: <IconBank />,
    title: '0 ₽',
    text: 'Обслуживание',
    image: <img className={styles.bannerContentPhoto} src={peopleImg1} alt="" />,
  },
  {
    icon: <IconCash />,
    title: '0 ₽',
    text: 'Снятие наличных',
    image: <img className={styles.bannerContentPhoto} src={peopleImg3} alt="" />,
  },
];

export const bannerCardsCredit: BannerCardSchema[] = [
  {
    icon: <IconPay />,
    title: 'До 1 000 000 ₽',
    text: 'Кредитный лимит',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
  {
    icon: <IconCalendar />,
    title: '365 дней',
    text: 'Без процентов',
    image: <img className={styles.bannerContentPhoto} src={peopleImg1} alt="" />,
  },
  {
    icon: <IconClock />,
    title: '1 минута',
    text: 'Моментальное решение',
    image: <img className={styles.bannerContentPhoto} src={peopleImg3} alt="" />,
  },
  {
    icon: <IconBank />,
    title: '0 ₽',
    text: 'Обслуживание',
    image: <img className={styles.bannerContentPhoto} src={peopleImg1} alt="" />,
  },
  {
    icon: <IconCash />,
    title: '0 ₽',
    text: 'Снятие наличных',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
];

export const bannerCardsCash: BannerCardSchema[] = [
  {
    icon: <IconWallet />,
    title: '5 000 000 ₽',
    text: 'Максимальная сумма',
    image: <img className={styles.bannerContentPhoto} src={peopleImg5} alt="" />,
  },
  {
    icon: <IconPercent />,
    title: 'От 14,4% до 35,0%',
    text: 'Ставка',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
  {
    icon: <IconClock />,
    title: 'Всего 2 минуты',
    text: 'Решение по кредиту',
    image: <img className={styles.bannerContentPhoto} src={peopleImg5} alt="" />,
  },
  {
    icon: <IconCalendar />,
    title: 'До 84 месяцев',
    text: 'Срок кредитования',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
];

export const bannerCardsHypotec: BannerCardSchema[] = [
  {
    icon: <IconWallet />,
    title: 'До 70 000 000 ₽',
    text: 'Максимальная сумма',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
  {
    icon: <IconPercent />,
    title: 'От 2,1% до 21,2 %',
    text: 'Ставка',
    image: <img className={styles.bannerContentPhoto} src={peopleImg3} alt="" />,
  },
  {
    icon: <IconClock />,
    title: 'Всего 5 минут',
    text: 'Решение по ипотеке',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
  {
    icon: <IconCalendar />,
    title: 'До 30 лет',
    text: 'Срок ипотеки',
    image: <img className={styles.bannerContentPhoto} src={peopleImg3} alt="" />,
  },
];

export const bannerCardsAuto: BannerCardSchema[] = [
  {
    icon: <IconWallet />,
    title: 'До 7 000 000 ₽',
    text: 'Максимальная сумма',
    image: <img className={styles.bannerContentPhoto} src={peopleImg1} alt="" />,
  },
  {
    icon: <IconPercent />,
    title: 'От 3,9 %',
    text: 'Ставка',
    image: <img className={styles.bannerContentPhoto} src={peopleImg4} alt="" />,
  },
  {
    icon: <IconClock />,
    title: 'Только паспорт',
    text: 'Минимум документов',
    image: <img className={styles.bannerContentPhoto} src={peopleImg1} alt="" />,
  },
  {
    icon: <IconCalendar />,
    title: 'До 84 месяцев',
    text: 'Срок автокредита',
    image: <img className={styles.bannerContentPhoto} src={peopleImg4} alt="" />,
  },
];

export const bannerCardsInstallment: BannerCardSchema[] = [
  {
    icon: <IconPlus />,
    title: 'До 30%',
    text: 'Кэшбэк у партнёров ',
    image: <img className={styles.bannerContentPhoto} src={peopleImg2} alt="" />,
  },
  {
    icon: <IconBank />,
    title: '0 ₽',
    text: 'Обслуживание',
    image: <img className={styles.bannerContentPhoto} src={peopleImg5} alt="" />,
  },
  {
    icon: <IconCash />,
    title: '0 ₽',
    text: 'Снятие наличных',
    image: <img className={styles.bannerContentPhoto} src={peopleImg1} alt="" />,
  },
];
