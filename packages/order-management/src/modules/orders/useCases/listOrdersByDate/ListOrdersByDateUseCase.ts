import { inject, injectable } from 'tsyringe';

import { Order } from '../../infra/typeorm/entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class ListOrdersByDateUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(date: Date): Promise<Order[]> {
    const orders = await this.ordersRepository.listByDate(date);

    return orders;
  }
}

export { ListOrdersByDateUseCase };
