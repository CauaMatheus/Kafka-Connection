import { ICreateDealDTO } from '../../../dtos/ICreateDealDTO';
import { IDealsRepository } from '../../../repositories/IDealsRepository';
import { WonDealModel } from '../models/WonDeal';

class DealsRepository implements IDealsRepository {
  repository = WonDealModel;

  async create({ id, name, date }: ICreateDealDTO): Promise<void> {
    await this.repository.create({ id, name, date });
  }
}

export { DealsRepository };
