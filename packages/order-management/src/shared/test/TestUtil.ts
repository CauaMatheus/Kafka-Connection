import { Order } from '../../modules/orders/infra/typeorm/entities/Order';

class TestUtil {
  static getValueOrder(): Order {
    return {
      id: 1,
      name: 'User Name',
      email: 'example@gmail.com',
      products_count: 0,
      value: 50,
    } as Order;
  }
}

export { TestUtil };
