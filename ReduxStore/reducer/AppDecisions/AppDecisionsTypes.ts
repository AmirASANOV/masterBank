import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';

// Reducer types
export interface LocalDecisions {
  restart: boolean;
  mfo_timestamp: Nullable<number>;
  response_status: DecisionsResponseStatus;
  decision_type: DecisionType;
  show_rejected: boolean;
  finished: DecisionFinished;
  user_id: Nullable<number>;
  credit_card_response?: CreditCardResponse;
  credit_cash_response?: CreditCashResponse;
  installment_card_response?: CreditCardResponse;
  mfo_response?: MFOResponse;
  deposit_estate_response?: DepositResponses;
  deposit_car_response?: DepositResponses;
  created: Nullable<number>;
}

export interface BackendDecisions {
  decision_type: DecisionType;
  show_rejects: boolean;
  mfo_timestamp: Nullable<number>;
  finished: boolean;
  user_id: number;
  created: number;
  decisions: AppCreditResponse;
}

// primitive types
export type DecisionType = Nullable<
  | 'CASH'
  | 'CARD'
  | 'DEPOSIT'
  | 'DEPOSIT_DECISION'
  | 'DEPOSIT_MFO'
  | 'MFO'
  | 'INSTALLMENT_CARD'
  | 'ALL_REJECTED'
  | 'WAIT_DEPOSIT'
  | 'WAIT_MFO'
  | 'HELP'
>;
export type ProductType =
  | 'CREDIT_CARD'
  | 'CREDIT_CASH'
  | 'CAR_DEPOSIT'
  | 'ESTATE_DEPOSIT'
  | 'MFO'
  | 'INSTALLMENT_CARD';
export type PartnerStatus =
  | 'WAITING'
  | 'APPROVED'
  | 'REJECTED'
  | 'SMS'
  | 'CALL'
  | 'DEPOSIT_OFFER';
export type IconStatus = 'waiting' | boolean;
export type DecisionsResponseStatus = Nullable<'success' | 'error' | 'empty'>;
export type DecisionFinished = boolean;
export type AppDecisionsReducer<T> = Nullable<Array<T> | undefined>;

// Response types
export type AppCreditResponse = AppDecisionsReducer<CreditInfo>;
export type CreditCardResponse = AppDecisionsReducer<CreditCard>;
export type CreditCashResponse = AppDecisionsReducer<CreditCash>;
export type DepositResponses = AppDecisionsReducer<DepositOfferResponse>;
export type DepositResponse = AppDecisionsReducer<CreditInfo>;
export type MFOResponse = AppDecisionsReducer<MFOInfo>;

// interfaces models
export interface CreditInfo extends BaseModel {
  status: PartnerStatus;
  tariff_link?: string;
  has_installment_plan?: boolean;
}

export interface BaseModel {
  name: string;
  image: string;
  product_type: ProductType;
}

export interface CreditCard extends CreditInfo {
  interest_free_period: string;
}

export interface CreditCash extends CreditInfo {
  rate: string;
}

export interface DepositOfferResponse extends Omit<CreditInfo, 'tariff_link'> {
  rate: string;
  sum: number;
  name: string;
  link: Nullable<string>;
}

export interface MFOInfo extends CreditInfo {
  sum: number;
  rate: string;
  login_link: Nullable<string>;
}
