import React, { Fragment, memo } from 'react';

import PressButton from '../Buttons/PressButton';
import { Grid, GridItem } from '../Grid/Grid';
import { iconsConfig } from '../Icons/IconConfig';

import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { Current, currentDomain } from '@/GlobalConfig';
import { showModal } from '@/ReduxStore/reducer/ConfigReducer/ConfigReducer';
import { getPage } from '@/Utils/utils';

const CustomListNumbers: React.FC<{
  id?: string;
  title: string;
  items: Array<string>;
  wrapper?: boolean;
  button?: boolean;
  buttonId?: string;
  buttonText?: string;
}> = memo(({ items, title, wrapper, button, buttonText, buttonId }) => {
  const { isAuth } = useAppSelector(state => state.session);
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();
  const step = useAppSelector(state => state.validator.current_step);
  const href = `/user/credit/${getPage(history.location.pathname)}/${step}`;
  const handleClick = () => {
    if (history.location.pathname === '/hypothec/info') {
      history.push('/hypothec');
      return undefined;
    }
    if (isAuth) {
      history.push(href);
    }

    return dispatch(showModal(true, { href }));
  };

  return (
    <div className={wrapper ? 'wrapper-layout' : ''}>
      <h2 className="title-text fs-30-24-17 color-black-main mb-16">{title}</h2>
      <Grid container alignSpace={24} space={12} gridStyle={{ alignItems: 'center' }}>
        {items.map((item, index) => (
          <Fragment key={`${item}_${index + 1}`}>
            <GridItem colMobile={1} align="center">
              <div
                className="circle-number"
                style={{
                  borderColor: iconsConfig.colors[Current.circlesColor[currentDomain]],
                }}
              >
                <p className="circle-number__text title-text">{index + 1}</p>
              </div>
            </GridItem>
            <GridItem colMobile={11} align="center">
              <p
                className="title-text fs-22-17-15 color-black-main"
                style={{ fontWeight: 'normal' }}
              >
                {item}
              </p>
            </GridItem>
          </Fragment>
        ))}
      </Grid>
      {button ? (
        <PressButton
          type="mainBold"
          id={buttonId}
          text={buttonText || 'Оформить кредит'}
          onClick={handleClick}
          style={{
            width: '90%',
            fontWeight: 'bold',
            fontSize: 18,
            margin: '24px 5% 0 5%',
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
});

export default CustomListNumbers;
