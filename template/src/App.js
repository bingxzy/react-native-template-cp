import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppRouterContainer from './router';
import utils from './utils';
import i18n from './language';
import { ThemeContextProvider } from './theme';
import { StatusBar } from './comm/components';

const App = ({ language }) => {
  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  return (
    <ThemeContextProvider>
      <StatusBar />
      <AppRouterContainer
        appRef={(ref) => {
          if (ref) {
            utils.navigation.setTopLevelNavigator(ref);
          }
        }}
      />
    </ThemeContextProvider>
  );
};

const mapStateToProps = (state) => ({
  language: state.app.language && state.app.language,
});
export default connect(mapStateToProps)(App);
