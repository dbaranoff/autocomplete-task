import * as React from 'react';

// import mockSuggestions from '../../mocks/address_suggestions.json';

import styles from './AutoCompleteInput.module.scss';

interface IProps {
  onSelect: (i: any) => void;
  onReset: () => void;
}

export default ({ onSelect, onReset }: IProps) => {
  return (
    <label htmlFor="autocomplete-input">
      Best Mailing Address
      <input type="text" id="autocomplete-input" className={styles.input} />
    </label>
  )
};

// FIXME: the objectives are the following:
//  1. Implement the AutoCompleteInput field with CSS module similar to the existing style schema
//  2. AutoCompleteInput should use SmartyStreets API (find the `SmartyStreetsProvider.js` inside the `util` folder)
//  3. The user should be able to enter the query to the input field
//  4. Make an API request within SmartyStreetsProvider if the length of the query is more than 2 characters
//     without leading and following spaces
//  5. When/if address suggestions have arrived, show them in the dropdown
//     (for development purposes you can use the mock data from the "../../mocks/address_suggestions.json")
//  6. The user should be able to select any suggestion from the dropdown.
//  7. After the suggestion is selected the `receiverInfo` object in the ShippingForm component should be updated with the
//     values from the SmartyStreets API. The input field should be populated with the values from the suggestion.
//     Use the following format: "<streetLine> <secondary> <city> <state> <zipcode>"
//  8. OPTIONAL: If suggestion is selected, the user should not be able to change the value of the input field
//  9. OPTIONAL: If suggestion is selected, show the `Clear` button inside the input field to the right
//      (like small X sign or something like that)
//  10. OPTIONAL: If the user clicks the `Clear` button, the AutoCompleteInput should be cleared as well as `receiverInfo` object
//  11. OPTIONAL: If the user clicks the `Clear` button, he should be able to search the address again

