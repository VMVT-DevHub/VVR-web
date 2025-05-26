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
  // private readonly proxy: string = '/api';

  //Currently we got two proxy callers: /doc and /api. /doc might be private later
  //for now i just added them to the queries, there's probably a way to make it nicer

  constructor() {
    this.AuthApiAxios = axios.create();

    this.AuthApiAxios.interceptors.request.use(
      (config) => {
        // config.url = this.proxy + config.url;
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

  async getMedicine(id: string, language: string, uat:boolean): Promise<MedicineDetail> {
    const validID = sanitizeString(id);
    const queryString = uat ? `api/med/${validID}?lang=${language}&uat=true` : `api/med/${validID}?lang=${language}`
    return this.get<MedicineDetail>({
      resource: queryString,
    });
  }

  async getAllMedicines(query:string, page:number, uat:boolean, language:string): Promise<LocationResponse> {
    const queryString = uat ?   `api/med?q=${query}&page=${page}&lang=${language}&uat=true` : `api/med?q=${query}&page=${page}&limit=7&lang=${language}`
    return this.get<LocationResponse>({
      resource: queryString,
      // resource: `/upd/med?lang=LT&uat=true`,
    });
  }

  async getDocuments(med_id: string, doc_id:string): Promise<Blob> {
    return this.get<Blob>({
      resource: `doc/${med_id}/${doc_id}?preview`,
      responseType: 'blob',
    });
  }
}


const api = new Api();
export default api;