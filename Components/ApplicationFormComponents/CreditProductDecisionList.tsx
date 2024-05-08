import React from 'react';

import { SetDecisionIcon } from '../DecisionBlanks/DecisionBlanks';
import { Grid, GridItem } from '../Grid/Grid';
import Wrapper from '../Layouts/Wrapper';
import { Prompt } from '../Messages/Prompt';

import style from './style.module.sass';

import { getTextFromStatus } from '@/Common/AppFormHelpers/Helpers';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { App } from '@/ProjectTypes/AppTypes';
import {
  CreditCard,
  CreditCash,
  CreditInfo,
  DecisionType,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

interface PartnerListProps {
  type: App.CreditProduct;
  header: string;
  title: Array<string>;
  list: Array<CreditCard | CreditCash | CreditInfo>;
  decision_type?: DecisionType;
  showTariffs?: boolean;
}

const CreditResponseList: React.FC<PartnerListProps> = ({
  showTariffs,
  list,
  header,
}) => {
  const viewport = useAppSelector(store => store.config.viewport);
  const size = {
    height: {
      desktop: 70,
      tablet: 50,
      mobile: 30,
    },
    width: {
      desktop: 130,
      tablet: 100,
      mobile: 70,
    },
  };

  return (
    <>
      {list.length > 0 ? (
        <Wrapper style={{ padding: '16px 10px' }}>
          <>
            {header ? (
              <Prompt
                titleStyle={{ textAlign: 'center', marginTop: 16 }}
                title={header}
              />
            ) : (
              ''
            )}
            <Grid container className={style.table_list}>
              {list.map((item, index: number) => (
                <GridItem
                  colDesktop={12}
                  style={{
                    borderBottom: index + 1 !== list.length ? '1px solid #D7D7D7' : '',
                    padding: '12px 0px',
                  }}
                  key={`anketa_partner_list_item_${index + 1}`}
                >
                  <Grid
                    container
                    gridStyle={{ alignItems: 'center', justifyItems: 'center' }}
                  >
                    <GridItem
                      colDesktop={3}
                      justify="center"
                      align="center"
                      style={{ justifyItems: 'center' }}
                    >
                      <img
                        src={item.image}
                        style={{
                          maxHeight: size.height[viewport],
                          maxWidth: size.width[viewport],
                          marginBottom: 8,
                        }}
                        alt=""
                      />
                      {!!showTariffs && !!item.tariff_link ? (
                        <a
                          className="description-15"
                          style={{
                            textAlign: 'center',
                            display: 'block',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          }}
                          target="_blank"
                          href={item.tariff_link}
                          rel="noreferrer"
                        >
                          тарифы
                        </a>
                      ) : (
                        ''
                      )}
                    </GridItem>
                    <GridItem colDesktop={3} justify="center" align="center">
                      <span className="table-text">
                        {'interest_free_period' in item
                          ? item.interest_free_period +
                            (item.product_type === 'CREDIT_CARD' ? ' без %' : '')
                          : 'rate' in item
                            ? `${item.rate}`
                            : item.product_type === 'CREDIT_CARD'
                              ? 'До 180 дней'
                              : 'От 6.0 %'}
                      </span>
                    </GridItem>
                    <GridItem colDesktop={2} justify="center" align="center">
                      <SetDecisionIcon status={item.status} />
                    </GridItem>
                    <GridItem colDesktop={4} justify="center" align="center">
                      <span className="table-text">{getTextFromStatus(item.status)}</span>
                    </GridItem>
                    {item.has_installment_plan ? (
                      <GridItem
                        colDesktop={12}
                        justify="center"
                        align="center"
                        style={{ marginTop: 12, width: '100%' }}
                      >
                        <span className="table-text">
                          Этот банк предоставляет рассрочку
                        </span>
                      </GridItem>
                    ) : (
                      ''
                    )}
                  </Grid>
                </GridItem>
              ))}
            </Grid>
          </>
        </Wrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default CreditResponseList;
