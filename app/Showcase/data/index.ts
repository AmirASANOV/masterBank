import { ShowcaseDataType } from '../type';

import calendar from '@/Assets/icons/showcase/calendar.svg';
import citi from '@/Assets/icons/showcase/creditCard/desktop/city-bg.webp';
import raif from '@/Assets/icons/showcase/creditCard/desktop/raif-bg.webp';
import vtb from '@/Assets/icons/showcase/creditCard/desktop/vtb-bg.webp';
import yral from '@/Assets/icons/showcase/creditCard/desktop/yral-bg.webp';
import akbars from '@/Assets/icons/showcase/creditCash/desktop/akbars-bg.webp';
import go from '@/Assets/icons/showcase/creditCash/desktop/go-bg.webp';
import mkb from '@/Assets/icons/showcase/creditCash/desktop/mkb-bg.webp';
import rgs from '@/Assets/icons/showcase/creditCash/desktop/rgs-bg.webp';
import kapusta from '@/Assets/icons/showcase/mfo/desktop/kapusta-desktop.webp';
import manimen from '@/Assets/icons/showcase/mfo/desktop/manimen-desktop.webp';
import monebo from '@/Assets/icons/showcase/mfo/desktop/monebo-desktop.webp';
import oneclick from '@/Assets/icons/showcase/mfo/desktop/oneclick-desktop.webp';
import tyrbozaim from '@/Assets/icons/showcase/mfo/desktop/tyrbozaim-desktop.webp';
import vebzaim from '@/Assets/icons/showcase/mfo/desktop/vebzaim-desktop.webp';
import webbankir from '@/Assets/icons/showcase/mfo/desktop/webbankir-desktop.webp';
import zaimer from '@/Assets/icons/showcase/mfo/desktop/zaimer-desktop.webp';
import limit from '@/Assets/icons/showcase/money.svg';
import percent from '@/Assets/icons/showcase/percent.svg';
import release from '@/Assets/icons/showcase/release.svg';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

export const showcaseArray = (resolution: Viewport): ShowcaseDataType => [
  {
    product: 'mfo',
    title: 'Микрокредит',
    offers: [
      {
        image: vebzaim,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 100 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 12 мес' },
        ],
        bankName: 'vebzaim',
        link: 'https://trkleads.ru/click/5e131aa6fc0939c3c4e5b20fcf4d280a',
      },
      {
        image: webbankir,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 100 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 12 мес' },
        ],
        bankName: 'webbankir',
        link: 'https://trkleads.ru/click/d7dfa66abc3d675a3906ca047c92acef',
      },
      {
        image: manimen,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 100 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 12 мес' },
        ],
        bankName: 'manimen',
        link: 'https://trkleads.ru/click/8f8e95d03e98863720a69a0e9454019c',
      },
      {
        image: zaimer,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 100 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 12 мес' },
        ],
        bankName: 'zaimer',
        link: 'https://trkleads.ru/click/12a38f604d4d137d8eb01e693dab94e8',
      },
      {
        image: oneclick,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 100 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 12 мес' },
        ],
        bankName: 'oneclick',
        link: 'https://trkleads.ru/click/e9e5a8ece42b731e7c7c6eb55f99cc9d',
      },
    ],
  },
  {
    product: 'credit_card',
    title: 'Кредитные карты',
    offers: [
      {
        image: vtb,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 1 000 000 ₽' },
          { icon: release, title: 'Выпуск', value: 'Бесплатно' },
          {
            icon: calendar,
            title: resolution === 'desktop' ? 'Беспроцентный период' : 'Период без %',
            value: resolution === 'desktop' ? 'до 110 дней без %' : 'до 110 дней',
          },
        ],
        bankName: 'VTB',
      },
      {
        image: raif,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 600 000 ₽' },
          { icon: release, title: 'Выпуск', value: 'Бесплатно' },
          {
            icon: calendar,
            title: resolution === 'desktop' ? 'Беспроцентный период' : 'Период без %',
            value: resolution === 'desktop' ? 'до 110 дней без %' : 'до 110 дней',
          },
        ],
        bankName: 'RAIFFAIZEN',
      },
      {
        image: citi,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 3 000 000 ₽' },
          { icon: release, title: 'Выпуск', value: 'Бесплатно' },
          {
            icon: calendar,
            title: resolution === 'desktop' ? 'Беспроцентный период' : 'Период без %',
            value: resolution === 'desktop' ? 'до 180 дней без %' : 'до 180 дней',
          },
        ],
        bankName: 'CITI',
      },
      {
        image: yral,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 1 000 000 ₽' },
          { icon: release, title: 'Выпуск', value: 'Бесплатно' },
          {
            icon: calendar,
            title: resolution === 'desktop' ? 'Беспроцентный период' : 'Период без %',
            value: resolution === 'desktop' ? 'до 120 дней без %' : 'до 120 дней',
          },
        ],
        bankName: 'YRAL',
      },
    ],
  },
  {
    product: 'credit_cash',
    title: 'Кредит наличными',
    offers: [
      {
        image: rgs,
        props: [
          { icon: limit, title: 'Сумма', value: 'до 3 000 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 7,9%' },
          { icon: calendar, title: 'Срок', value: 'до 5 лет' },
        ],
        bankName: 'RGS',
      },
      {
        image: go,
        props: [
          { icon: limit, title: 'Сумма', value: 'до 500 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 5,55%' },
          { icon: calendar, title: 'Срок', value: 'до 5 лет' },
        ],
        bankName: 'GO',
      },
      {
        image: akbars,
        props: [
          { icon: limit, title: 'Сумма', value: 'до 2 000 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 5,9%' },
          { icon: calendar, title: 'Срок', value: 'до 7 лет' },
        ],
        bankName: 'AKBARS',
      },
      {
        image: mkb,
        props: [
          { icon: limit, title: 'Сумма', value: 'до 5 000 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 6%' },
          { icon: calendar, title: 'Срок', value: 'до 15 лет' },
        ],
        bankName: 'MKB',
      },
    ],
  },
];

