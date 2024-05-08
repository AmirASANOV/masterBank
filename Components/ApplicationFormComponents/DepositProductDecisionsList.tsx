import React from 'react';

import { useDispatch } from 'react-redux';

import PressButton from '../Buttons/PressButton';
import { SetDecisionIcon } from '../DecisionBlanks/DecisionBlanks';
import Wrapper from '../Layouts/Wrapper';
import { Prompt } from '../Messages/Prompt';

import { setSpaceOfNumber } from '@/Common/AppFormHelpers/Helpers';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import {
  addStatusToDepositOffer,
  updateKey,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsReducer';
import {
  DecisionType,
  DepositOfferResponse,
  DepositResponses,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

interface Props {
  header: string;
  list: DepositResponses;
  decision_type: DecisionType;
}

const DepositProductDecisionsList: React.FC<Props> = ({ list, header }) => {
  const viewport = useAppSelector(store => store.config.viewport);
  const dispatch = useDispatch();

  const sendDepositName = (item: DepositOfferResponse) => {
    dispatch(addStatusToDepositOffer(item));
    dispatch(updateKey({ key: 'restart', value: true }));
  };

  return (
    <>
      {list && list.length > 0 ? (
        <Wrapper>
          <>
            <Prompt
              titleStyle={{ textAlign: 'center', marginBottom: 20 }}
              title={header}
            />
            <div className="table-list">
              {list.map((item, index: number) => (
                // Показываю offers
                <div
                  className="table-line"
                  key={`deposit_offer_list_offer_num_${index * Math.random()}`}
                >
                  <div className="table-border">
                    <div className="deposit-flex">
                      <div
                        className="flex-jc-start-ai-start-nowrap"
                        style={{ width: 'fit-content', flexWrap: 'wrap' }}
                      >
                        <img
                          src={item.image}
                          style={{
                            maxHeight: 50,
                            maxWidth: 100,
                            marginBottom: 8,
                          }}
                          alt=""
                        />
                        <a
                          href={item.link || ''}
                          className="description-15"
                          style={{
                            width: '100%',
                            display: 'block',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          }}
                        >
                          тарифы
                        </a>
                      </div>

                      {item.status !== 'DEPOSIT_OFFER' && !item.link ? (
                        <SetDecisionIcon status={item.status} />
                      ) : (
                        <>
                          {item.link ? (
                            <PressButton
                              type="smallMainBold"
                              style={viewport === 'mobile' ? { maxWidth: 100 } : {}}
                              htmlType="link"
                              target="_blank"
                              href={item.link}
                              text="Перейти"
                              size={viewport !== 'desktop' ? 'small' : 'default'}
                            />
                          ) : (
                            <PressButton
                              type="smallMainBold"
                              htmlType="button"
                              style={viewport === 'mobile' ? { maxWidth: 100 } : {}}
                              text="Получить"
                              size={viewport !== 'desktop' ? 'small' : 'default'}
                              onClick={() => sendDepositName(item)}
                            />
                          )}
                        </>
                      )}
                    </div>
                    <div className="deposit-flex">
                      <div className="deposit-flex-cell">
                        <h4 className="deposit-header-description">Одобрено</h4>
                        <p className="deposit-description">
                          {setSpaceOfNumber(String(item.sum))} p.
                        </p>
                      </div>
                      <div className="deposit-flex-cell">
                        <h4 className="deposit-header-description">Ставка</h4>
                        <p className="deposit-description">{item.rate}</p>
                      </div>
                      <div className="deposit-flex-cell">
                        <h4 className="deposit-header-description">Залог</h4>
                        <p className="deposit-description">
                          {item.product_type === 'CAR_DEPOSIT'
                            ? 'Автомобиль'
                            : 'Недвижимость'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        </Wrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default DepositProductDecisionsList;
