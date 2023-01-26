import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import { HTTP_METHODS } from '../constants/http';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const createApiMethod =
  (axiosInstance: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig) => {
    return axiosInstance({ ...config, method: methodType });
  };

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
