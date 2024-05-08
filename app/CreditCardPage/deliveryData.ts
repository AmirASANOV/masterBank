import call from '@/Assets/get_free_delivery/call-in.svg';
import calendar from '@/Assets/get_free_delivery/date.svg';
import delivery from '@/Assets/get_free_delivery/delivery.svg';

export type ListItemType = {
  img: string;
  text: string;
};

export const deliveryData: ListItemType[] = [
  { img: call, text: 'Заполните онлайн-анкету,\nэто займет 5 минут' },
  { img: calendar, text: 'Вы вместе с ним выберете \nдату, время и место встречи' },
  { img: delivery, text: 'Курьер привезет карту \nи все документы' },
];
