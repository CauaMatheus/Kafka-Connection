import { Router } from 'express';

import { ListAllOrdersController } from '../../../../modules/orders/useCases/listAllOrders/ListAllOrdersController';
import { ListOrdersByDateController } from '../../../../modules/orders/useCases/listOrdersByDate/ListOrdersByDateController';

const orders = Router();

const listAllOrdersController = new ListAllOrdersController();
const listOrdersByDateController = new ListOrdersByDateController();

orders.get('/', listAllOrdersController.handle);
orders.get('/:date', listOrdersByDateController.handle);

export { orders };
