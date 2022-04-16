import io from 'socket.io-client';
import { Message } from '../store/chat/types';
import { messageReceived } from '../store/chat/actions';
import { SERVER_MESSAGE_BROADCAST } from './messages';

const socket = io('localhost:5000');
// This should run after the store has been configured
export const init = (store: temporaryAny) => {
  socket.on(
    SERVER_MESSAGE_BROADCAST,
    (payload: Message) => store.dispatch(messageReceived(payload)),
  );
};

export function emit<T>(type: string, payload: T) {
  socket.emit(type, payload);
}
