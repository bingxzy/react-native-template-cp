import { Component } from 'react';
import utils from '../../../utils';
import { TOKEN } from '../../../comm/constant';

class AuthLoadingSreen extends Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    try {
      await utils.asyncStoage.getData(TOKEN);
      utils.navigation.navigate('App');
    } catch (error) {
      utils.navigation.navigate('Auth');
    }
  }


  render() {
    return null;
  }
}

export default AuthLoadingSreen;
