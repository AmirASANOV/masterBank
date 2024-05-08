import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';

export type NotificationTypes = Array<NotificationItemTypes>;

export interface NotificationItemTypes {
  id: string;
  message: string;
  duration: number;
  statusCode: Nullable<string>;
}

export type NotificationResultType = 'success' | 'error' | 'warning';
