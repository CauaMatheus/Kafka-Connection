import { TestUtil } from '../../../../shared/test/TestUtil';
import { CreateOrdersUseCase } from './CreateOrdersUseCase';

let createOrdersUseCase: CreateOrdersUseCase;

describe('CreateOrdersUseCase', () => {
  const mockOrdersRepository = {
    create: jest.fn(),
    listAll: jest.fn(),
    listByDate: jest.fn(),
  };

  beforeAll(() => {
    createOrdersUseCase = new CreateOrdersUseCase(mockOrdersRepository);
  });

  it('should be able to create an order', async () => {
    const order = TestUtil.getValueOrder();

    await createOrdersUseCase.execute(order);

    expect(mockOrdersRepository.create).toBeCalledTimes(1);
    expect(mockOrdersRepository.listAll).not.toBeCalled();
    expect(mockOrdersRepository.listByDate).not.toBeCalled();
  });
});
