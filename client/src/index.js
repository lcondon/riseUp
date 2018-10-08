import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
