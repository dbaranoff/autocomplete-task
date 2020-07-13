import {
  RECEIVER_ADDRESS1,
  RECEIVER_ADDRESS2,
  RECEIVER_CITY,
  RECEIVER_COMPANY_NAME,
  RECEIVER_COUNTRY,
  RECEIVER_FIRST_NAME,
  RECEIVER_LAST_NAME,
  RECEIVER_PHONE,
  RECEIVER_STATE,
  RECEIVER_ZIP,
  RECEIVER_EMAIL,
  ORDER_ID,
  KEY,
} from '../constants/shipping';

export interface IAddress {
  [RECEIVER_FIRST_NAME]: string;
  [RECEIVER_LAST_NAME]: string;
  [RECEIVER_ADDRESS1]: string;
  [RECEIVER_ADDRESS2]?: string;
  [RECEIVER_CITY]: string;
  [RECEIVER_COMPANY_NAME]?: string;
  [RECEIVER_COUNTRY]?: string;
  [RECEIVER_EMAIL]: string;
  [RECEIVER_PHONE]: string;
  [RECEIVER_STATE]?: string;
  [RECEIVER_ZIP]: string;
  [ORDER_ID]: string;
  [KEY]: string;
}

export interface IFormattedAddress {
  [RECEIVER_CITY]: string;
  [RECEIVER_ADDRESS1]: string;
  [RECEIVER_ADDRESS2]: string;
  [RECEIVER_STATE]: string;
  [RECEIVER_ZIP]: string;
}

export interface IInitRequest {
  [ORDER_ID]: string;
  [KEY]: string;
}

export interface IAddressSuggestion {
  city: string;
  entries: number;
  secondary: string;
  state: string;
  streetLine: string;
  zipcode: string;
  toString: () => string;
}

export interface IAutocompleteResponse {
  suggestions: IAddressSuggestion[];
}
