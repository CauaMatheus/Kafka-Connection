import { container } from 'tsyringe';

import { OrdersRepository } from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';
import { IOrdersRepository } from '../../modules/orders/repositories/IOrdersRepository';

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository
);
