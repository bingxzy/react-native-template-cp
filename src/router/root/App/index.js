import { createStackNavigator } from 'react-navigation-stack';
import App from '../../../screens/App';
import { commonNavigationOptions } from '../../config';

const AppStack = createStackNavigator(
  {
    Home: App.Landing,
    Todos: App.TodosList,
    TodosRedux: App.TodosListRedux,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation, screenProps }) => commonNavigationOptions(navigation, screenProps),
  },
);

export default AppStack;
