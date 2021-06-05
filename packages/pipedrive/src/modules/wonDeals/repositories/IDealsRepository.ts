import { ICreateDealDTO } from '../dtos/ICreateDealDTO';

interface IDealsRepository {
  create(data: ICreateDealDTO): Promise<void>;
}

export { IDealsRepository };
