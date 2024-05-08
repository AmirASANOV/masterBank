import React, { memo, ReactNode, useContext } from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import { Auto } from '../Icons/Auto';
import { Calendar } from '../Icons/Calendar';
import { Document } from '../Icons/Document';
import { House } from '../Icons/House';
import { JusticePlace } from '../Icons/JusticePlace';
import { Letter } from '../Icons/Letter';
import { Money } from '../Icons/Money';
import { Passport } from '../Icons/Passport';
import { Percentage } from '../Icons/Percentage';
import { RectangleCircle } from '../Icons/RectangleCircle';
import { Ruble } from '../Icons/Ruble';
import { SalePrice } from '../Icons/SalePrice';
import Subtitle from '../Text/Subtitle/Subtitle';
import Title from '../Text/Title/Title';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';
import { UtmContext } from '@/Providers/Context/UtmContextProvider';

interface ICardAdvantages {
  variant: string;
}

interface IDataAdvantages {
  icon: ReactNode;
  headerText: string;
  descriptionText: string;
}

const AdvantagesList: React.FC<ICardAdvantages> = memo(({ variant }) => {
  const { limit, free_period } = useContext(UtmContext);
  const resolution = useAppSelector(state => state.config.viewport);

  const dataAdvantagesCreditCard: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: `${limit} ₽`,
      descriptionText: 'Максимальный кредитный лимит',
    },
    {
      icon: (
        <SalePrice
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Кэшбэк у партнёров',
      descriptionText: 'Вернём до 30% за покупки у партнёров',
    },
    {
      icon: (
        <House
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Бесплатная доставка',
      descriptionText: 'Сегодня или на следующий день',
    },
    {
      icon: (
        <Percentage
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Беспроцентная\nрассрочка',
      descriptionText:
        'Выберите магазин-партнёр и получите беспроцентную рассрочку на любой товар в этом магазине',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: `${free_period} дней без %`,
      descriptionText:
        'Льготный период на покупки, снятие наличных и переводы на другие счета',
    },
    {
      icon: (
        <JusticePlace
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText:
        resolution !== 'mobile' ? 'Закрытие кредитов\nдругих банков' : 'Рефинансирование',
      descriptionText: `Погасите кредиты в других банках без комиссий и получите до ${free_period} дней без %`,
    },
  ];

  const dataAdvantagesCreditCash: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: '5 000 000 ₽',
      descriptionText: 'Максимальная сумма кредита',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Срок кредитования',
      descriptionText: 'До 60 месяцев',
    },
    {
      icon: (
        <House
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Решение по кредиту',
      descriptionText:
        resolution === 'desktop'
          ? 'Всего 2 минуты и Вы получите решение в СМС сообщении'
          : 'Сегодня или на следующий день',
    },
  ];

  const dataAdvantagesInstallment: Array<IDataAdvantages> = [
    {
      icon: (
        <Calendar
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Обслуживание 0 ₽',
      descriptionText: 'Годовое обслуживание карты\n 0 ₽',
    },
    {
      icon: (
        <SalePrice
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Кэшбэк у партнёров',
      descriptionText: 'Вернём до 30% за покупки у партнёров',
    },
    {
      icon: (
        <House
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Бесплатная доставка',
      descriptionText: 'Доставим в день заявки по паспорту',
    },
  ];

  const dataAdvantagesCarCredit: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'до 7 000 000 ₽',
      descriptionText: 'Максимальная сумма автокредита',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Срок автокредита',
      descriptionText: 'до 84 месяцев',
    },
    {
      icon: (
        <Percentage
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Ставка от 3,9%',
      descriptionText: 'Ставка от 3,9% на весь срок',
    },
    {
      icon: (
        <RectangleCircle
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Без первоначального взноса',
      descriptionText:
        'Процентная ставка и одобрение кредита не зависят от размера первоначального взноса',
    },
    {
      icon: (
        <Passport
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Нужен только паспорт',
      descriptionText:
        'Возможность получения только по паспорту при сумме кредита до 2 млн ₽',
    },
    {
      icon: (
        <Auto
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Новое авто или с пробегом',
      descriptionText: 'Кредит на новую машину в любом автосалоне или подержанную с рук',
    },
  ];

  const dataAdvantagesHypothec: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'до 200 000 000 ₽',
      descriptionText: 'Максимальная сумма ипотеки',
    },
    {
      icon: (
        <Document
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Упрощенный пакет документов',
      descriptionText: 'По паспорту',
    },
    {
      icon: (
        <House
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Решение по ипотеке',
      descriptionText: 'Всего 5 минут и Вы получите\n решение в СМС сообщении',
    },
    {
      icon: (
        <Money
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Первоначальный взнос',
      descriptionText: 'Первоначальный взнос от 10%',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Срок ипотеки',
      descriptionText: 'до 25 лет',
    },
    {
      icon: (
        <Letter
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Электронная регистрация',
      descriptionText: 'Электронная регистрация залога',
    },
  ];

  const dataAdvantagesMFO: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'до 100 000 ₽',
      descriptionText: 'Максимальная сумма кредита',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Срок кредита',
      descriptionText: 'до 12 месяцев',
    },
    {
      icon: (
        <Percentage
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      ),
      headerText: 'Ставка 0%',
      descriptionText: 'Ставка 0% на весь срок',
    },
  ];

  const changes = () => {
    switch (variant) {
      case 'CreditCardPage':
        return dataAdvantagesCreditCard;
      case 'CreditCashPage':
        return dataAdvantagesCreditCash;
      case 'InstallmentCardPage':
        return dataAdvantagesInstallment;
      case 'mfo':
        return dataAdvantagesMFO;
      case 'hypothec':
        return dataAdvantagesHypothec;
      case 'CarCredit':
        return dataAdvantagesCarCredit;
      default:
        return [];
    }
  };

  return (
    <Grid container space={resolution !== 'desktop' ? 40 : 80} alignSpace={40}>
      {changes().map((item, index) => (
        <GridItem
          key={`${item.headerText}${index + 1}`}
          colDesktop={4}
          direction="column"
          justify="flex-start"
          align="center"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: resolution !== 'desktop' ? 59 : 90,
              height: resolution !== 'desktop' ? 59 : 90,
              background: currentDomain === 'masterbank' ? '#FEE5D0' : '#E6EBF4',
              borderRadius: '50%',
              marginBottom: 16,
            }}
          >
            {item.icon}
          </div>
          <Title
            titleType="h3"
            titleStyle={{ marginBottom: 4, whiteSpace: 'pre-wrap' }}
            titleTextAlign={{ desktop: 'center', tablet: 'center', mobile: 'center' }}
          >
            {item.headerText}
          </Title>
          <Subtitle
            subtitleClassName="description-text color-gray fs-16"
            subtitleTextAlign={{ desktop: 'center', mobile: 'center', tablet: 'center' }}
            subtitleStyle={{ whiteSpace: 'pre-wrap' }}
          >
            {item.descriptionText}
          </Subtitle>
        </GridItem>
      ))}
    </Grid>
  );
});

export default AdvantagesList;
