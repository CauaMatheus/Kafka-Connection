import 'dotenv/config';
import request from 'supertest';
import { Connection } from 'typeorm';

import '../../../../shared/container';
import defaultConnectionOptions from '../../../../../ormconfig.js';
import { app } from '../../../../shared/infra/http/app';
import getConnection from '../../../../shared/infra/typeorm';

let connection: Connection;

describe('ListAllOrdersController', () => {
  beforeAll(async () => {
    connection = await getConnection(defaultConnectionOptions);
    await connection.runMigrations();

    await connection.query(`INSERT INTO orders (
      id,
      name,
      email,
      products_count,
      value,
      created_at,
      updated_at
      )
      VALUES 
      (
        1,
        'name example',
        'email@example.com',
        1,
        50.78,
        '2021-06-06',
        '2021-06-06'
      ),
      (
        2,
        'another name example',
        'another@example.com',
        2,
        100,
        '2021-06-08',
        '2021-06-08'
      )`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to list all orders', async () => {
    const response = await request(app).get('/orders');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);

    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0]).toHaveProperty('products_count');
    expect(response.body[0]).toHaveProperty('value');
    expect(response.body[0]).toHaveProperty('created_at');
    expect(response.body[0]).toHaveProperty('updated_at');
  });
});
