import http, { AxiosInstance } from '../axios';

export default {
  getTodoList: () => http.get('/todos'),

  getSigleTodoById: (id) => http.get('todos', { id }),

  testGet: () => AxiosInstance({
    url: 'https://httpbin.org/get',
    params: { testID: 2 },
  }),
};
