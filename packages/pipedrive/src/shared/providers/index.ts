import { container } from 'tsyringe';

import { IKafkaProducer } from './kafkaProducer/IKafkaProducer';
import { KafkaProducer } from './kafkaProducer/implementations/KafkaProducer';
import { AxiosPipedriveAPI } from './pipedriveAPIProvider/implementations/AxiosPipedriveAPI';
import { IPipedriveAPIProvider } from './pipedriveAPIProvider/IPipedriveAPIProvider';

container.registerSingleton<IPipedriveAPIProvider>(
  'PipedriveAPIProvider',
  AxiosPipedriveAPI
);

container.registerSingleton<IKafkaProducer>('KafkaProducer', KafkaProducer);
