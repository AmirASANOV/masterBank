import {
  DataElement,
  EmploymentTypeValue,
  TypeOfInputData,
} from '@/Components/Inputs/Types/InputPropsType';
import { App } from '@/ProjectTypes/AppTypes';

export const employmentType: TypeOfInputData<EmploymentTypeValue> = [
  { value: 'WORKACTIVITY.1', title: 'Официально' },
  { value: 'WORKACTIVITY.3', title: 'Неофициально' },
  { value: 'WORKACTIVITY.2', title: 'Индивидуальный предприниматель' },
  { value: 'WORKACTIVITY.4', title: 'Владелец бизнеса' },
  { value: 'WORKACTIVITY.7', title: 'Не работаю' },
];

export const proofOfIncome: TypeOfInputData = [
  { value: '1', title: 'Справка 2-НДФЛ' },
  { value: '2', title: 'Справка 3-НДФЛ' },
  { value: '3', title: 'Справка по форме банка' },
  { value: '4', title: 'Без подтверждения дохода' },
];

export const EducationData: TypeOfInputData = [
  { value: 'EDUCATION.LEVEL.1', title: 'Неоконченное среднее' },
  { value: 'EDUCATION.LEVEL.2', title: 'Среднее общее' },
  { value: 'EDUCATION.LEVEL.3', title: 'Начальное / среднее профессиональное' },
  { value: 'EDUCATION.LEVEL.4', title: 'Неоконченное высшее' },
  { value: 'EDUCATION.LEVEL.5', title: 'Высшее' },
  {
    value: 'EDUCATION.LEVEL.6',
    title: '2 и более высших / аспирантура / ученая степень',
  },
];

export const familyStatusData: TypeOfInputData = [
  { value: 'FAMILY.STATUS.1', title: 'В браке не состоял(-а)' },
  { value: 'FAMILY.STATUS.2', title: 'Замужем / женат' },
  { value: 'FAMILY.STATUS.3', title: 'Вдова / вдовец' },
  { value: 'FAMILY.STATUS.4', title: 'Разведен(-а)' },
  { value: 'FAMILY.STATUS.5', title: 'Гражданский брак' },
];

export const childrenData: TypeOfInputData = [
  { value: '0', title: 'Нет детей' },
  { value: '1', title: '1' },
  { value: '2', title: '2' },
  { value: '3', title: '3' },
  { value: '4', title: 'Больше 3' },
];

export const havingCarData: TypeOfInputData = [
  { value: '0', title: 'Нет' },
  { value: '1', title: 'Отечественный' },
  { value: '1', title: 'Иномарка' },
];

export const havingRealEstateData: TypeOfInputData = [
  { value: '1', title: 'Квартира' },
  { value: '1', title: 'Апартаменты' },
  { value: '1', title: 'Коммерческая недвижимость' },
  { value: '0', title: 'Нет' },
];

export const genderList = [
  { value: 'MALE', title: 'Мужской', id: 'form_gender_male' },
  { value: 'FEMALE', title: 'Женский', id: 'form_gender_female' },
];

export const creditTarget: TypeOfInputData<App.CreditProduct> = [
  { value: 'credit_cash', title: 'Кредит наличными' },
  { value: 'credit_card', title: 'Кредитная карта' },
  { value: 'installment_card', title: 'Дебетовая карта' },
  { value: 'mfo', title: 'Кредит до 100 000 под 0%' },
  { value: 'car_credit', title: 'Автокредит' },
];

export const expList: TypeOfInputData = [
  { value: '6', title: 'От 3 до 6 месяцев' },
  { value: '12', title: 'От 6 месяцев до 1 года' },
  { value: '36', title: 'От 1 года до 3 лет' },
  { value: '120', title: 'От 3 лет до 10 лет' },
  { value: '360', title: 'От 10 лет до 30 лет' },
];

