import { App } from '@/ProjectTypes/AppTypes';

const setBtnBannerText = (location: string): string => {
  switch (location) {
    case 'mfo':
      return 'Отписаться от звонков';

    case 'CreditCashPage':
      return 'Оформить заявку';

    case 'hypothec':
      return 'Оформить заявку';

    default:
      return 'Оформить карту';
  }
};

const chooseBannerStep = (location: string): App.CreditProduct => {
  switch (location) {
    case 'mfo':
      return 'mfo';

    case 'CreditCardPage':
      return 'credit_card';

    case 'CreditCashPage':
      return 'credit_cash';

    case 'CarCreditPage':
      return 'car_credit';

    case 'InstallmentCardPage':
      return 'installment_card';

    case 'hypothec':
      return 'hypothec';

    case 'CarCredit':
      return 'car_credit';

    default:
      return 'credit_card';
  }
};

export { setBtnBannerText, chooseBannerStep };
