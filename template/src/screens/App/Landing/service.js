import { defThemeID } from '../../../theme';
import utils from '../../../utils';
import Loading from '../../../comm/components/Loading';

const logoutTakeAction = async (setTheme) => {
  try {
    await utils.asyncStoage.removeAll();
  } catch (error) {
    console.log('asyncStoage removeAll error ');
  }
  Loading.show();
  await utils.apputils.delay(500);
  Loading.dimiss();
  setTheme(defThemeID);
  utils.navigation.navigate('Auth');
};


export default {
  logoutTakeAction,
};
