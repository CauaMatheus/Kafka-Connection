import { Router } from 'express';

import { fetchDeals } from './fetchDelas.routes';

const routes = Router();

routes.use(fetchDeals);

export { routes };
