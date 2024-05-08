import React, { memo, useContext } from 'react';

import PressButton from '../../Buttons/PressButton';
import { Grid, GridItem } from '../../Grid/Grid';
import { iconsConfig } from '../../Icons/IconConfig';
import Modal from '../../Modals/Modal';

import dataQuestion from './dataQuestion';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';
import { UtmContext } from '@/Providers/Context/UtmContextProvider';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

const ListClientRequirements: React.FC<{
  title: string;
  items: Array<string>;
  handleClose: () => void;
}> = memo(({ title, items, handleClose }) => (
  <div style={{ margin: 24 }}>
    <div className="mb-24">
      <h3 className="title-text ta-center fs-30-24-17 color-black-main mb-24-16">
        {title}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li
            className="modal-question__description-text li-item title-text fs-20-17-14 mb-16"
            key={`${item}_${index + 1}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="container-flex-center-row">
      <PressButton type="main" text="Спасибо, понятно" onClick={handleClose} />
    </div>
  </div>
));

const ListCardNotification: React.FC<{
  title: string;
  items: Array<{ strongText: string; text: string }>;
  handleClose: () => void;
}> = memo(({ title, items, handleClose }) => (
  <div style={{ margin: 24 }}>
    <div className="mb-24">
      <h3 className="title-text ta-center fs-30-24-17 color-black-main mb-24-16">
        {title}
      </h3>
      <p className="title-text fs-20-17-14 mb-16">Выберите удобный формат уведомлений</p>
      {items.map((item, index) => (
        <p
          className="modal-question__description-text title-text fs-20-17-14 mb-16"
          key={`${item.strongText}_${index + 1}`}
        >
          <strong>{item.strongText}</strong>
          {item.text}
        </p>
      ))}
    </div>
    <div className="container-flex-center-row">
      <PressButton type="main" text="Спасибо, понятно" onClick={handleClose} />
    </div>
  </div>
));

const ListNumber: React.FC<{
  title: string;
  items: Array<{ number: number; text: string }>;
  handleClose: () => void;
  resolution: Viewport;
}> = memo(({ title, items, handleClose }) => (
  <div style={{ margin: 24 }}>
    <div className="mb-24">
      <h3 className="title-text ta-center fs-30-24-17 color-black-main mb-24-16">
        {title}
      </h3>
      {items.map((item, index) => (
        <Grid
          container
          className="mb-24-16"
          direction="row"
          key={`${item.text}_${index + 1}`}
          gridStyle={{ alignItems: 'center' }}
        >
          <GridItem
            colDesktop={1}
            colTablet={1}
            colMobile={2}
            justify="flex-start"
            align="center"
          >
            <div
              className="circle-number"
              style={{
                borderColor: `${iconsConfig.colors[Current.circlesColor[currentDomain]]}`,
              }}
            >
              <p className="circle-number__text title-text">{item.number}</p>
            </div>
          </GridItem>
          <GridItem
            colDesktop={11}
            colTablet={11}
            colMobile={10}
            justify="flex-start"
            align="center"
            wrap="nowrap"
          >
            <p className="modal-question__description-text title-text fs-20-17-14">
              {item.text}
            </p>
          </GridItem>
        </Grid>
      ))}
    </div>
    <div className="container-flex-center-row">
      <PressButton type="main" text="Спасибо, понятно" onClick={handleClose} />
    </div>
  </div>
));

const ListText: React.FC<{
  title: string;
  items: Array<{ titleText: string; descriptionText: string }>;
  handleClose: () => void;
}> = memo(({ title, items, handleClose }) => (
  <div style={{ margin: 24 }}>
    <div className="mb-24">
      <h3 className="title-text ta-center fs-30-24-17 color-black-main mb-24-16">
        {title}
      </h3>
      {items.map((item, index) => (
        <div className="mb-16" key={`List-text-item_${index + 1}`}>
          <h6 className="title-text color-black-main fs-20-17-14">{item.titleText}</h6>
          <p className="modal-question__description-text title-text fs-20-17-14">
            {item.descriptionText}
          </p>
        </div>
      ))}
    </div>
    <div className="container-flex-center-row">
      <PressButton type="main" text="Спасибо, понятно" onClick={handleClose} />
    </div>
  </div>
));

/* eslint-disable */
const ModalQuestions: React.FC<{ text: string; location: string }> = memo(
  ({ text, location }) => {
    const [switching, changeSwitching] = React.useState<any>(location);
    const [open, setOpen] = React.useState(false);
    const resolution = useAppSelector(state => state.config.viewport);
    const { free_period } = useContext(UtmContext);

    const handleClickOpen = () => {
      changeSwitching(location);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    const render = () => {
      switch (switching) {
        case 'client-requirements': // ТРЕБОВАНИЕ К КЛИЕНТУ
          return (
            <ListClientRequirements
              items={dataQuestion.dataRenderClientRequirements}
              title="Требование к клиенту"
              handleClose={handleClose}
            />
          );
        case 'refinancing': // РЕФЕНАНСИРОВАНИЕ
          return (
            <ListText
              items={dataQuestion.dataRenderRefinancing}
              title="Вопросы и ответы по услуге рефинансирование"
              handleClose={handleClose}
            />
          );
        case 'how-repay-credit': // КАК ПОГАШАТЬ КРЕДИТ
          return (
            <ListNumber
              resolution={resolution}
              items={dataQuestion.dataRenderHowRepayCredit}
              title="Как погашать кредит"
              handleClose={handleClose}
            />
          );
        case 'card-notification': // УВЕДОИМЛЕНИЯ ПО КАРТЕ
          return (
            <ListCardNotification
              items={dataQuestion.dataRenderCardNotification}
              title="Уведомления по карте"
              handleClose={handleClose}
            />
          );
        case 'borrower-memo': // ПАМЯТКА ЗАЁМЩИКА
          return (
            <ListNumber
              resolution={resolution}
              items={dataQuestion.dataRenderBorrowerMemo}
              title="Памятка заемщика"
              handleClose={handleClose}
            />
          );
        case 'card-replenishment': // ПОПОЛНЕНИЕ КАРТЫ
          return (
            <ListNumber
              resolution={resolution}
              items={dataQuestion.RenderCardReplenishment}
              title="Пополнение карты"
              handleClose={handleClose}
            />
          );
        case 'setting-PIN': // УСТАНОВКА ПИН-КОДА
          return (
            <ListNumber
              resolution={resolution}
              items={dataQuestion.dataRenderSettingPIN}
              title="Установка ПИН-кода"
              handleClose={handleClose}
            />
          );
        case 'safety': // БЕЗОПАСТНОСТЬ
          return (
            <ListNumber
              resolution={resolution}
              items={dataQuestion.dataRenderSafety}
              title="Безопасность"
              handleClose={handleClose}
            />
          );
        case 'reduced-financial-burden': // СНИЖЕНИЕ ФИНАНСОВОЙ НАГРУЗКИ
          return (
            <ListText
              items={dataQuestion.dataRenderReducedFinancialBurden}
              title="Снижение финансовой нагрузки"
              handleClose={handleClose}
            />
          );
        case 'questions-and-answers': // ВОПРОСЫ И ОТВЕТЫ ПО КАРТЕ
          return (
            <ListText
              items={dataQuestion.dataRenderQuestionsAndAnswers(free_period)}
              title={`Вопросы и ответы по кредитной карте «${free_period} дней»`}
              handleClose={handleClose}
            />
          );
        default:
          return null;
      }
    };

    return (
      <>
        <p
          className="question_items-text title-text"
          onClick={handleClickOpen}
          aria-hidden
        >
          {text}
        </p>
        <Modal isShowing={open} hide={handleClose}>
          {render()}
        </Modal>
      </>
    );
  },
);

export default ModalQuestions;
