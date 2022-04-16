import React from 'react';
// @ts-ignore
import { WithFigma } from 'storybook-addon-figma';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../App';

import { rootReducer as reducer } from '../store';

const initialRootState = {};

const store = createStore(reducer, initialRootState);

export default {
  title: 'Chat',
  component: App,
};

export function Chat() {
  return (
    <WithFigma
      url="https://www.figma.com/file/GSKRTwhXLBqUekKzbW5YmJ/chat-app?node-id=2%3A4"
    >
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </WithFigma>
  );
}
