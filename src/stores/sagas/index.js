import { put, takeEvery, call } from 'redux-saga/effects';
import i18n from '../../language';
import { CHANGE_LANGUAGE, CHANGE_LANGUAGE_ASYNC } from '../constant/app';
import { FETCH_TODO_SYNC, SET_TODO } from '../constant/todos';
import api from '../../api';

function* changeLanguage(action) {
  const { language } = action;
  console.log(language);
  i18n.locale = language;
  yield put({
    type: CHANGE_LANGUAGE,
    language,
  });
}

function* fetchTodoList() {
  try {
    const todoList = yield call(api.todos.getTodoList);
    yield put({
      type: SET_TODO,
      data: todoList,
    });
  } catch (error) {
    console.log(error);
    console.log('redux saga fetchTodoList error');
  }
}


export default function* rootSaga() {
  yield takeEvery(CHANGE_LANGUAGE_ASYNC, changeLanguage);
  yield takeEvery(FETCH_TODO_SYNC, fetchTodoList);
}
