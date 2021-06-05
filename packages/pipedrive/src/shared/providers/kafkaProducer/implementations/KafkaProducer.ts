import { ProducerRecord } from 'kafkajs';

import { producer } from '../../../infra/kafka';
import { IKafkaProducer } from '../IKafkaProducer';

class KafkaProducer implements IKafkaProducer {
  producer = producer;

  async send({
    messages,
    topic,
    acks,
    compression,
    timeout,
  }: ProducerRecord): Promise<void> {
    await this.producer.send({ messages, topic, acks, compression, timeout });
  }
}

export { KafkaProducer };
