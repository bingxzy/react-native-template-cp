import { createStackNavigator } from 'react-navigation-stack';
import Auth from '../../../screens/Auth';

const AppStack = createStackNavigator(
  {
    Login: Auth.Login,
  },
  { initialRouteName: 'Login' },
);

export default AppStack;