export const workActivityTypeData: Array<DataElement<App.WorkActivityValues>> = [
  { value: 'CLIENT.ACTIVITY.SCOPE.1', title: 'Высшее управление' },
  { value: 'CLIENT.ACTIVITY.SCOPE.2', title: 'Финансы, бухгалтерия' },
  { value: 'CLIENT.ACTIVITY.SCOPE.3', title: 'Производство' },
  { value: 'CLIENT.ACTIVITY.SCOPE.4', title: 'Обслуживание клиентов, продажи' },
  { value: 'CLIENT.ACTIVITY.SCOPE.5', title: 'Кадровая служба, секретариат' },
  { value: 'CLIENT.ACTIVITY.SCOPE.6', title: 'Информационное обеспечение' },
  {
    value: 'CLIENT.ACTIVITY.SCOPE.7',
    title: 'Реклама, маркетинг, связи с общественностью',
  },
  { value: 'CLIENT.ACTIVITY.SCOPE.8', title: 'Обеспечение безопасности' },
  { value: 'CLIENT.ACTIVITY.SCOPE.9', title: 'Юриспруденция' },
  { value: 'CLIENT.ACTIVITY.SCOPE.11', title: 'Аналитика, исследования' },
  { value: 'CLIENT.ACTIVITY.SCOPE.12', title: 'Транспорт и логистика' },
  { value: 'CLIENT.ACTIVITY.SCOPE.14', title: 'Иное' },
];

export const regionHypothecData: TypeOfInputData = [
  { value: 'Алтайский край', title: 'Алтайский край ' },
  { value: 'Амурская область', title: 'Амурская область ' },
  { value: 'Архангельская область', title: 'Архангельская область ' },
  { value: 'Астраханская область', title: 'Астраханская область' },
  { value: 'Белгородская область', title: 'Белгородская область' },
  { value: 'Брянская область', title: 'Брянская область' },
  { value: 'Владимирская область', title: 'Владимирская область' },
  { value: 'Волгоградская область', title: 'Волгоградская область' },
  { value: 'Вологодская область', title: 'Вологодская область' },
  { value: 'Воронежская область', title: 'Воронежская область' },
  { value: 'Еврейская автономная область', title: 'Еврейская автономная область' },
  { value: 'Забайкальский край', title: 'Забайкальский край' },
  { value: 'Ивановская область', title: 'Ивановская область' },
  { value: 'Иркутская область', title: 'Иркутская область' },
  { value: 'Калининградская область', title: 'Калининградская область' },
  { value: 'Калужская область', title: 'Калужская область' },
  { value: 'Камчатский край', title: 'Камчатский край' },
  { value: 'Кемеровская область', title: 'Кемеровская область' },
  { value: 'Кировская область', title: 'Кировская область' },
  { value: 'Костромская область', title: 'Костромская область' },
  { value: 'Краснодарский край', title: 'Краснодарский край' },
  { value: 'Красноярский край', title: 'Красноярский край' },
  { value: 'Курганская область', title: 'Курганская область' },
  { value: 'Курская область', title: 'Курская область' },
  { value: 'Ленинградская область', title: 'Ленинградская область' },
  { value: 'Липецкая область', title: 'Липецкая область' },
  { value: 'Магаданская область', title: 'Магаданская область' },
  { value: 'Московская область', title: 'Московская область' },
  { value: 'Мурманская область', title: 'Мурманская область' },
  { value: 'Ненецкий автономный округ', title: 'Ненецкий автономный округ' },
  { value: 'Нижегородская область', title: 'Нижегородская область' },
  { value: 'Новгородская область', title: 'Новгородская область' },
  { value: 'Новосибирская область', title: 'Новосибирская область' },
  { value: 'Омская область', title: 'Омская область' },
  { value: 'Оренбургская область', title: 'Оренбургская область' },
  { value: 'Орловская область', title: 'Орловская область' },
  { value: 'Пензенская область', title: 'Пензенская область' },
  { value: 'Пермский край', title: 'Пермский край' },
  { value: 'Приморский край', title: 'Приморский край' },
  { value: 'Псковская область', title: 'Псковская область' },
  { value: 'Республика Адыгея', title: 'Республика Адыгея' },
  { value: 'Республика Алтай', title: 'Республика Алтай' },
  { value: 'Республика Башкортостан', title: 'Республика Башкортостан' },
  { value: 'Республика Бурятия', title: 'Республика Бурятия' },
  { value: 'Республика Калмыкия', title: 'Республика Калмыкия' },
  { value: 'Республика Карелия', title: 'Республика Карелия' },
  { value: 'Республика Коми', title: 'Республика Коми' },
  { value: 'Республика Крым', title: 'Республика Крым' },
  { value: 'Республика Марий Эл', title: 'Республика Марий Эл' },
  { value: 'Республика Мордовия', title: 'Республика Мордовия' },
  { value: 'Республика Саха', title: 'Республика Саха' },
  { value: 'Республика Татарстан', title: 'Республика Татарстан' },
  { value: 'Республика Тыва', title: 'Республика Тыва' },
  { value: 'Республика Удмуртия', title: 'Республика Удмуртия' },
  { value: 'Республика Хакасия', title: 'Республика Хакасия' },
  { value: 'Республика Чувашия', title: 'Республика Чувашия' },
  { value: 'Ростовская область', title: 'Ростовская область' },
  { value: 'Рязанская область', title: 'Рязанская область' },
  { value: 'Самарская область', title: 'Самарская область' },
  { value: 'Саратовская область', title: 'Саратовская область' },
  { value: 'Сахалинская область', title: 'Сахалинская область' },
  { value: 'Свердловская область', title: 'Свердловская область' },
  { value: 'Смоленская область', title: 'Смоленская область' },
  { value: 'Ставропольский край', title: 'Ставропольский край' },
  { value: 'Тамбовская область', title: 'Тамбовская область' },
  { value: 'Тверская область', title: 'Тверская область' },
  { value: 'Томская область', title: 'Томская область' },
  { value: 'Тульская область', title: 'Тульская область' },
  { value: 'Тюменская область', title: 'Тюменская область' },
  { value: 'Ульяновская область', title: 'Ульяновская область' },
  { value: 'Хабаровский край', title: 'Хабаровский край' },
  {
    value: 'Ханты-Мансийский автономный округ',
    title: 'Ханты-Мансийский автономный округ',
  },
  { value: 'Челябинская область', title: 'Челябинская область' },
  { value: 'Чукотский автономный округ', title: 'Чукотский автономный округ' },
  { value: 'Ярославская область', title: 'Ярославская область' },
];

