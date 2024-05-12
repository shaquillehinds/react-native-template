import HttpClient from '../HttpClient';
import { TemplateDto } from './Template.transport.dto';
import { AxiosError, AxiosResponse } from 'axios';
import CONFIG from '@configuration';

export class Template extends HttpClient {
  constructor() {
    super(CONFIG.templateUrl, {
      handleResponse: ({ data }: AxiosResponse) => data,
      handleError: (error: AxiosError) => ({ error }),
    });
  }

  async getCategories(): Promise<TemplateDto> {
    return await this.instance.get('/template');
  }
}
