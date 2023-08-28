import { $fetch, FetchOptions } from 'ofetch';
import AccountModule from '~/repository/modules/accounts';

interface IApiInstance {
  accounts: AccountModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.apiURL
  };

  // Create a new instance of $fecther with custom option
  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    accounts: new AccountModule(apiFetcher),
  };

  return {
    provide: {
      api: modules
    }
  };
});