import api from '../../../api';
import Loading from '../../../comm/components/Loading';

const getTodosListData = async (_that) => {
  try {
    Loading.show();
    const data = await api.todos.getTodoList();
    Loading.dimiss();
    _that.setState({ todosList: data });
  } catch (error) {
    Loading.dimiss();
  }
};


export default {
  getTodosListData,
};
