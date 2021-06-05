import { Router } from 'express';

import { FetchWonDealsController } from '../../../../modules/wonDeals/useCases/fetchWonDeals/FetchWonDealsController';

const fetchDeals = Router();

const fetchWonDealsController = new FetchWonDealsController();

fetchDeals.get('/fetchDeals', fetchWonDealsController.handle);

export { fetchDeals };
