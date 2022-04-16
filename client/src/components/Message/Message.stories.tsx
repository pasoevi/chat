import React from 'react';
import { text as knobText, withKnobs } from '@storybook/addon-knobs';
import { v4 } from 'uuid';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import { rootReducer as reducer } from '../../store';
import { MessageComponent } from './Message';

export default {
  title: 'Chat message',
  component: MessageComponent,
  decorators: [withKnobs],
};
const initialRootState = {};
const store = createStore(reducer, initialRootState);

const msgData = {
  id: '87sd87s8df787sd98f7sd9f',
  sender: { id: v4(), displayName: 'Sergo Pasoevi' },
  timestamp: Date.now(),
};

export function Message() {
  return (
    <Provider store={store}>
      <MessageComponent {...msgData} text={knobText('Text', 'Hey there!')} />
    </Provider>
  );
}
