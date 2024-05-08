import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';

export const dataQuestionsCreditCard = (
  period: Nullable<string>,
): Array<{ text: string; location: string }> => [
  {
    text: 'Требования к клиенту',
    location: 'client-requirements',
  },
  {
    text: 'Вопросы и ответы по услуге рефинансирование',
    location: 'refinancing',
  },
  {
    text: 'Как погашать кредит',
    location: 'how-repay-credit',
  },
  {
    text: 'Уведомление по карте',
    location: 'card-notification',
  },
  {
    text: 'Памятка заемщика',
    location: 'borrower-memo',
  },
  {
    text: 'Пополнение карты',
    location: 'card-replenishment',
  },
  {
    text: 'Установка ПИН-кода',
    location: 'setting-PIN',
  },
  {
    text: 'Безопасность',
    location: 'safety',
  },
  {
    text: 'Снижение финансовой нагрузки',
    location: 'reduced-financial-burden',
  },
  {
    text: `Вопросы и ответы по кредитной карте «${period} дней»`,
    location: 'questions-and-answers',
  },
];

export const dataQuestionsCreditCash: Array<{ text: string; location: string }> = [
  {
    text: 'Как погашать кредит',
    location: 'how-repay-credit',
  },
  {
    text: 'Безопасность',
    location: 'safety',
  },
  {
    text: 'Снижение финансовой нагрузки',
    location: 'reduced-financial-burden',
  },
];

export const dataQuestionsMFO: Array<{ text: string; location: string }> = [
  {
    text: 'Как погашать кредит',
    location: 'how-repay-credit',
  },
  {
    text: 'Безопасность',
    location: 'safety',
  },
  {
    text: `Снижение финансовой\n нагрузки`,
    location: 'reduced-financial-burden',
  },
];
export const dataQuestionsHypothec: Array<{ text: string; location: string }> = [
  {
    text: 'Как погашать ипотеку',
    location: 'how-repay-credit',
  },
  {
    text: 'Безопасность',
    location: 'safety',
  },
  {
    text: `Снижение финансовой\n нагрузки`,
    location: 'reduced-financial-burden',
  },
];
export const dataQuestionsCarCredit: Array<{ text: string; location: string }> = [
  {
    text: 'Как погашать Автокредит',
    location: 'how-repay-credit',
  },
  {
    text: 'Безопасность',
    location: 'safety',
  },
  {
    text: `Снижение финансовой\n нагрузки`,
    location: 'reduced-financial-burden',
  },
];

export const dataQuestionsInstallmentPlan = [
  {
    text: 'Требования к клиенту',
    location: 'client-requirements',
  },
  {
    text: 'Пополнение карты',
    location: 'card-replenishment',
  },
  // {
  //   text: 'Как погашать кредит',
  //   location: 'how-repay-credit',
  // },
  {
    text: 'Установка ПИН-кода',
    location: 'setting-PIN',
  },
  {
    text: 'Уведомление по карте',
    location: 'card-notification',
  },
  {
    text: 'Безопасность',
    location: 'safety',
  },
  // {
  //   text: 'Памятка заемщика',
  //   location: 'borrower-memo',
  // },
  // {
  //   text: 'Снижение финансовой нагрузки',
  //   location: 'reduced-financial-burden',
  // },
];

const dataRenderClientRequirements: Array<string> = [
  'Гражданин РФ в возрасте от 21 до 75 лет',
  'Зарегистрированы в регионе присутствия банков-партнеров',
  'Проработали не менее 3 месяцев на текущем месте работы',
  'Минимальный ежемесячный доход по основному месту работы после налогообложения 15 000 рублей',
];

const dataRenderRefinancing: Array<{ titleText: string; descriptionText: string }> = [
  {
    titleText:
      'Можно ли рефинансировать одновременно несколько кредитных карт других банков?',
    descriptionText:
      '- Да, рефинансировать можно несколько кредитных карт других банков (точные условия определяются тарифным планом банка-партнёра).',
  },
  {
    titleText: 'Через какое время можно воспользоваться услугой повторно?',
    descriptionText:
      '- Минимальный интервал между датами оказания услуги - 92 дня, но не более 4 раза в год (точные условия определяются тарифным планом банка-партнёра).',
  },
  {
    titleText:
      'Нужно ли приносить справку для подтверждения закрытия кредитной карты другого банка?',
    descriptionText:
      '- Не нужно. Банк сам проверяет факт закрытия кредитной карты в БКИ (точные условия определяются тарифным планом банка-партнёра).',
  },
  {
    titleText: 'Входит ли операция по рефинансированию в льготный период?',
    descriptionText: '- Да (точные условия определяются тарифным планом банка-партнёра).',
  },
];

