/* eslint-disable */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducer';
import rootSagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['app']
};

const rootReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducers);

// sage middleWare
const sagaMiddleware = createSagaMiddleware();

const middleWareArr = [];
middleWareArr.push(sagaMiddleware);

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// create store
const store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(...middleWareArr)),
);

sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);

export default store;
