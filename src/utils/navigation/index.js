import { NavigationActions, StackActions, DrawerActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = (ref) => {
  navigator = ref;
};

const navigate = (routeName, params = {}) => {
  navigator.dispatch(NavigationActions.navigate({
    routeName, params,
  }));
};

const push = (routeName, params = {}) => {
  navigator.dispatch(StackActions.push({
    routeName, params,
  }));
};

const goBack = () => {
  navigator.dispatch(NavigationActions.back());
};

const closeDrawer = () => {
  navigator.dispatch(DrawerActions.closeDrawer());
};

const getNavigator = () => navigator;

export default {
  setTopLevelNavigator,
  navigate,
  push,
  goBack,
  getNavigator,
  closeDrawer,
};