export const showcaseMFO: ShowcaseDataType = [
  {
    product: 'mfo',
    title: 'Микрокредит',
    offers: [
      {
        image: vebzaim,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 30 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 30 дней' },
        ],
        bankName: 'vebzaim',
        link: 'https://trkleads.ru/click/1bf670dae57b007d402ab24c900b8bed',
      },
      {
        image: webbankir,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 30 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 14 дней' },
        ],
        bankName: 'webbankir',
        link: 'https://trkleads.ru/click/140087928c685b05a0b3ee9e3c09fb64',
      },
      {
        image: tyrbozaim,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 30 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 21 дня' },
        ],
        bankName: 'tyrbozaim',
        link: 'https://trkleads.ru/click/698b7142316117e93da9f44771502cf7',
      },
      {
        image: kapusta,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 30 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 21 дня' },
        ],
        bankName: 'kapusta',
        link: 'https://trkleads.ru/click/9a11d38f3cfa9876a8a2f2e836a36c40',
      },
      {
        image: oneclick,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 30 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0%' },
          { icon: calendar, title: 'Срок', value: 'До 30 дней' },
        ],
        bankName: 'oneclick',
        link: 'https://trkleads.ru/click/44b7c36e423be024023626e45a5bc3ec',
      },
      // {
      //   image: lime,
      //   props: [
      //     {icon: limit, title: 'Лимит', value: 'до 30 000 ₽'},
      //     {icon: percent, title: 'Ставка', value: 'от 1%'},
      //     {icon: calendar, title: 'Срок', value: 'До 1 года'},
      //   ],
      //   bankName: 'lime',
      //   link: 'https://trkleads.ru/click/88790069df3ae21b21bf7a45f356d7c6',
      // },
      {
        image: monebo,
        props: [
          { icon: limit, title: 'Лимит', value: 'до 30 000 ₽' },
          { icon: percent, title: 'Ставка', value: 'от 0,5%' },
          { icon: calendar, title: 'Срок', value: 'До 1 года' },
        ],
        bankName: 'monebo',
        link: 'https://trkleads.ru/click/66489dba973cf79e283dfd7fc308b688',
      },
    ],
  },
];
