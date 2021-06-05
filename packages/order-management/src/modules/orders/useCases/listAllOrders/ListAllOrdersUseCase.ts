import { inject, injectable } from 'tsyringe';

import { Order } from '../../infra/typeorm/entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class ListAllOrdersUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(): Promise<Order[]> {
    const orders = await this.ordersRepository.listAll();

    return orders;
  }
}

export { ListAllOrdersUseCase };
