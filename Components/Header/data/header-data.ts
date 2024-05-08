import { currentDomain } from '@/GlobalConfig';

const links: {
  [key in 'masterbank' | 'sobank']: {
    url: string;
    title: string;
    agreementUrl: string[];
  }[];
} = {
  sobank: [
    {
      url: '/credit_cash/info',
      title: 'Кредит наличными',
      agreementUrl: [
        '/credit_cash/info',
        '/user/credit/credit_cash',
        '/user/change_anketa/credit_cash',
      ],
    },
    {
      url: '/credit_card/info',
      title: 'Кредитные карты',
      agreementUrl: [
        '/credit_card/info',
        '/user/credit/credit_card',
        '/user/change_anketa/credit_card',
      ],
    },
    {
      url: '/installment_card/info',
      title: 'Карты рассрочки',
      agreementUrl: [
        '/installment_card/info',
        '/user/credit/installment_card',
        '/user/change_anketa/installment_card',
      ],
    },
    {
      url: '/mfo/info',
      title: 'Отписаться от звонков',
      agreementUrl: ['/mfo/info', '/user/credit/mfo', '/user/change_anketa/mfo'],
    },
    {
      url: '/hypothec/info',
      title: 'Ипотека',
      agreementUrl: ['/hypothec/info', '/hypothec'],
    },
    // {
    //   url: '/car_credit/info',
    //   title: 'Автокредит',
    //   agreementUrl: [
    //     '/car_credit/info',
    //     '/user/credit/car_credit',
    //     '/user/change_anketa/car_credit',
    //   ],
    // },
  ],
  masterbank: [
    {
      url: '/credit_card/info',
      title: 'Кредитные карты',
      agreementUrl: [
        '/credit_card/info',
        '/user/credit/credit_card',
        '/user/change_anketa/credit_card',
      ],
    },
    {
      url: '/credit_cash/info',
      title: 'Кредит наличными',
      agreementUrl: [
        '/credit_cash/info',
        '/user/credit/credit_cash',
        '/user/change_anketa/credit_cash',
      ],
    },
    {
      url: '/hypothec/info',
      title: 'Ипотека',
      agreementUrl: ['/hypothec/info', '/hypothec'],
    },
    {
      url: '/car_credit/info',
      title: 'Автокредит',
      agreementUrl: [
        '/car_credit/info',
        '/user/credit/car_credit',
        '/user/change_anketa/car_credit',
      ],
    },
    {
      url: '/installment_card/info',
      title: 'Дебетовые карты',
      agreementUrl: [
        '/installment_card/info',
        '/user/credit/installment_card',
        '/user/change_anketa/installment_card',
      ],
    },
  ],
};

const theme = currentDomain === 'masterbank' ? 'masterbank' : 'sobank';

export const arrayLinks = links[theme];
