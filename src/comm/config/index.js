const API_HOST_DEBUG = 'https://jsonplaceholder.typicode.com/';
const API_HOST_RELEASE = 'https://jsonplaceholder.typicode.com/';

export const API_HOST = process.env.NODE_ENV === 'development'
  ? API_HOST_DEBUG : API_HOST_RELEASE;

export const TIMEOUT = 4000;

export default {
  API_HOST,
  TIMEOUT,
};
