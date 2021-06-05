import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOrdersByDateUseCase } from './ListOrdersByDateUseCase';

class ListOrdersByDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;

    const formattedDate = new Date(date);
    if (formattedDate.toString() === 'Invalid Date') {
      return response.json('Invalid date format');
    }

    const listOrdersByDateUseCase = container.resolve(ListOrdersByDateUseCase);
    const orders = await listOrdersByDateUseCase.execute(formattedDate);

    return response.json(orders);
  }
}

export { ListOrdersByDateController };
