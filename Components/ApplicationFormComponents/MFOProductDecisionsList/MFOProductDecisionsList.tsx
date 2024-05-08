import React from 'react';

import Wrapper from '../../Layouts/Wrapper';
import { Prompt } from '../../Messages/Prompt';
import style from '../style.module.sass';

import MFOProductDecisionsListItem from './components/MFOProductDecisionsListItem';

import { SERVER_URL } from '@/ApiConfig/apiConfigs';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { MFOInfo } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

interface Props {
  title: Array<string>;
  header: string;
  list: Array<MFOInfo>;
  showTariffs?: boolean;
}

const MFOProductDecisionsList: React.FC<Props> = ({ list, header }) => {
  const { viewport } = useAppSelector(store => store.config);

  return (
    <Wrapper style={{ padding: '0px 10px 10px 10px' }}>
      {header ? (
        <Prompt
          titleStyle={{
            textAlign: 'center',
            padding: viewport !== 'mobile' ? '16px 0 0' : '12px 0 0',
            maxWidth: 420,
            margin: '0 auto',
          }}
          title={header}
        />
      ) : (
        ''
      )}
      {list.map((item, index) =>
        item.login_link ? (
          <a
            href={`${SERVER_URL}/api/redirect/?partner_name=${item.name}&login_link=${item.login_link}`}
            key={`anketa_partner_list_item_${index + Math.random()}`}
            target="_blank"
            rel="noopener noreferrer"
            className={style.table_list}
          >
            <MFOProductDecisionsListItem
              viewport={viewport}
              sum={item.sum}
              rate={item.rate}
              login_link={item.login_link}
              status={item.status}
              name={item.name}
              image={item.image}
              product_type={item.product_type}
              index={index}
            />
          </a>
        ) : (
          <div
            className={style.table_list}
            key={`anketa_partner_list_item_${index + Math.random()}`}
          >
            <MFOProductDecisionsListItem
              viewport={viewport}
              sum={item.sum}
              rate={item.rate}
              login_link={item.login_link}
              status={item.status}
              name={item.name}
              image={item.image}
              product_type={item.product_type}
              index={index}
            />
          </div>
        ),
      )}
    </Wrapper>
  );
};
export default MFOProductDecisionsList;
