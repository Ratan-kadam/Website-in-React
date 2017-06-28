import '../style/style.scss';
import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import NavContainer from './containers/NavContainer';
import FooterContainer from './containers/FooterContainer';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
  <div>
    <NavContainer />
    <AppContainer />
    <FooterContainer />
  </div>
  </Provider>
  , document.querySelector('.mycontainer'));
