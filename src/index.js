import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './containers/App';
import store from './store/store';
import { Provider } from 'react-redux';

import ReactGA from 'react-ga4';

const trackingId = 'G-6Q59GKCTQ8';
ReactGA.initialize(trackingId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