export const apartmentHypothecType: TypeOfInputData = [
  { value: 'Квартира в готовом доме', title: 'Квартира в готовом доме' },
  { value: 'Квартира в строящемся доме', title: 'Квартира в строящемся доме' },
  { value: 'Апартаменты в готовом доме', title: 'Апартаменты в готовом доме' },
  { value: 'Апартаменты в строящемся доме', title: 'Апартаменты в строящемся доме' },
  { value: 'Отдельная комната', title: 'Отдельная комната' },
  { value: 'Выкуп последней комнаты/доли', title: 'Выкуп последней комнаты/доли' },
  {
    value: 'Под залог имеющейся квартиры на улучшение жилищных условий',
    title: 'Под залог имеющейся квартиры на улучшение жилищных условий',
  },
  {
    value: 'Под залог имеющейся квартиры на любые цели',
    title: 'Под залог имеющейся квартиры на любые цели',
  },
  { value: 'Готовый дом с землей', title: 'Готовый дом с землей' },
  { value: 'Гараж/ место паркинга (готовый)', title: 'Гараж/ место паркинга (готовый)' },
  {
    value: 'Гараж/ место паркинга (строящийся)',
    title: 'Гараж/ место паркинга (строящийся)',
  },
  {
    value: 'Рефинансирование задолженности из другого банка',
    title: 'Рефинансирование задолженности из другого банка',
  },
];
