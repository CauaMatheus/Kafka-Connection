import { Between, getRepository, Repository } from 'typeorm';

import { ICreateOrderDTO } from '../../../dtos/ICreateOrderDTO';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';
import { Order } from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async create({
    id,
    name,
    email,
    products_count,
    value,
  }: ICreateOrderDTO): Promise<void> {
    const order = this.repository.create({
      id,
      name,
      email,
      products_count,
      value,
    });
    await this.repository.save(order);
  }

  async listAll(): Promise<Order[]> {
    const orders = await this.repository.find();

    return orders;
  }

  async listByDate(date: Date): Promise<Order[]> {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date.setDate(date.getDate() + 1));
    endDate.setHours(0, 0, 0, 0);

    const orders = await this.repository.find({
      created_at: Between(startDate, endDate),
    });

    return orders;
  }
}

export { OrdersRepository };
