import { TestUtil } from '../../../../shared/test/TestUtil';
import { FetchWonDealsUseCase } from './FetchWonDealsUseCase';

let fetchWonDealsUseCase: FetchWonDealsUseCase;

describe('FetchWonDealsUseCase', () => {
  const mockDealsRepository = {
    create: jest.fn(),
  };
  const mockPipeDriveAPIProvider = {
    fetchData: jest.fn(),
  };
  const mockKafkaProducer = {
    send: jest.fn(),
  };

  beforeAll(async () => {
    fetchWonDealsUseCase = new FetchWonDealsUseCase(
      mockDealsRepository,
      mockPipeDriveAPIProvider,
      mockKafkaProducer
    );
  });

  it('should be able to fetch the WonDeals and save in database', async () => {
    const deal = TestUtil.getValueDeal();
    mockPipeDriveAPIProvider.fetchData.mockReturnValue([deal, deal]);
    mockDealsRepository.create.mockReturnValue(null);
    mockKafkaProducer.send.mockReturnValue(null);

    await fetchWonDealsUseCase.execute();

    expect(mockDealsRepository.create).toBeCalledTimes(2);
    expect(mockPipeDriveAPIProvider.fetchData).toBeCalledTimes(1);
    expect(mockKafkaProducer.send).toBeCalledTimes(1);
  });
});
