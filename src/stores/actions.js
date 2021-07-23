import {
  changeLanguageAsyncAction as changeLanguage,
  changeFontScaleAction as changeFontScale,
} from './reducer/app';

import {
  fetchTodosAsyncAction as fetchTodos,
} from './reducer/todos';

export default {
  changeLanguage,
  changeFontScale,
  fetchTodos,
};
