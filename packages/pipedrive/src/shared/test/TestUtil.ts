import { IResponseData } from '../providers/pipedriveAPIProvider/IPipedriveAPIProvider';

class TestUtil {
  static getValueDeal(): IResponseData {
    return {
      id: 1,
      name: 'User Name',
      email: 'example@gmail.com',
      products_count: 1,
      value: 50,
      date: new Date(),
    };
  }
}

export { TestUtil };
