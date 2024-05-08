import { DomainProps } from '@/GlobalConfig/types';

export type Messenger = {
  link: string;
  logo: string;
  title: string;
};

export type docPathType = 'politics' | 'offer' | 'processing';

export type footerDocumentType = {
  [key in 'masterbank' | 'sobank']: {
    title: string;
    path: docPathType;
  }[];
};

export type ownerKeysType = 'Samohina' | 'Vidyakin' | 'Amosov' | 'Mashtakov';

export type footerContactsType = {
  phoneNumber: string;
  eMail: string;
};

export type footerCompanyName = {
  name: string;
  secondName?: string;
};

type ownerDataType = {
  owner: string;
  inn: string;
  licenseNumber: string;
  orderNumber: string;
  ogrn: string;
  address: {
    registrationAddress: string;
    factAddress: string;
  };
};

export const dataMessengers: Messenger[] = [
  { link: 'viber://pa?chatURI=svetlana_onlinebanki', logo: 'viber', title: 'Viber' },
  { link: 'https://t.me/OnlinebankiBot', logo: 'telegram', title: 'Telegram' },
  { link: 'https://vk.com/write-207835428', logo: 'vk', title: 'ВКонтакте' },
];

export const dataLinksInternal: Array<{ title: string; path: string }> = [
  {
    title: 'Кредит наличными',
    path: '/credit_cash/info',
  },
  {
    title: 'Кредитные карты',
    path: '/credit_card/info',
  },
  {
    title: 'Карты рассрочки',
    path: '/installment_card/info',
  },
  {
    title: 'Ипотека',
    path: '/hypothec/info',
  },
];

export const dataLinksExternal: Array<{ title: string; path?: string }> = [
  {
    title: 'Вклады',
  },
  {
    title: 'Инвестиции',
  },
  {
    title: 'Страхование',
  },
  {
    title: 'Скидки и акции',
  },
  {
    title: 'Зарплатным клиентам',
  },
  {
    title: 'Премиальное обслуживание',
  },
];

export const footerDocumentsList: footerDocumentType = {
  sobank: [
    { title: 'Партнеров', path: 'politics' },
    { title: 'обработку персональных данных', path: 'processing' },
    { title: 'оферту', path: 'offer' },
    {
      title: 'Политика относительно обработки персональных данных',
      path: 'processing',
    },
  ],
  masterbank: [
    { title: 'обработку персональных данных', path: 'processing' },
    {
      title: 'Политику относительно обработки персональных данных',
      path: 'processing',
    },
    { title: 'принимаете оферту', path: 'offer' },
  ],
};

export const footerOwnerData: { [key in ownerKeysType]: ownerDataType } = {
  Samohina: {
    owner: 'ИП Самохина Е.А.',
    inn: '744613115073',
    ogrn: '12525151',
    licenseNumber: '74-18-004739',
    orderNumber: '212 от 23.11.2018',
    address: {
      registrationAddress:
        '455038, Россия, Челябинская область, г. Магнитогорск, пр-кт Ленина, д. 122, кв. 33',
      factAddress:
        '455038, Россия, Челябинская область, г. Магнитогорск, пр-кт Ленина, д. 122, кв. 33',
    },
  },
  Vidyakin: {
    owner: 'ИП Видякин И.А.',
    inn: '6671262566',
    ogrn: '12525151',
    licenseNumber: '66-20-006575',
    orderNumber: '62 от 05.06.2020',
    address: {
      registrationAddress: '620026, Екатеринбург, Карла Маркса, д 12, кв 101',
      factAddress: '620026, Екатеринбург, Карла Маркса, д 12, кв 101',
    },
  },
  Amosov: {
    owner: 'ИП Амосов Н.А.',
    inn: '324665800038721',
    licenseNumber: '',
    address: { registrationAddress: '', factAddress: '' },
    ogrn: '',
    orderNumber: '',
  },
  Mashtakov: {
    owner: 'ИП Маштаков Е.С.',
    inn: '',
    ogrn: '12525151',
    licenseNumber: '',
    orderNumber: '',
    address: {
      registrationAddress: '',
      factAddress: '',
    },
  },
};

export const footerContactsData: DomainProps<footerContactsType> = {
  sovbank: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  kk_sobank: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  cc_sobank: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  first_credit: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  sop: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  pro: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  new_sobank: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  onbank: { phoneNumber: '+7(495)-128-83-34', eMail: 'support@card-online.su' },
  masterbank: { phoneNumber: '+7(495)-133-75-84', eMail: 'support@masterbank.pro' },
};

export const footerCompanyInfo: DomainProps<footerCompanyName> = {
  sovbank: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  cc_sobank: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  sop: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  kk_sobank: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  onbank: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  pro: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  new_sobank: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  first_credit: {
    name: 'Содействие банкам',
    secondName: 'Собанк',
  },
  masterbank: {
    name: 'Мастеркредитбанк',
  },
};
