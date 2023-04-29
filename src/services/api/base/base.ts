import axios, { AxiosRequestConfig } from 'axios';

import type { UsersResponse } from '../../../types';

export class BaseService {
  static async get<T>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<T | null> {
    try {
      const response = await axios.get(url, config);
      return response?.data;
    } catch (error) {
      console.log(`GET method failed with error ${error}`);

      return null;
    }
  }

  static async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<T | null> {
    try {
      const response = await axios.post(url, data, config);
      return response?.data;
    } catch (error) {
      console.log(`POST method failed with error ${error}`);

      return null;
    }
  }
}
