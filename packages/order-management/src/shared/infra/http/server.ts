import 'dotenv/config';
import 'reflect-metadata';
import '../../container';
import { startKafka } from '../kafka';
import getConnection from '../typeorm';
import { app } from './app';

(async () => {
  await getConnection();
  await startKafka().catch(console.error);
  app.listen(3001, () => console.log('Server is running on port 3001'));
})();
