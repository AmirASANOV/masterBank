import React, { Fragment, memo, useContext } from 'react';

import { Grid, GridItem } from '../../Grid/Grid';
import { PdfDoc } from '../../Icons/PdfDoc';

import {
  dataQuestionsCarCredit,
  dataQuestionsCreditCard,
  dataQuestionsCreditCash,
  dataQuestionsHypothec,
  dataQuestionsInstallmentPlan,
  dataQuestionsMFO,
} from './dataQuestion';
import ModalQuestions from './ModalQuestions';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';
import { UtmContext } from '@/Providers/Context/UtmContextProvider';

interface IQuestionsList {
  steps?: string[];
  variant: string;
}

const QuestionsList: React.FC<IQuestionsList> = memo(({ variant, steps }) => {
  const resolution = useAppSelector(state => state.config.viewport);
  const { free_period } = useContext(UtmContext);

  const renderDataQuestions = () => {
    switch (variant) {
      case 'CreditCardPage':
        return dataQuestionsCreditCard(free_period);
      case 'CreditCashPage':
        return dataQuestionsCreditCash;
      case 'InstallmentCardPage-plan':
        return dataQuestionsInstallmentPlan;
      case 'mfo':
        return dataQuestionsMFO;
      case 'hypothec':
        return dataQuestionsHypothec;
      case 'car_credit':
        return dataQuestionsCarCredit;
      default:
        return [];
    }
  };

  const size = {
    margin: {
      mobile: 16,
      tablet: 24,
      desktop: 24,
    },
    iconSize: {
      desktop: 35,
      tablet: 35,
      mobile: 28,
    },
  };

  const arrayIndex: Array<number> = [0, 2, 4, 6, 8];

  return (
    <section className="question">
      <h2
        className={
          variant === 'CreditCardPage'
            ? `title-text ta-center fs-30-24-17 color-black-main mb-24-16 title-text-${currentDomain}`
            : `title-text ta-center fs-30-24-17 color-black-main mb-24-16`
        }
      >
        Если у Вас остались вопросы
      </h2>
      <Grid
        container
        space={16}
        alignSpace={size.margin[resolution]}
        justify="center"
        align="center"
        gridStyle={{ height: '100%' }}
        className={variant === 'CreditCardPage' ? `grid-questions-${currentDomain}` : ''}
      >
        {renderDataQuestions().map((item, index) => (
          <Fragment key={`question_${item.text}_${index + 1}`}>
            {variant === 'CreditCashPage' ||
            variant === 'mfo' ||
            variant === 'hypothec' ||
            variant === 'car_credit' ||
            resolution !== 'desktop' ? (
              ''
            ) : (
              <>{arrayIndex.includes(index) ? <GridItem colDesktop={2} /> : ''}</>
            )}
            <GridItem
              colDesktop={
                variant === 'CreditCashPage' ||
                variant === 'mfo' ||
                variant === 'hypothec' ||
                variant === 'car_credit'
                  ? 4
                  : 5
              }
              colTablet={6}
              colMobile={12}
              justify="center"
              align="center"
              wrap="nowrap"
            >
              <div style={{ marginRight: 10 }}>
                <PdfDoc
                  size={size.iconSize[resolution]}
                  color={Current.pdfColor[currentDomain]}
                />
              </div>
              <div
                className={
                  resolution === 'desktop' &&
                  (variant === 'CreditCashPage' ||
                    variant === 'mfo' ||
                    variant === 'hypothec' ||
                    variant === 'car_credit')
                    ? ''
                    : 'wd-100'
                }
              >
                <ModalQuestions text={item.text} location={item.location} />
              </div>
            </GridItem>
          </Fragment>
        ))}
      </Grid>
    </section>
  );
});

export default QuestionsList;
