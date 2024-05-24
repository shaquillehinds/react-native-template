import HttpClient from '../HttpClient';
import { TemplateDto } from './Template.transport.dto';
import { AxiosError, AxiosResponse } from 'axios';
import CONFIG from '@configuration';
import { DebugLogger } from '@utils/Logger';

const log = DebugLogger('Template.transport.ts');

type ServerError = { error: string; message: string };

export class Template extends HttpClient {
  constructor() {
    super(CONFIG.defaultApiURL, {
      handleResponse: (res: AxiosResponse) => res,
      handleError: (error: AxiosError) => {
        const serverResponse = error.response?.data as ServerError;
        log('warn', {
          serverError: serverResponse.error,
          serverMessage: serverResponse.message,
          axiosMessage: error.message,
          statusCode: error.response?.status,
          requestUrl: `${error.response?.config.baseURL}${error.response?.config.url}`,
          requestMethod: error.response?.config.method,
          requestData: error.response?.config.data,
        });
        throw error;
      },
    });
  }

  async getCategories(): Promise<TemplateDto> {
    return await this.instance.get('/template');
  }
}
