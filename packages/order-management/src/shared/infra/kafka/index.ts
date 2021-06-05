import { Kafka } from 'kafkajs';
import { container } from 'tsyringe';

import { CreateOrdersUseCase } from '../../../modules/orders/useCases/createOrders/CreateOrdersUseCase';

const kafka = new Kafka({
  clientId: 'orderManagementService',
  brokers: ['kafka:9092'],
});

const consumer = kafka.consumer({ groupId: 'pipedrive' });

const startKafka = async (): Promise<void> => {
  // Consumer
  await consumer.connect();
  await consumer.subscribe({ topic: 'send-deals', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const orders = JSON.parse(message.value.toString());

      const createOrdersUseCase = container.resolve(CreateOrdersUseCase);
      orders.forEach(async (order) => {
        await createOrdersUseCase.execute(order);
      });
    },
  });
};

export { startKafka };
