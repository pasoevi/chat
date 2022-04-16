import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { CLIENT_MESSAGE_SEND } from '../../engine/messages';
import { emit } from '../../engine/websockets';
import { SEND_MESSAGE } from '../chat/types';

export const serverMiddleware: temporaryAny = (
  api: MiddlewareAPI<temporaryAny>,
) => (next: Dispatch<temporaryAny>) => <A extends Action>(action: A) => {
  if (action.type === SEND_MESSAGE) {
    // @ts-ignore
    emit(CLIENT_MESSAGE_SEND, action.payload);
  }
  // eslint-disable-next-line no-console
  console.log('next state', api.getState());
  return next(action);
};
