import { ColumnCount } from '../Grid/Grid';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import Card from '@/Assets/advantages/Credit_card_perspective.webp';
import masterbankCar1 from '@/Assets/advantages/advantagesNewCar_1.png';
import masterbankCar2 from '@/Assets/advantages/advantagesNewCar_2.png';
import masterbankCar3 from '@/Assets/advantages/advantagesNewCar_3.png';
import sovDiscount from '@/Assets/advantages/advantagesNewCash_1.png';
import sovProcent from '@/Assets/advantages/advantagesNewCash_2.png';
import sovCard from '@/Assets/advantages/advantagesNewCash_3.png';
import sovOnline from '@/Assets/advantages/advantagesNewDebet.png';
import hypothecMoney from '@/Assets/advantages/advantagesNewHypotec_1.png';
import hypothecPeople from '@/Assets/advantages/advantagesNewHypotec_2.png';
import hypothecHouse from '@/Assets/advantages/advantagesNewHypotec_3.png';
import sovBox from '@/Assets/advantages/advantagesNew_1.png';
import Discount from '@/Assets/advantages/advantagesNew_2.png';
import sovCoin from '@/Assets/advantages/advantagesNew_3.png';
import chart from '@/Assets/advantages/chart_perspective.webp';
import carCreditCoin from '@/Assets/advantages/coin-stack.webp';
import fcCard from '@/Assets/advantages/fc_card.webp';
import fcDiscount from '@/Assets/advantages/fc_discount.webp';
import fcProcent from '@/Assets/advantages/fc_procent.webp';
import carCreditKey from '@/Assets/advantages/key.webp';
import carCreditPage from '@/Assets/advantages/page.webp';
import sovPeriod from '@/Assets/advantages/sov_period.webp';
import masterbankBox from '@/Assets/masterbank/boxMasterbank.webp';
import masterbankCashback from '@/Assets/masterbank/cashBackMasterbank.webp';
import masterbankOnline from '@/Assets/masterbank/onlineMasterbank.webp';

interface AdvantagesItem {
  title: string;
  description: string;
  image: string;
  colDesktop: ColumnCount;
}

export type AdvantagesArray = Array<AdvantagesItem>;

export const CreditCardSecondaryAdvantages = (
  period: Nullable<string>,
): AdvantagesArray => [
  {
    title: 'Бесплатная доставка до дома',
    description: `После одобрения Вам позвонит оператор. Вы вместе с оператором выберете дату, время и место встречи. После этого Вам нужно будет встретиться с курьером, который привезет карту и все документы.`,
    image: sovBox,
    colDesktop: 12,
  },
  {
    title: `До 365 дней без %`,
    description: `Беспроцентный период начнётся после первой операции по карте.
    Льготный период на покупки, снятие наличных и переводы на другие счета.`,
    image: Discount,
    colDesktop: 6,
  },
  {
    title: 'Кэшбэк',
    description:
      'Вернём до 30% за покупки у партнёров. Кэшбэк действует на любую сумму, даже если Вы потратили 50 ₽',
    image: sovCoin,
    colDesktop: 6,
  },
];

export const CreditCashSecondaryAdvantages: AdvantagesArray = [
  {
    title: 'Деньги сразу на карте',
    description: `После одобрения Вам позвонит оператор. Вы вместе с ним выберете дату, время и место встречи. После этого наш сотрудник в маске и перчатках привезёт деньги на бесплатной дебетовой карте.`,
    image: Card,
    colDesktop: 12,
  },
  {
    title: 'Низкая ставка',
    description: `Процентная ставка от 14,4%
    до 35,0%`,
    image: fcProcent,
    colDesktop: 6,
  },
  {
    title: 'Удобное погашение',
    description: `В мобильном приложении, интернет-банке, банкоматах или в отделениях банка`,
    image: sovCoin,
    colDesktop: 6,
  },
];

export const CashSovBankAdvantages: AdvantagesArray = [
  {
    title: 'Деньги сразу на карте',
    description: `После одобрения Вам позвонит оператор. Вы вместе с ним выберете дату, время и место встречи. После этого наш сотрудник в маске и перчатках привезёт деньги на бесплатной дебетовой карте.`,
    image: sovCard,
    colDesktop: 12,
  },
  {
    title: 'Низкая ставка',
    description: `Процентная ставка от 14,4%
    до 35,0%`,
    image: sovProcent,
    colDesktop: 6,
  },
  {
    title: 'Удобное погашение',
    description: `В мобильном приложении, интернет-банке, банкоматах или в отделениях банка`,
    image: sovDiscount,
    colDesktop: 6,
  },
];

export const CardSovBankAdvantages: AdvantagesArray = [
  {
    title: 'Бесплатная доставка до дома',
    description: `После одобрения Вам позвонит оператор. Вы вместе с оператором выберете дату, время и место встречи. После этого Вам нужно будет встретиться с курьером, который привезет карту и все документы.`,
    image: sovBox,
    colDesktop: 12,
  },
  {
    title: 'До 160 дней без %',
    description: `Беспроцентный период начнётся после активации карты. Льготный период на покупки, снятие наличных и переводы на другие счета.`,
    image: sovPeriod,
    colDesktop: 6,
  },
  {
    title: 'Кэшбэк',
    description:
      'Вернём до 30% за покупки у партнёров. Кэшбэк действует на любую сумму, даже если Вы потратили 50 ₽',
    image: sovCoin,
    colDesktop: 6,
  },
];

