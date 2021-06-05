import { inject, injectable } from 'tsyringe';

import { IKafkaProducer } from '../../../../shared/providers/kafkaProducer/IKafkaProducer';
import { IPipedriveAPIProvider } from '../../../../shared/providers/pipedriveAPIProvider/IPipedriveAPIProvider';
import { IDealsRepository } from '../../repositories/IDealsRepository';

@injectable()
class FetchWonDealsUseCase {
  constructor(
    @inject('DealsRepository')
    private dealsRepository: IDealsRepository,
    @inject('PipedriveAPIProvider')
    private pipedriveAPIProvider: IPipedriveAPIProvider,
    @inject('KafkaProducer')
    private kafkaProducer: IKafkaProducer
  ) {}

  async execute(): Promise<void> {
    const data = await this.pipedriveAPIProvider.fetchData();

    data.forEach(async (deal) => {
      await this.dealsRepository.create({
        id: deal.id,
        name: deal.name,
        date: deal.date,
      });
    });

    await this.kafkaProducer.send({
      topic: 'send-deals',
      messages: [
        {
          value: JSON.stringify(data),
        },
      ],
    });
  }
}

export { FetchWonDealsUseCase };
