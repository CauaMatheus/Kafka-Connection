import 'reflect-metadata';
import 'dotenv/config';
import '../../container';
import { startKafka } from '../kafka';
import getConnection from '../mongoose/connection';
import { app } from './app';

(async () => {
  await getConnection();
  await startKafka().catch(console.error);
  app.listen(3000, () => console.log('Server is running on port 3000'));
})();
