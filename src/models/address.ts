import { IAddress, IAddressSuggestion } from '../types/shipping';
import {
  RECEIVER_FIRST_NAME,
  RECEIVER_LAST_NAME,
  RECEIVER_COMPANY_NAME,
  RECEIVER_PHONE,
  RECEIVER_ADDRESS1,
  RECEIVER_ADDRESS2,
  RECEIVER_STATE,
  RECEIVER_ZIP,
  RECEIVER_COUNTRY,
  RECEIVER_CITY,
  RECEIVER_EMAIL,
  ORDER_ID,
  KEY,
} from '../constants/shipping';

export class Address implements IAddress {
  [RECEIVER_FIRST_NAME] = '';
  [RECEIVER_LAST_NAME] = '';
  [RECEIVER_COMPANY_NAME] = '';
  [RECEIVER_PHONE] = '';
  [RECEIVER_ADDRESS1] = '';
  [RECEIVER_ADDRESS2] = '';
  [RECEIVER_STATE] = '';
  [RECEIVER_ZIP] = '';
  [RECEIVER_COUNTRY] = '';
  [RECEIVER_CITY] = '';
  [RECEIVER_EMAIL] = '';
  [ORDER_ID] = '';
  [KEY] = '';

  constructor({
    receiver_first_name,
    receiver_last_name,
    receiver_company_name,
    receiver_phone,
    receiver_address1,
    receiver_address2,
    receiver_state,
    receiver_zip,
    receiver_country,
    receiver_city,
    receiver_email,
    order_id,
    key,
  }: IAddress) {
      this[RECEIVER_FIRST_NAME] = receiver_first_name;
      this[RECEIVER_LAST_NAME] = receiver_last_name;
      this[RECEIVER_COMPANY_NAME] = receiver_company_name || '';
      this[RECEIVER_PHONE] = receiver_phone;
      this[RECEIVER_ADDRESS1] = receiver_address1;
      this[RECEIVER_ADDRESS2] = receiver_address2 || '';
      this[RECEIVER_STATE] = receiver_state || '';
      this[RECEIVER_ZIP] = receiver_zip;
      this[RECEIVER_COUNTRY] = receiver_country || '';
      this[RECEIVER_CITY] = receiver_city;
      this[RECEIVER_EMAIL] = receiver_email;
      this[ORDER_ID] = order_id;
      this[KEY] = key;
  }
}

export class Suggestion implements IAddressSuggestion {
  city = '';
  entries = 0;
  secondary = '';
  state = '';
  streetLine = '';
  zipcode = '';

  toString = () => `${this.streetLine}, ${this.secondary ? `${this.secondary}, ` : ''}${this.city}, ${this.state} ${this.zipcode}`;

  constructor({
    city,
    entries,
    secondary,
    state,
    streetLine,
    zipcode,
  }: IAddressSuggestion) {
    this.city = city;
    this.entries = entries;
    this.secondary = secondary;
    this.state = state;
    this.streetLine = streetLine;
    this.zipcode = zipcode;
  }
}
