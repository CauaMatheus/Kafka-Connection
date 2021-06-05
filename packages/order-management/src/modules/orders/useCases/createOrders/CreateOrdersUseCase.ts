import { inject, injectable } from 'tsyringe';

import { ICreateOrderDTO } from '../../dtos/ICreateOrderDTO';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@injectable()
class CreateOrdersUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute({
    id,
    name,
    email,
    products_count,
    value,
  }: ICreateOrderDTO): Promise<void> {
    await this.ordersRepository.create({
      id,
      name,
      email,
      products_count,
      value,
    });
  }
}

export { CreateOrdersUseCase };
