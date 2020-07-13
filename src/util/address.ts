import { IFormattedAddress, IAddressSuggestion } from '../types/shipping';
import {
  RECEIVER_ADDRESS1,
  RECEIVER_ADDRESS2,
  RECEIVER_CITY,
  RECEIVER_STATE,
  RECEIVER_ZIP,
} from '../constants/shipping';

export const formatApiAddress = ({ city, secondary, state, streetLine, zipcode }: IAddressSuggestion): IFormattedAddress | null => {
  if (city && state && streetLine && zipcode) {
    return {
      [RECEIVER_CITY]: city,
      [RECEIVER_ADDRESS1]: streetLine,
      [RECEIVER_ADDRESS2]: secondary || '',
      [RECEIVER_STATE]: state,
      [RECEIVER_ZIP]: zipcode
    };
  }
  return null;
};

export const setEmptyAddress = () => ({
  [RECEIVER_CITY]: '',
  [RECEIVER_ADDRESS1]: '',
  [RECEIVER_ADDRESS2]: '',
  [RECEIVER_STATE]: '',
  [RECEIVER_ZIP]: '',
});
