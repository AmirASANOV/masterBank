import React, { memo } from 'react';

import PressButton from '../Buttons/PressButton';
import { Grid, GridItem } from '../Grid/Grid';
import Title from '../Text/Title/Title';

import { resetMask } from '@/Common/AppFormController/ControllersFunc';
import { analyzeCreditTarget } from '@/Common/AppFormHelpers/Helpers';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Current, currentDomain } from '@/GlobalConfig';
import { App } from '@/ProjectTypes/AppTypes';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';

const OnBankAdvantages: React.FC<{ product: App.CreditProduct }> = memo(({ product }) => {
  const data: Array<string> = [
    'Оформление\nонлайн',
    'Бесплатная\nдоставка',
    product === 'installment_card'
      ? 'Снятие наличных\nбез комиссии'
      : 'Беспроцентный\nпериод',
    'Кэшбэк до 30%\n ',
  ];

  const { viewport } = useAppSelector(state => state.config);
  const dispatch = useAppDispatch();
  const { isAuth, token, phoneNumber } = useAppSelector(state => state.session);
  const history = useHistoryWithUTM();
  const pages = ['credit_card', 'credit_cash', 'installment_card'];
  const page = pages.find(item => history.location.pathname.includes(item));
  const url = `/user/credit/${page}/credit_parameters_info`;

  type ModalOptions = {
    href: string;
    phone?: string;
  };

  const handleClick = () => {
    if (isAuth) {
      history.push(url);
      return;
    }

    const modalOptions: ModalOptions = { href: url };

    if (!token) {
      modalOptions.phone = resetMask(phoneNumber) || '';
    }

    dispatch(showModal(true, modalOptions));
  };

  return (
    <div className="advantages-bank">
      <Grid container space={20} gridStyle={{ alignItems: 'center' }}>
        <GridItem
          colDesktop={7}
          colTablet={7}
          justify="flex-start"
          direction="column"
          style={{ padding: '50px 0px' }}
        >
          <Title
            titleMargins={{
              desktop: { bottom: 32 },
              tablet: { bottom: 24 },
              mobile: { bottom: 16 },
            }}
          >
            Преимущества {analyzeCreditTarget(product, 'titles_parental_case')}
            <br />
          </Title>
          <ul className="advantages-bank__ul">
            {data.map((item, index) => (
              <li className="advantages-bank__li" key={`${item}_${index + 1}`}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '100%',
                    background: Current.OnBankAdvantages[currentDomain].listItemColor,
                    margin: '5px 8px 0 0',
                  }}
                />
                <p
                  className={`title-text color-black-main ${viewport === 'desktop' ? 'fs-22 mb-32' : 'fs-18 mb-40'
                    }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <PressButton
            id="advantages_get_card"
            type="mainBold"
            htmlType="button"
            text="Получить карту"
            style={{ maxWidth: 300 }}
            onClick={handleClick}
          />
        </GridItem>
        <GridItem
          colDesktop={5}
          colTablet={5}
          justify="center"
          align="center"
          style={{ height: '100%' }}
        >
          <img
            src={Current.OnBankAdvantages[currentDomain].image[product]}
            className="advantages-bank__img"
            alt="advantages-bank"
          />
        </GridItem>
      </Grid>
    </div>
  );
});

export default OnBankAdvantages;
