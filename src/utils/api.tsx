import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, ResponseType } from 'axios';
import { LocationResponse, MedicineDetail } from '../types';
import { sanitizeString } from './hooks';

interface Get {
  resource: string;
  id?: string | number;
  params?: Record<string, unknown>;
  responseType?: ResponseType;
}

class Api {
  private AuthApiAxios: AxiosInstance;
  // private readonly proxy: string = '/upd';
  private readonly proxy: string = '/api';

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

  async get<T>({ resource, id, params, responseType }: Get): Promise<T> {
    const config: AxiosRequestConfig = {
      params,
      responseType,
    };

    return this.errorWrapper<T>(() =>
      this.AuthApiAxios.get(`/${resource}${id ? `/${id}` : ''}`, config)
    );
  }

  async getLocations(countryCode: string, page: number): Promise<LocationResponse> {

    const validPage = Math.max(1, Number(page));
    const validCountryCode = sanitizeString(countryCode);
    return this.get<LocationResponse>({
      resource: `spor/locations?country=${validCountryCode}&limit=7&page=${validPage}`,
    });
  }

  async getMedicine(id: string, language: string, uat:boolean): Promise<MedicineDetail> {
    const validID = sanitizeString(id);
    const queryString = uat ? `upd/med/${validID}?lang=${language}&uat=true` : `upd/med/${validID}?lang=${language}`
    return this.get<MedicineDetail>({
      resource: queryString,
    });
  }

  async getAllMedicines(query:string, page:number, uat:boolean): Promise<LocationResponse> {
    const queryString = uat ?   `upd/med?q=${query}&lang=LT&uat=true` : `upd/med?q=${query}&page=${page}&limit=7&lang=LT`
    return this.get<LocationResponse>({
      resource: queryString,
      // resource: `/upd/med?lang=LT&uat=true`,
    });
  }

  async getDocuments(med_id: string, doc_id:string): Promise<Blob> {
    return this.get<Blob>({
      resource: `upd/med/${med_id}/${doc_id}?preview`,
      responseType: 'blob',
    });
  }
}


const api = new Api();
export default api;