import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from '../screens/Auth';
import AppStack from './root/App';
import { withAppContainerTheme } from '../theme';

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: Auth.AuthLoading,
    App: AppStack,
    Auth: Auth.Login,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default withAppContainerTheme(createAppContainer(AppNavigator));
