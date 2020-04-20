import { Reducer as appReducer } from './app';
import { Reducer as todosReducer } from './todos';

export default {
  app: appReducer,
  todos: todosReducer,
};
