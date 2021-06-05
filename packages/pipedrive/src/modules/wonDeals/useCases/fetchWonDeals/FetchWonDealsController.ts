import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FetchWonDealsUseCase } from './FetchWonDealsUseCase';

class FetchWonDealsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const fetchWonDealsUseCase = container.resolve(FetchWonDealsUseCase);

    await fetchWonDealsUseCase.execute();

    return response.json({
      message: 'Sua requisição está sendo executada!',
    });
  }
}

export { FetchWonDealsController };
