import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { AppNavigator } from './src/specifications/AppNavigator';
import axios from 'axios';
import axiosMiddleWare from 'redux-axios-middleware';
import { URL_END_POINT } from './src/config/config';
import AppReducer from './src/specifications/AppReducer';

const client = axios.create({
  baseURL: URL_END_POINT,
  responseType: 'json'
});

const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(thunk, axiosMiddleWare(client)))
);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
