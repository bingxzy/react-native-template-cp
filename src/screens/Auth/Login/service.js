import utils from '../../../utils';
import { TOKEN } from '../../../comm/constant';
import Loading from '../../../comm/components/Loading';

const LoginTackAction = async () => {
  Loading.show();
  await utils.asyncStoage.storeData(TOKEN, new Date().getTime().toString());
  await utils.apputils.delay(800);
  Loading.dimiss();
  utils.navigation.navigate('App');
};

export default {
  LoginTackAction,
};
