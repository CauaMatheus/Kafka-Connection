interface ICreateOrderDTO {
  id: number;
  name: string;
  email: string;
  products_count: number;
  value: number;
}

export { ICreateOrderDTO };
