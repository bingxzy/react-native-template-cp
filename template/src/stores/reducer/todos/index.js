import { FETCH_TODO_SYNC, SET_TODO } from '../../constant/todos';


export const fetchTodosAsyncAction = (data) => ({
  type: FETCH_TODO_SYNC,
  data,
});

const initialState = {
  data: [],
};


export const Reducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODO:
      return { ...state, ...{ data } };
    default:
      return state;
  }
};
