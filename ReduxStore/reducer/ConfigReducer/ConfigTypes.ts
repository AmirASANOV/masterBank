import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { Address } from '@/ApiConfig/DadataApi/DadataTest';
import { NotificationTypes } from '@/Components/Notifications/notificationTypes';
import { NotRequiredPartial } from '@/ProjectTypes/GlobalTypes';

/* eslint-disable */
export interface UserConfigType {
  user_agent: string;
  type: 'MTS_ID' | 'BASIC_SMS';
  screen_width: Nullable<number>;
  screen_height: Nullable<number>;
  opener: Nullable<string>;
  language: Nullable<string>;
  vendor: Nullable<string>;
  vendor_version: Nullable<string>;
  do_not_track: any;
  cookie_enabled: Nullable<boolean>;
  address: Nullable<Address.Full>;
  sms_code: Nullable<string>;
  phone_number: Nullable<string>;
  code_in_response: Nullable<boolean>;
}
export interface DocumentsData {
  phone_number: Nullable<string>;
  date: Nullable<string>;
}

export type Viewport = 'desktop' | 'tablet' | 'mobile';

export interface LoaderProps {
  loaderStatus: boolean;
  message: Nullable<string>;
  type?: 'future' | 'balls';
}

export interface ModalWindow {
  view: boolean;
  href: string | undefined;
  withSms: boolean | undefined;
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  callBack: ((val?: any) => any) | undefined;
  actions: {
    sendCreditParameters: boolean;
    showHypothecModal: boolean;
  };
}

export interface Notification {
  disableRepeatShow: Array<string>;
  notification_list: NotificationTypes;
}

export type ZaimerConfig = {
  link: Nullable<string>;
  isShow: boolean;
};

export interface settingReducer {
  userPathExperience: Array<{
    path: string;
    title: string;
  }>;
  loading: LoaderProps;
  isDesktop: boolean;
  viewport: Viewport;
  user: UserConfigType;
  modalWindow: ModalWindow;
  subModal: boolean;
  subModalAvailable: boolean;
  isProduction: boolean;
  notification: Notification;
  documentsData: DocumentsData;
  cookieAccept: boolean;
  zaimer: ZaimerConfig;
  provider_data: boolean;
}

export type ShowModalOptions = NotRequiredPartial<Omit<ModalWindow, 'view'>>;