export const CashFCAdvantages: AdvantagesArray = [
  {
    title: 'Деньги сразу на карте',
    description: `После одобрения Вам позвонит оператор. Вы вместе с ним выберете дату, время и место встречи. После этого наш сотрудник в маске и перчатках привезёт деньги на бесплатной дебетовой карте.`,
    image: fcCard,
    colDesktop: 12,
  },
  {
    title: 'Низкая ставка',
    description: `Минимальная процентная ставка от 5,5% в год.`,
    image: fcProcent,
    colDesktop: 6,
  },
  {
    title: 'Удобное погашение',
    description: `В мобильном приложении, интернет-банке, банкоматах или в отделениях банка`,
    image: sovCoin,
    colDesktop: 6,
  },
];

export const CardFCAdvantages: AdvantagesArray = [
  {
    title: 'Бесплатная доставка до дома',
    description: `После одобрения Вам позвонит оператор. Вы вместе с оператором выберете дату, время и место встречи. После этого Вам нужно будет встретиться с курьером, который привезет карту и все документы.`,
    image: sovBox,
    colDesktop: 12,
  },
  {
    title: 'До 160 дней без %',
    description: `Беспроцентный период начнётся после активации карты. Льготный период на покупки, снятие наличных и переводы на другие счета.`,
    image: fcDiscount,
    colDesktop: 6,
  },
  {
    title: 'Кэшбэк',
    description:
      'Вернём до 30% за покупки у партнёров. Кэшбэк действует на любую сумму, даже если Вы потратили 50 ₽',
    image: sovCoin,
    colDesktop: 6,
  },
];

export const MFOSovSecondaryAdvantages: AdvantagesArray = [
  {
    title: 'Высокий процент одобрений',
    description: `Меньше чем за 5 минут придет решение по вашей заявке. После этого с Вами свяжется сотрудник и Вы уточните все детали по телефону.`,
    image: chart,
    colDesktop: 12,
  },
  {
    title: 'Первый кредит без %',
    description: `При первом кредите мы\n предлагаем ставку 0%`,
    image: sovProcent,
    colDesktop: 6,
  },
  {
    title: 'Кредит без визита в офис',
    description:
      'После получения положительного решения кредит будет зачислен на карту любого банка за 1 минуту без посещения офиса',
    image: sovCoin,
    colDesktop: 6,
  },
];

export const MFOOnbankSecondaryAdvantages: AdvantagesArray = [
  {
    title: 'Высокий процент одобрений',
    description: `Меньше чем за 5 минут придет решение по вашей заявке. После этого с Вами свяжется сотрудник и Вы уточните все детали по телефону.`,
    image: sovBox,
    colDesktop: 12,
  },
  {
    title: 'Первый кредит без %',
    description: `При первом кредите мы\n предлагаем ставку 0%`,
    image: fcProcent,
    colDesktop: 6,
  },
  {
    title: 'Кредит без визита в офис',
    description:
      'После получения положительного решения кредит будет зачислен на карту любого банка за 1 минуту без посещения офиса',
    image: sovCoin,
    colDesktop: 6,
  },
];

export const HypothecSovSecondaryAdvantages: AdvantagesArray = [
  {
    title: 'Возможность рефинансировать вашу ипотеку',
    description: `Вы можете получить до 90% от стоимости залоговой недвижимости. Экономия на весь срок кредитования составляет до 5 000 000 рублей.`,
    image: hypothecMoney,
    colDesktop: 12,
  },
  {
    title: 'Семейная ипотека',
    description: `«Семейная ипотека» стала доступнее. Теперь вы можете купить квартиру, даже если у вас только один ребенок.`,
    image: hypothecPeople,
    colDesktop: 6,
  },
  {
    title: 'Госпрограмма',
    description:
      'Оформите льготную ипотеку на новостройку по госпрограмме 2020 года и получите возможность в кратчайшие сроки стать владельцем нового жилья.',
    image: hypothecHouse,
    colDesktop: 6,
  },
];

export const CarCreditSovSecondaryAdvantages: AdvantagesArray = [
  {
    title: 'Без первоначального взноса',
    description: `Процентная ставка и одобрение кредита не зависят от размера первоначального взноса.`,
    image: masterbankCar1,
    colDesktop: 12,
  },
  {
    title: 'Ставка не зависит от КАСКО',
    description: `Вы можете не оформлять КАСКО на ваш автомобиль – это никак не повлияет на ставку по автокредиту`,
    image: masterbankCar2,
    colDesktop: 6,
  },
  {
    title: 'Новое авто или с пробегом',
    description: 'Кредит на новую машину в любом автосалоне или подержанную с рук',
    image: masterbankCar3,
    colDesktop: 6,
  },
];

export const masterBankInstallmentAdvantages: AdvantagesArray = [
  {
    title: 'Бесплатная доставка до дома',
    description:
      'Вам позвонит оператор. Вы вместе с оператором выберете дату,\n' +
      'время и место встречи. После этого Вам нужно будет встретиться с курьером, который привезет карту и все документы.',
    colDesktop: 12,
    image: sovBox,
  },

  {
    title: 'Онлайн оформление',
    description:
      'Избавляет Вас от походов в банк и ожидания в очереди. Процесс оформления занимает минимум времени, поскольку документы предоставляются в электронном виде.',
    colDesktop: 6,
    image: sovOnline,
  },
  {
    title: 'Кэшбек',
    description:
      'Кэшбек до 30% за покупки\n' +
      'у партнёров. Кэшбек действует\n' +
      'на любую сумму, даже если Вы\n' +
      'потратили 50 ₽',
    colDesktop: 6,
    image: sovCoin,
  },
];
