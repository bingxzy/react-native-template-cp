import api from '../../../api';
import Loading from '../../../comm/components/Loading';

const getTodosListData = async () => {
  Loading.show();
  let data = [];
  try {
    data = await api.todos.getTodoList();
  } catch (error) {
    console.log(error);
  }
  Loading.dimiss();
  return data;
};

export default {
  getTodosListData,
};
