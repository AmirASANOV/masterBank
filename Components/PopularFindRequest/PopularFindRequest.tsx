import React, { FC, memo } from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import Subtitle from '../Text/Subtitle/Subtitle';
import Title from '../Text/Title/Title';

import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';

interface PopularRequestList {
  title: string;
  url: string;
}

interface PopularArrayList {
  title: string;
  links: Array<PopularRequestList>;
}

type PopularArray = Array<PopularArrayList>;

const PopularArray: PopularArray = [
  {
    title: 'Кредиты',
    links: [
      { title: 'Кредиты наличными', url: '/credit_cash/info' },
      { title: 'Рефинансирование кредитов', url: '/credit_cash/info' },
      { title: 'Кредиты на карту', url: '/credit_card/info' },
      { title: 'Кредиты под залог авто', url: '/credit_cash/info' },
      { title: 'Кредиты под залог недвижимости', url: '/credit_cash/info' },
      { title: 'Онлайн заявка на кредит', url: '/credit_cash/info' },
      { title: 'Кредиты с плохой КИ', url: '/credit_cash/info' },
      { title: 'Кредиты без справок', url: '/credit_cash/info' },
    ],
  },
  {
    title: 'Вклады',
    links: [
      { title: 'Калькулятор вкладов', url: '' },
      { title: 'Накопительные счета', url: '' },
      { title: 'Самые выгодные вклады', url: '' },
      { title: 'Вклады в долларах', url: '' },
      { title: 'Валютные вклады', url: '' },
      { title: 'Вклады для пенсионеров', url: '' },
      { title: 'Вклады с евро', url: '' },
      { title: 'Вклады с пополнением', url: '' },
    ],
  },
  {
    title: 'Ипотека',
    links: [
      { title: 'Ипотечный калькулятор', url: '' },
      { title: 'Ипотека без первого взноса', url: '' },
      { title: 'Рефинансирование ипотека', url: '' },
      { title: 'Ипотека на строительство', url: '' },
      { title: 'Ипотека на загородный дом', url: '' },
      { title: 'Семейная ипотека', url: '' },
      { title: 'Ипотека с гос. поддержкой', url: '' },
      { title: 'Ипотека для молодой семьи', url: '' },
    ],
  },
  {
    title: 'Кредитные карты',
    links: [
      { title: 'Лучшие кредитные карты', url: '/credit_card/info' },
      { title: 'Кредитные карты без отказа', url: '/credit_card/info' },
      { title: 'Кредитные карты с плохой КИ', url: '/credit_card/info' },
      { title: 'Виртуальные кредитные карты', url: '/credit_card/info' },
      { title: 'Карты рассрочки', url: '/installment_card/info' },
      { title: 'Карты со 100% одобрением', url: '/credit_card/info' },
      { title: 'С моментальным решением', url: '/credit_card/info' },
      { title: 'Кредитные карты с доставкой', url: '/credit_card/info' },
    ],
  },
  {
    title: 'Дебетовые карты',
    links: [
      { title: 'Лучшие дебетовые карты', url: '' },
      { title: 'Дебетовые карты с кэшбэком', url: '' },
      { title: 'Дебетовые карты для ребенка', url: '' },
      { title: 'С бесплатным обслуживанием', url: '' },
      { title: 'Виртуальные дебетовые карты', url: '' },
      { title: 'Дебетовые карты МИР', url: '' },
      { title: 'С процентами на остаток', url: '' },
      { title: 'Дебетовые карты для пенсионеров', url: '' },
    ],
  },
  {
    title: 'Микрозаймы',
    links: [
      { title: 'Кредиты на карту', url: '' },
      { title: 'Кредиты без процентов', url: '' },
      { title: 'Кредиты без проверок', url: '' },
      { title: 'Кредиты онлайн', url: '' },
      { title: 'Кредиты на карту без отказа', url: '' },
      { title: 'Кредиты под ПТС', url: '' },
      { title: 'Кредиты без отказа', url: '' },
      { title: 'Кредиты с плохой КИ', url: '' },
    ],
  },
  {
    title: 'Страхование',
    links: [
      { title: 'Калькулятор ОСАГО', url: '' },
      { title: 'ОСАГО онлайн', url: '' },
      { title: 'КАСКО', url: '' },
      { title: 'Страхование для путешественников', url: '' },
      { title: 'Страхование ипотеки', url: '' },
      { title: 'Страхование жизни при ипотеке', url: '' },
      { title: 'Страхование недвижимости', url: '' },
      { title: 'Страхование от несчастных случаев', url: '' },
    ],
  },
  {
    title: 'Продукты в банках',
    links: [
      { title: 'Вклады в банках', url: '' },
      { title: 'Кредиты в банках', url: '' },
      { title: 'Ипотека в банках', url: '' },
      { title: 'Кредитные карты в банках', url: '' },
      { title: 'Дебетовые карты в банках', url: '' },
      { title: 'Авто-кредиты в банках', url: '' },
    ],
  },
];

const PopularFindRequest: FC = memo(() => {
  const history = useHistoryWithUTM();
  return (
    <div style={{ padding: '40px 0px' }}>
      <Title titleStyle={{ marginBottom: 32 }}>Часто ищут</Title>
      <Grid container space={40} alignSpace={72}>
        {PopularArray.map((item, mainIndex) => (
          <GridItem
            colDesktop={3}
            justify="flex-start"
            wrap="wrap"
            align="start"
            direction="column"
            key={`${item.title}_list_${mainIndex + 1}`}
          >
            <Title
              titleType="h5"
              titleMargins={{
                desktop: { bottom: 24 },
                tablet: { bottom: 16 },
                mobile: { bottom: 16 },
              }}
            >
              {item.title}
            </Title>
            {item.links.map((link, linkIndex) => (
              <Subtitle
                key={`link_item_${linkIndex + 1}`}
                onClick={() => {
                  if (link.url) {
                    history.push(link.url);
                  }
                }}
                subtitleClassName={`description-text color-gray fs-15 ${
                  link.url ? 'description-link' : ''
                }`}
                subtitleStyle={{
                  marginBottom: 8,
                  textDecoration: link.url ? 'underline' : '',
                  cursor: link.url ? 'pointer' : '',
                }}
              >
                {link.title}
              </Subtitle>
            ))}
          </GridItem>
        ))}
      </Grid>
    </div>
  );
});

export default PopularFindRequest;
