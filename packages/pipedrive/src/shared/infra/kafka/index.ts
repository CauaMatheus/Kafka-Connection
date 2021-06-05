import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'pipedriveService',
  brokers: ['kafka:9092'],
});

const producer = kafka.producer();

const startKafka = async (): Promise<void> => {
  await producer.connect();
};

export { startKafka, producer };
