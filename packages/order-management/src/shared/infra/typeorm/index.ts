import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnectionOptions,
} from 'typeorm';

export default async (options?: ConnectionOptions): Promise<Connection> => {
  const defaultOptions = options || (await getConnectionOptions());

  return createConnection(defaultOptions);
};
