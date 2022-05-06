import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import { requestUsers, requestUser } from './reducers';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();

const rootReducer = combineReducers({ requestUsers, requestUser });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

reportWebVitals();
