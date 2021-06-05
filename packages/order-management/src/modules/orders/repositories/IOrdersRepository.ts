import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { Order } from '../infra/typeorm/entities/Order';

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<void>;
  listAll(): Promise<Order[]>;
  listByDate(date: Date): Promise<Order[]>;
}

export { IOrdersRepository };
