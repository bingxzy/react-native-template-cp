import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import store, { persistor } from './src/stores';

const reduxApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => reduxApp);
