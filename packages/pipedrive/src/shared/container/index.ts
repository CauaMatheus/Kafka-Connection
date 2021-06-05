import { container } from 'tsyringe';

import { DealsRepository } from '../../modules/wonDeals/infra/mongoose/repositories/DealsRepository';
import { IDealsRepository } from '../../modules/wonDeals/repositories/IDealsRepository';
import '../providers';

container.registerSingleton<IDealsRepository>(
  'DealsRepository',
  DealsRepository
);
