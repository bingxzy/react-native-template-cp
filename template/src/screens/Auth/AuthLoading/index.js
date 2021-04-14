import { useEffect } from 'react';
import utils from '../../../utils';
import { TOKEN } from '../../../comm/constant';

const AuthLoadingSreen = () => {
  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      await utils.asyncStoage.getData(TOKEN);
      utils.navigation.navigate('App');
    } catch (error) {
      utils.navigation.navigate('Auth');
    }
  };

  return null;
};

export default AuthLoadingSreen;
