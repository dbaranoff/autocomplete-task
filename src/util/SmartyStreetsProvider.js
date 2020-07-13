import * as SmartyStreetsSDK from "smartystreets-javascript-sdk";

export class SmartyStreetsProvider {
  constructor() {
    const SmartyStreetsCore = SmartyStreetsSDK.core;
    const websiteKey = process.env.REACT_APP_SMARTY_STREETS_KEY;
    const smartyStreetsSharedCredentials = new SmartyStreetsCore.SharedCredentials(websiteKey);
    const autoCompleteClientBuilder = new SmartyStreetsCore.ClientBuilder(smartyStreetsSharedCredentials);

    this.autoCompleteClient = autoCompleteClientBuilder.buildUsAutocompleteProClient();
  }

  query = async (q) => {
    const lookup = new SmartyStreetsSDK.usAutocompletePro.Lookup(q);

    const suggestions = await this.autoCompleteClient.send(lookup)
      .then(response => response.result)
      .catch(console.warn);
    if (suggestions) {
      return suggestions;
    }
    return null;
  };
}
