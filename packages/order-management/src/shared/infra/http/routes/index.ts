import { Router } from 'express';

import { orders } from './orders.routes';

const routes = Router();

routes.use('/orders', orders);

export { routes };
