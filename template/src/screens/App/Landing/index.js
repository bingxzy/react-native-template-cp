import React, { Component } from 'react';
import {
  View, StyleSheet, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from '../../../language';
import { Button, Text } from '../../../comm/components';
import ReduxActions from '../../../stores/actions';
import { withTheme } from '../../../theme';
import utils from '../../../utils';
import service from './service';


class AppLandingSrceen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logoRender = () => {
    const logo = require('../../../static/images/react_logo.png');
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={logo} style={styles.logo} />
      </View>
    );
  }

  helloRender = () => {
    const helloLabel = i18n.t('HELLO');
    return (
      <View style={styles.helloContainer}>
        <Text style={styles.helloTxt}>{helloLabel}</Text>
      </View>
    );
  }

  languageRender = () => {
    const language = i18n.t('LANGUAGE');
    const currLangLabel = i18n.t('CURRENT_LANGUAGE', { language });
    const { language: currLang, changeLanguage, theme } = this.props;
    return (
      <View>
        <Button
          style={{ backgroundColor: theme.color.primary }}
          onPress={() => {
            const newLang = currLang === 'zh' ? 'en' : 'zh';
            console.log(newLang);
            changeLanguage(newLang);
          }}
        >
          {currLangLabel}
        </Button>
      </View>
    );
  }

  themeRender = () => {
    const { theme, setTheme } = this.props;
    const currTheme = theme.key;
    const currThemeLabel = i18n.t('CURRENT_THEME', { theme: currTheme });
    return (
      <View style={{ paddingTop: 10 }}>
        <Button
          style={{ backgroundColor: theme.color.primary }}
          onPress={() => {
            const newTheme = currTheme === 'blue' ? 'red' : 'blue';
            console.log(newTheme);
            setTheme(newTheme);
          }}
        >
          {currThemeLabel}
        </Button>
      </View>
    );
  }

  gotoTodos = () => {
    const { theme } = this.props;
    const gotoLabel = i18n.t('AXIOX_TODO');
    return (
      <View style={{ paddingTop: 10 }}>
        <Button
          style={{ backgroundColor: theme.color.primary }}
          onPress={() => {
            utils.navigation.push('Todos');
          }}
        >
          {gotoLabel}
        </Button>
      </View>
    );
  }

  gotoReduxTodos = () => {
    const { theme } = this.props;
    const gotoLabel = i18n.t('AXIOX_TODO_REDUX');
    return (
      <View style={{ paddingTop: 10 }}>
        <Button
          style={{ backgroundColor: theme.color.primary }}
          onPress={() => {
            utils.navigation.push('TodosRedux');
          }}
        >
          {gotoLabel}
        </Button>
      </View>
    );
  }

  fontSizeRender = () => {
    const { theme, fontScaleKey, changeFontScale } = this.props;
    const gotoLabel = i18n.t('CURRENT_FONTSIZE', { key: fontScaleKey });
    return (
      <View style={{ paddingTop: 10 }}>
        <Button
          style={{ backgroundColor: theme.color.primary }}
          onPress={() => {
            const newFontScaleKey = fontScaleKey === 'default' ? 'large' : 'default';
            changeFontScale(newFontScaleKey);
          }}
        >
          {gotoLabel}
        </Button>
      </View>
    );
  }

  logoutRender = () => {
    const { theme, setTheme } = this.props;
    const gotoLabel = i18n.t('LOGOUT');
    return (
      <View style={{ paddingTop: 10 }}>
        <Button
          style={{ backgroundColor: theme.color.primary }}
          onPress={() => {
            service.logoutTakeAction(setTheme);
          }}
        >
          {gotoLabel}
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.logoRender()}
        {this.helloRender()}
        {this.languageRender()}
        {this.themeRender()}
        {this.gotoTodos()}
        {this.gotoReduxTodos()}
        {this.fontSizeRender()}
        {this.logoutRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  helloContainer: {
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  logo: {
    width: 100,
    height: 100,
  },
});


const mapStateToProps = (state) => ({
  language: state.app.language && state.app.language,
  fontScaleKey: state.app.fontScaleKey || 'default',
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ReduxActions, dispatch);
export default withTheme(connect(mapStateToProps, mapDispatchToProps)(AppLandingSrceen));
