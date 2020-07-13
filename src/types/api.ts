import {
  RECEIVER_ADDRESS1,
  RECEIVER_ADDRESS2, RECEIVER_ADDRESS_JOINED,
  RECEIVER_CITY,
  RECEIVER_COMPANY_NAME,
  RECEIVER_COUNTRY,
  RECEIVER_EMAIL,
  RECEIVER_FIRST_NAME,
  RECEIVER_LAST_NAME,
  RECEIVER_PHONE,
  RECEIVER_STATE,
  RECEIVER_ZIP
} from '../constants/shipping';
import { IInitRequest } from './shipping';

export interface IOrgInfo {
  logo_url: string;
  header_color: string;
  button_color: string;
}

export interface IReceiverInfo {
  [RECEIVER_ADDRESS1]: string;
  [RECEIVER_ADDRESS2]: string;
  [RECEIVER_CITY]: string;
  [RECEIVER_COMPANY_NAME]: string;
  [RECEIVER_COUNTRY]: string;
  [RECEIVER_EMAIL]: string;
  [RECEIVER_FIRST_NAME]: string;
  [RECEIVER_LAST_NAME]: string;
  [RECEIVER_PHONE]: string;
  [RECEIVER_STATE]: string;
  [RECEIVER_ZIP]: string;
  [RECEIVER_ADDRESS_JOINED]: string;
}

export interface ISenderInfo {
  sender_company_name: string;
  sender_first_name: string;
  sender_last_name: string;
}

export interface IGetInitResponse {
  org_info: IOrgInfo;
  receiver_info: IReceiverInfo;
  sender_info: ISenderInfo;
}

export interface IPostUpdateRequest {
  values: Partial<IReceiverInfo & IInitRequest>;
  resolve?: (...args: any) => Promise<void> | void;
  reject?: (...args: any) => Promise<void> | void;
}
