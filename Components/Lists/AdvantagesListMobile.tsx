import React, { Fragment, memo, ReactNode, useContext } from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import { Auto } from '../Icons/Auto';
// import { BackArrow } from '../Icons/BackArrow';
import { Calendar } from '../Icons/Calendar';
import { CashBack } from '../Icons/CashBack';
import { Document } from '../Icons/Document';
import { House } from '../Icons/House';
import { JusticePlace } from '../Icons/JusticePlace';
import { Letter } from '../Icons/Letter';
import { Money } from '../Icons/Money';
import { Passport } from '../Icons/Passport';
import { Percentage } from '../Icons/Percentage';
import { RectangleCircle } from '../Icons/RectangleCircle';
import { Ruble } from '../Icons/Ruble';
import { Sms } from '../Icons/Sms';
import Wrapper from '../Layouts/Wrapper';

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

const AdvantagesListMobile: React.FC<ICardAdvantages> = memo(({ variant }) => {
  const resolution = useAppSelector(state => state.config.viewport);
  const { limit, free_period } = useContext(UtmContext);

  const dataAdvantagesCreditCard: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: `${limit} ₽`,
      descriptionText: 'Максимальный кредитный лимит',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: `До ${free_period} дней без %`,
      descriptionText:
        'Льготный период на покупки, снятие наличных и переводы на другие счета.',
    },
    {
      icon: (
        <House
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Бесплатная доставка',
      descriptionText: 'Сегодня или на следующий день',
    },
    {
      icon: (
        <Percentage
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Беспроцентная рассрочка**',
      descriptionText:
        'Выберите магазин партнёр и получите беспроцентную рассрочку на любой товар в этом магазине',
    },
    {
      icon: (
        <CashBack
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Кэшбэк у партнёров',
      descriptionText: 'Вернём до 30% за покупки у партнёров',
    },
    {
      icon: (
        <JusticePlace
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText:
        resolution !== 'mobile' ? 'Закрытие кредитов других банков' : 'Рефинансирование',
      descriptionText: `Погасите кредиты в других банках без комиссий и получите до ${free_period} дней без %`,
    },
  ];

  const dataAdvantagesCreditCash: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: '5 000 000 ₽',
      descriptionText: 'Максимальная сумма кредита',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Срок кредитования',
      descriptionText: 'До 60 месяцев',
    },
    {
      icon: (
        <Sms
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Решение по кредиту',
      descriptionText: 'Всего 2 минуты и вы получите решение в СМС сообщении',
    },
  ];

  const dataAdvantagesInstallment: Array<IDataAdvantages> = [
    {
      icon: (
        <Calendar
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Обслуживание 0 ₽',
      descriptionText: 'Годовое обслуживание карты 0 ₽',
    },
    {
      icon: (
        <CashBack
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Кэшбэк у партнёров',
      descriptionText: 'Вернём до 30% за покупки у партнёров',
    },
    {
      icon: (
        <House
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Бесплатная доставка',
      descriptionText: 'Доставим в день заявки по паспорту',
    },
  ];
  const dataAdvantagesMFO: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'До 100 000 ₽',
      descriptionText: 'Максимальная сумма кредита',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Срок кредита',
      descriptionText: 'до 12 месяцев',
    },
    {
      icon: (
        <Percentage
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Ставка 0%',
      descriptionText: 'Ставка 0% на весь срок',
    },
  ];
  const dataAdvantagesHypothec: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'до 200 000 000 ₽',
      descriptionText: 'Максимальная сумма ипотеки',
    },
    {
      icon: (
        <Document
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Упрощенный пакет документов',
      descriptionText: 'По паспорту',
    },
    {
      icon: (
        <House
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Решение по ипотеке',
      descriptionText: 'Всего 5 минут и Вы получите\n решение в СМС сообщении',
    },
    {
      icon: (
        <Money
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Первоначальный взнос',
      descriptionText: 'Первоначальный взнос от 10%',
    },
    {
      icon: (
        <Calendar
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Срок ипотеки',
      descriptionText: 'до 25 лет',
    },
    {
      icon: (
        <Letter
          size={resolution !== 'mobile' ? 40 : 25}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
        />
      ),
      headerText: 'Электронная регистрация',
      descriptionText: 'Электронная регистрация залога',
    },
  ];

  const dataAdvantagesCarCredit: Array<IDataAdvantages> = [
    {
      icon: (
        <Ruble
          size={resolution !== 'desktop' ? 25 : 40}
          color={Current.globalIconsColor[currentDomain]}
          containerClassName="mr-16"
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
          containerClassName="mr-16"
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
          containerClassName="mr-16"
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
          containerClassName="mr-16"
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
          containerClassName="mr-16"
        />
      ),
      headerText: 'Новое авто или с пробегом',
      descriptionText: 'Кредит на новую машину в любом автосалоне или подержанную с рук',
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

  const padding = {
    desktop: '40px',
    tablet: '24px',
    mobile: '22px 20px',
  };

  return (
    <div className="container-root">
      {!(
        resolution === 'mobile' &&
        variant === 'CreditCardPage'
      ) && (
        <h1 className="title-text fs-30-24-17 color-black-main mb-16">Преимущества</h1>
      )}

      <Wrapper
        style={{
          margin: 0,
          justifyContent: 'flex-start',
          padding: padding[resolution],
        }}
      >
        <Grid container alignSpace={16} gridStyle={{ height: '100%' }}>
          {changes().map((item, index) => (
            <Fragment key={`${item.headerText}${index + 1}`}>
              <GridItem colMobile={1} align="center">
                {item.icon}
              </GridItem>

              <GridItem colMobile={11} direction="column">
                <h2
                  className="title-text fs-30-24-17 color-black-main mb-4"
                  style={{ padding: 0, marginBottom: 4 }}
                >
                  {item.headerText}
                </h2>
                <p className="description-text fs-22-17-15" style={{ color: '#5A5A5A' }}>
                  {item.descriptionText}
                </p>
              </GridItem>
            </Fragment>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
});

export default AdvantagesListMobile;
