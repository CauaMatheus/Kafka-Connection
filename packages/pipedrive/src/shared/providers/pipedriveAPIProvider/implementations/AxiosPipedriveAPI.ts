import axios, { AxiosInstance } from 'axios';

import { IPipedriveAPIProvider, IResponseData } from '../IPipedriveAPIProvider';

class AxiosPipedriveAPI implements IPipedriveAPIProvider {
  api: AxiosInstance;

  constructor() {
    // filter_id: 2 -> Filtro para buscar apenas as "deals" ganhas.
    this.api = axios.create({
      params: {
        api_token: process.env.API_TOKEN,
        filter_id: 2,
      },
    });
  }

  async fetchData(): Promise<IResponseData[]> {
    const properties = ['id', 'person_id', 'products_count', 'value'];
    const { data } = (
      await this.api.get(
        `https://faru.pipedrive.com/api/v1/deals:(${properties.join(',')})`
      )
    ).data;

    const deals = data.map((deal) => {
      return {
        id: deal.id,
        name: deal.person_id.name,
        email: deal.person_id.email[0].value,
        products_count: deal.products_count,
        value: deal.value,
        date: new Date(),
      };
    });

    return deals as IResponseData[];
  }
}

export { AxiosPipedriveAPI };
