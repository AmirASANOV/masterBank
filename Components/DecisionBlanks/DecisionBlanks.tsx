import React, { memo } from 'react';

import CreditResponseList from '../ApplicationFormComponents/CreditProductDecisionList';
import MFOProductDecisionsList from '../ApplicationFormComponents/MFOProductDecisionsList/MFOProductDecisionsList';
import { Accept } from '../Icons/Accept';
import { ClockTimer } from '../Icons/ClockTimer';
import { HandsetPhone } from '../Icons/HandsetPhone';
import { Reject } from '../Icons/Reject';
import { Sms } from '../Icons/Sms';
import Wrapper from '../Layouts/Wrapper';
import { Prompt } from '../Messages/Prompt';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { analyzeCreditTarget } from '@/Common/AppFormHelpers/Helpers';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';
import { App } from '@/ProjectTypes/AppTypes';
import {
  MFOResponse,
  PartnerStatus,
} from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

/* eslint-disable */
interface RenderDefaultDecisionsProps {
  data: any;
  title?: Nullable<string>;
  product: App.CreditProduct;
  showTariffs?: boolean;
}

export const RenderDefaultDecisions: React.FC<RenderDefaultDecisionsProps> = ({
  data,
  product,
  title,
  showTariffs,
}) => {
  const setTitle = (p: App.CreditProduct) => {
    switch (p) {
      case 'credit_cash':
        return ['Банк-партнер', 'Ставка, %', '', 'Статус'];
      case 'credit_card' || 'installment_card':
        return ['Банк-партнер', 'Без процентов', '', 'Статус'];
      default:
        return [];
    }
  };

  return (
    <>
      {data && data.length > 0 ? (
        <CreditResponseList
          header={
            title || title !== null
              ? `Заявка на ${analyzeCreditTarget(product, 'title_parental_case')}`
              : ''
          }
          type={product}
          title={setTitle(product)}
          list={data}
          showTariffs={showTariffs}
        />
      ) : (
        <Wrapper>
          <Prompt
            titleStyle={{ marginBottom: 16 }}
            titleTextAlign={{ desktop: 'left', tablet: 'left', mobile: 'left' }}
            title={`Ожидание решений по заявке на ${analyzeCreditTarget(
              product,
              'title_parental_case',
            )}`}
            suggestionContent={[
              `Здесь будут появляться решения партнеров на ${analyzeCreditTarget(
                product,
                'title_parental_case',
              )}`,
            ]}
          />
        </Wrapper>
      )}
    </>
  );
};

interface RenderMFOResult {
  data: MFOResponse;
  showTariffs?: boolean;
  title?: string;
}

export const RenderMFOResult: React.FC<RenderMFOResult> = ({
  data,
  showTariffs,
  title,
}) => (
  <>
    {data && data.length > 0 ? (
      <MFOProductDecisionsList
        header={title || 'Кредит одобрен у следующих кредиторов'}
        title={['Партнер', 'Одобрено', 'Ставка, %', '']}
        list={data}
        showTariffs={showTariffs}
      />
    ) : (
      <Wrapper>
        <Prompt
          titleStyle={{ marginBottom: 16 }}
          titleTextAlign={{ desktop: 'left', tablet: 'left', mobile: 'left' }}
          title="Ожидание решений на кредит от кредиторов"
          suggestionContent={[
            'Поскольку все банки отказали в выдаче кредита наличными / кредитной карты / карты рассрочки, здесь будут появляться решения кредиторов, одобривших кредит.',
          ]}
        />
      </Wrapper>
    )}
  </>
);

const changeDecision = (status: string, viewport: string) => {
  switch (status) {
    case 'APPROVED':
      return (
        <Accept
          size={viewport === 'mobile' ? 20 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      );
    case 'REJECTED':
      return <Reject size={viewport === 'mobile' ? 20 : 40} color="dangerColor" />;
    case 'CALL':
      return (
        <HandsetPhone
          size={viewport === 'mobile' ? 20 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      );
    case 'WAITING':
      return (
        <ClockTimer
          size={viewport === 'mobile' ? 20 : 40}
          color={Current.pdfColor[currentDomain]}
        />
      );
    case 'SMS':
      return (
        <Sms
          size={viewport === 'mobile' ? 20 : 40}
          color={Current.globalIconsColor[currentDomain]}
        />
      );
    default:
      return '';
  }
};

export const SetDecisionIcon: React.FC<{ status: PartnerStatus }> = memo(({ status }) => {
  const viewport = useAppSelector(store => store.config.viewport);
  return <>{changeDecision(status, viewport)}</>;
});
