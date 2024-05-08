import React from 'react';

import PressButton from '../../../Buttons/PressButton';
import style from '../../style.module.sass';

import { getTextFromStatus, setSpaceOfNumber } from '@/Common/AppFormHelpers/Helpers';
import { MFOInfo } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

interface Props extends MFOInfo {
  viewport: Viewport;
  index: number;
}

const MFOProductDecisionsListItem: React.FC<Props> = ({
  image,
  name,
  sum,
  rate,
  login_link,
  status,
  viewport,
  index,
}) => (
  <div className={style.table_line}>
    <div className={`${style.table_cell} ${index !== 0 ? 'border-top' : ''}`}>
      <div className={style.table_cell_item}>
        {!image.includes('link') ? (
          <img
            src={image}
            style={{
              maxHeight: viewport === 'desktop' ? 70 : 30,
              maxWidth: viewport !== 'mobile' ? 100 : 70,
            }}
            alt="partner-img"
          />
        ) : (
          <span className={style.table_text}>{name}</span>
        )}
      </div>
    </div>
    <div className={`${style.table_cell} ${index !== 0 ? 'border-top' : ''}`}>
      <div className={style.table_cell_item}>
        <span className={style.table_text}>до {setSpaceOfNumber(String(sum))} руб.</span>
      </div>
    </div>
    <div className={`${style.table_cell} ${index !== 0 ? 'border-top' : ''}`}>
      <div className={style.table_cell_item}>
        <span className={style.table_text}>{rate}</span>
      </div>
    </div>
    <div className={`${style.table_cell} ${index !== 0 ? 'border-top' : ''}`}>
      <div className={style.table_cell_item}>
        {login_link ? (
          <PressButton
            style={{
              padding:
                viewport === 'desktop'
                  ? '10px 35px'
                  : viewport === 'tablet'
                    ? '10px 25px'
                    : '5px 10px',
              fontSize: viewport !== 'mobile' ? '15px' : '12px',
              borderRadius: '3px',
            }}
            type="smallMainBold"
            target="_blank"
            href={login_link}
          >
            Получить
          </PressButton>
        ) : (
          <span className={style.table_text}>{getTextFromStatus(status)}</span>
        )}
      </div>
    </div>
  </div>
);

export default MFOProductDecisionsListItem;
