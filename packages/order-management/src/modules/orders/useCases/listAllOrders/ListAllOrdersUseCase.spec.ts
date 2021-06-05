import { TestUtil } from '../../../../shared/test/TestUtil';
import { ListAllOrdersUseCase } from './ListAllOrdersUseCase';

let listAllOrdersUseCase: ListAllOrdersUseCase;

describe('ListAllOrdersUseCase', () => {
  const mockOrdersRepository = {
    create: jest.fn(),
    listAll: jest.fn(),
    listByDate: jest.fn(),
  };

  beforeAll(() => {
    listAllOrdersUseCase = new ListAllOrdersUseCase(mockOrdersRepository);
  });

  it('should be able to list all orders', async () => {
    const order = TestUtil.getValueOrder();
    mockOrdersRepository.create.mockReturnValue(null);
    mockOrdersRepository.listAll.mockReturnValue([order, order, order]);
    mockOrdersRepository.listByDate.mockReturnValue(null);

    const orders = await listAllOrdersUseCase.execute();

    expect(orders).toMatchObject([order, order, order]);
    expect(mockOrdersRepository.create).not.toBeCalled();
    expect(mockOrdersRepository.listByDate).not.toBeCalled();
    expect(mockOrdersRepository.listAll).toBeCalledTimes(1);
  });
});