const dataRenderHowRepayCredit: Array<{ number: number; text: string }> = [
  {
    number: 1,
    text: 'Уточните дату и сумму платежа, реквизиты кредита',
  },
  {
    number: 2,
    text: 'Выберите, каким способом внести платеж',
  },
  {
    number: 3,
    text: 'Внесите на счет или карту нужную сумму',
  },
];

const dataRenderCardNotification: Array<{ strongText: string; text: string }> = [
  {
    strongText: 'SMS',
    text: ' - Без интернета — SMS дойдет, даже если у вас не работает интернет.',
  },
  {
    strongText: 'Push Pro',
    text: ' - С интернетом и без — если не сможем доставить push в мобильном банке из-за отсутствия интернета, отправим вам SMS.',
  },
  {
    strongText: 'Push',
    text: ' - При стабильном интернете — если не сможем доставить push в мобильном банке из-за отсутствия интернета, то отправим его снова, как только соединение восстановится.',
  },
];

const dataRenderBorrowerMemo: Array<{ number: number; text: string }> = [
  {
    number: 1,
    text: 'Решение о получении потребительского кредита — ответственное решение',
  },
  {
    number: 2,
    text: 'Внимательно изучите всю информацию о кредите и условиях его обслуживания (погашения)',
  },
  {
    number: 3,
    text: 'Внимательно изучите кредитный договор и другие документы',
  },
  {
    number: 4,
    text: 'Подписание кредитного договора — самый ответственный этап',
  },
];

const RenderCardReplenishment: Array<{ number: number; text: string }> = [
  {
    number: 1,
    text: 'В банкоматах',
  },
  {
    number: 2,
    text: 'В банкоматах других банков',
  },
  {
    number: 3,
    text: 'Переводом с любой карты',
  },
];

const dataRenderSettingPIN: Array<{ number: number; text: string }> = [
  {
    number: 1,
    text: 'Зарегистрируйтесь по номеру карты',
  },
  {
    number: 2,
    text: 'Выберите карту для активации',
  },
  {
    number: 3,
    text: 'Введите требуемые цифры номера карты',
  },
  {
    number: 4,
    text: 'Придумайте и введите ПИН-код',
  },
  {
    number: 5,
    text: 'Введите код подтверждения из СМС-сообщения',
  },
];

const dataRenderSafety: Array<{ number: number; text: string }> = [
  {
    number: 1,
    text: 'Вы используете безопасное соединение - в адресной строке браузера изображен значок закрытого замка, а текст начинается с «https».',
  },
  {
    number: 2,
    text: 'Вы используете брандмауэр и подключены к интернету по локальной сети',
  },
  {
    number: 3,
    text: 'На Вашем устройстве нет тревожных сообщений от антивируса.',
  },
];

const dataRenderReducedFinancialBurden: Array<{
  titleText: string;
  descriptionText: string;
}> = [
  {
    titleText: 'Реструктуризация кредита',
    descriptionText:
      '- Если у Вас серьезные трудности с оплатой, мы можем пойти вам навстречу: увеличить срок, что позволит уменьшить ежемесячный платеж, или отсрочить погашение',
  },
  {
    titleText: 'Изменить график платежей',
    descriptionText:
      '- Узнайте об условиях изменения даты платежа по кредитному договору',
  },
  {
    titleText: 'Сообщить о платеже',
    descriptionText:
      '- Не оплатили? Забыли? Закрутились? Сообщите нам дату, когда Вы сможете произвести платеж по кредиту',
  },
];

const dataRenderQuestionsAndAnswers = (
  period: Nullable<string>,
): Array<{ titleText: string; descriptionText: string }> => [
  {
    titleText: `Что такое карта «${period} дней»?`,
    descriptionText: `- Карта «${period} дней» - это карта которая приводится для примера пользователям сайта. Срок ${period} дней без процентов взят у одного из банков-партнёров в качестве примера.`,
  },
  {
    titleText: 'На какой платежной системе выпускается кредитная карта?',
    descriptionText: '- Visa / Mastercard',
  },
];

const dataQuestion = {
  dataRenderClientRequirements,
  dataRenderRefinancing,
  dataRenderHowRepayCredit,
  dataRenderCardNotification,
  dataRenderBorrowerMemo,
  RenderCardReplenishment,
  dataRenderSettingPIN,
  dataRenderSafety,
  dataRenderReducedFinancialBurden,
  dataRenderQuestionsAndAnswers,
};

export default dataQuestion;
