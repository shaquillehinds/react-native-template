import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface Interceptors {
  handleResponse?: ({ data }: AxiosResponse) => any;
  handleError?: (error: AxiosError) => any;
}

export class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string, interceptors?: Interceptors) {
    this.instance = axios.create({
      baseURL,
    });
    this.initializeResponseInterceptor(interceptors);
  }

  private initializeResponseInterceptor = (interceptors?: Interceptors) => {
    this.instance.interceptors.response.use(
      interceptors?.handleResponse || this.handleResponse,
      interceptors?.handleError || this.handleError,
    );
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (error: AxiosError) => {
    return Promise.reject(error);
  };
}

export default HttpClient;
