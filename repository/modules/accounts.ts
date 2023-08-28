import { AsyncDataOptions } from "nuxt/app";
import { FetchOptions } from "ofetch";
import HttpFactory from "~/repository/factory";

type IPaginationResponse<T> = {
  total: number,
  items: T[],
  total_pages: number
}

type IAccountResponse = {
  id: number;
  username: string;
};

class AccountModule extends HttpFactory {
  private RESOURCE = "/accounts";

  /**
   * Return the accounts as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getAccounts(asyncDataOptions?: AsyncDataOptions<IPaginationResponse<IAccountResponse>>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<IPaginationResponse<IAccountResponse>>(
        "GET",
        `${this.RESOURCE}`,
        undefined,
        fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default AccountModule;
