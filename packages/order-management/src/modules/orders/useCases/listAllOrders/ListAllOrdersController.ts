import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllOrdersUseCase } from './ListAllOrdersUseCase';

class ListAllOrdersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllOrdersUseCase = container.resolve(ListAllOrdersUseCase);

    const orders = await listAllOrdersUseCase.execute();

    return response.json(orders);
  }
}

export { ListAllOrdersController };
