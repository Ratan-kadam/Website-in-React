import '../style/style.scss';
import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.querySelector('.container'));
