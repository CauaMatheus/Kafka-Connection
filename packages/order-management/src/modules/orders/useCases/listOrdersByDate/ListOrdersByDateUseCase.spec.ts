import { TestUtil } from '../../../../shared/test/TestUtil';
import { ListOrdersByDateUseCase } from './ListOrdersByDateUseCase';

let listOrdersByDateUseCase: ListOrdersByDateUseCase;

describe('ListOrdersByDateUseCase', () => {
  const mockOrdersRepository = {
    create: jest.fn(),
    listAll: jest.fn(),
    listByDate: jest.fn(),
  };

  beforeAll(() => {
    listOrdersByDateUseCase = new ListOrdersByDateUseCase(mockOrdersRepository);
  });

  it('should be able to list orders by date', async () => {
    const order = TestUtil.getValueOrder();
    mockOrdersRepository.create.mockReturnValue(null);
    mockOrdersRepository.listAll.mockReturnValue(null);
    mockOrdersRepository.listByDate.mockReturnValue([order, order]);

    const orders = await listOrdersByDateUseCase.execute(new Date());

    expect(orders).toMatchObject([order, order]);
    expect(mockOrdersRepository.create).not.toBeCalled();
    expect(mockOrdersRepository.listAll).not.toBeCalled();
    expect(mockOrdersRepository.listByDate).toBeCalledTimes(1);
  });
});
