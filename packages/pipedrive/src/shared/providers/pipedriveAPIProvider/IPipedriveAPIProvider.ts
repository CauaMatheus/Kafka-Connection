interface IResponseData {
  id: number;
  name: string;
  email: string;
  products_count: number;
  value: number;
  date: Date;
}

interface IPipedriveAPIProvider {
  fetchData(): Promise<IResponseData[]>;
}

export { IPipedriveAPIProvider, IResponseData };
