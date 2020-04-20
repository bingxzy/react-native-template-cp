import {
  changeLanguageAsyncAction as changeLanguage,
  changeFontSizeAction as changeFontSize,
} from './reducer/app';

import {
  fetchTodosAsyncAction as fetchTodos,
} from './reducer/todos';

export default {
  changeLanguage,
  changeFontSize,
  fetchTodos,
};
