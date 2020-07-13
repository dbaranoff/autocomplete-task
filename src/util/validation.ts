import * as yup from 'yup';
import {
  KEY,
  ORDER_ID,
  RECEIVER_ADDRESS1,
  RECEIVER_ADDRESS2,
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

export const formValidation = yup.object().shape({
  [RECEIVER_FIRST_NAME]: yup.string().required(),
  [RECEIVER_LAST_NAME]: yup.string().required(),
  [RECEIVER_ADDRESS1]: yup.string().required(),
  [RECEIVER_ADDRESS2]: yup.string(),
  [RECEIVER_CITY]: yup.string().required(),
  [RECEIVER_COMPANY_NAME]: yup.string(),
  [RECEIVER_COUNTRY]: yup.string(),
  [RECEIVER_EMAIL]: yup.string(),
  [RECEIVER_PHONE]: yup.string().required(),
  [RECEIVER_STATE]: yup.string(),
  [RECEIVER_ZIP]: yup.string().required(),
  [ORDER_ID]: yup.string().required(),
  [KEY]: yup.string().required(),
});
