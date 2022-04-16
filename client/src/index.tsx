import React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { init as initWS } from './engine/websockets';
import './index.scss';

initWS(store);

const rootElement = document.getElementById('root') as HTMLDivElement;

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn:
            'https://d964005f348340158006751922530bf6@o406571.ingest.sentry.io/5274291',
  });
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
