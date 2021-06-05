import { ProducerRecord } from 'kafkajs';

interface IKafkaProducer {
  send(data: ProducerRecord): Promise<void>;
}

export { IKafkaProducer };
