import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { LocationResponse } from '../types';
import { sanitizeString } from './hooks';

interface Get {
  resource: string;
  id?: string | number;
  params?: Record<string, unknown>;
}

class Api {
  private AuthApiAxios: AxiosInstance;
  private readonly proxy: string = '/api/spor';

  constructor() {
    this.AuthApiAxios = axios.create();

    this.AuthApiAxios.interceptors.request.use(
      (config) => {
        config.url = this.proxy + config.url;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  private async errorWrapper<T>(
    endpoint: () => Promise<AxiosResponse<T>>
  ): Promise<T> {
    try {
      const response = await endpoint();
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async get<T>({ resource, id, params }: Get): Promise<T> {
    const config: AxiosRequestConfig = {
      params,
    };

    return this.errorWrapper<T>(() =>
      this.AuthApiAxios.get(`/${resource}${id ? `/${id}` : ''}`, config)
    );
  }

  async getLocations(countryCode: string, page: number): Promise<LocationResponse> {

    const validPage = Math.max(1, Number(page));
    const validCountryCode = sanitizeString(countryCode);
    return this.get<LocationResponse>({
      resource: `locations?country=${validCountryCode}&limit=7&page=${validPage}`,
    });
  }
}


const api = new Api();
export default api;