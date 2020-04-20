import axios from 'axios';
import { API_HOST, TIMEOUT } from '../comm/config';

/**
 * about AxiosRequestConfig details, see https://github.com/axios/axios#request-config
 * */
const AxiosRequestConfig = {
  baseURL: API_HOST,
  timeout: TIMEOUT,
};

const instance = axios.create(AxiosRequestConfig);

instance.defaults.headers.post['Content-Type'] = 'text/plain; charset=utf-8;';

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => Promise.reject(error),
);

/**
 * Simple Http Client
 * @param {string} method
 * @param {string} url
 * @param {object} param
 * @param {object} AxiosConfig see https://github.com/axios/axios#request-config
 */
const httpClient = (method, url, params, AxiosConfig) => {
  let httpConfig = {};
  httpConfig = {
    method,
    url,
    params: method === 'get' || method === 'delete' ? params : null,
    data: method === 'post' ? params : null,
    ...AxiosConfig,
  };
  return new Promise((resolve, reject) => {
    instance(httpConfig)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const AxiosInstance = instance;

export default {
  /**
   * @param {string} url
   * @param {object} params optional
   * @param {object} AxiosConfig optional see https://github.com/axios/axios#request-config
   */
  post(url, params = null, AxiosConfig = null) {
    return httpClient('post', url, params, AxiosConfig);
  },

  /**
   * @param {string} url
   * @param {object} params optional
   * @param {object} AxiosConfig optional https://github.com/axios/axios#request-config
   */
  get(url, params = null, AxiosConfig = null) {
    return httpClient('get', url, params, AxiosConfig);
  },
};
