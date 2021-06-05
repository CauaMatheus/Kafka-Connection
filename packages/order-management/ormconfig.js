module.exports = {
  type: 'postgres',
  port: 5432,
  host: process.env.NODE_ENV === 'test' ? 'localhost' : 'postgresdb',
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.NODE_ENV === 'test' ? 'test' : process.env.PG_DB,
  migrations: [`${__dirname}/src/shared/infra/typeorm/migrations/*.ts`],
  entities: [`${__dirname}/src/modules/**/infra/typeorm/entities/*.ts`],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
